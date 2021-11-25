import pkg from "sequelize";
const { DataTypes, Model } = pkg;
import db from "../../config/database.js";

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email:DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.BOOLEAN,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
          }
      },
      { sequelize, modelName: "User" }
    );
  }

  static associate(models) {
    // define association here
    // this.hasMany(models.Book, { as: "books", foreignKey: "userId" });
    // or this.hasOne(...) depends your relations
    return this;
  }
}

User.init(db.sequelize);

export default User;
