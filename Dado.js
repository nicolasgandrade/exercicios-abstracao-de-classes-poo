// Sist. de cassino
// Vários tipos de dados (6, 20... faces)
// Rolar dados

/* Criar classe DADO, e depois objetos com n de
faces variados, quando rolar os dados, deve retornar
um número aleatório que depende do número de faces
que o dado tem. */


class Dado{
    constructor(faces){
        this.faces = faces;
    };

    Rolar(){
        console.log('Resultado: ' + this.GerarAleatorio(1, this.faces));   
    };

    GerarAleatorio(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

};

var d6 = new Dado(6);
var d12 = new Dado(12);
var d10 = new Dado(10);

d6.Rolar();
d12.Rolar();
d10.Rolar();