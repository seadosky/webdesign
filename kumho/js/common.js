/*
    파일명 : common.js
    작성자 : 이유경
    작성일 : 2024.02.28
    설  명 : 모든 페이지에서 작동되는 jquery (header, footer에서 작동되는 jquery)
*/

$(document).ready(function(){
    
    /*****
     브라우저가 스크롤이 되면 header fixed 클래스 추가
     근데 맨위로 다시 올라가면 header에 fixed 클래스 삭제
     *****/
    let scrolling
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ 
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })
    
    /*****
    pc버전 메뉴에 마우스를 올리면 header에 menu_over 클래스 추가
    이벤트 대상 : .header .gnb
                 .header .gnb ul.depth1 > li
                 .header .gnb ul.depth1 > li > a
    1차메뉴 li에 마우스를 오버하면 해당 li에 on 클래스 추가 
    이벤트 대상 :  .header .gnb ul.depth1 > li
                  .header .gnb ul.depth1 > li > a
    *****/
   let device_status
   let window_w
   function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ //px버전
            device_status = 'pc'
        }else{ //모바일
            device_status = 'mobile'
        }
        console.log(device_status)
   }
   device_chk() //문서가 로딩되고 1번 실행
   $(window).resize(function(){
        device_chk() //문서가 리사이즈될때마다 1번씩 실행
   })

    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('.header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
        }
    })
    $('.header .tnb .lang').on('focusin', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
        }
    })

    $(".header .gnb ul.depth1 > li > a").on("click", function(e){
        if(device_status == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('on')
        }
	});

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

    /*****
     footer에 그룹사 바로가기 열기/닫기 
     .footer .family_site .open 를 클릭하면 family_site에 on 클래스 추가
     .footer .family_site .close 를 클릭하면 family_site에 on 클래스 삭제
     *****/
    $('.footer .family_site .open').on('click', function(){
        $('.footer .family_site').addClass('on')
    })
    $('.footer .family_site .close').on('click', function(){
        $('.footer .family_site').removeClass('on')
    })

})//$(document).ready