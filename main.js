import { CheckCombinaison } from "./script.js";

// Fonction appliqué lorsque l'on clique sur le bouton "Valider"
document.getElementById('validateButton').addEventListener('click', function() {
    CheckCombinaison();
});

// Codez en dessous
for (let i = 0; i <= 9; i++){
    for (let j = 0; j <= 9; j++){
        for (let k = 0; k <= 9; k++){
            if (CheckCombinaison(i, j, k) == true) {
                i = 10
                j = 10
                k = 10
            }
        }
    }
}