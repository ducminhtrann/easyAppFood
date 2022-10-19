import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import CartContainer from "./CartContainer";
import HomeContainer from "./HomeContainer";
import MenuContainer from "./MenuContainer";
import RowContainer from "./RowContainer";

const MainContainer = () => {
  const [{ foodItems, cartShow }] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  const onNext = (number = 1) => {
    const maxLenght = (foodItems || []).length * 200;
    console.log({ maxLenght, scrollValue });
    setScrollValue(scrollValue + 200 * number);
    if (scrollValue === 0) return;
    if (scrollValue === maxLenght) return;
    if (scrollValue < 0) {
      setScrollValue(0);
      return;
    }
    if (scrollValue > maxLenght)
      return setScrollValue(maxLenght);
  };
  useEffect(() => {}, [scrollValue]);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p
            className="font-semibold capitalize relative text-headingColor text-2xl
          before:absolute before:rounded-lg before:content before:w-32 before:h-1
          before:-bottom-2 before:left-0 before:bg-gradient-to-r from-orange-400 to-orange-600 
          transition-all ease-in-out duration-100"
          >
            Our fresh & healthy fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.6 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer
              flex items-center justify-center
              transition-all duration-100 ease-in-out hover:shadow-lg"
              onClick={() => onNext(-1)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.6 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer
              flex items-center justify-center
              transition-all duration-100 ease-in-out hover:shadow-lg"
              onClick={() => onNext(1)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          flag={true}
          data={foodItems?.filter(
            (e) => e.category === "fruits"
          )}
          scrollValue={scrollValue}
        />
      </section>
      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
