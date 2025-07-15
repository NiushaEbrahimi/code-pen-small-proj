const elements = document.querySelectorAll(".nav-item")
elements.forEach((element)=>{
    element.addEventListener("click",()=>{
        elements.forEach((element)=>{
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        });
        element.classList.add('active');
    })
})