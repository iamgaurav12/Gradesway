import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('quizdb', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql', 
});

export default sequelize;
