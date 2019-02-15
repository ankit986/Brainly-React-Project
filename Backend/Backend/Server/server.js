const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')


const mysql = knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'Amit',
    database : 'brainly'
  }
});

const app = express();

const Signin = require('./SigninServer.js');
const Register = require('./RegisterServer.js');
const Profile = require('./ProfileServer.js');
const Image = require('./ImageServer.js');

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req, res) => {
})

app.post('/signin', (req, res) => {Signin.handleSignin(req, res, mysql, bcrypt)})
app.post('/register', (req, res) => {Register.handleRegister(req, res, mysql, bcrypt)})
app.get('/profile/:id',(req, res) => {Profile.handleProfile(req, res, mysql, bcrypt)})
app.put('/image', (req, res) => {Image.handleImage(req, res, mysql, bcrypt)})

app.listen(3000);