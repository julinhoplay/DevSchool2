import initdb from './models/init-models.js'
import Sequelize from 'sequelize';


const sequelize = new Sequelize(
'simulado2',
'root',
'1234', {
host: 'localhost',
dialect: 'mysql',
logging: false
});
const db = initdb(sequelize);
export default db;