const fs = require('fs').promises

class Contenedor {
    constructor(path){
        this.path = path
    }

    async save(objeto){
        try{
            const leer = await fs.readFile(this.path, 'utf-8')
            const dataFormateada = JSON.parse(leer)
            let id = 1
            dataFormateada.length != 0 && (id=dataFormateada[dataFormateada.length-1].id + 1)
            dataFormateada.push({...objeto, id: id})
            await fs.writeFile(this.path, JSON.stringify(dataFormateada, null, 2))
            return id
        }
        catch(err){
            console.log(err)
        }
    }

    async getById(number){
        try{
            const leer = await fs.readFile(this.path, 'utf-8')
            const dataFormateada = JSON.parse(leer)
            const productoFiltrado = dataFormateada.filter((prod) => prod.id===number)
            return (productoFiltrado.length !== 0) ? JSON.stringify(productoFiltrado, null, 2) 
                    : null
        }
        catch(err){console.log(err)}
    }

    async getAll(){
        try{
            const leer = await fs.readFile(this.path, 'utf-8')
            return leer
        }
        catch(error){
            console.log("error al leer los productos")
        }

    }
    
    async deleteById(number){
        try{
            const leer = await fs.readFile(this.path, 'utf-8')
            const dataFormateada = JSON.parse(leer)
            const productosFiltrados = dataFormateada.filter((prod) => prod.id !== number)
            await fs.writeFile(this.path, JSON.stringify(productosFiltrados, null, 2))
            return  
        }
        catch(err){console.log(err)}
    }

    async deleteAll(){
        try{
            await fs.writeFile(this.path, JSON.stringify([], null, 'utf-8'), null)
            return
        }
        catch(error){
            console.log('Error al borrar los productos')
        }
    }
}

module.exports=Contenedor