/*
    파일명 : main.js
    작성자 : 이유경
    작성일 : 2024.02.28
    설  명 : 메인페이지에서 사용된 jquery (header 빼고)
*/
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

    effect: "fade", /* fade 효과 */
    
	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });

    const product_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
    loop: true,
    autoplay: {  /* 팝업 자동 실행 */
		delay: 3000,
		disableOnInteraction: true,
	},
	slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 4, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
        500: {    /* 768px 이상일때 적용 */
			slidesPerView: 2,
			spaceBetween: 8,
		},
		768: {    /* 768px 이상일때 적용 */
			slidesPerView: 2,
			spaceBetween: 16,
		},
		1024: {   /* 1024px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 18,
		},
		1280: {    /* 1280px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},

});

const social_swiper = new Swiper('.social .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			640: {    /* 640px 이상일때 적용 */
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {    /* 768px 이상일때 적용 */
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {   /* 1024px 이상일때 적용 */
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1280: {    /* 1280px 이상일때 적용 */
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
});

})//$(document).ready