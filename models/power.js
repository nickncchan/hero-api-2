"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class power extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.hero, {
        through: "heropowers",
        foreignKey: "powerId",
      });
    }
  }
  power.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "power",
    }
  );
  return power;
};
