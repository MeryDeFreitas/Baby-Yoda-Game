document.addEventListener('DOMContentLoad', () =>{
    const dino = document.querySelector('.dino')

    function control(e) {
        if(e.keycode === 38){
            console.log('pressed')
        }
    }
    document.addEventListener("keyup", control)
})