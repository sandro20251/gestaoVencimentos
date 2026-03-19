const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    'gestaovencimentos', 'root', 'Sandro@2026Work', {
    host: 'localhost',
    dialect: 'mysql'
}
)

module.exports = sequelize;