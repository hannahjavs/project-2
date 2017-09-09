const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Avocado = require('../models/food');

Avocado.collection.drop();

Avocado
  .create([{
    name: 'Nutty Smashed Avocado',
    ingredients: 'Italy',
    method: 'Mash the avocado with a fork',
    tastingNotes: 'Gorgonzola is traditionally a rich creamy food, but the blue-green ripples add a sharp spicy flavor that provides an excellent contrast to its richness. The taste ranges from mild to sharp, depending on age.',
    image: 'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2016/06/10/14/falafels-avocado-tahini-dip-middle-eastern-vegetarian-cookbook.jpg'
  },{
    name: 'Baked Eggy Avocado',
    ingredients: 'Eggs',
    method: 'Bake the avocado in the oven',
    tastingNotes: 'If youve never tried a baked avocado now is your chance!',
    image: 'https://downshiftology.com/wp-content/uploads/2016/02/baked-eggs-in-avocado-6.jpg'
  },{
    name: 'Spicy Avocado Dip',
    ingredients: 'Chillis',
    method: 'Add chillis!',
    tastingNotes: 'Creamy spicy metabolism booster!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7Ad-foiJw8ivN7iuy-ynj6dqAwVLlxLhpTyVsaLxyiYbiCGP'
  },{
    name: 'Chocolate Avocado Pudding',
    ingredients: 'Cacao nibs, honey',
    method: 'Blend the avocado and ...',
    tastingNotes: 'Healthier alternative to just a normal chocolate pudding desert',
    image: 'http://cdn-maf2.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-chocolate-avocado-pudding-protein-whey.jpg?itok=2AYQPoYN'
  }])
  .then(avocado => console.log(`${avocado.length} avocados created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
