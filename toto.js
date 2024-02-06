import { checkCombinaison } from "./script.js";

document.getElementById('validateButton').addEventListener('click', function() {
    checkCombinaison();
});



for (let i = '0'; i <= '9'; i++){
    for (let y = '0'; y <= '9'; y++){
        for (let z = '0'; z <= '9'; z++){
            checkCombinaison(i, y, z);
        }
    }
}
