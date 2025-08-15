document.addEventListener("DOMContentLoaded", () => {
    const slide = document.querySelector(".certificates-slide");
    const items = slide.querySelectorAll("a img");
    let totalWidth = 0;
  
    // Calcula a largura total do conteúdo (incluindo margens)
    items.forEach((item) => {
      const style = window.getComputedStyle(item);
      const itemWidth = item.offsetWidth; // Largura do elemento
      const marginLeft = parseFloat(style.marginLeft); // Margem esquerda
      const marginRight = parseFloat(style.marginRight); // Margem direita
  
      totalWidth += itemWidth + marginLeft + marginRight; // Soma largura + margens
    });
  
    // Obtém a largura visível do container
    const containerWidth = slide.offsetWidth;
  
    // Calcula a porcentagem de deslocamento
    const translatePercentage = (totalWidth / containerWidth) * 100;
  
    console.log(`Porcentagem de deslocamento: ${translatePercentage}%`);
  });