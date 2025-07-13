const homeDefualt = document.querySelector(".home-icon")
homeDefualt.style.color='black';
homeDefualt.style.background ='white';
const elements = document.querySelectorAll(".icon")
elements.forEach((element)=>{
    element.addEventListener("click",()=>{
        elements.forEach((element)=>{
            if(element.style.color==='black'){
                element.style.color='white';
                element.style.background ='transparent';
            }})
        element.style.color = 'black';
        element.style.background ='white';
    })
})