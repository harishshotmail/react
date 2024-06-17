import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const userRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const menuItems = await data.json();
    setResInfo(menuItems);
  };
  return resInfo;
};
export default userRestaurantMenu;
