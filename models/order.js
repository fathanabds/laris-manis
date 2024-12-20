'use strict';
const { Model } = require('sequelize');
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
  Order.init(
    {
      UserId: DataTypes.INTEGER,
      totalAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Total amount is required',
          },
          notNull: {
            msg: 'Total amount is required',
          },
          min: {
            args: [0],
            msg: 'Total amount must be greater than or equal to 0',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
