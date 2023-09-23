// below this script has written for side menu bar whenever web displayed on phone , tab or whatever which is below 600 px
let menu=document.querySelector(".navlink");

function displaymenu(){
    menu.style.display="block"
}
let can=document.getElementById("cancel")
can.addEventListener("click",()=>{
    menu.style.display="none"
})

// this script has written for switching b/w skills , education and experience
let skill1=document.getElementById("skills")
let education1=document.getElementById("education")
let experience1=document.getElementById("experience")
let s_active=document.getElementById("s-active")
let ed_active=document.getElementById("ed-active")
let e_active=document.getElementById("ex-active")
function skills(){
    skill1.style.display="block"
    education1.style.display="none"
    experience1.style.display="none"
    ed_active.style.color="black"
    s_active.style.color="purple"
    e_active.style.color="black"
}
function education(){
    education1.style.display="block"
    experience1.style.display="none"
    skill1.style.display="none"
    ed_active.style.color="purple"
    s_active.style.color="black"
    e_active.style.color="black"

}
function experience(){
    experience1.style.display="block"
    skill1.style.display="none"
    education1.style.display="none"
    s_active.style.color="black"
    ed_active.style.color="black"
    e_active.style.color="purple"
}

// below script is written for collecting the contact information from web site visiter
const scriptURL = 'https://script.google.com/macros/s/AKfycbx98gK_ax2Z9dbdAYEuQO5FTCkGpwpsj_MEkf2ehPU2EN_hKqkpFdmmHwrnwHN8_w1fGA/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            alert("Message sent succesfully")
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })