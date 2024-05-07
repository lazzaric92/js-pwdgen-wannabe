const userName = prompt('Inserisci il tuo nome');
const userLastName = prompt('Inserisci il tuo cognome');
const userFavColour = prompt('Inserisci il tuo colore preferito');

const passwordGen = userName + userLastName + userFavColour + 24;

document.getElementById('password').innerHTML = passwordGen;