const btnEqual = document.querySelector('#equal')
const input = document.querySelector('#view-fscreen-hist')
const resInput = document.querySelector('#view-rscreen')

function printOnInput(value){
    input.value += `${value}`
    console.log(resInput.value)
}

/*FUNCTION VALIDATION:
    Se o valor do input for inválido, retorna undefined
    Se o valor for válido, retorna o número sem casas decimais 
*/
function validation(){
    var inputtxt = input.value
    try{
        var result = (eval(inputtxt.replace('x','*')))//Validação para a operação de multiplicação 
    }catch(e){ 
        if (e instanceof SyntaxError){
            console.log('Tem erro aí')
            result = undefined
        }
    }

    if (result == undefined){
        return undefined
    }else if(result - Number.parseInt(result) == 0){
        return result
    }else{
        return result.toFixed(8)
    }
    
}


function calculate(){
    var result = validation()
    console.log(result)
    resInput.value = result
    input.value = resInput.value
}

function c(){
    if (resInput.value == ''){
        input.value = ''
    }else{
        input.value = resInput.value
    }
}

function ce(){
    input.value = ''
    resInput.value = ''
}
