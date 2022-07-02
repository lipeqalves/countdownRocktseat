
//Tempo Regresivo
const dataFinal = new Date("Jul 7, 2022 7:30:00").getTime();
const limpar = setInterval(function(){
    const dataAtual = new Date().getTime();
    const tempo = dataFinal - dataAtual;
    const dia  = Math.floor(tempo / (1000 * 60 * 60 * 24));
    const hora = Math.floor((tempo%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minuto = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundo = Math.floor((tempo % (1000 * 60)) / 1000);

    document.querySelector('#dia').textContent = `${dia}`;
    document.querySelector('#hora').textContent = `${hora}`;
    document.querySelector('#minuto').textContent = `${minuto}`;
    document.querySelector('#segundo').textContent = `${segundo}`;
    
    if (tempo < 0) {
        clearInterval(limpar);
        document.querySelector("#final").innerHTML = "TIME UP";
        document.querySelector('#dia').textContent = `0`;
        document.querySelector('#hora').textContent = `0`;
        document.querySelector('#minuto').textContent = `0`;
        document.querySelector('#segundo').textContent = `0`;
    }
},1000);

/* Tempe Crescente
setInterval(function(){
    let contagem = new Date();
    let dia  = contagem.getDay();
    let hora = contagem.getHours();
    let minuto = contagem.getMinutes();
    let segundo = contagem.getSeconds();
    
    hora = zero(hora)
    minuto = zero(minuto);
    segundo = zero(segundo);
    document.querySelector('#dia').textContent = `${dia}`;
    document.querySelector('#hora').textContent = `${hora}`;
    document.querySelector('#minuto').textContent = `${minuto}`;
    document.querySelector('#segundo').textContent = `${segundo}`;
},1000)

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}
*/