const express = require('express');
const app = express();

// Middleware crucial para que Express pueda entender formatos JSON en el body
app.use(express.json());

// Ruta para el registro general de usuarios
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// Ruta para simular reportes de incidencias comunitarias
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// El servidor escucha peticiones en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});