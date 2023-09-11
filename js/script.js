const travailTemps = 25
const pauseTemps = 5


let timerElement = document.getElementById("timer")
let buttonstart = document.getElementById("start")
let buttonreset = document.getElementById("reset")

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
            departMinutes = y
            temps = departMinutes*60
        }
        else{
          temps = temps - 1
        }
        
      }, 1000) //temps intervalle en ms
}


