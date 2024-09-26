module.exports = (sequelize, DataTypes, tableName) => {
  return sequelize.define(tableName, {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
