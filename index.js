const convertBtn = document.querySelector('.convert-btn');
const meterInfo = document.querySelector('.meters');
const volumeInfo = document.querySelector('.liters');
const massInfo = document.querySelector('.kilograms');



convertBtn.addEventListener('click', () => {
  const inputValue = document.getElementById('number-input').value;
  localStorage.setItem('length', inputValue.toString());
  localStorage.setItem('volume', inputValue.toString());
  localStorage.setItem('mass', inputValue.toString());
  meterInfo.textContent = `${localStorage.getItem('length')} meters: ${Number(localStorage.getItem('length')) * 3.28} ft`;
  volumeInfo.textContent = `${localStorage.getItem('volume')} liters: ${Number(localStorage.getItem('volume')) * 0.264} gallons`;
  massInfo.textContent = `${localStorage.getItem('mass')} kilograms: ${Number(localStorage.getItem('mass')) * 2.20} pounds`;

})


