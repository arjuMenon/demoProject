var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products =[
    {
      name : 'ANONA',
      category : 'Supermarket',
      description : 'A Supermarket which is always crowded',
      image :'https://content.jdmagicbox.com/comp/kozhikode/dc/0495px495.x495.090630152919.k7z4dc/catalogue/anona-bakes-and-supermarket-pottammal-jn-kozhikode-cake-shops-8muex.jpg '
    },
    {name : 'ORANGE',
      category : 'Restaurant',
      description : 'A restaurant since 2005 with good quality food',
      image :'https://img.restaurantguru.com/re22-Orange-Restaurant-facade-2022-11.jpg'

    },
    {
    name : 'MY-G',
      category : 'Phone and Accessories',
      description : 'A vast collection of smart phones and acessories',
      image :'https://cdn2.advanceinfotech.org/kozhikode.directory/1200x675/business/161/48742015196-9970e05809-b-1632466273-1636605721.webp'
},
{
  name : 'NATURALS',
      category : 'ICE CREAM PARLOUR',
      description : 'Ice cream made with natural fruits',
      image :'https://content.jdmagicbox.com/comp/kozhikode/t7/0495px495.x495.160504162001.k5t7/catalogue/natural-icecreams-kozhikode-0uvuvdpxlo.jpg'

}
]
  res.render('index', { products,admin:true });
});

module.exports = router;
