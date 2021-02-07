const mongoose = require('mongoose');

// Import the model
const Ad = require('./models/Ad');

// Create sample data
const newAds = [
  {
    title: 'Amplificador',
    description:
      'Vendo este fantástico amplificador vintage de 30w por canal a 8Ω',
    price: 100,
    type: 'Venta',
    img: '/images/amp.jpg',
    tags: ['Electronica', 'Imagen y sonido'],
  }, {
    title: 'Ratón inalámbrico',
    description: 'Apple magic mouse 2 usado en perfectas condiciones',
    price: 50,
    type: 'Venta',
    img: '/images/mouse.jpg',
    tags: ['Electronica', 'Ordenadores'],
  }, {
    title:
      'Mesa de terraza con 4 sillas',
    description:
    'Maravilloso mueble cervecero con respaldo de tectake que le dará un encanto especial a su jardín. Banco y mesa fabricados en madera resistente y entusiasmar con su óptica natural y elegante. Aspecto a destacar: Al contrario de otros muebles cerveceros este en particular tiene un respaldo espectacular. De manera que ofrece mucho más confort y comodidad cuando uno celebra. Llévese hoy a casa este mueble cervecero tan resistente con respaldo de tectake.',
    price: 125,
    type: 'Venta',
    img: '/images/mesa.jpg',
    tags: ['Electronica', 'Ordenadores'],
  }, {
    title: 'iPhone X 256GB',
    description: 'Busco iPhoneX de 256GB libre.',
    price: 350,
    type: 'Compra',
    img: '/images/iPhone.jpeg',
    tags: ['Electronica', 'Moviles'],
  },
];

async function initDatabase() {
  try {
    mongoose.connect('mongodb://localhost/keepads', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear the db everytime
    await mongoose.connection.dropCollection(
        'ads',
        function() {
          console.log('Collection dropped');
        },
    );

    // Add sample data
    Ad.create(newAds).then((result) => {
      console.log('Added', result);
      console.log('Your database has been initializad gracefully');
      process.exit(0);
    }).catch((err) => {
      console.log('Error adding data', err);
    });
  } catch (err) {
    console.log('Error initializing database', err);
  }
}

initDatabase();
