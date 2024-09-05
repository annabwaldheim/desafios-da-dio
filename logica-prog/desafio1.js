let nomeHeroi = "Dante"
let xpHeroi = 9500
let nivel = "indefinido"
if (xpHeroi < 1000){
    nivel = "Ferro"
} else if (1001 < xpHeroi && xpHeroi < 2000){
    nivel = "Bronze"
} else if (2001 < xpHeroi && xpHeroi < 5000){
    nivel = "Prata"
} else if (6001 < xpHeroi && xpHeroi < 7000){
    nivel = "Ouro"
} else if (7001 < xpHeroi && xpHeroi < 8000){
    nivel = "Platina"
} else if (8001 < xpHeroi && xpHeroi < 9000){
    nivel = "Ascendente"
} else if (9001 < xpHeroi && xpHeroi < 10000){
    nivel = "Imortal"
} else if (xpHeroi >= 10001){
    nivel = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel)