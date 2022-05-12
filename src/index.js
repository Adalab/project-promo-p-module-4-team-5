// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos

server.post("/card", (req, res) => {
  const responseSuccess = {
    success: true,
    cardURL:
      "https://awesome-profile-cards.herokuapp.com/card/93991652356096514",
  };

  const responseError = {
    success: false,
    error: "Faltan parámetros",
  };

  res.json(responseSuccess);
});

server.get("/card/id", (req, res) => {
  res.json("Tarjeta creada correctamente");
});
