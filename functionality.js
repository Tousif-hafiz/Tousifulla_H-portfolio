let menu=document.getElementById("sidemenu")

function displaymenu(){
    menu.style.display="block"
}
let can=document.getElementById("cancel")
can.addEventListener("click",()=>{
    menu.style.display="none"
    
})
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
