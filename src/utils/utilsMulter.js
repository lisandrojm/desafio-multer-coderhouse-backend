/* Importamos el paquete 'multer' para manejar la carga de archivos */
const multer = require('multer');

/* Configuramos el almacenamiento de archivos */
const storage = multer.diskStorage({
  /* Ruta donde se guardarán las imágenes */
  destination: (req, file, cb) => {
    cb(null, './src/uploads/productos');
  },
  /* Generamos un prefijo único para el nombre del archivo y lo combinamos con el nombre original del archivo */
  filename: (req, file, cb) => {
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniquePrefix + '-' + file.originalname);
  },
});

/* Creamos una instancia de 'multer' con la configuración de almacenamiento */
const upload = multer({ storage });

/* Exportamos la instancia de 'multer' para su uso en otros archivos */
module.exports = upload;
