import dotenv from "dotenv";

dotenv.config();

const env = {
  app_port: process.env.SERVER_PORT || 5458,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  jwt_secret: process.env.JWT_SECRET,
};

export default env;
