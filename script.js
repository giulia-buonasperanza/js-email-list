//Attraverso l'apposita API di Boolean
//https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


const API_URL_RANDOM_MAIL = 'https://flynn.boolean.careers/exercises/api/random/mail';
const mailList = document.querySelector("#mail-list");
const btnMailList = document.querySelector("#btn-mail-list");



//fetch() e catena di promesse  

fetch(API_URL_RANDOM_MAIL)
    .then((risposta)=> {
        return risposta.json();
    })
    .then ((jsonData)=>{
        console.log(jsonData);//controllo se è tutto giusto 

        const randomEmail = jsonData.results;
});