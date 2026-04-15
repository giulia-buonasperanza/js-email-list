//Attraverso l'apposita API di Boolean
//https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


const API_URL_RANDOM_MAIL = 'https://flynn.boolean.careers/exercises/api/random/mail';
const mailListHTML = document.querySelector("#mail-list");
const btnMailList = document.querySelector("#btn-mail-list");

const mailList = []; //array per contenere le mail random

//fetch() e catena di promesse  

function getRandomMail() { //inserisco la funzione per generare le mail random, che viene chiamata al click del bottone
    mailListHTML.innerHTML = '';//svuoto la lista HTML prima di generare nuove mail
    mailList.length = 0; //svuoto l'array prima di generare nuove mail

    for (let i = 0; i < 10; i++) {
        fetch(API_URL_RANDOM_MAIL)
            .then((risposta) => {
                return risposta.json();
            })
            .then((jsonData) => {
                //console.log(jsonData);//controllo se è tutto giusto 

                const randomEmail = jsonData.response;

                //console.log(randomEmail);
                mailList.push(randomEmail);//pusho la mail random dentro il mio array
                console.log(mailList);

                if (mailList.length === 10) {//solo se hai tutte le 10 mail

                    const mailListElement = mailList.map(mail => { //con map creo un nuovo array con le mail formattate in html
                        return `<li>${mail}</li>`;
                    });

                    mailListHTML.innerHTML = mailListElement.join(''); //con join('') ottengo una lista HTML completa da inserire nella pagina
                };


            })
    };
};

//event listener per il click del bottone
btnMailList.addEventListener('click', function () {
    getRandomMail();
});