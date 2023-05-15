let result =  prompt("Adivinhe o número aleatório entre 0 e 8")
const randomNumber = Math.round(Math.random() * 2)
let tentativas = 0;
while(Number(result) != randomNumber){
 result = prompt("Errado, esse não é o número")
 tentativas++
}
if(tentativas === 0){
  alert("Parabens você acertou o número" + randomNumber + " na primeira tentativa" )
} else if(tentativas===1){
alert("Parabens, você acertou o número em 1 tentativa")
}
else{
  alert("Parabens, você acertou o número em " + tentativas + " tentativas")
}

