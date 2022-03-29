function createPixels(size) {
    let container = document.querySelector(".container");
    for (i = 0; i < size * size; i++) {
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      pixel.addEventListener("pointermove", pintar);
      container.appendChild(pixel);
    }
  }
  
  createPixels(16);
  
  function pintar(e) {
    e.target.style = `background-color: red`;
    

    
  }
  
  function resetContainer() {
    let allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach(pixel => pixel.style=`background-color: white`);
  }