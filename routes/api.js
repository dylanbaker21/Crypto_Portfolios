var mongoose = require('mongoose')
var express = require('express');

// users schema
var userSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
})

var User = module.exports = mongoose.model('User', userSchema)

// get users
module.exports.getUsers = function(callback, limit){
  User.find(callback).limit(limit)
}