const mainEl = document.querySelector('.main')
const paswordEl = document.createElement('input')
paswordEl.classList.add('password')
paswordEl.setAttribute('placeholder', 'сгенирировать пароль ')
paswordEl.addEventListener('keypress', (e) => {
    e.preventDefault();
}

)
paswordEl.addEventListener('focus', (e)=>{

    navigator.clipboard.writeText(paswordEl.value)
})

const copyBtm= document.createElement('button')
copyBtm.classList.add('password-button')
copyBtm.innerText= 'скопировать'
copyBtm.addEventListener('click',(e)=>{
 paswordEl.select();
 paswordEl.setSelectionRange(0,99999)
 navigator.clipboard.writeText(paswordEl.value)
    
})
const generateBtm= document.createElement('button')
generateBtm.classList.add('password-button')
generateBtm.innerHTML= 'сгенирировать пароль '
generateBtm.addEventListener('click', (e)=>{
 let password = generatePassword(12)
 paswordEl.value = password
})
function generatePassword(pasworlength) {
    const nuberChars = '0123456789'
    const upperChars = 'ABCDEFGHIJKLMNOPQSTUVQXZYZ'
    const lawerChars = 'abcdefghijklmnoprstuvqxzyz'
    const symbolChars = '!@#$%^&*()_+'
const allChars = nuberChars+upperChars+lawerChars+symbolChars
    let randomString = ''

    for(let i = 0; i<pasworlength; i++){
        let randomNumber = Math.floor(Math.random()*allChars.length)
        randomString += allChars[randomNumber]
    }
    return randomString
}
mainEl.appendChild(paswordEl);
mainEl.appendChild(copyBtm)
mainEl.appendChild(generateBtm)
