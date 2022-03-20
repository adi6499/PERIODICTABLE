let box = document.querySelectorAll(".box")
box.forEach((b)=>{
    b.addEventListener("click",(e)=>{
     let voice = new SpeechSynthesisUtterance(e.target.textContent)
     speechSynthesis.speak(voice)
    voice.currentTime=0;
       
    })
})

