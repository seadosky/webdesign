$(document).ready(function(){
    $('.header .gnb .depth1 > li').on('mouseenter focusin', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
    })
    $('.header .gnb .depth1 > li:last-child > ul > li:last-child > a').on('focusout', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
    })

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

    $('.cts .cts_tab > ul > li').on('click', function(){
        $('.cts .cts_tab > ul > li').removeClass('on')
        $(this).addClass('on')
    })

    $(' .notice .open_layer').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup .close').on('click', function(){
        $('.layer_popup').hide()
    })

})//document