// import pkg, { INTEGER } from "sequelize";
// const { DataTypes, Model } = pkg;
// import db from "../../config/database.js";

// class Book extends Model {
//   static init(sequelize) {
//     return super.init(
//       {
//         bookId:{
//             type:INTEGER,
//             primaryKey:true,
//             allowNull:false,
//             autoIncrement: true 
//         },
//         code: DataTypes.INTEGER,
//         title: DataTypes.STRING,
//         quantity: DataTypes.INTEGER,
//         userId:DataTypes.INTEGER
//       },
//       { sequelize, modelName: "Book" }
//     );
//   }

//   static associate(models) {
//     // define association here
//     this.belongsToMany(models.User, { as: "users" }, { foreignKey: "user_id" });
//     // or this.hasOne(...) depends your relations
//     return this;
//   }
// }

// Book.init(db.sequelize);

// export default Book;
