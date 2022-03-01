
let precioTotalVenta = 0;
let cantidadComprada = 0 ;

function Producto (nombreProducto, precioProducto, stockProducto, descuentoProducto){
    this.nombre = nombreProducto ;
    this.precio = parseFloat(precioProducto) ;
    this.stock = stockProducto ;
    this.descuento = descuentoProducto ;
    this.venta = function (cantidadComprada){
        this.stock-= cantidadComprada;
        console.log ("El stock de  " + this.nombre  + " " + "es igual a: " + this.stock  )
    }

}

const productoA = new Producto("calzas", 30, 10, 0.9)
const productoB = new Producto("tops", 20, 10, 0.9)
const productoC = new Producto("conjuntos deportivos", 50, 15, 0.95)

const productos =[productoA, productoB, productoC]

function stockInsuficiente(stock) {
    alert("No tenemos stock suficiente de ese producto, puedes comprar " + stock + " unidades")
}

function calcularPrecio (precio, descuento){
    precioTotalVenta += parseFloat(cantidadComprada * precio * descuento);
}

function compra (producto) {

    cantidadComprada = parseInt(prompt("Ingrese la cantidad de "+ producto.nombre + " que desea comprar")) ;

        if (cantidadComprada <= producto.stock){

            producto.venta(cantidadComprada)

            if (cantidadComprada > 3){
                calcularPrecio(producto.precio, producto.descuento)
            }
            else{
                calcularPrecio(producto.precio, 1)
            }
        }
        else{
            stockInsuficiente(producto.stock)
            }
}

alert( "Estos son nuestros productos: \n1.Calzas \n2.Tops \n3.Conjuntos deportivos ")

let cantidadProductosComprados = parseInt(prompt("Ingrese la cantidad de productos distintos que desea comprar"))

for( let i = 0; i < cantidadProductosComprados; i++){

    let nombreCompra = prompt("ingrese el nombre de producto que desea comprar: " + "\n1." + productoA.nombre + "\n2." + productoB.nombre + "\n3. " + productoC.nombre);

    let productoBuscado = productos.find ( x => x.nombre == nombreCompra.toLowerCase())

    if(productoBuscado){
        compra(productoBuscado)
    }
    else{
        alert("No tenemos ese producto")
    }
    }

alert("El precio de su compra es de: $ " + precioTotalVenta + "\nMuchas gracias! ")



// AVISO PARA COMPRAR MAS PRODUCTOS

let pocoStock = productos.filter(producto => producto.stock <= 3 )

console.log("comprar mas productos: ")
console.log(pocoStock)