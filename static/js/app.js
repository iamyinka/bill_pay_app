const makePaymentBtn = document.querySelector("#makePayment");
const closePaymentBtn = document.querySelector("#closePayment");
const paymentSection = document.querySelector("#paymentSection");

makePaymentBtn.addEventListener("click", function (e) {
  e.preventDefault();
  paymentSection.style.display = "block";
});

closePaymentBtn.addEventListener("click", function (e) {
  e.preventDefault();
  paymentSection.style.display = "none";
});
