/*
- Selecionar item 
- Buscar id do item selecionado
- Relacionar item para determinada seçao
- Evento de clicar 
- Levar o usuario pra seçao selecionada
*/

function initScroll() {
  const menuItem = document.querySelectorAll('.nav-main a[href^="#"]');
  const titulo = document.querySelector("a");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth",
    });
  }

  menuItem.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });

  function scrollTopo(event) {
    event.preventDefault();
    const hrefMain = event.currentTarget.getAttribute("href");
    const section = document.querySelector(hrefMain);

    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth",
    });
  }

  titulo.addEventListener("click", scrollTopo);
}

initScroll();