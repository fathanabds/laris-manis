'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Product name is required',
          },
          notNull: {
            msg: 'Product name is required',
          },
        },
      },
      description: DataTypes.TEXT,
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
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
