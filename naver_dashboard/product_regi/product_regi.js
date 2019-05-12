console.log('helloworld')

let optCount = document.getElementById('optCount')

optCount.addEventListener('change', function(){
  let optInput = document.getElementById('optInsert');
  let defaultRow = document.querySelector('.opt__inner_row');
  let defaultBt = document.querySelector('.opt__input_abort_box')

  optInput.innerHTML = '';
  optInput.append(defaultRow);

  for(let i = 1; i < +this.value ; i++){
    let cloneRow = defaultRow.cloneNode(true);
    if(this.value <= 1){
      optInput.append(cloneRow) 
    } else {
      let optCloseBtn = document.createElement('button');    
      optCloseBtn.classList.add('opt__value_close_bt');
      optCloseBtn.textContent = 'X'
      cloneRow.append(optCloseBtn);
      optInput.append(cloneRow);
    }
  }

  let cloneBt = defaultBt.cloneNode(true);
  optInput.append(cloneBt)

  let i = 1;
  Array.from(document.querySelectorAll('.opt__input_box *')).forEach((x)=>{
    if(x.classList.contains('opt__title_input')){
      console.log(x)
      x.name = `optTitleVal${i}`
      i++;
    }
  })
})


document.getElementById('optForm').addEventListener('submit',function(e){
  e.preventDefault();
  console.log(this.optTitleVal1.value)
  console.log(this.optTitleVal2.value)
  console.log(this.optTitleVal3.value)
})