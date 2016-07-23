var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/inodeCDN");
var db = mongoose.connection;
