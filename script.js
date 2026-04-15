//Attraverso l'apposita API di Boolean
//https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


const API_URL_RANDOM_MAIL = 'https://flynn.boolean.careers/exercises/api/random/mail';
const mailListHTML = document.querySelector("#mail-list");
const btnMailList = document.querySelector("#btn-mail-list");

const mailList = []; //array per contenere le mail random

//fetch() e catena di promesse  

for(let i = 0; i < 10; i++) {
    fetch(API_URL_RANDOM_MAIL)
        .then((risposta) => {
            return risposta.json();
        })
        .then((jsonData) => {
            console.log(jsonData);//controllo se è tutto giusto 

            const randomEmail = jsonData.response;

            console.log(randomEmail);
            mailList.push(randomEmail);//pusho la mail random dentro il mio array
            console.log(mailList);
        });
};

