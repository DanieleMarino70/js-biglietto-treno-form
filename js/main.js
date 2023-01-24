// TRACCIA:

// Scrivere un programma che chieda all'utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
// Va applicato uno sconto del 20% per i minorenni
// Va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
//La risposta finale (o output) sarà anch'essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire 
//i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).



let user = document.querySelector("#name-surname");
let km = document.querySelector("#km-valor");
let age = document.querySelector("#age-valor");
//console.log(user, km, age);

let price = 0;
let discountedPrice = 0;

let button_generate_el = document.querySelector("#button-generate");


//console.log(km.value);


button_generate_el.addEventListener(
    "click",
    function (){
        if(isNaN(parseFloat(km.value))){
            alert("Inserisci correttamente i dati");
        } 
        else{
            if (age.value == "minorenne"){
                price = 0.21 * parseFloat(km.value);
                discountedPrice = price - ((price * 20) / 100);
                alert("UTENTE MINORENNE - Il prezzo finale del biglietto è: " + discountedPrice.toFixed(2));
                console.log(age.value);
                console.log(discountedPrice);
            }
            else if(age.value == "anziano"){
                price = 0.21 * parseFloat(km.value);
                discountedPrice = price - ((price * 40) / 100);
                alert("UTENTE ANZIANO - Il prezzo finale del biglietto è: " + discountedPrice.toFixed(2));
                console.log(age.value);
                console.log(discountedPrice);
            }
            else{
                price = 0.21 * parseFloat(km.value);
                alert("UTENTE ADULTO - Il prezzo finale del biglietto è: " + price.toFixed(2));
                console.log(age.value);
                console.log(price);
            }
        } 




    }
);





















/*
const km = parseFloat(prompt("Quanti Chilometri devi percorrere?")).toFixed(2);
const userAge = parseInt(prompt("Quanti anni hai?"));

// Check
let isValid = true;
if(isNaN(parseFloat(km)) || isNaN(userAge)){
    isValid = false;
} 

let price = 0;
let discountedPrice = 0;

if(isValid){
    if (userAge < 18){
        price = 0.21 * parseFloat(km);
        discountedPrice = price - ((price * 20) / 100);
        alert("UTENTE MINORENNE - Il prezzo finale del biglietto è: " + discountedPrice.toFixed(2));
    }
    else if(userAge > 64){
        price = 0.21 * parseFloat(km);
        discountedPrice = price - ((price * 40) / 100);
        alert("UTENTE ANZIANO - Il prezzo finale del biglietto è: " + discountedPrice.toFixed(2));
    }
    else{
        price = 0.21 * parseFloat(km);
        alert("UTENTE ADULTO - Il prezzo finale del biglietto è: " + price.toFixed(2));
    }
}else (alert("Inserisci correttamente i dati")); 

*/
