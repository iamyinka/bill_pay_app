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

// $("#payBill").submit(function (e) {
//   $.ajax({
//     type: "post",
//     url: "https://api.paystack.co/transaction/initialize",
//     dataType: "json",
//     data: {
//       amount: $("#amount").val(),
//       c_email: $("#customer_email").val(),
//       csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]'),
//     },
//     success: function (data) {
//       console.log("Success");
//     },
//     failure: function () {
//       console.log("Failed");
//     },
//   });
// });

// const paymentForm = document.getElementById("payBill");
// paymentForm.addEventListener("submit", payWithPaystack, false);

// function payWithPaystack(e) {
//   e.preventDefault();

//   let handler = PaystackPop.setup({
//     key: "pk_test_1b6a9e1bbc64194e09e082578f75f3da9ebe0ac9", // Replace with your public key
//     email: document.getElementById("customer_email").value,
//     amount: document.getElementById("amount").value * 100,
//     ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
//     // label: "Optional string that replaces customer email"
//     onClose: function () {
//       alert("Window closed.");
//     },
//     callback: function (response) {
//       // let message = "Payment complete! Reference: " + response.reference;
//       // alert(message);
//       function sendData() {
//         const XHR = new XMLHttpRequest();

//         // Bind the FormData object and the form element
//         const FD = new FormData(form);

//         // Define what happens on successful data submission
//         XHR.addEventListener("load", (event) => {
//           alert(event.target.responseText);
//         });

//         // Define what happens in case of error
//         XHR.addEventListener("error", (event) => {
//           alert("Oops! Something went wrong.");
//         });

//         // Set up our request
//         XHR.open("POST", "http://localhost:8000/");

//         // The data sent is what the user provided in the form
//         XHR.send(FD);
//       }
//       sendData();
//     },
//   });

//   handler.openIframe();
// }

// $("#payBtn").on("submit", function (e) {
//   // e.preventDefault();
//   $.ajax({
//     type: "POST",
//     url: "{% url 'dashboard' %}",
//     // url: "{% url 'dashboard' %}",
//     data: {
//       public_key: "{{ public_key }}",
//       "customer[email]": $("#customer_email").val(),
//       "customer[name]": $("#customer_name").val(),
//       tx_ref: "{{ tx_ref }}",
//       redirect_url: $("#redirect_url").val(),
//       amount: $("#amount"),
//       csrfmiddlewaretoken: "{{ csrf_token }}",
//       dataType: "json",
//     },
//     success: function (data) {
//       $("#output").html(data.msg);
//     },
//     failure: function () {
//       console.log("Error Occured");
//     },
//   });

//   $("#payBill").attr("action", "https://checkout.flutterwave.com/v3/hosted/pay");
//   $.ajax({
//     type: "POST",
//     url: "https://checkout.flutterwave.com/v3/hosted/pay",
//     data: {
//       public_key: "{{ public_key }}",
//       "customer[email]": $("#customer_email").val(),
//       "customer[name]": $("#customer_name").val(),
//       tx_ref: "{{ tx_ref }}",
//       redirect_url: $("#redirect_url").val(),
//       amount: $("#amount"),
//       csrfmiddlewaretoken: "{{ csrf_token }}",
//       dataType: "json",
//     },
//     success: function (data) {
//       $("#output").html(data.msg);
//     },
//     failure: function () {
//       console.log("Error Occured");
//     },
//   });
//   console.log("Submit button clicked");
//   $("#payBill").attr("method", "post");
// });

// $(document).ready(function () {
//   $("#payBtn").on("submit", function (e) {
//     // e.preventDefault();
//     $.ajax({
//       type: "POST",
//       url: "{% url 'dashboard' %}",
//       // url: "{% url 'dashboard' %}",
//       data: {
//         public_key: "{{ public_key }}",
//         "customer[email]": $("#customer_email").val(),
//         "customer[name]": $("#customer_name").val(),
//         tx_ref: "{{ tx_ref }}",
//         redirect_url: $("#redirect_url").val(),
//         amount: $("#amount"),
//         csrfmiddlewaretoken: "{{ csrf_token }}",
//         dataType: "json",
//       },
//       success: function (data) {
//         $("#output").html(data.msg);
//       },
//       failure: function () {
//         console.log("Error Occured");
//       },
//     });

//     $("#payBill").attr("action", "https://checkout.flutterwave.com/v3/hosted/pay");
//     $.ajax({
//       type: "POST",
//       url: "https://checkout.flutterwave.com/v3/hosted/pay",
//       data: {
//         public_key: "{{ public_key }}",
//         "customer[email]": $("#customer_email").val(),
//         "customer[name]": $("#customer_name").val(),
//         tx_ref: "{{ tx_ref }}",
//         redirect_url: $("#redirect_url").val(),
//         amount: $("#amount"),
//         csrfmiddlewaretoken: "{{ csrf_token }}",
//         dataType: "json",
//       },
//       success: function (data) {
//         $("#output").html(data.msg);
//       },
//       failure: function () {
//         console.log("Error Occured");
//       },
//     });
//     console.log("Submit button clicked");
//     $("#payBill").attr("method", "post");
//   });
// });
