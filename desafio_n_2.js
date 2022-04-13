const fs = require ("fs")

    class Contenedor {
    constructor(nombre) {
        this.nombre = nombre,
        this.productos = []
    }

    save(obj){
        this.productos.push(obj)
        for(var i = 1 ; i <= this.productos.length; i++) {
            obj['ID'] = i
        }
        fs.writeFile("./" + this.nombre, JSON.stringify(this.productos), "utf-8", (err) => {
            if(err) {
                console.log("Error al escribir el archivo")
            } else {
                console.log("Contenido agregado")
            }
        })
    }

    getById() {
        return new Promise ((resolve, reject) => {
            fs.readFile("./productos.json", "utf-8", (err, data) => {
                if(err) {
                    res.send({message: "Error en la consulta"})
                } else {
                    let arrNew = JSON.parse(data)
                    let randomProduct = arrNew[Math.floor(Math.random() * arrNew.length)]
                    resolve (randomProduct)
                }
            })
        })
    }

    getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile("./" + this.nombre, "utf-8", (err, data) => {
                if(!err) {
                    resolve(data)
                }
            })
        })

    }
    
    deleteById(id) {
        fs.readFile("./"+this.nombre, "utf-8", (err, data) => {
            if(err) {
                console.log("Error")
            } else {
                let dataNueva = JSON.parse(data)
                let nuevoArreglo = dataNueva.filter(x =>{
                    return x.ID !== id
                })
                console.log(nuevoArreglo)
                fs.writeFile("./" +this.nombre, JSON.stringify(nuevoArreglo), "utf-8", (err) => {
                    if(err) {
                        console.log("Error")
                    } else {
                        console.log("Objeto eliminado")
                    }
                })
            }
        })
    }

    deleteAll() {
        fs.writeFile("./" + this.nombre, "", "utf-8", (err) => {
            if(err) {
                console.log("Error al borrar el contenido del archivo")
            } else {
                console.log("Contenido removido")
            }
        })
    }
}

let documento = new Contenedor("productos.json")

module.exports = Contenedor


/* documento.save({
    title: "Yamaha-P45",
    price: 130000,
    thumbnail: "http://fotoYamaha-p45...",
})
documento.save({
    title: "Rolland-FP30",
    price: 180000,
    thumbnail: "http://fotoRolland-fp30...",
})
documento.save({
    title: "Yamaha-P125",
    price: 130000,
    thumbnail: "http://fotoYamaha-p125...",
})
documento.save({
    title: "Rolland-FP30",
    price: 180000,
    thumbnail: "http://fotoRolland-fp30..."
}) */

//documento.getAll()

/* documento.getById(2) */

/* documento.deleteById(1) */

/* documento.deleteAll() */








