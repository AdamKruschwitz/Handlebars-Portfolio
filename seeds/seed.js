const sequelize = require('../config/connection');
const Project = require('../models/Project');

const projectData = require('./project.json');

async function seedDatabase() {
    await sequelize.sync({ force: true });

    await Project.bulkCreate(projectData);

    process.exit(0);
}

seedDatabase();