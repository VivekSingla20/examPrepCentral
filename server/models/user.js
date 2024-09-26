const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      otp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      otpExpires: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      hooks: {
        afterCreate: async (user, options) => {
          const tableName = `user_${user.id}`;
          sequelize
            .define(tableName, {
              title: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              completed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
              },
            })
            .sync();
        },
      },
    }
  );

  return User;
};
