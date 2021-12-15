(() => {
  const btns = document.querySelectorAll("[data-radio-btn]");

  btns.forEach((element) => {
    element.addEventListener("click", toggleImg);

    function toggleImg() {}
  });
})();
