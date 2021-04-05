import { Sequelize } from 'sequelize';
import config from '../config/config';

const env = process.env.NODE_ENV || 'development';
const { database, username, password, dialect, port, host } = config[env];
const sequelize = new Sequelize(database, username, password, {
  dialect,
  host,
  port,
});

export default sequelize;
