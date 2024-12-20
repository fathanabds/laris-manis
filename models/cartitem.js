'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartItem.init(
    {
      CartdId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER,
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Quantity is required',
          },
          notEmpty: {
            msg: 'Quantity is required',
          },
          min: {
            args: [1],
            msg: 'Quantity must be greater than 0',
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Price is required',
          },
          notEmpty: {
            msg: 'Price is required',
          },
          min: {
            args: [1],
            msg: 'Price must be greater than 0',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'CartItem',
    }
  );
  return CartItem;
};
