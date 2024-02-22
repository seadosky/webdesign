$(document).ready(function(){
    /* html문서가 로딩된 다음에 실행해 */

    /*
        1차 메뉴 (.header .depth1 > li)에 마우스를 오버하면
        오버한 li (this)에 sub_over 클래스를 추가
        header에는 menu_over 클래스 추가
        옆의 메뉴로 이동하면 이전메뉴가 아웃처리되어야 함
     */
    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .tnb .seasrch').on('focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })

})