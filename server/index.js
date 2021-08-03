const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const config = require('./config/key')
const { Coffee } = require('./models/Coffee')

// body parser 처리 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connect...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/coffee/list', (req, res) => {
    const categories = req.query.categories
    let params = {}
    if(categories) {
        params = {
            categories
        }
    }

    Coffee.find(params, (err, coffees) => {
        if(err) return res.json({success: false, err})
        res.json({success: true, coffees})
    })
})

app.post('/api/coffee/register', (req, res) => {
    const coffee = new Coffee(req.body);

    coffee.save((err, coffee) => {
        if(err) return res.json({success: false, err})

        res.json({success: true})
    })
})

app.get('/api/coffee/update', (req, res) => {
    //console.log(req.query)
    Coffee.findOneAndUpdate({_id: req.query.id}, { calories: req.query.calories, categories: req.query.categories, image: req.query.image }, (err, coffee) => {
        if(err) return res.json({success: false, err})
        res.json({success: true})
    })
})

app.post('/api/coffee/update-image', (req, res) => {
    //console.log(req.query)
    Coffee.findOneAndUpdate({_id: req.body.id}, { image: req.body.image }, (err, coffee) => {
        if(err) return res.json({success: false, err})
        res.json({success: true})
    })
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})