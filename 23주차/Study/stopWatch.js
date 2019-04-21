let startBtn = document.querySelector('.start');
let displayWatch = document.getElementById('watch');
let startTime = null;
startBtn.addEventListener('click', () => {
  let setTime = 0;
  startTime = setInterval(() => {
    setTime++;
    let curTimePerMil = (setTime / 100)
    displayWatch.innerHTML = (curTimePerMil < 10) ? `0${curTimePerMil.toFixed(2)}` : curTimePerMil.toFixed(2);
  }, 10)

});

let stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', ()=>{
  console.log('stop')
  clearInterval(startTime);
})