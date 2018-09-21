const morgan = require('morgan');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const html = require('./views/main');
const { db,Page,User } = require('./models');//destructuring assignment.
const wikiRouter = require('./router/wikiRouter');
const userRouter = require('./router/userRouter');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);
app.use('/wiki', userRouter);


app.get('/', (req, res, next) => {
    res.send(html());
})




const PORT = 3000;
const init = async() => {
  await db.sync();

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

}

init();
