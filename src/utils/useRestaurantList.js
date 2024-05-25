import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await data.json();
    //optional chaining
    setResList(
      resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return resList;
};

export default useRestaurantList;
