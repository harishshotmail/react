import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import userRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = () => {
  let { resId } = useParams();
  const menuData = userRestaurantMenu(resId);
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
