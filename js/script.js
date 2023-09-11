const travailTemps = 0.15
const pauseTemps = 0.1


let timerElement = document.getElementById("timer")
let buttonstart = document.getElementById("start")
let buttonreset = document.getElementById("reset")
let statutTravail = document.getElementById("travail")
let statutPause = document.getElementById("pause")

buttonreset.style.display = 'none'

buttonstart.addEventListener("click",()=>{
    timer(travailTemps, pauseTemps)
    buttonstart.style.display = 'none'
    buttonreset.style.display = 'block'
})

buttonreset.addEventListener("click", ()=>{
    location.reload()
})

function timer(x, y){

    let departMinutes = x
    statutTravail.style.color = 'red'
    statutPause.style.color = 'white'
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
            if(statutPause.style.color ='white' ){
                departMinutes = y
                temps = departMinutes*60
                statutPause.style.color = 'red'
                statutTravail.style.color = 'white'
            }
            else if(statutPause.style.color ='red' ){
                departMinutes = x
                temps = departMinutes*60
                statutPause.style.color = 'white'
                statutTravail.style.color = 'red'
            }
            
        }
        else{
          temps = temps - 1
        }
        
      }, 1000) //temps intervalle en ms
}


