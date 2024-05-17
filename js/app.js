const toggle= document.querySelector(".toggle")
const menudashboard = document.querySelector(".menu-dashboard")
const iconomenu = document.querySelector("i")
const enlacemenu = document.querySelectorAll(".enlace")

/*Romani Tobias*/
toggle.addEventListener("click",()=>{
 menudashboard.classList.toggle("open")

 if(iconomenu.classList.contains("bx-menu")){
    iconomenu.classList.replace("bx-menu", "bx-x")
 }
 else
 {
    iconomenu-classList.replace("bx-x","bx-menu")
 }
},

enlacemenu.forEach(enlace => {
    enlace.addEventListener("click",() =>
    {
        menudashboard.classList.add("open")
        iconomenu.classList.replace("bx-menu", "bx-x")
    })
})
)