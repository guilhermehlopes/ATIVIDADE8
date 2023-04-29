const prompt = require('prompt-sync') ()

const salario = Number(prompt('Digite seu salário: '))
const reajuste = Number(prompt('Digite a taxa de reajuste: '))

const aumento = salario * (reajuste/100)

const resultado = aumento + salario

console.log('Seu novo salário com o aumento da porcentagem do reajuste é de: '+resultado)