const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'), //create model Loading
  bodyParser = require('body-parser');


//mongoose instance connection url
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/userDB');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


const routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route


//Bad way : error 404
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});



app.listen(port);

console.log('user RESTful API server started on: ' + port);



//Function that generate a random brasilian phone number (format different from faker.phone.phoneNumber())
function randomBrazilianPhone(){
	let phoneNumber = '('
                    + (Math.floor(Math.random() * 9) + 1) //[1-9]
                    + (Math.floor(Math.random() * 9) + 1)
                    + ')';
  for (let i=0; i<9; i++){
    if (i===5) {phoneNumber += '-';}
    phoneNumber += Math.floor(Math.random() * 10);//[0-9]
  }
  return phoneNumber; //(12)12345-1234 format
}

//Generate 'amountFU' fake users with the faker tool
const request = require('request');
const faker = require('faker');
const amountFU = 50;

for(let i=0; i<amountFU; i++){
  request.post(
    'http://localhost:3000/users/',
    { json: { email: faker.internet.email(),
              first_name: faker.name.firstName(),
              last_name: faker.name.lastName(),
              personal_phone: randomBrazilianPhone()
            }
    }
  )
}