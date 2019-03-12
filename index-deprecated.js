// Creamos un webserver

//No es necesario instalar http porque ya viene con node
const http = require('http');


//Metodo para crear un servido, debajo especificamos en que puerto va a escuchar el server
http.createServer((req, res) => {

        //por defecto nos devuelve una pag web, para especificar otro tipo de contenido, usamos la siguiente linea
        //Ej: respondemos con un json
        res.writeHead(200, { 'Content-Type': 'application/json' });

        //req.url nos devuelve la url que realizo la peticion
        let obj = {
            nombre: 'Dario',
            apellido: 'Scrivano',
            edad: 32,
            url: req.url
        }

        res.write(JSON.stringify(obj));

        //res.write('Hola Mundo');
        //Para que se ejecute la respuesta es necesario la siguiente linea
        res.end();
    })
    .listen(3000);

console.log('Escuchando en el puerto 8080');