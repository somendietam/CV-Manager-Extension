const userInfo = JSON.parse(localStorage.getItem('userInfo'));
console.log('esteeselcontent.js');

if (userInfo) {
  console.log('Información del usuario guardada:', userInfo);
  // Aquí puedes usar la información como necesites
}
