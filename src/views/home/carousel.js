import { addCommas } from '/useful-functions.js';


// 이미지 슬라이더 구현
let currentSlide = 1;
let nextTranslate = 0;
// 슬라이더와 버튼을 담고 있는 컨테이너
const container = document.querySelector('.slider-container')
// 슬라이더 전체
const slider = document.querySelector('.slider')
// 슬라이더 이미지 리스트
const slideList = document.querySelectorAll('.slider-image')
// 전체 버튼 리스트
const sliderButton = document.querySelectorAll('.slider-button')
// 넘버 버튼 리스트
const numberButtons = document.querySelectorAll('.slider-number-button');
numberButtons[0].style.background = '#ffae96';
let sliderLength = slideList.length;

// 넘버 버튼 각각마다 클릭 이벤트리스너 추가
for (let i = 0; i < sliderLength; i++){
    numberButtons[i].addEventListener('click', function(){
        numberButtons[currentSlide - 1].style.background = 'white';
        currentSlide = i+1;
        numberButtons[i].style.background = '#ffae96';
        slider.style.transform = `translate(-${i * 100}vw)`;
        slider.animate({
            opacity: [0.6, 1]
        }, {
            duration: 2000,
            easing: "ease",
            iterations: 1,
            fill: "both"
        });

    })
}

// 이전 이미지를 보여주는 함수
const slidePrev = function () {
    numberButtons[currentSlide - 1].style.background = 'white';
    currentSlide--
    if (currentSlide == 0){
        currentSlide = sliderLength;
    }
    numberButtons[currentSlide - 1].style.background = '#ffae96';
    nextTranslate = (currentSlide - 1) * 100 + 'vw';
    slider.style.transform = `translate(-${nextTranslate})`;
    slider.animate({
    opacity: [0.6, 1]
}, {
    duration: 2000,
    easing: "ease",
    iterations: 1,
    fill: "both"
});
}

// 다음 이미지를 보여주는 함수
const slideNext = function (){
    numberButtons[currentSlide - 1].style.background = 'white';
    currentSlide++
    if (currentSlide == sliderLength + 1){
        currentSlide = 1;
    }
    numberButtons[currentSlide - 1].style.background = '#ffae96';
    nextTranslate = (currentSlide - 1) * 100 + 'vw'; 
    slider.style.transform = `translate(-${nextTranslate})`;
    slider.animate({
        opacity: [0.6, 1]
    }, {
        duration: 2000,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });

}


// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {
    // 슬라이더 왼쪽, 오른쪽 버튼 리스너
    document.querySelector('.slider-prev-button').addEventListener('click', slidePrev);
    document.querySelector('.slider-next-button').addEventListener('click', slideNext);
    // 컨테이너에 mouseenter/mouseleave 을 통한 Interval 설정, 버튼 opacity 설정
    container.addEventListener('mouseenter', function(){
        clearInterval(slideTimer);
        sliderButton.forEach((e)=>{
        e.style.opacity = 1;
        })
    })

    container.addEventListener('mouseleave', function(){
        slideTimer = setInterval(slideNext, 5000);
        sliderButton.forEach((e)=>{
        e.style.opacity = 0;
        })
    })
}


addAllEvents();

// Interval 설정
let slideTimer = setInterval(slideNext, 5000);