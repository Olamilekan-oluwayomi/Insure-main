const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main--header");

console.log(headerEl);

btnNavEl.addEventListener("click", function () {
  console.log("hello");

  headerEl.classList.toggle("nav--open");
});
