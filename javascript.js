function createPixels(size) {
    let container = document.querySelector(".container");
    for (currentPixel = 0; currentPixel < size * size; currentPixel++) {
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      pixel.addEventListener("pointerover", addRgb);
      container.appendChild(pixel);
    }
  }
  
  createPixels(16);
  
  function addRgb(e) {
    e.target.style = `background-color: red`;
    

    
  }
  
  function resetContainer() {
    let allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach(pixel => pixel.style=`background-color: white`);
  }