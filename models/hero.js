"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.team, {
        foreignKey: "teamId",
      });
      // new associations
      this.belongsToMany(models.power, {
        through: "heropowers",
        foreignKey: "heroId",
      });
    }
  }
  hero.init(
    {
      name: DataTypes.STRING,
      alias: DataTypes.STRING,
      teamId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "hero",
    }
  );
  return hero;
};
