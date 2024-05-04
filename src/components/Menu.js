import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./shimmer";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  let { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const menuItems = await data.json();
    // const menu_items =
    console.log(
      menuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    setMenuData(
      menuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    // console.log("data", menuData);
  };
  if (menuData.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="menu-items">
      {menuData.map((item) => (
        <p key={item?.card.info.id}>
          {item?.card.info.name} -{" "}
          {item?.card?.info.finalPrice / 100 || item?.card?.info.price / 100}
        </p>
      ))}
    </div>
  );
};

export default Menu;
