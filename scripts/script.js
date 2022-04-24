// Importacion de las preguntas y respuestas del juego ordenadas por nivel
import {
  Questions,
  questionUpload,
  getUsers,
  checkIfExist,
  checkScore,
  newUser,
  getQuestions,
  uploadUsers,
} from "./localStorageHandler.js";
questionUpload(Questions);
const questions = getQuestions();

// Declaración de variables
let level = 1;
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;
let actualUser = "";
let winners = [];
let shuffledQuestions = []; // Array para almacenar las preguntas

function handleQuestions() {
  //seleccionar una pregunta para cada nivel de manera aleatoria
  for (let i = 0; i <= 24; i = i + 5) {
    const random = questions[Math.floor(Math.random() * 4) + i];
    shuffledQuestions.push(random);
  }
}

// Muestra la siguiente pregunta al DOM
function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML =
    currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML =
    currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]; //toma la pregunta actual
  const currentQuestionAnswer = currentQuestion.correctOption; //toma la respuesta elegida
  const options = document.getElementsByName("option"); //toma todas las "option" del dom
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      //toma la respuesta correcta
      correctOption = option.labels[0].id;
    }
  });

  //checkea si hay una respuesta
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }

  //checkea si la respuesta correcta es la elegida
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      playerScore = playerScore + 100 * level;
      indexNumber++;
      level++;

      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";
      wrongAttempt++;
      indexNumber++;

      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}

//es llamada cuando se pide la siguiente pregunta
function handleNextQuestion() {
  checkForAnswer();
  unCheckRadioButtons();
  //demora la aparición de la siguiente pregunta
  setTimeout(() => {
    if (wrongAttempt === 0 && indexNumber <= 4) {
      NextQuestion(indexNumber);
    } else {
      handleEndGame();
    }
    resetOptionBackground();
  }, 1000);
}

function withdraw() {
  handleEndGame();
}

// Vuelve a null los background después de mostrar los colores de correcto e incorrecto
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

// Desmarca los radio buttons para la siguiente pregunta
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// Maneja el fin del juego
function handleEndGame() {
  let remark = null;
  let remarkColor = null;
  let users = getUsers();
  let newScore;

  // define el mensaje final
  if (wrongAttempt !== 0) {
    remark = "Lamentablemente, no se ha ganado ningún premio.";
    remarkColor = "red";
  } else {
    remark = "¡Felictaciones! ¡Usted ha ganado " + playerScore + " u$s!";
    remarkColor = "green";
    let position = users.findIndex((item) => item.userName === actualUser);
    users[position].userScore += playerScore;
    newScore = users[position].userScore + playerScore;

    uploadUsers(users);
  }

  // Datos que se muestran
  document.getElementById("remarks").innerHTML = remark;
  document.getElementById("remarks").style.color = remarkColor;
  document.getElementById("score-modal").style.display = "flex";

  // Carga de datos al podio
  winners.push({ userName: actualUser, userScore: newScore });
}

// Cierra el score modal y resetea el juego
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  level = 1;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById("score-modal").style.display = "none";
}

// Cierra el Modal de ingresar una respuesta
function closeOptionModal() {
  document.getElementById("option-modal").style.display = "none";
}

// Abre el Modal de Bienvenida
function openWelcomeModal() {
  document.getElementById("welcome-modal").style.display = "flex";
}

// Inicia un nuevo juego
function startGame() {
  const user = document.getElementById("user");
  actualUser = user.value;
  newUser(user.value);
  document.getElementById("welcome-modal").style.display = "none";
  NextQuestion(0);
}

// Abre Modal de Podio
function openPodiumModal() {
  // Devuelve texto para el DOM
  document.getElementById("podium-table").innerHTML = getPodium();
  document.getElementById("podium-modal").style.display = "flex";
}

// Devuelve el texto para el Modal de Podio
function getPodium() {
  let modalText = "";
  let podioExist = false;
  let users = getUsers();
  users.map((user) => (user.userScore > 0 ? (podioExist = true) : ""));
  if (!podioExist) {
    // Si el podio está vacío devuelve el mensaje.
    return "Todavía no ha ganado ningún ganador.";
  }
  // Selecciona a los jugadores con mayor puntaje dentro del array de podium y prepara el texto
  modalText+=`            
  <tr>
    <th>Posición</th>
    <th>Nombre</th>
    <th>Puntuación</th>
  </tr>
  `;
  let aux = users.sort(function (a, b) {
    return b.userScore - a.userScore;
  });
  aux.map((item, idx) => {
    if (idx < 3 && item.userScore > 0) {
      modalText+=`
      <tr>
        <td>${idx+1}</td>
        <td>${item.userName}</td>
        <td>${item.userScore}</td>
      </tr>
      `;
    }
  });
  return modalText;
}

// Cierra el Modal de Podio
function closePodiumModal() {
  document.getElementById("podium-modal").style.display = "none";
}

//Haciendo disponibles las funciones del modulo en el obtejo window

window.openWelcomeModal = openWelcomeModal;
window.closePodiumModal = closePodiumModal;
window.openPodiumModal = openPodiumModal;
window.startGame = startGame;
window.closeOptionModal = closeOptionModal;
window.closeScoreModal = closeScoreModal;
window.handleNextQuestion = handleNextQuestion;
window.withdraw = withdraw;
