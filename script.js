document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".container form");
  const nextBtn = document.querySelector(".nextBtn");
  const backBtn = document.querySelector(".backBtn");
  const submitBtn = document.querySelector(".submitBtn");

  nextBtn.addEventListener("click", function () {
    form.classList.add("secActive");
  });

  backBtn.addEventListener("click", function () {
    form.classList.remove("secActive");
  });

  submitBtn.addEventListener("click", function () {
    submitForm();
  });
});

function submitForm() {
  alert("Form submitted successfully!");
}