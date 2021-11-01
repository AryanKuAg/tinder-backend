import express from 'express'
import mongoose from 'mongoose'

// App config
const app = express()
const port = process.env.PORT || 7000;
const connectionUrl = 'mongodb+srv://admin:QXJtHslccjwuLJp3@cluster0.c9hse.mongodb.net/tinderdb?retryWrites=true&w=majority'

// middleware

// db configs

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//api endpoints
app.get('/', (req, res) => {
    res.status(200).send('Works fine')
})

// listner
app.listen(port, ()=> {
    console.log('The app is up and running on port', port)
})

// name - admin & password - QXJtHslccjwuLJp3