class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque
        switch(this.tipo){
            case "mago":
                ataque= "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi1 = new Heroi("Marcus", 23, "mago");
let heroi2 = new Heroi("Cyrus", 19, "ninja");
let heroi3 = new Heroi("Nathan", 21, "guerreiro");
let heroi4 = new Heroi("Santino", 65, "monge");

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()