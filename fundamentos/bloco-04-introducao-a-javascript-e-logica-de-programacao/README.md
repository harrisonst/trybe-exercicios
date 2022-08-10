### Descrição da aula

#### for/of

O for/of tem uma aplicação bastante parecida com o que vimos agora no for/in, mas com uma diferença crucial.
Como dito no vídeo, o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice. Por exemplo, se tivermos um array com três strings dentro:

let food = ['hamburguer', 'bife', 'acarajé'];
As propriedades dos elementos do array serão os índices de cada posição, começando por zero. É por isso que os números retornados pelo console.log são 0, 1 e 2: as propriedades que correspondem ao índice de cada posição do array.

for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

Se percorrermos um objeto, também teremos o mesmo resultado. O for/in irá percorrer a propriedade declarada, e não o seu valor em si.
Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in. Vejamos o exemplo:

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

Legal, né?
Para fixar
No exemplo acima, utilizamos o for/of para percorrer o nosso iterável e nos retornar o valor dos índices.
Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?
1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
