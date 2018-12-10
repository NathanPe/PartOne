# ProvaThevelops-PartOne
Part one of Thevelops' internship entrance test.

In this part, you'll find a single mongoose database named 'userDB'.
This database store a list of users with the following format :

{  
    "_id": "5c04405c3dfb571890402126",  
    "email": "karla.fagundes@gmail.com",  
    "first_name": "Karla",  
    “last_name: “Fagundes”,  
    "personal_phone": "(11)97169-6297"  
}  

Please note that:
  - The phone number is optional.
  - The format of the phone_number is (XX)YYYYY-YYYY  where X∈[1-9] and Y∈[0-9]
  - The names can only contain a-z and A-Z characters
  - The mail must be a valid one (min 2 domains)



## Getting Started

1- Download the folder "PartOne".  
2- Run your MongoDB server (mongod.exe or '\<path-To-MongoDB-Install-Folder>mongod' in the command prompt).  
3- Run the node server ('\<path-To-PartOne-Folder>npm run start' in the command prompt).  
4- Open Postman and access the node server throught : http://localhost:3000/users/  
  
  
The API has the following routes:
  - GET​ /users – return an array of JSON with all the users in the database.  
  - POST ​/users – create a new user.  
  - GET ​/users/id – return a specific user.  
  - PUT ​/users/id – update a specific user.  
  - DELETE ​/users/id – remove a specific user.  



### Prerequisites

Before using, you will need the following :  
- **Softwares**

  * [Nodejs](https://nodejs.org/en/)
is an asynchronous event driven JavaScript runtime and designed to build scalable network applications.

  * [MongoDB](https://www.mongodb.com/download-center/community)
is a documents database that stores data in JSON-like documents

  * [Postman](https://www.getpostman.com/apps)
runs requests, tests & debugs, creates automated tests, and mock.  

- **Dependencies**

  * [Joi](https://github.com/hapijs/joi#introduction)
  is an object schema description language and validator for JavaScript objects.
  
    
  * [Joigoose](https://github.com/yoitsro/joigoose#joigoose)
  allows to convert Joi objects model into Mongoose ones
   
    
  * [Faker](https://github.com/marak/Faker.js/#fakerjs---generate-massive-amounts-of-fake-data-in-the-browser-and-nodejs)
  generates massive amounts of fake data in Node.js
    
  To run the API, don't forget to install this dependecies before :
    ```npm install```




## Running the tests

When lauching the Nodejs server, 50 test users are created.
You can change the amount in the server.js file to line 51.  
As you could have seen in Getting Started (4), the default local port is 3000. You can change it to line 3 of server.js file.

The tests should be done throught Postman.


## Acknowledgments

* [Build Node.js RESTful APIs in 10 Minutes](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)

