/**
 * user= {
  이메일:{
    이름:ㄹㄹㄹ
    이메일:ㄹㄹㄹ
    비밀번호: ㅎㄴㅎ
    성별:남
    생년원일 = 1992-04-10
    관심분야:[]
  }
}
 */

 
doMakeOpt('signupBirthYears',1950,2019);
doMakeOpt('signupBirthMonth',1,12)
doMakeOpt('signupBirthDate',1,31)

function doMakeOpt(el,str,end){
  for(let i = str; i <= end; i++){
    let optionEl = document.createElement('option');
    optionEl.value = i;
    optionEl.textContent = (i<10)?"0"+i:i ;
    document.getElementById(`${el}`).append(optionEl)
  }
};

function getFavorList(checked,obj,value){
  if(checked){
    obj.favor.push(value)
  }
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {};
  obj.name = this.username.value;
  obj.email = this.Address.value;
  obj.password = this.password.value;
  obj.gender = this.gender.value;
  
  let birthYear = this.signupBirthYears.value;
  let birthMonth = this.signupBirthMonth.value;
  let birthDate = this.signupBirthDate.value;
  obj.favor = [];
  obj.birth = `${birthYear} - ${birthMonth} - ${birthDate}`

  getFavorList(this.favorCoding.checked, obj, this.favorCoding.value);
  getFavorList(this.favorExer.checked, obj, this.favorExer.value);
  getFavorList(this.favorMovie.checked, obj, this.favorMovie.value);
  getFavorList(this.favorShop.checked, obj, this.favorShop.value);
  getFavorList(this.favorTraval.checked, obj, this.favorTraval.value);
  
  //true / false로 반환
  database.users[`${this.Address.value}`] = obj;

  console.log(database)
})