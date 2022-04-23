import {Questions} from "../data/questions.js";

let Users;

function questionUpload(questions) {
    
    localStorage.setItem("Questions", JSON.stringify(questions));
}

function getUsers() {
    let aux = localStorage.getItem("Users")
    return JSON.parse(aux)
}


function checkIfExist(userName, users){

    let aux = JSON.parse(users)    
    let position = aux.find( item => {
        item.userName === userName
    })
    return position
    
}

function checkScore(userName, users){
    
    let aux = JSON.parse(users)    
    let position = aux.find( item => {
        item.userName === userName
    })

    return aux[position].userScore;
    
}

function userUpload(userName) {

    let users = localStorage.getItem("Users")

    if (checkIfExist(userName, users) == -1) {
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


questionUpload(Questions)
userUpload("Pedro", "pedropedro@gmail.com", 12)
Users = getUsers()
console.log(Users);
setTimeout(1000, userUpload("Marcos", "marquitos@gmail.com", 10)
)

Users = getUsers()
console.log(Users);