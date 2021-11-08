const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/connection');
const Project = require('./models/Project');

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
app.get('/', async function (req, res) {
    // Get data from DB
    const featured = await Project.findAll({
        where: {
            featured: true
        }
    });
    const all =  await Project.findAll();
    console.log(featured, all);

    // Parse data into simple JSON
    const featuredJSON = featured.map(project => project.get({ plain: true }));
    const allJSON = featured.map(project => project.get({ plain: true }));
    
    // Render the page
    res.render('home', { featured: featuredJSON, projects: allJSON });
});

// Initialize DB, then start the server
sequelize.sync({ force: false }).then(() =>{
    app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}.`));
});