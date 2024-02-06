function checkCombinaison(premier = document.getElementById('input1').value,
                                deuxieme = document.getElementById('input2').value,
                                troisieme = document.getElementById('input3').value) {
  
    if (premier == '1' && deuxieme == '2' && troisieme == '3') {
        document.getElementById('result').innerText = "Vous avez cassé le code";
        document.getElementById('result').id = "Succes";
        console.log("Success")
    } else {
        document.getElementById('result').innerText = "Combinaison incorrecte";
    }
}

export { checkCombinaison };
