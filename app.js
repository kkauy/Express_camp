const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.send('Hello Yelp Camp')
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})