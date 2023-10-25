const Order = require('../model/orderModel');

module.exports = {
  createOrder: async (req, res) => {
    try {
      const user = res.locals.decodedToken.userId;

      const {
        firstname,
        lastname,
        orderItems,
        shippingAddress,
        billingAddress,
        totalPrice,
      } = req.body;

      const newOrder = new Order({
        owner: user,
        firstname,
        lastname,
        orderItems,
        totalPrice,
        billingAddress,
        shippingAddress,
      });
      const savedOrder = await newOrder.save();
      res.status(201).json({ success: true, data: savedOrder });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: 'Error creating the order',
        error: error.message,
      });
    }
  },

  orderHistory: async (req, res) => {
    try {
        const user = res.locals.decodedToken.userId
        const userOrders = await Order.find({owner: user});
        if (!userOrders) {
          return res
            .status(500)
            .json({ success: false, message: `User's order history is empty` });
        }
        res.status(200).json({ success: true, data: userOrders });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({
            success: false,
            message: 'Error fetching order history',
            error: error.message,
          });
      }
  },

//   oneOrder: async (req, res) => {},

  //PAYMENT AND SHIPPING FUNCTIONS TO COME
  //   updateOrderToPaid: async (req, res) => {},
  //   updateOrderToShipped: async (req, res) => {},
};
