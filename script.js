const mblNavMenuBtnEl = document.querySelector(".mobile__nav__menu__btn");
const mblNavMenuEl = document.querySelector(".mobile__navbar");
document.addEventListener("DOMContentLoaded", () => {
  mblNavMenuBtnEl.addEventListener("click", (e) => {
    document.body.classList.toggle("menu__open");
  });

  mblNavMenuEl.addEventListener("click", (e) => {
    if (!e.target.classList.contains("mobile_nav__link")) {
      document.body.classList.remove("menu__open");
    }
  });
});
