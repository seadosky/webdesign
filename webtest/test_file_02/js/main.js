$(document).ready(function(){
    $('.header .gnb .depth1 > li').on('mouseenter focusin', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
    })
    $('.header .gnb .depth1 > li:last-child > ul > li:last-child > a').on('focusout',function(){
        $('.header .gnb .depth1 > li').removeClass('on')
    })

    $('.cts_notice .layer_open').on('click', function(){
        console.log('kdfjksdf')
        $('.layer_popup').show()
    })
    $('.layer_popup .close').on('click', function(){
        $('.layer_popup').hide()
    })


    let idx = 1
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        $('.visual ul li').removeClass('active')
        $('.visual ul li').eq(idx-1).addClass('active')
    }, 3000)

}) //document