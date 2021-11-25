import { Sequelize } from 'sequelize';
import env from './env.js';

const sequelize = new Sequelize(
    env.db_name,
    env.db_user,
    env.db_password,
    { dialect: 'mysql', host: env.db_host }
);

const associateAll = async (models) => {
    Object.values(models).map((model) => model.associate(models));
};

const db = { sequelize, associateAll };

export default db;