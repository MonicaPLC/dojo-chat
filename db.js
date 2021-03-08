const Sequelize = require("sequelize");
const MessageModel = require("./models/message");
const UserModel = require("./models/user");

const sql = new Sequelize("mensajeria", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

const Message = MessageModel(sql, Sequelize);
const User = UserModel(sql, Sequelize);

User.hasMany(Message);
Message.belongsTo(User);

sql.sync().then(() => {
  console.log("Tablas creada. Base de datos en uso");
});

module.exports = {
  User,
  Message,
};
