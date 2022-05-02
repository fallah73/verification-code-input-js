//!================ Var ==================
const input =  [...document.querySelectorAll('.input')]
const btnVerified =  document.querySelector('.btn-verified')  
//!================ Functions ================== 
const currentInput = (e) => { 

    let inputValue =  e.data || e.target.value  //for one and speed from keyup last if

    if ( !inputValue ) { return true }  // warning if click and backspace

    if ( inputValue.length === 1 ) {return true} //for one key and sum value to one input

    fastKeyDown(e.target, inputValue)  // fro fast key down 
}
//todo========================
const fastKeyDown = (e_target, inputValue) => {  // for fast key down and divid data to inputs

    e_target.value = inputValue[0]   // number one
    inputValue = inputValue.substring(1)  // number two-end

    if(e_target != input[5]){ //for error input[6] , for 0-5

        if (inputValue.length && e_target.parentElement.nextSibling.nextSibling.children[0] ) {
            fastKeyDown(e_target.parentElement.nextSibling.nextSibling.children[0] , inputValue)
        }
    }
}
//todo========================
const nextInput = (e) => {  

     // Not allow any keys to work except for tab and number
    if (e.keyCode != 9 && (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) { 
        e.preventDefault()
        return false
    } 

    // Tab and backspace
    if (e.keyCode === 9 || e.keyCode === 8) {return true}

    let nextInput  = ''
    if(e.target != input[5]){ // for input range to 0-5 and not error
        nextInput =  e.target.parentElement.nextSibling.nextSibling.children[0] 
        nextInput.focus()
    } 

    if(!nextInput){input[5].blur()}  // if input 5 not focus

    if(nextInput.value){nextInput.select()} //for delete next input value

    if ( e.target.value.length > 1 ) {currentInput(e)}// send input to use value for fast keydown
}
//todo========================
const focusInput = (e) => e.target.select()//click and focus and select
//todo========================
const showResult = (e) => {//for show result
    let result =''
    input.forEach((item) => {
        result += item.value
    })
    alert('Result  =>  ' +  result)
}
//!============ Events ===============
input.forEach((item) => {
    item.addEventListener('input' , currentInput )
    item.addEventListener('keyup' , nextInput)
    item.addEventListener('click' , focusInput)
})
btnVerified.addEventListener('click' , showResult ) 

