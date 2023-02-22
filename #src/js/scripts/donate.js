const donateBtn = document.querySelector('.donate__btn');
// const wrapper = document.querySelector('.wrapper');
const donateSelect = document.querySelector('.donate__btn-select');
// const donateSelect2 = document.querySelector('.donate__btn-select._active');
const donateCoffee = document.querySelector('.donate__btn-coffee');
const donatePaypal = document.querySelector('.donate__btn-paypal');


donateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // document.body.classList.add('_lock');
  // wrapper.classList.add('_active');
  donateSelect.classList.toggle('_active');
});

donatePaypal.addEventListener('click', () => {
  // document.body.classList.remove('_lock');
  // wrapper.classList.remove('_active');
  donateSelect.classList.remove('_active');
});

donateCoffee.addEventListener('click', () => {
  // document.body.classList.remove('_lock');
  // wrapper.classList.remove('_active');
  donateSelect.classList.remove('_active');
});

document.addEventListener('click', (e) => {
  // console.log(e.target.className);

  if (e.target.className != "donate__btn"){
    // console.log("11");
    // if (!donateSelect2) {
      // document.body.classList.remove('_lock');
      // wrapper.classList.remove('_active');
      donateSelect.classList.remove('_active');
    // }
  }
});
