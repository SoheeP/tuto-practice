let form = document.getElementById('bmi');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let height = +this.height.value.trim();
  let weight = +this.weight.value.trim();

  if (isNaN(height) || isNaN(weight)) {
    alert('숫자만!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  } else {
    let heightMeter = height / 100;
    let bmi = weight / (heightMeter * heightMeter);
    let result = document.getElementsByClassName('result')[0];
    result.innerHTML = `당신의 체지방 지수는 ${bmi.toFixed(2)}`;
  }
  //멘테토리
})