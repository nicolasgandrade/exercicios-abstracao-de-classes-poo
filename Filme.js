//Criação de classes no Javascript

class Filme{

    //Criação de atributos:
    constructor(){

        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = ''
        this.atores = []
        this.duracao = 0

    };

    //Criação de métodos:
    Reproduzir(){
        console.log('Reproduzindo')
    };

    Pausar(){
        console.log('Pausar')
    };

    Avançar(){
        console.log('Avançar')
    };

    Fechar(){
        console.log('Fechar')
    };

    //Esses métodos são funções, porém a sintaxe de definição é diferente e mais simples, não se ecreve o "function"
};




/*
    Boas práticas:
        -Nome do arquivo de classe iniciando em maiúscula.
        -Métodos iniciando em maiúscula
*/