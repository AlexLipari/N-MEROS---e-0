var numero = parseInt(prompt("insira um número:"))
console.log (avaliarNumero(numero))

function avaliarNumero (numeroParametro){
    if (numeroParametro == 0){
        return 0
    }else if (numeroParametro < 0){
        return -1
    }else{
        return 1
    }
}