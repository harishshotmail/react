import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import userRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  let { resId } = useParams();
  const menuData = userRestaurantMenu(resId);
  const [activeIndex, setActiveIndex] = useState(0);
  const filteredMenuItems =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  if (menuData.length == 0) {
    return <Shimmer />;
  }
 
 
  return (
    <div className="w-6/12 m-auto text-center">
      <div className="font-bold">
        <p>{menuData?.data?.cards[2]?.card?.card?.info?.name}</p>
        <p>{menuData?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
      </div>
      {filteredMenuItems.map((item, index) => (
        <RestaurantCategory key={item.card.card.title} category={item} isActive={index == activeIndex ? true : false} setActiveIndex = {() => setActiveIndex(index)}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
