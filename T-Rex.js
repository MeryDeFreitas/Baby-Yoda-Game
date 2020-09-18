document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino')
    let isJumping = false
    let gravity = 0.9

    function control(e) {
        if (e.keyCode === 32) {
          if(!isJumping){
            isJumping = true
            jump()
          }
        } 
      }

      document.addEventListener('keyup', control)

      let position = 0

      function jump(){

        let count = 0
        let timerId = setInterval(function () {

            //move down
            if(count === 15)
            clearInterval(timerId)
            //Este método se utiliza para detener el bucle cronometrado 
            //que se inició con el método setInterval () anterior.
            console.log('down')
            let downTimerID = setInterval(function(){
              if (count === 0){
                clearInterval(downTimerID)
                isJumping = false
              }
              position -= 30 
              count --
              position = position * gravity
              dino.style.bottom = position + 'px'
            }, 20)

            //move up
            console.log('up')
            count++
            position +=30
            position = position * gravity
            dino.style.bottom = position + 'px'
            console.log(dino.style.bottom)
            },20)
      }
      
//Minuto 15:37
    })