let corAtul = "";
function mudarCor() {

    let R = gerar();
    let G = gerar();
    let B = gerar();
    
    corAtul = `RGB(${R}, ${G}, ${B})`

    document.getElementById("corTexto").innerText = corAtul;
    document.body.style.background = corAtul;
    // console.log(corAtul);

}

function gerar() {
        return Math.floor(Math.random() * 256);
}

function copiarCor() {
    navigator.clipboard.writeText(corAtul);
}