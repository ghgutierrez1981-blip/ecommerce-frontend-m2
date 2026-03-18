let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarContador() {
    $("#contador").text(carrito.length);
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

$(".agregar").click(function() {
    let producto = {
        nombre: $(this).data("nombre"),
        precio: parseInt($(this).data("precio"))
    };

    carrito.push(producto);
    guardarCarrito();
    actualizarContador();
});

function mostrarCarrito() {
    let lista = $("#lista-carrito");
    let total = 0;

    lista.empty();

    carrito.forEach(p => {
        lista.append(`<li class="list-group-item">${p.nombre} - $${p.precio}</li>`);
        total += p.precio;
    });

    $("#total").text(total);
}

// Ejecutar al cargar
$(document).ready(function() {
    actualizarContador();
    mostrarCarrito();
});


$("#ir-arriba").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
});