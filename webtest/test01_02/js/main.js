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

})//document.ready


let idx = 1
setInterval(function(){
    if(idx < 3){
        idx++
    }else{
        idx = 1
    }
    $('.visual ul li').removeClass('active')
    $('.visual ul li').eq(idx-1).addClass('active')
})