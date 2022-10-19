import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data = [], scrollValue }) => {
  const rowScroll = useRef();
  const [{ cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log(scrollValue);
    rowScroll.current.scrollLeft = scrollValue;
  }, [scrollValue]);
  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(items)
    );
  };
  useEffect(addToCart, [items, dispatch]);
  return (
    <div
      ref={rowScroll}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[175x] min-w-[300px] md:w-340 md:min-w-[340px] drop-shadow-sm backdrop-blur-lg my-12 bg-white rounded-xl p-4
         hover:drop-shadow-md flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  className="w-full h-full object-contain"
                  src={item?.imageURL}
                  alt="Item Img"
                />
              </motion.div>
              <motion.div
                onClick={() =>
                  setItems([...cartItems, item])
                }
                whileTap={{ scale: 0.6 }}
                className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer
             hover:shadow-md"
              >
                <MdShoppingBasket className="text-white " />
              </motion.div>
            </div>
            <div className="w-full flex flex-col gap-2 items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">
                    $
                  </span>{" "}
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex items-center flex-col justify-center">
          <img
            src={NotFound}
            alt="Not Found"
            className="h-340"
          />
          <p className="text-xl text-textColor font-semibold my-2">
            Items Not Availble
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
