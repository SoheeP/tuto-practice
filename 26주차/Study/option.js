/**
 * 셀 선택 : 아웃라인 파란색
 * 1. 마우스 1번클릭: 아웃라인 파란색
 * 2. 탭키 이동, 화살표키 이동
 * 
 * 입력방법(DIV > 인풋박스)
 * 1. 마우스 더블클릭
 * 2. 셀선택 상태에서 특정 키제외한 나머지 키다운
 * ㄴ 제거할 키(화살표, capsLock, Fn, 등등)
 * 
 * 입력완료(인풋박스 > DIV)
 * 1. 엔터(1회)
 */
let optBox = document.querySelector('.opt__box')

optBox.addEventListener('click', function (e) {

  if (e.target.classList.contains('opt__input')) {
    console.log(e.target)
    e.target.focus()

    // let optViewCell = document.getElementsByClassName('opt__view_cell');

    // for (let i = 0; i < optViewCell.length; i++) {
    //   optViewCell[i].classList.remove('opt__outline_active')
    // }
    // e.target.classList.add('opt__outline_active');
  }

})
optBox.addEventListener('dblclick', function (e) {
  if (e.target.classList.contains('opt__input')) {
    console.log(e.target)
    e.target.focus()

    // let optViewCell = document.getElementsByClassName('opt__view_cell');

    // for (let i = 0; i < optViewCell.length; i++) {
    //   optViewCell[i].classList.remove('opt__outline_active')
    // }
    // e.target.classList.add('opt__outline_active');
  }
})