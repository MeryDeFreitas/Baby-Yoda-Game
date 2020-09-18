document.addEventListener('DOMContentLoaded', () => {
  const dino = document.querySelector('.dino')
  let isJumping = false
  let gravity = 0.9
  
  function control(e) {
    if (e.keyCode === 32) {
      if (!isJumping) {
        //Cuando presione tecla 32 el dinosaurio salta
        isJumping = true
        jump()
      }
    }
  }

  document.addEventListener('keyup', control)
  
  let position = 0

  function jump() {

    let count = 0
    let timerId = setInterval(function () {
      //move down
      if (count ===15) {
        clearInterval(timerId) //Cancela el setInterval anterior, evita que siga subiendo el dinosaurio
        let downTimerId = setInterval(function () { //Para que el dinosaurio no se quede arriba y pueda bajar
          if (count === 0) { //Para evitar que el dinosaurio baje por debajo del suelo se detiene el setInterval de downTimerId cuando llega a 0
            clearInterval(downTimerId)
            isJumping = false //para que puedas volver a presionar la recla 32 y ejecutar la funcion
          }
          position -= 5
          count--
          position = position * gravity
          dino.style.bottom = position + 'px'
        },20)
  
      }
      //move up
      position +=30
      count++
      position = position * gravity
      dino.style.bottom = position + 'px'
    },20)
  }
//Repasar a partir de minuto 15
})