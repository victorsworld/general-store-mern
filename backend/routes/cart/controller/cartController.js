const Cart = require('../model/cartModel')

module.exports = {
     fillCart: async (req, res) => {
        try {
          const user = res.locals.decodedToken.userId;
          const { name, stock, image, price, product } = req.body;
      
          let cart = await Cart.findOne({ owner: user });
      
          const orderItem = {
            name,
            stock,
            image,
            price,
            product,
          };
      
          if (!cart) {
            const newCart = new Cart({
              owner: user,
              orderItems: [orderItem],
            });
            const saveCart = await newCart.save();
            // return res.status(200).json({ success: true, data: saveCart });
          } else {
            cart.orderItems.push(orderItem);
            await cart.save();
          }
      
          res.status(200).json({ success: true, message: 'Product added to cart' });
        } catch (error) {
          console.error(error.message);
          res.status(500).json({ success: false, message: 'Error', error: error });
        }
    },
    getCart: async (req, res) => {
        try {
          const user = res.locals.decodedToken.userId;
          const findCart = await Cart.findOne({ owner: user });
      
          if (!findCart) {
            return res.status(200).json({ success: true, data: [] });
          }
      
          return res.status(200).json({ success: true, data: findCart.orderItems });
        } catch (error) {
          console.log(error.message);
          res.status(500).json({ success: false, message: 'Error', error: error });
        }
      },
      deleteCartItem:  async (req, res) => {
        try {
          const user = res.locals.decodedToken.userId;
          const { id } = req.params;
      
          const updatedCart = await Cart.findOneAndUpdate(
            { owner: user },
            { $pull: { orderItems: { _id: id } } }
          );
      
          res.status(200).json({ success: true, data: updatedCart });
        } catch (error) {
          console.log(error);
          res.status(500).json({ success: false, message: 'Error', error: error });
        }
      },
      deleteCartItem: async (req, res) => {
        try {
          const user = res.locals.decodedToken.userId;
          const { id } = req.params;
      
          const updatedCart = await Cart.findOne({ owner: user });
      
          if (!updatedCart) {
            return res
              .status(404)
              .json({ success: false, message: 'Cart not found' });
          }
      
          // Find the index of the orderItem with the matching _id.
          const itemIndex = updatedCart.orderItems.findIndex(
            (item) => item._id.toString() === id
          );
      
          if (itemIndex === -1) {
            return res
              .status(404)
              .json({ success: false, message: 'Item not found in the cart' });
          }
      
          // Remove the orderItem from the orderItems array.
          updatedCart.orderItems.splice(itemIndex, 1);
      
          await updatedCart.save();
      
          res.status(200).json({ success: true, data: updatedCart });
        } catch (error) {
          console.log(error);
          res.status(500).json({ success: false, message: 'Error', error: error });
        }
      },
      deleteCart: async (req, res) => {
        try {
          const user = res.locals.decodedToken.userId;
      
          const deletedCart = await Cart.findOneAndDelete({ owner: user });
      
          if (!deletedCart) {
            return res
              .status(404)
              .json({ success: false, message: 'Cart not found' });
          }
      
          res.status(200).json({ success: true, message: 'Cart deleted successfully' });
        } catch (error) {
          console.log(error);
          res.status(500).json({ success: false, message: 'Error', error: error });
        }
      }
      
      
}