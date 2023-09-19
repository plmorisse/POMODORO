
//changer val avant rendu
let travailTemps = 0
let pauseTemps = 0
let  variation = new Boolean(true);

let timerElement = document.getElementById("timer")
let buttonstart = document.getElementById("start")
let buttonreset = document.getElementById("reset")
let statutTravail = document.getElementById("travail")
let statutPause = document.getElementById("pause")
let html = document.getElementById("html")
let textIdentification = document.getElementById("text")
let textTempsPause = document.getElementById("textPause")
let textTempsTravail = document.getElementById("textTravail")
let minutes = parseInt(travailTemps, 10)


if(minutes < 10){
  minutes = "0" + minutes
}
timerElement.innerText = `${minutes}:00`
buttonreset.style.display = 'none'

buttonstart.addEventListener("click",()=>{
  travailTemps= parseInt(document.getElementById("tpsTravail").value, 10)
  pauseTemps = parseInt(document.getElementById("tpsPause").value,10)
  if(travailTemps <=0 || travailTemps >=99 || isNaN(travailTemps)){
    alert("Le temps de travail doit être compris de 1 minutes à 99 minutes au maximun!!")
    reload
  }
  if(pauseTemps <=0 || pauseTemps >=99 || isNaN(pauseTemps)){
    alert("Le temps de pause doit être compris de 1 minutes à 99 minutes au maximun!!")
    reload
  }
    timer(travailTemps, pauseTemps)
    buttonstart.style.display = 'none'
    buttonreset.style.display = 'block'
})

buttonreset.addEventListener("click", ()=>{
    location.reload()
})

function timer(x, y){

    let departMinutes = x
    textIdentification.textContent = 'Il faut travailler !!'
    statutPause.style.backgroundColor = ' rgb(255, 115, 0)'
    textIdentification.style.color ='black'
    let temps = departMinutes * 60
    setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)
      
        if(minutes < 10){
          minutes = "0" + minutes
        }
        if(secondes < 10){
          secondes = "0" + secondes
        }
        timerElement.innerText = `${minutes}:${secondes}`
        if(temps <=0){
            if(variation == true){
              variation = false;
                departMinutes = y
                temps = departMinutes*60
                textIdentification.textContent = 'Vous êtes en pause !!'
                statutPause.style.backgroundColor = 'lightblue'
                statutTravail.style.backgroundColor = ' rgb(255, 115, 0)'
                html.style.backgroundColor ='blue'
                timerElement.style.color ='white'
                textIdentification.style.color ='white'
                textTempsPause.style.color = 'white'
                textTempsTravail.style.color = 'white'
            }
            else if(variation == false){
              variation = true;
                departMinutes = x
                temps = departMinutes*60
                textIdentification.textContent = 'Il faut travailler !!'
                statutPause.style.backgroundColor = ' rgb(255, 115, 0)'
                statutTravail.style.backgroundColor = 'lightblue'
                html.style.backgroundColor ='red'
                timerElement.style.color ='black'
                textIdentification.style.color ='black'
                textTempsPause.style.color = 'black'
                textTempsTravail.style.color = 'black'
            }
            
        }
        else{
          temps = temps - 1
        }
        
      }, 1000) //temps intervalle en ms
}


