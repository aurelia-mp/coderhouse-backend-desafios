class Usuario {
    constructor(nombre,apellido,libros = [ ],mascotas = [ ]){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros= libros;
        this.mascotas=mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascota(){
        return this.mascotas.length
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
    }

    getBookNames(){
        const bookNames = []
        this.libros.forEach(libro => {
            bookNames.push(libro.nombre)
        });
        return bookNames
    }
}

const usuario = new Usuario(
    'Juan', 
    'Pérez', 
    [   {
            nombre: "El Señor de los Anillos",
            autor: "Tolkien"
        },
        {
            nombre: "La Guerra y la Paz",
            autor: "Tolstoi"   
        },
        {
            nombre: "Le Père Goriot",
            autor: "Balzac"
        }
    ],
    ['loro', 'iguana']
)

console.log("Nombre completo: " + usuario.getFullName())
console.log("Cantidad de mascotas: " + usuario.countMascota())
usuario.addBook("Ana Karenina", "Tolstoi")
console.log("Libros leídos: " + usuario.getBookNames())
usuario.addMascota('gato')
console.log("Nueva cantidad de mascotas: " + usuario.countMascota())