let vitorias = 108
let derrotas = 3
let classificacaoJogador = nivelJogador(vitorias)
let saldoVitorias = saldoJogador (vitorias, derrotas)
console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível ${classificacaoJogador}`)
function saldoJogador (vitoria, derrota) {
    let saldo = vitoria - derrota
    return saldo
}
function nivelJogador (vitoria) {
    let nivel = "Indefinido"
    if (vitoria < 10){
        nivel = "Ferro"
    } else if ( 11 < vitoria && vitoria < 20){
        nivel = "Bronze"
    } else if (21 < vitoria && vitoria <50){
        nivel = "Prata"
    } else if (51 < vitoria && vitoria < 80){
        nivel = "Ouro"
    } else if (81 < vitoria && vitoria < 90){
        nivel = "Diamante"
    } else if (91 < vitoria && vitoria < 100){
        nivel ="Lendário"
    }
    else if (vitoria >= 101){
        nivel ="Imortal"
    }
    return nivel
}