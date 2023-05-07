'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    noddle: DataTypes.STRING,
    soup: DataTypes.STRING,
    rich: DataTypes.STRING,
    beanSprouts: DataTypes.STRING,
    onion: DataTypes.STRING,
    egg: DataTypes.STRING,
    kimchi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Order;
};