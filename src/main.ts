document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const btnCarregar = document.getElementById("btn-carregar");
  const conteudo = document.getElementById("conteudo");

  function mostrarLoader() {
    if (!loader) return;
    loader.style.display = "flex";
  }

  function esconderLoader() {
    if (!loader) return;
    loader.style.display = "none";
  }

  function carregarDados() {
    mostrarLoader();

    setTimeout(() => {
      esconderLoader();
      if (!conteudo || !btnCarregar) return;
      conteudo.style.display = "block";
      btnCarregar.style.display = "none";
    }, 3000);
  }

  btnCarregar?.addEventListener("click", () => {
    alert("click");
    carregarDados();
  });
});
