document.querySelector(".sampbun").addEventListener("click",function(){
    const x=document.querySelector("header .R-two");
    const y=getComputedStyle(x).display;
    
    if(y=="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }   
});



               