// Carrinho para e-commerce

class Carrinho{
    constructor(){
        this.quantidade = 0;
        this.itens = [];
        this.preco = [];
        this.dono = '';
    };

    Adicionar(){
        console.log('adicionar')
    };

    Remover(){
        console.log('remover')
    };

    Comprar(){
        console.log('comprar')
    };

    AumentarQuantidade(){
        console.log('aumentar quantidade')
    };

    DiminuirQuantidade(){
        console.log('diminuir quantidade')
    };
};
