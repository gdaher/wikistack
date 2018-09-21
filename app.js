const morgan = require('morgan');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const html = require('./views/main');
const { db,Page,User } = require('./models');//destructuring assignment. 

app.use(morgan('dev'));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res, next) => {
    res.send(html());
})

db.authenticate().
then(() => {
  console.log('connected to the database');
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
