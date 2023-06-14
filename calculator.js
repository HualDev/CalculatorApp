const theme = document.getElementsByClassName('theme')
const theme1 = document.getElementById('theme1')
const theme2 = document.getElementById('theme2')
const theme3 = document.getElementById('theme3')
const body = document.getElementById('body')
const header = document.getElementById('header')
const chooseTheme = document.getElementById('chooseTheme')
const result = document.getElementById('result')
const keyboard = document.getElementById('keyboard')
const numbers = document.getElementsByClassName('numbers')
const del = document.getElementById('del')
const reset = document.getElementById('reset')
const equal = document.getElementById('equal')
let number = document.getElementsByClassName('number')
const operator = document.getElementsByClassName('operator')
const plus = document.getElementById('plus')
const less = document.getElementById('less')
let firstNumber = 0
let secondNumber = 0
let oper = ''


theme1.addEventListener('click',()=>{
    theme1.classList.add('theme1')
    theme2.classList.remove('theme2')
    theme3.classList.remove('theme3')
    body.classList.add('theme1Body')
    body.classList.remove('theme2Body')
    body.classList.remove('theme3Body')
    header.classList.add('theme1Header')
    header.classList.remove('theme2Header')
    header.classList.remove('theme3Header')
    chooseTheme.classList.add('theme1chooseTheme')
    chooseTheme.classList.remove('theme2chooseTheme')
    chooseTheme.classList.remove('theme3chooseTheme')
    result.classList.add('theme1Result')
    result.classList.remove('theme2Result')
    result.classList.remove('theme3Result')
    keyboard.classList.add('theme1Keyboard')
    keyboard.classList.remove('theme2Keyboard')
    keyboard.classList.remove('theme3Keyboard')
    for(i=0;i<numbers.length;i++){
        numbers[i].classList.add('theme1Numbers')
        numbers[i].classList.remove('theme2Numbers')
        numbers[i].classList.remove('theme3Numbers')
    }
    del.classList.add('theme1Del')
    del.classList.remove('theme2Del')
    del.classList.remove('theme3Del')
    reset.classList.add('theme1Reset')
    reset.classList.remove('theme2Reset')
    reset.classList.remove('theme3Reset')
    equal.classList.add('theme1Equal')
    equal.classList.remove('theme2Equal')
    equal.classList.remove('theme3Equal')
})

theme2.addEventListener('click',()=>{
    theme1.classList.remove('theme1')
    theme2.classList.add('theme2')
    theme3.classList.remove('theme3')
    body.classList.remove('theme1Body')
    body.classList.add('theme2Body')
    body.classList.remove('theme3Body')
    header.classList.remove('theme1Header')
    header.classList.add('theme2Header')
    header.classList.remove('theme3Header')
    chooseTheme.classList.remove('theme1chooseTheme')
    chooseTheme.classList.add('theme2chooseTheme')
    chooseTheme.classList.remove('theme3chooseTheme')
    result.classList.remove('theme1Result')
    result.classList.add('theme2Result')
    result.classList.remove('theme3Result')
    keyboard.classList.remove('theme1Keyboard')
    keyboard.classList.add('theme2Keyboard')
    keyboard.classList.remove('theme3Keyboard')
    for(i=0;i<numbers.length;i++){
        numbers[i].classList.remove('theme1Numbers')
        numbers[i].classList.add('theme2Numbers')
        numbers[i].classList.remove('theme3Numbers')
    }
    del.classList.remove('theme1Del')
    del.classList.add('theme2Del')
    del.classList.remove('theme3Del')
    reset.classList.remove('theme1Reset')
    reset.classList.add('theme2Reset')
    reset.classList.remove('theme3Reset')
    equal.classList.remove('theme1Equal')
    equal.classList.add('theme2Equal')
    equal.classList.remove('theme3Equal')
})

theme3.addEventListener('click',()=>{
    theme1.classList.remove('theme1')
    theme2.classList.remove('theme2')
    theme3.classList.add('theme3')
    body.classList.remove('theme1Body')
    body.classList.remove('theme2Body')
    body.classList.add('theme3Body')
    header.classList.remove('theme1Header')
    header.classList.remove('theme2Header')
    header.classList.add('theme3Header')
    chooseTheme.classList.remove('theme1chooseTheme')
    chooseTheme.classList.remove('theme2chooseTheme')
    chooseTheme.classList.add('theme3chooseTheme')
    result.classList.remove('theme1Result')
    result.classList.remove('theme2Result')
    result.classList.add('theme3Result')
    keyboard.classList.remove('theme1Keyboard')
    keyboard.classList.remove('theme2Keyboard')
    keyboard.classList.add('theme3Keyboard')
    for(i=0;i<numbers.length;i++){
        numbers[i].classList.remove('theme1Numbers')
        numbers[i].classList.remove('theme2Numbers')
        numbers[i].classList.add('theme3Numbers')
    }
    del.classList.remove('theme1Del')
    del.classList.remove('theme2Del')
    del.classList.add('theme3Del')
    reset.classList.remove('theme1Reset')
    reset.classList.remove('theme2Reset')
    reset.classList.add('theme3Reset')
    equal.classList.remove('theme1Equal')
    equal.classList.remove('theme2Equal')
    equal.classList.add('theme3Equal')
})

for(let i=0; i<number.length;i++){
        number[i].addEventListener('click',()=>{
            if(result.textContent==0){
                result.textContent=''
                result.textContent+=number[i].textContent
            }
            else{
               result.textContent+=number[i].textContent 
            }
        
    })
}

reset.addEventListener('click',()=>{
    result.textContent=0
})

del.addEventListener('click',()=>{
    if(result.textContent.length-1==0){
        result.textContent=0
    }
    else{
       result.textContent=result.textContent.substring(0, result.textContent.length-1) 
    }    
})

for(let i=0;i<operator.length;i++){    
    operator[i].addEventListener('click',()=>{
        firstNumber=parseFloat(result.textContent)
        result.textContent=0  
        oper = operator[i].textContent      
    })
}

equal.addEventListener('click',()=>{
    secondNumber=parseFloat(result.textContent)
    if(oper=='+'){   
        result.textContent=firstNumber+secondNumber
    }else if(oper=='-'){
        result.textContent=firstNumber-secondNumber            
    }else if(oper=='*'){
        result.textContent=firstNumber*secondNumber
    }else if(oper=='/' && secondNumber!==0){        
            result.textContent=firstNumber/secondNumber        
    }
})
    





