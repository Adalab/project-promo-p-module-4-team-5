// Fichero src/index.js

// Importamos los tres módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

// Creamos el servidor
const server = express();

server.use(cors());
server.use(
  express.json({
    limit: "10mb",
  })
);

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//Configurar el servidor de estáticos

// const staticServerPath = './src/public-react';
// server.use(express.static(staticServerPath));

//Guardar temporalmente el listado de tarjetas
const savedCards = [];

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  if (
    req.body.palette !== "" &&
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.email !== "" &&
    req.body.phone !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== "" &&
    req.body.photo !== ""
  ) {
    //Crear la tarjeta que es un objeto
    const newCard = {
      ...req.body,
      id: uuidv4(),
    };
    //Añadir al listado de tarjetas
    savedCards.push(newCard);

    //Creo la respuesta
    const responseSuccess = {
      success: true,
      cardURL: `https://localhost:4000/card/${newCard.id}`,
    };
    //Envio de respuesta
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: "Faltan parámetros",
    };
    res.json(responseError);
  }
});

server.get("/card/id", (req, res) => {
  res.json("Tarjeta creada correctamente");
});
