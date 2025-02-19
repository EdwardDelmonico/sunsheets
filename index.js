const express = require('express');
const app = express();
const ejs = require('ejs');
const ejsMate = require('ejs-mate')
const path = require('path');
const { normalize } = require('path/posix');
const mongoose = require('mongoose')
const Vislae = require('./models/character/vislae')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

const dbUrl = 'mongodb://127.0.0.1:27017/sunsheets';
mongoose.set('strictQuery', false);
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', e => {
    console.log(e);
})

app.get('/', async (req, res, next) => {
    const vislaes = await Vislae.find({});
    res.render('load', { vislaes })
})

app.get('/create', async (req, res, next) => {
    res.render('create')
})

app.get('/character/:id', async (req, res, next) => {
    const { id } = req.params;
    const vislae = await Vislae.findById(id);
    res.render('sheet', { vislae })
})

app.listen('3000', () => {
    console.log('nice');
})