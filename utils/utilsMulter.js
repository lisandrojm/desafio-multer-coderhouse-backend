const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/img'); // Ruta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1e9); // Genera un prefijo único con el timestamp
    cb(null, uniquePrefix + '-' + file.originalname); // Nombre del archivo guardado
  },
});

const upload = multer({ storage });

module.exports = upload;
