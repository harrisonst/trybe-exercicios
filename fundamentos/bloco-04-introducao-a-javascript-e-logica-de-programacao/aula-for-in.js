//for/in e for/of

let pizzas = {
    sabor: 'Peperoni',
    preço: 69.90,
    bordaRecheada: true,
}

for (let key in pizzas) {
    console.log(pizzas[key])
};
// Peperoni
// 69.9
// true

// for/in dentro de Arrays
let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let key in pizzasDoces){ // crio uma estrutura de for/in 
    console.log(key) // consola as posições as chaves que são as posições 0, 1 e 2 do Array
};
// 0
// 1
// 2


let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let key in pizzasDoces){
    console.log(pizzasDoces) //consola as 3x as 3 posições da Array
};
// [ 'chocolate', 'banana', 'morango' ]
// [ 'chocolate', 'banana', 'morango' ]
// [ 'chocolate', 'banana', 'morango' ]


//consigo exibir um índice específico do meu Array
let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let key in pizzasDoces){
    console.log(pizzasDoces[key]) //consola somente as 3 posições da Array
};
//chocolate
//banana
//morango

//se eu quiser mostrar qual a posição do meu índice:
let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let key in pizzasDoces){
    console.log(key, pizzasDoces[key])
};
// 0 chocolate
// 1 banana
// 2 morango

// for/of
