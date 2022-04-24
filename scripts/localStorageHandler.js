import {Questions} from "../data/questions.js";


function questionUpload(questions) {
    
    localStorage.setItem("Questions", JSON.stringify(questions));
}

function getUsers() {
    let aux = localStorage.getItem("Users")
    return JSON.parse(aux)
}


function checkIfExist(userName, users){

    let aux = JSON.parse(users)    
    let position = aux.findIndex( item => 
        item.userName === userName
    )
    return position
    
}

function checkScore(userName, users){
    
    let position = users.findIndex( item => 
      item.userName === userName
    )

    return users[position].userScore;
    
}

function newUser(userName) {

    let users = localStorage.getItem("Users")
    if (users==null||checkIfExist(userName, users) == -1) {
        let newUser = {
            userName: userName,
            userScore: 0
        };
        if (users != null) {
            let aux = JSON.parse(users)
            let aux2 = [...aux]
            aux2.push(newUser)
            localStorage.setItem("Users", JSON.stringify(aux2))
        }
        else {
            let aux = JSON.stringify([newUser])
            localStorage.setItem("Users", aux)
        }
    
    }
}

function getQuestions() {
    let questions = localStorage.getItem("Questions")
    return JSON.parse(questions)
}

function uploadUsers(users) {
    localStorage.setItem("Users", JSON.stringify(users))
}
export {Questions} from "../data/questions.js"
export {questionUpload, getUsers, checkIfExist, checkScore, newUser, getQuestions, uploadUsers}