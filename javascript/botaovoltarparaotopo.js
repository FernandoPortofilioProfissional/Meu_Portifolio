window.onscroll = function() {
    const button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Função para rolar suavemente para o topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}