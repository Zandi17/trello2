var id = 1
window.addEventListener("load", function(){
	var boxContenedor = document.getElementById("boxContenedor");
	var contenedor = document.getElementById("contenedor");
	var lista = document.getElementById("lista");
	var formulario = document.getElementById("formulario");
	var input = document.getElementById("input");
	var btnGuardar = document.getElementById("boton");

 	lista.addEventListener("click",function(){
		lista.classList.add("ocultar");
		formulario.classList.remove("ocultar");
		input.focus();
	});
  btnGuardar.addEventListener("click", function(e){
    e.preventDefault();
    formulario.classList.add("ocultar");
  	lista.classList.remove("ocultar");
     // lista.classList.add("aparece");
    contenedor.classList.add("inicio");
  	var titulo = document.createElement("span");
  	var enlace = document.createElement("a");
  	var contenido = input.value;

  	titulo.setAttribute("id","titulo");
  		
  	titulo.textContent = contenido;
  	titulo.classList.add("fondo");
  	enlace.classList.add("d-blk");
  	enlace.textContent = "Añadir una Tarjeta";
  	input.value = "";

    enlace.setAttribute("href", "#");

	  lista.parentElement.appendChild(titulo);
	  lista.parentElement.appendChild(enlace);
  
	  lista.setAttribute("id", "tarjeta");
    
   	var contenCard = document.createElement("div");
    enlace.parentElement.insertBefore(contenCard,enlace.parentElement.children[3]);
	  contenCard.setAttribute("id","contenCard");

    contenCard.addEventListener("drop", drop);
    contenCard.addEventListener("dragover", mover);

    function mover(e){
      e.preventDefault();
    } 
    function drop(e){
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      e.target.appendChild(document.getElementById(data));
    }

    nuevoContenedor();

    enlace.addEventListener("click", function(){
      enlace.classList.add("ocultar");

      var agregarForm = document.createElement("form");
      var textArea = document.createElement("textarea");
      var boton = document.createElement("button");
      
      contenCard.appendChild(agregarForm);
      agregarForm.appendChild(textArea);
      agregarForm.appendChild(boton);
      
      agregarForm.setAttribute("class","agregarForm");
      textArea.setAttribute("class", "textArea");
      boton.setAttribute("class", "boton");
      textArea.focus();  
      boton.textContent = "Guardar";

      boton.addEventListener("click", function(e){
        e.preventDefault();
        agregarForm.classList.add("ocultar");

        var tarjeta = document.createElement("span");
        tarjeta.textContent = textArea.value;
       	contenCard.appendChild(tarjeta);
        tarjeta.setAttribute("class", "tarjeta");
        tarjeta.setAttribute("draggable","true");
        tarjeta.setAttribute("id",id++);

        tarjeta.addEventListener("dragstart", arrastrar);

        function arrastrar(e){
          e.dataTransfer.setData("text",e.target.id);
        }

        enlace.classList.remove("ocultar");

      });
    });
  });
  function nuevoContenedor(){
    var inicio = document.createElement("div");
    boxContenedor.appendChild(inicio);
    inicio.setAttribute("class", "inicio");
    inicio.appendChild(lista);
    inicio.appendChild(formulario);
    // lista.classList.add("aparece");
    lista.classList.remove("ocultar");
  }
 
}); 

  


