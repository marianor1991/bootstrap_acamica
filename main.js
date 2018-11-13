var productos = ["Gaseosa", "Papel", "Leche", "Jabon", "Carne"];
var lista;

window.onload = function() {
    lista = document.getElementById('lista');
    iniciarLista();
}


function iniciarLista(){
    productos.forEach(producto => {
        agregarElementoLista(producto);
    });  

}

function capturarElemento(){
    var nuevoProducto = document.getElementById("texto").value;
    agregarElementoLista(nuevoProducto);
}

function agregarElementoLista(producto){
    var elementoLista = document.createElement('li');
    elementoLista.textContent = producto;
    elementoLista.className = "list-group-item";
    agregarEvento(elementoLista);
    lista.appendChild(elementoLista);
}

function agregarEvento(elemento){
    elemento.addEventListener("mouseover", function(event){
        if ( !event.target.className.includes("mouse-over")){
            event.target.className += " mouse-over";
        }
    });

    elemento.addEventListener("mouseout", (event) =>{
            var posicion = event.target.className.indexOf("mouse-over");
            if ( posicion >= 0) {
                var primero = event.target.className.substring(0, posicion-1);
                var segundo = event.target.className.substring(posicion + ("mouse-over").length);
                event.target.className =  primero  + segundo;
            }
    })

    elemento.addEventListener("onclick ", function(event){
        var seleccionado = event.target.
    })
}
