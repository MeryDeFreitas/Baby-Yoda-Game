document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino')

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        } 
      }
      document.addEventListener('keyup', control)

      function jump(){
        let position = 0
        let timerId = setInterval(function () {
            //move down
            if(position === 150)
            console.log('down')

            //move up
            console.log('up')
            position +=30
            dino.style.bottom = position + 'px'
        },20)
      }
      //Minuto 10:45

    })