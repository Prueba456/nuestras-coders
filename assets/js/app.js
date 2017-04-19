var contenedor = document.getElementsByClassName("container")[0];
var imagenes = document.createElement("div");
imagenes.setAttribute("id","contenedorImage");
var h2 = document.createElement("h2")
h2.textContent="Nuestras Coders";
var hr = document.createElement("hr");
contenedor.appendChild(h2);
contenedor.appendChild(hr);

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

var imagen2 = document.createElement("div");
imagen2.setAttribute("class","imagenUnd");
var imag2 = document.createElement("img");
imag2.setAttribute("src","assets/image/ariadna-izaguirre.jpg");
imag2.setAttribute("class","imagen");
var span2 = document.createElement("span");
span2.setAttribute("class","nombre");
span2.textContent = "Ariadna Izaguirre";
imagen2.appendChild(imag2);
imagen2.appendChild(span2);

var imagen3 = document.createElement("div");
imagen3.setAttribute("class","imagenUnd");
var imag3 = document.createElement("img");
imag3.setAttribute("src","assets/image/carito-juarez.jpg");
imag3.setAttribute("class","imagen");
var span3 = document.createElement("span");
span3.setAttribute("class","nombre");
span3.textContent = "Carito Juarez";
imagen3.appendChild(imag3);
imagen3.appendChild(span3);

var imagen4 = document.createElement("div");
imagen4.setAttribute("class","imagenUnd");
var imag4 = document.createElement("img");
imag4.setAttribute("src","assets/image/cristy-castro.jpg");
imag4.setAttribute("class","imagen");
var span4 = document.createElement("span");
span4.setAttribute("class","nombre");
span4.textContent = "Cristy Castro";
imagen4.appendChild(imag4);
imagen4.appendChild(span4);

var imagen5 = document.createElement("div");
imagen5.setAttribute("class","imagenUnd");
var imag5 = document.createElement("img");
imag5.setAttribute("src","assets/image/karol-orrillo.jpg");
imag5.setAttribute("class","imagen");
var span5 = document.createElement("span");
span5.setAttribute("class","nombre");
span5.textContent = "Karol Orrillo";
imagen5.appendChild(imag5);
imagen5.appendChild(span5);

var imagen6 = document.createElement("div");
imagen6.setAttribute("class","imagenUnd");
var imag6 = document.createElement("img");
imag6.setAttribute("src","assets/image/paola-ortiz.jpg");
imag6.setAttribute("class","imagen");
var span6 = document.createElement("span");
span6.setAttribute("class","nombre");
span6.textContent = "Paola Ortiz";
imagen6.appendChild(imag6);
imagen6.appendChild(span6);

imagenes.appendChild(imagen1);
imagenes.appendChild(imagen2);
imagenes.appendChild(imagen3);
imagenes.appendChild(imagen4);
imagenes.appendChild(imagen5);
imagenes.appendChild(imagen6);
contenedor.appendChild(imagenes);
