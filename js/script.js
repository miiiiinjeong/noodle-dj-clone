// dom (html 태그 로딩 완료 후 실행)
$(document).ready(function(){
    // 클래스 nav의 li를 찾아라
    // 저장한다. 재활용하기 위해서
    var navLis = $(".nav ul li");
    // var : 가능하면 안쓰는게 좋음
    const navLis = $(".nav ul li");
    // const : 절대 바뀌지 않는 값
    let navLis = $(".nav ul li");
    // let : 바꿀 수 있는 값
});
// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function(){
    // 클래스 nav의 li를 찾아라
    // document.querySelector(".nav ul li")
    var navLis = document.querySelectorAll(".nav ul li");
    const navLis = document.querySelectorAll(".nav ul li");
    let navLis = document.querySelectorAll(".nav ul li");
}