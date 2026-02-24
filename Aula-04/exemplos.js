//Funções em JS 

//Uma função é uma bloco de código reutilizável, criado para executar uma tarefa especifica

//function nomeDaFuncao (parametro1, parametro2){
    //código que será executado
//    return resultado
//}

//Exemplo 01 - somar dois números

function somar(a, b){
    return a + b
}

console.log(somar(2, 3))

function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao
}

console.log(realParaDolar(20, 5.17).toFixed(2))

function calcularAumento(salario){
    return salario + (salario * 0.25)
}

console.log(calcularAumento(10000))