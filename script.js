// Todas las preguntas y respuestas del juego ordenadas por nivel
const questions = [
  //Nivel 1
  {
    question: "¿Cuál es el nombre del río más largo del mundo?",
      optionA: "Río Nilo",
      optionB: "Río Amazonas",
      optionC: "Río Danubio",
      optionD: "Río Uruguay",
      correctOption: "optionB"
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
      optionA: "Océano Antártico",
      optionB: "Océano Atlántico",
      optionC: "Océano Índico",
      optionD: "Océano Pacífico",
      correctOption: "optionD"
  },
  {
    question: "¿Cuál es el país más grande del mundo?",
      optionA: "China",
      optionB: "Brasil",
      optionC: "Rusia",
      optionD: "India",
      correctOption: "optionC"
  },
  {
    question: "¿Cuál es el país más poblado de la tierra?",
      optionA: "Estados Unidos",
      optionB: "China",
      optionC: "Rusia",
      optionD: "India",
      correctOption: "optionB"
  },
   {
    question: "¿En qué país se encuentra ubicada la Casa Rosada?",
      optionA: "Argentina",
      optionB: "Colombia",
      optionC: "Chile",
      optionD: "Perú",
      correctOption: "optionA"
  },
  //Nivel 2
  {
    question: "¿Cuándo terminó la II Guerra Mundial?",
      optionA: "2001",
      optionB: "1914",
      optionC: "1953",
      optionD: "1945",
      correctOption: "optionD"
  },
  {
    question: "¿En qué año llegó Cristobal Colón a América?",
      optionA: "1429",
      optionB: "1492",
      optionC: "1592",
      optionD: "1942",
      correctOption: "optionB"
  },
  {
    question: "¿Quién es el padre del psicoanálisis?",
      optionA: "Freud",
      optionB: "Jung",
      optionC: "Skinner",
      optionD: "Watson",
      correctOption: "optionA"
  },
  {
    question: "¿Cuál es el libro sagrado de los musulmanes?",
      optionA: "La biblia",
      optionB: "El talmud",
      optionC: "El corán",
      optionD: "Las mil y una noches",
      correctOption: "optionC"
  },
   {
    question: "¿En qué país se usó la primera bomba atómica?",
      optionA: "Estados Unido",
      optionB: "Japón",
      optionC: "China",
      optionD: "Korea",
      correctOption: "optionB"
  },
  //Nivel 3
  {
    question: "¿Cuántos litros de sangre tiene una persona adulta?",
      optionA: "Entre 2 y 4 litros",
      optionB: "Entre 4 y 6 litros",
      optionC: "10 litros",
      optionD: "0,5 litros",
      correctOption: "optionB"
  },
  {
    question: "¿Quién es el autor de la frase \"Pienso, luego existo\"?",
      optionA: "Platón",
      optionB: "Galileo Galilei",
      optionC: "Descartes",
      optionD: "Sócrates",
      correctOption: "optionC"
  },
  {
    question: "¿Cuál es el grupo de palabras escritas correctamente?",
      optionA: "Metamorfosis, extranjero, diversidac, equilivrio",
      optionB: "Metaformosis, estranjero, diversidad, ekilibrio",
      optionC: "Metamorfosis, extrangero, dibersidad, equilibrio",
      optionD: "Metamorfosis, extranjero, diversidad, equilibrio",
      correctOption: "optionD"
  },
  {
    question: "¿Cuanto es 12 x 10 x 0",
      optionA: "12",
      optionB: "120",
      optionC: "1",
      optionD: "0",
      correctOption: "optionD"
  },
   {
    question: "¿Cuál es el libro más vendido en el mundo después de la Biblia?",
      optionA: "El Señor de los Anillos",
      optionB: "Don Quijote de la Mancha",
      optionC: "El Principito",
      optionD: "Cien años de Soledad",
      correctOption: "optionB"
  },
  //Nivel 4
  {
    question: "¿Cuántos decimales tiene el número pi π?",
      optionA: "Dos",
      optionB: "Cien",
      optionC: "Infinitos",
      optionD: "Muchos",
      correctOption: "optionC"
  },
  {
    question: "La sal común está formada por dos elementos, ¿cuáles son?",
      optionA: "Sodio y potasio",
      optionB: "Sodio y cloro",
      optionC: "Sodio y carbono",
      optionD: "Potasio y cloro",
      correctOption: "optionB"
  },
  {
    question: "¿Cuántos jugadores por equipo participan en un partido de voleibol?",
      optionA: "3",
      optionB: "5",
      optionC: "6",
      optionD: "8",
      correctOption: "optionC"
  },
  {
    question: "¿Quién pintó la obra \"Guernica\"?",
      optionA: "Diego Rivera",
      optionB: "Salvador Dalí",
      optionC: "Paul Cézanne",
      optionD: "Pablo Picasso",
      correctOption: "optionD"
  },
   {
    question: "¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?",
      optionA: "8 minutos",
      optionB: "12 minutos",
      optionC: "8 segundos",
      optionD: "12 horas",
      correctOption: "optionA"
  },
  //Nivel 5
  {
    question: "¿En qué orden se presentaron los modelos atómicos?",
      optionA: "Thomson, Dalton, Rutherford, Bohr",
      optionB: "Dalton, Thomson, Rutherford, cuántico",
      optionC: "Bohr, Rutherford, cuántico, Einstein",
      optionD: "Dalton, Einstein, cuántico, Sheldon Cooper",
      correctOption: "optionB"
  },
  {
    question: "¿En qué país de África el español es la lengua oficial?",
      optionA: "Cabo Verde",
      optionB: "Sierra Leona",
      optionC: "Guinea ecuatorial",
      optionD: "Liberia",
      correctOption: "optionC"
  },
  {
    question: "¿Cuales de las siguientes son enfermedades de transmisión sexual ETS?",
      optionA: "Gonorrea, clamidia, sífilis",
      optionB: "Chikunguya, malaria, herpes genital",
      optionC: "Botulismo, cistitis, chagas",
      optionD: "Gonorrea, sida, gripe",
      correctOption: "optionA"
  },
  {
    question: "¿Cuál es el animal terrestre más grande en la actualidad?",
      optionA: "Diplodocus",
      optionB: "Tiburón blanco",
      optionC: "Ballena azul",
      optionD: "Elefante africano",
      correctOption: "optionD"
  },
   {
    question: "¿Cuál es el tipo sanguíneo considerado como donante universal?",
      optionA: "Tipo A",
      optionB: "Tipo B",
      optionC: "Tipo 0",
      optionD: "Ninguno de los anteriores",
      correctOption: "optionC"
  }
];

let shuffledQuestions = [] //array vacío para almacenar las preguntas

function handleQuestions() { 
    //seleccionar una pregunta para cada nivel de manera aleatoria
    for (let i = 0; i <= 24; i = i + 5) {
        const random = questions[Math.floor(Math.random() * 4) + i]
        shuffledQuestions.push(random)
    }
}

//iniciación de variables
let level = 1;
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0; 
let indexNumber = 0;

// muestra la siguiente pregunta al dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //toma la pregunta actual
    const currentQuestionAnswer = currentQuestion.correctOption //toma la respuesta elegida
    const options = document.getElementsByName("option"); //toma todas las "option" del dom
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //toma la respuesta correcta
            correctOption = option.labels[0].id
        }
    })
   
    //checkea si hay una respuesta
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checkea si la respuesta correcta es la elegida
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore = playerScore + 100 * level;
            indexNumber++;
          level++;
          
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
          
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//es llamada cuando se pide la siguiente pregunta
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //demora la aparición de la siguiente pregunta
    setTimeout(() => {
        if (wrongAttempt === 0 && indexNumber <= 4) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function withdraw() {
  handleEndGame()
}

//vuelve a null los background después de mostrar los colores de correcto e incorrecto
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// desmarca los radio buttons para la siguiente pregunta
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// finaliza el juego
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // define el mensaje final
    if (wrongAttempt !== 0) {
        remark = "Lamentablemente, no se ha ganado ningún premio."
        remarkColor = "red"
    }
    else {
        remark = "¡Felictaciones! ¡Usted ha ganado " + playerScore + " u$s!"
        remarkColor = "green"
    }

    //datos que se muestran
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('score-modal').style.display = "flex"

}

//cierra el score modal y resetea el juego
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
