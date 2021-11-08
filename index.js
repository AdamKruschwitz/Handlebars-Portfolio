const express = require('express');
const exphbs  = require('express-handlebars');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Set view engine for express
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set routes
app.get('/', function (req, res) {
    res.render('home');
});

// Initialize DB, then start the server
sequelize.sync({ force: true }).then(() =>{
    app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}.`));
});