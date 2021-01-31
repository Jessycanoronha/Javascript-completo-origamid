//Tipos de dados

var umaString = 'String';
var idade = 23;
var possuiFaculdade;
var time;
var comida = null;
var símbolo = Symbol();
var novoObjeto = {};

//Verificando o tipo de dado
var nome = 'Jéssyca';
console.log(typeof nome);

var nomeCompleto = nome +' '+ sobrenome;
console.log(nomeCompleto);

//Como criar strings
//Aspas duplas, simples e template string

'Javascript é "super" fácil'
"Javascript é 'super' fácil"
//bracket ele só passa o caractere
'Javascript é \"super"\ fácil'
`Javascript é "super" fácil`;

//não posso criar aspas duplas dentro de aspas duplas e aspas simples dentro de simples


//Template string ES6
var gols = 1000;
var frase1 = 'Romário fez '+ gols + 'gols';
var frase2 = `Romário fez ${gols} gols`; //utilizando template string
var frase2 = `Romário fez ${gols * 2 } gols`; //utilizando template string

//Passar expressões /
//Passar variáveis ${} sem quebrar a expressão
