const departMinutes = 25
let temps = departMinutes * 60

let timerElement = document.getElementById("timer")
let button = document.getElementById("start")

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
    temps = 0
  }
  else{
    temps = temps - 1
  }
  
}, 1000) //temps intervalle en ms