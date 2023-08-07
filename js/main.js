const header = document.querySelector(".header");
const submitEL = document.getElementById("submit-el");

header.addEventListener("click", () => {
  header.classList.toggle("clicked");
});

submitEL.addEventListener("click", function () {
  window.alert("You Have Successfully Submitted");
});
