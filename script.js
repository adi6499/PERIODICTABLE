let box = document.querySelectorAll(".box")
box.forEach((b)=>{
    b.addEventListener("click",(e)=>{
     let voice = new SpeechSynthesisUtterance(b.textContent)
        window.speechSynthesis.cancel();
     speechSynthesis.speak(voice)
   voice.rate = 0.5;
     var synth = window.speechSynthesis;
     var voices = synth.getVoices();
    let randomVoice =Math.floor(Math.random() * voices.length);
    voice.voice=voices[randomVoice]
       
    })
})

