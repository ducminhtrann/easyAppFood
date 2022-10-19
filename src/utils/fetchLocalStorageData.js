export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("FoodAppUser") !== "undefine"
      ? JSON.parse(localStorage.getItem("FoodAppUser"))
      : localStorage.removeItem("FoodAppUser");
  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefine"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.removeItem("cartItems");
  return cartInfo ? cartInfo : [];
};
