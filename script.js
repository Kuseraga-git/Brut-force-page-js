import { Code } from "./PassCodeClass.js";

// Fonction pour hacher un chiffre individuel
export function hashDigit(digit) {
    return sha256(digit.toString());
}
  
  // Combinaison de chiffres correcte (1, 2, 3)
// const correctCombination = {
//     digit1: hashDigit(1),
//     digit2: hashDigit(2),
//     digit3: hashDigit(3)
// }
 
const code = new Code()

  // Fonction pour vérifier une combinaison
function checkCombination(premier = document.getElementById('input1').value,
                          deuxieme = document.getElementById('input2').value,
                          troisieme = document.getElementById('input3').value) {
    const hashedDigit1 = hashDigit(premier);
    const hashedDigit2 = hashDigit(deuxieme);
    const hashedDigit3 = hashDigit(troisieme);

    if (
        hashedDigit1 == code.digit1 &&
        hashedDigit2 == code.digit2 &&
        hashedDigit3 == code.digit3
    ) {
        console.log('Combinaison correcte.');
        console.log(premier, deuxieme, troisieme)
        document.getElementById('result').innerText = "Vous avez cassé le code";
        document.getElementById('result').id = "Succes";
        return(true)
    } else {
        console.log('Combinaison incorrecte.');
        document.getElementById('result').innerText = "Combinaison incorrecte";
        return(false)
    }
}
  
export { checkCombination };
