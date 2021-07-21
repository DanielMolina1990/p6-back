//suministrar los datos
let productos =[{name: "papitas"}, {name: "agua"}];

//Importamos el paquete
const express = require('express');

//Generamos la aplicacion de express
const app = express();
 
//configurasion 
app.use(express.json());

//Configuramos el metodo
const port = 3000;

//Definicion de rutas o enpoints (mtodo, URI, funvion)

app.get('/productos', (req, res) => {
  res.send(productos)
});

app.post("/productos", (req, res) => {
    console.log(req.body);
    const nombreProducto = req.body.name;
    productos.push(nuevoProducto);
    res.send(nuevoProducto);
});

app.delete("/productos", (req, res) => {
    console.log(req.body);
    const nombreProducto = req.body.name;
    productos = productos.filter((producto) => producto.name !== nombreProducto);
    res.send(productos);
});

app.put("/productos/ :name", (res, req) =>{
    console.log(req.body);
    console.log(req.params);
    const actualizacion = req.body;
    const nombreProducto = req.params.name;
    const posicionProducto = productos.findIndex( (producto) => productos.name === nombreDeProducto);
    productos[posicionProducto] = actualizacion;
    res.send(productos[posicionProducto]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})