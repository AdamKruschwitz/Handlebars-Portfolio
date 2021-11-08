const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
        },
        "gif-name": {
            type: DataTypes.STRING,
        },
        "gif-alt": {
            type: DataTypes.STRING,
        },
        "iamge-name": {
            type: DataTypes.STRING,
        },
        "image-alt": {
            type: DataTypes.STRING,
        },
        "short-description": {
            type: DataTypes.STRING,
        },
        "long-description": {
            type: DataTypes.STRING,
        },
        technologies: {
            type: DataTypes.STRING,
        },
        "deployed-link": {
            type: DataTypes.STRING,
        },
        "github-link": {
            type: DataTypes.STRING,
        },
        featured: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'
    }
);

module.exports = Project;