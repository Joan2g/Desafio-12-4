const express = require ("express")

const app = express()

const Contenedor = require("./desafio_n_2")

let nuevoCont = new Contenedor("productos.json")

/* nuevoCont.save({
    title: "Casio-Privia",
    price: 130000,
    thumbnail: "http://foto-CASIO..."
})

nuevoCont.save({
    title: "Yamaha-P45",
    price: 130000,
    thumbnail: "http://fotoYamaha-p45...",
})
s
nuevoCont.save({
    title: "Rolland-FP30",
    price: 180000,
    thumbnail: "http://fotoRolland-fp30...",
})
nuevoCont.save({
    title: "Yamaha-P125",
    price: 130000,
    thumbnail: "http://fotoYamaha-p125...",
})
nuevoCont.save({
    title: "Rolland-FP30",
    price: 180000,
    thumbnail: "http://fotoRolland-fp30..."
}) */

app.listen(8080, () => {
    console.log("Server is run on port 8080")
}) 

app.get("/productos", async (req, res) => {
    try{
        res.send(await nuevoCont.getAll())
    }catch(err) {
        console.log("Error al leer!!")
    }
})


app.get("/productoRandom", async (req, res) => {
    try{
        res.send(await nuevoCont.getById())
    }catch {
        console.log("Error al leer!!")
    }
    
})






