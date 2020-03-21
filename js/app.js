let btnMenu = document.querySelector(".btn-menu")
let btnClose = document.querySelector(".btn-close")
let sidebar = document.querySelector(".sidebar")
let btnWrapper = document.querySelector(".btn-wrapper")

btnClose.addEventListener("click", () => {
  btnClose.classList.toggle("hide")
  btnMenu.classList.toggle("hide")
  sidebar.classList.toggle("open")
  btnWrapper.classList.toggle("transparent")
})

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("hide")
  btnClose.classList.toggle("hide")
  sidebar.classList.toggle("open")
  btnWrapper.classList.toggle("transparent")
})
