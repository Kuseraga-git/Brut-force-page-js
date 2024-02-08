import { checkCombination } from "./script.js";

document.getElementById('validateButton').addEventListener('click', function() {
    checkCombination();
});




for (let i = 0; i <= 9; i++){
    for (let j = 0; j <= 9; j++){
        for (let k = 0; k <= 9; k++){
            if (checkCombination(i, j, k) == true) {
                i = 10
                j = 10
                k = 10
            }
        }
    }
}
