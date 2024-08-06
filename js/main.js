// Order Modal Form

const modalWindow = document.querySelector(".modal-window");
const openButton = document.querySelector(".order-button");
const closeButton = document.querySelector(".modal-close-button");

openButton.addEventListener("click", () => {
  // console.log("Modal open button clicked");
  modalWindow.classList.remove("is-close");
  modalWindow.classList.add("is-open");
});

closeButton.addEventListener("click", () => {
  // console.log("Modal close button clicked");
  modalWindow.classList.remove("is-open");
  modalWindow.classList.add("is-close");
});
window.addEventListener("click", (event) => {
  if (event.target === modalWindow) {
    // console.log("Clicked outside the modal content");
    modalWindow.classList.remove("is-open");
    modalWindow.classList.add("is-close");
  }
});

//Burger Menu

// const burgerMenu = document.querySelector(".burger-menu");
// const burgerMenuLinks = document.querySelectorAll(".burger-menu-link");

// burgerMenu.addEventListener("click", () => {
//   // console.log("Burger menu clicked");
//   burgerMenu.classList.toggle("is-open");
//   burgerMenuLinks.forEach((link) => link.classList.toggle("is-active"));
// });
