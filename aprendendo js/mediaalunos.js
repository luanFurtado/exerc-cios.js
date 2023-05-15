/*let numberOne = prompt("Digite um número");
let numberTwo = prompt("Digite um segundo número");
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let soma = numberOne + numberTwo
let sub = numberOne - numberTwo
let div = numberOne / numberTwo
let mult = numberOne * numberTwo
let rest = numberOne % numberTwo

alert("Summr " + soma)
alert("subtration " + sub)
alert("divisation " + div)
alert("multiplication " + mult)
alert("Sobras " + rest)
*/


let name = prompt("Qual é seu nome? ")

let number01 = prompt("Digite a sua nota do primeira bimestre")
let number02 = prompt("Digite a sua nota do segundo bimestre")
let number03 = prompt("Digite sua nota do terceiro bimestre")

number01 = Number(number01)
number02 = Number(number02)
number03 = Number(number03)

let media = ((number01 + number02 + number03) ) / 3

media = media.toFixed(2)

if (media >= 6){
  alert("Parabens " + name + " você passou de ano, sua média foi " + media)
} else {
  alert( name + "Você não atingiu a pontuação minima, sua média foi " + media + " mas não desista, o caminho do sucesso é a persistencia" )
}
