/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
stampa nomecognomecolorepreferito21
*/

const firstname = prompt("Inserisci il nome");
const lastname = prompt("Inserisci il cognome");
const favouritecolor = prompt("Qual è il tuo colore preferito?");

console.log(firstname);
console.log(lastname);
console.log(favouritecolor);


const textToPrint =
`
  La tua password consigliata è: ${firstname}${lastname}${favouritecolor}21
`;

const variabilePassword = 
`
 ${firstname}${lastname}${favouritecolor}21
`;

console.log(textToPrint);
document.getElementById('password').innerHTML = textToPrint;
document.write(variabilePassword.length);
