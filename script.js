import { Code } from "./PassCodeClass.js";

// Fonction pour hacher un chiffre individuel
export function hashDigit(digit) {
    return sha256(digit.toString());
}

const code = new Code();

// Fonction pour vérifier une combinaison
function CheckCombinaison(premier = document.getElementById('input1').value,
                          deuxieme = document.getElementById('input2').value,
                          troisieme = document.getElementById('input3').value) {
    
    // Chiffrage des entrées utilisateurs.
    const digitChiffré1 = hashDigit(premier);
    const digitChiffré2 = hashDigit(deuxieme);
    const digitChiffré3 = hashDigit(troisieme);

    if (
        digitChiffré1 == code.digit1 &&
        digitChiffré2 == code.digit2 &&
        digitChiffré3 == code.digit3
    ) { // Si les entrées utilisateurs (chiffrés) correspondent au code chiffré
        console.log('Combinaison correcte.');
        console.log(premier, deuxieme, troisieme)
        document.getElementById('result').innerText = "Vous avez cassé le code";
        document.getElementById('result').id = "Succes";
        return(true)
    } else { // Si non
        console.log('Combinaison incorrecte.');
        document.getElementById('result').innerText = "Combinaison incorrecte";
        return(false)
    }
}
  
export { CheckCombinaison };
