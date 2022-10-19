import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

let items = [];

const CartItem = ({ item, flag, setFlag }) => {
  const [qty, setQty] = useState(item.qty);
  const [{ cartItems }, dispatch] = useStateValue();
  const updateQty = (number, id) => {
    if (number === -1 && qty === 1) {
      items = cartItems.filter((e) => e.id !== id);
      setFlag(flag + 1);
      cartDispatch();
      return;
    }
    setQty(qty + number);
    cartItems.map((item) => {
      if (item.id === id) {
        item.qty += number;
      }
      return item;
    });
    setFlag(flag + 1);
    cartDispatch();
  };
  const cartDispatch = () => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(items)
    );
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
  };
  useEffect(() => {
    items = cartItems;
  }, [qty, cartItems]);
  return (
    <div
      key={item.id}
      className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
    >
      <img
        src={item?.imageURL}
        alt="itemimg"
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
      />
      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">
          {item.title}
        </p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {item?.price * qty}
        </p>
      </div>
      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 1.5 }}
          onClick={() => updateQty(-1, item.id)}
        >
          <BiMinus />
        </motion.div>
        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>
        <motion.div
          whileTap={{ scale: 1.5 }}
          onClick={() => updateQty(1, item.id)}
        >
          <BiPlus />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
