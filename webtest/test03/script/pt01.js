$(document).ready(function(){

    let idx = 1
    let obj_left = 0
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        obj_left = -(idx-1)*800

        $('.visual ul').animate({
            left : obj_left
        }, 500)
    }, 3000)
})