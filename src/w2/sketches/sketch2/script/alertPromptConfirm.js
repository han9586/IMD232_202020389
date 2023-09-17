alert('안녕하세요? 아름이의 홈페이지에 오신 것을 환영합니다!');
prompt('혹시 배고프신가요?');
let userName;
userName = prompt('당신의 이름은?', '본명을 적으세요');
let confirmVal = confirm('아하 당신의 이름은 ' + userName + '맞습니까?');
if (confirmVal == true) {
  alert('환영합니다. ' + userName + '님!');
}
