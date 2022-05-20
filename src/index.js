// Fichero src/index.js

// Importamos los tres módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
// importar el módulo better-sqlite3
const Database = require('better-sqlite3');
const { v4: uuidv4 } = require('uuid');

// Creamos el servidor
const server = express();

server.use(cors());
server.use(
  express.json({
    limit: '10mb',
  })
);

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// indicar qué base de datos vamos a usar con la ruta relativa a la raíz del proyecto
const db = new Database('./src/db/cards.db', {
  // con verbose le decimos que muestre en la consola todas las queries que se ejecuten
  verbose: console.log,
  // así podemos comprobar qué queries estamos haciendo en todo momento
});

//Configurar el servidor de estáticos
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));

//Configurar el servidor de estáticos de los estilos
const staticServerStyles = './src/public-css';
server.use(express.static(staticServerStyles));

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  if (
    req.body.palette !== '' &&
    req.body.name !== '' &&
    req.body.job !== '' &&
    req.body.email !== '' &&
    req.body.phone !== '' &&
    req.body.linkedin !== '' &&
    req.body.github !== '' &&
    req.body.photo !== ''
  ) {
    //Crear la tarjeta que es un objeto
    const newCard = {
      ...req.body,
      uuid: uuidv4(),
    };

    //Insertar la tarjeta en la bd

    const query = db.prepare(
      'INSERT INTO card(palette,name,job,email,phone,linkedin,github,photo,uuid) VALUES (?,?,?,?,?,?,?,?,?)'
    );

    const result = query.run(
      newCard.palette,
      newCard.name,
      newCard.job,
      newCard.email,
      newCard.phone,
      newCard.linkedin,
      newCard.github,
      newCard.photo,
      newCard.uuid
    );

    console.log(result);

    //Creo la respuesta
    const responseSuccess = {
      success: true,
      cardURL: `https://awesome-cards-teamfive.herokuapp.com/card/${newCard.uuid}`,
    };
    //Envio de respuesta
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: 'Faltan parámetros',
    };
    res.json(responseError);
  }
});

server.get('/card/:id', (req, res) => {
  const query = db.prepare('SELECT * FROM card WHERE uuid=?');
  const userCard = query.get(req.params.id);

  // res.json("Tarjeta creada correctamente");

  res.render('card', userCard);
});
