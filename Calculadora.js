class Calculadora{

    static Somar(a, b){
        console.log(a + b)
    };

    static Sub(a, b){
        console.log(a - b)
    };
};

Calculadora.Somar(2, 7)
Calculadora.Sub(26, 32)
// Note que não foi preciso criar a nova instância
// com var calculadora = new Calculadora();...
// criou-se um método estático