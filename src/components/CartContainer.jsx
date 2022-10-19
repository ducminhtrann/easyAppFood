import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] =
    useStateValue();
  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(0);
  const hideCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  const clearCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [],
    });
    localStorage.setItem("cartItems", JSON.stringify([]));
  };
  const getTotal = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    setTotal(totalPrice);
  };
  useEffect(getTotal, [flag, cartItems]);
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 z-[101] w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={hideCart}
        >
          <MdArrowRight className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">
          Cart
        </p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-sm
            cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>
      {/* botton-section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* Cart section */}
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                flag={flag}
                setFlag={setFlag}
              />
            ))}
          </div>
          {/* cart total section */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-center px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">
                Sub Total
              </p>
              <p className="text-gray-400 text-lg">
                $ {total}
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">
                Delivery
              </p>
              <p className="text-gray-400 text-lg">$ 2.5</p>
            </div>
            <div className="w-full border-b border-gray-600 my-2"></div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">
                Total
              </p>
              <p className="text-gray-200 text-xl font-semibold">
                $ {total + 2.5}
              </p>
            </div>
            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                    hover:shadow-lg"
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2
                  hover:shadow-lg"
              >
                Login to Check Out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img
            src={EmptyCart}
            alt="Empty Cart"
            className="w-300"
          />
          <p className="text-textColor font-semibold text-xl">
            Add some items to Your Cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
