//Criação de classes no Javascript

class Filme{

    //Criação de atributos:
    constructor(titulo, ano, genero, diretor, duracao){

        this.titulo = titulo;//essa variável vem do atributo
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.duracao = duracao;

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

    Ficha(){
        console.log('Título: ', this.titulo)
        console.log('Ano: ' + this.ano)
    };

    //Esses métodos são funções, porém a sintaxe de definição é diferente e mais simples, não se ecreve o "function"
};

// Criando objetos:
var vingadores = new Filme('Vingadores 2', 2014, 'Ação', '2h'); //Estou criando uma cópia dessa classe na memória

vingadores.Ficha();

/* //As modificações abaixo só se aplicam à cópia, pois não estão sendo passadas como parâmetros
vingadores.titulo = 'Vingadores 2';
vingadores.ano = 2014;
vingadores.genero = 'Ação';
// --------------------------
*/

/*
console.log('Nome: ' + vingadores.titulo)
console.log('Ano: ' + vingadores.ano)
console.log('Gênero: ' + vingadores.genero)
*/

/*
    Boas práticas:
        -Nome do arquivo de classe iniciando em maiúscula.
        -Métodos iniciando em maiúscula
*/