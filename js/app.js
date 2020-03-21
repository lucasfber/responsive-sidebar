;(function() {
  const btnMenu = document.querySelector(".btn-menu")
  const btnClose = document.querySelector(".btn-close")
  const sidebar = document.querySelector(".sidebar")
  const btnWrapper = document.querySelector(".btn-wrapper")

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
})()
