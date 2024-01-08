const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')


signUpButton.addEventListener('click',() =>{
    container.classList.add("right-panel-active")
})
signInButton.addEventListener('click',() =>{
    container.classList.remove("right-panel-active")
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbzgx0VdJAwmv3zg4yGCOFYoiDGnLf2BceXMgSBKlmpNrJk6Nf0_mRzuptWQ2oW1u1jc6g/exec'
const form = document.forms['contact-form']

form.addEventListner('submit',e => {
    e.preventDefault()
    fetch(scriptURL,{ method: 'POST',body:new FormData(form)})
    .then(response => alert("Thanks form fully successfull submitted"))
    .then(() =>{window.location.reload();})
    .catch(error =>console.error('Error!',error.message))
})