var contenedor = document.getElementById("contenedor");
var imagenes = document.createElement("div");
imagenes.setAttribute("id","contenedorImage");
var h2 = document.createElement("h2")
h2.textContent="Nuestras Coders";

var imagen1 = document.createElement("div");
imagen1.setAttribute("class","imagenUnd");

var imag1 = document.createElement("img");
imag1.setAttribute("src","assets/image/andrea-cabrera.jpg");
imag1.setAttribute("class","imagen");
var span1 = document.createElement("span");
span1.setAttribute("class","nombre");
span1.textContent = "Andrea Cabrera";
imagen1.appendChild(imag1);
imagen1.appendChild(span1);

imagenes.appendChild(h2);
imagenes.appendChild(imagen1);
contenedor.appendChild(imagenes);
