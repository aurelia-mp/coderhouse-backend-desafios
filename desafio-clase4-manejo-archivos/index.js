const Contenedor = require("./class.js")

const productos = new Contenedor('./productos.txt')

async function ejecutar() {
    let product1 = {
        "title": "Luigi Bosca Malbec",
        "price": 2400,
        "thumbnail": "img/item1.jpeg",
    }

    let product2 = {
        "title": "Luigi Bosca Cabernet",
        "price": 2300,
        "thumbnail": "img/item2.jpeg",
    }

    let product3 = {
        "title": "DV Catena Malbec",
        "price": 4000,
        "thumbnail": "img/item3.jpeg",
    }

    await productos.deleteAll()

    await productos.save(product1)
    await productos.save(product2)
    await productos.save(product3)

    await productos.getAll()
        .then((res) => console.log("Productos cargados: " + res))

    await productos.getById(2)
        .then((res) => console.log("Producto con el id 2: " + res))

    // Prueba con un producto no existente
    await productos.getById(5)
        .then((res) => console.log("Producto con el id 5 (no existente): " + res))

    await productos.deleteById(1)

    await productos.getAll()
        .then((res) => console.log("Productos después de borrar el id 1: " + res))

}

ejecutar()
