class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
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

console.log(usuario.countMascota())
console.log(usuario.getFullName())
usuario.addBook("Ana Karenina", "Tolstoi")
console.log(usuario.getBookNames())