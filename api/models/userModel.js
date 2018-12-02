
'use strict';
const joi = require('joi');
const mongoose = require('mongoose');
const joigoose = require('joigoose')(mongoose);//module that convert a Joi model into a Mongoose one


const joiUserSchema = joi.object().keys({
  email: joi.string().email({ minDomainAtoms: 2 }).required()
        .error(errors => {return {message: "Real mail adress is required"};}),
  first_name: joi.string().regex(/^[A-Za-z]+$/).required()
        .error(errors => {return {message: "Only a-z and A-Z are authorized for names"};}),
  last_name: joi.string().regex(/^[A-Za-z]+$/).required()
        .error(errors => {return {message: "Only a-z and A-Z are authorized for names"};}),
  personal_phone: joi.string().trim().regex(/^\(\d{2}\)\d{5}-\d{4}$/)
        .error(errors => {return {message: "Phone Number must be at this format : (12)12345-1234"};})
});


const mongooseUserSchema = new mongoose.Schema(joigoose.convert(joiUserSchema),{versionKey: false});
module.exports = mongoose.model('Users', mongooseUserSchema);