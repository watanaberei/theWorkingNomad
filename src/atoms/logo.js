const svgUrl = "../../public/images/brand/theWorkingNomad_logo_horizontal.svg";
export function addSvgToPage() {
  const container = document.getElementById("svg-container");
  container.innerHTML = `<object type="image/svg+xml" data="${svgUrl}"></object>`;
}






// function addSvgToPage() {
//     const container = document.getElementById("svg-container");
//     container.innerHTML = '<object type="image/svg+xml" data="theWorkingNomad_logo_horizontal.svg"></object>';
//   }
  
//   window.onload = addSvgToPage;
  


// function addSvgToPage() {
//     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.setAttribute("width", "200");
//     svg.setAttribute("height", "200");
//     svg.setAttribute("viewBox", "0 0 100 100");
  
//     const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//     rect.setAttribute("x", "10");
//     rect.setAttribute("y", "10");
//     rect.setAttribute("width", "80");
//     rect.setAttribute("height", "80");
//     rect.setAttribute("fill", "red");
  
//     svg.appendChild(rect);
  
//     const container = document.getElementById("svg-container");
//     container.appendChild(svg);
//   }
  
//   window.onload = addSvgToPage;
  