// Creacion de server con express


const express = require('express')
const app = express()

const hbs = require('hbs');
//No necesitamos importar las funciones porque al hacer el require ya quedan registradas en el hbs
require('./hbs/helpers');




//Lo que esté en el root va a ser de dominio publico
app.use(express.static(__dirname + '/public'));

//Seteamos el directorio en el que van a estar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Esta linea nos sirve para usar hbs, instal con npm
//Express HBS engine
app.set('view engine', 'hbs');

//Usamos el objeto global process, si lo corremos local el puerto lo dejamos en 3000
//y sino el valor del puerto va a estar en process.env.PORT
const port = process.env.PORT || 3000;


//Escuchando en directorio raíz
app.get('/', (req, res) => {

    //res.send('Hello World');

    //Muestra de peticion que devuelve un JSON
    // let obj = {
    //     nombre: 'Dario',
    //     apellido: 'Scrivano',
    //     edad: 32,
    //     url: req.url
    // }

    // res.send(obj);

    //Al haber instalado hbs podemos renderizar la pag y devolverla
    //Con hbs podemos generar contenido dinamico, ej envío un objeto con JSON y uso sus valores en el home.hbs
    res.render('home', {
        name: 'Dario martin',
        year: new Date().getFullYear()
    });
});


app.get('/about', (req, res) => {
    res.render('about', {
        year: new Date().getFullYear()
    });
});


//Ponemos otra url de escucha en el server, es solo ej de que puede haber más de una
// app.get('/data', (req, res) => {

//     res.send('Hello World');
// });



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})