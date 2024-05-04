import RestaurantCard from "./Restaurantcard";
import { resData } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
let list = [
  {
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId: "f62564e14944753903849c4ef673af4d",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      sla: {
        deliveryTime: 23,
      },
    },
  },
  {
    info: {
      id: "438361",
      name: "KFC",
      cloudinaryImageId: "f62564e14944753903849c4ef673af4d",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 3,
      avgRatingString: "3",
      sla: {
        deliveryTime: 23,
      },
    },
  },
  {
    info: {
      id: "4383613",
      name: "KFC1",
      cloudinaryImageId: "f62564e14944753903849c4ef673af4d",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      avgRatingString: "4.1",
      sla: {
        deliveryTime: 23,
      },
    },
  },
  {
    info: {
      id: "4383612",
      name: "KFC2",
      cloudinaryImageId: "f62564e14944753903849c4ef673af4d",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 3.2,
      avgRatingString: "3.2",
      sla: {
        deliveryTime: 23,
      },
    },
  },
];

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
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
    setFilteredList(
      resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="res-body">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
          />
          <button className="cursor"
            onClick={() =>
              setFilteredList(
                resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchValue)
                )
              )
            }
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurant-card-container">
        {filteredList.map((res) => (
          <Link to={'/restaurant/' + res.info.id} key={res.info.id}> <RestaurantCard resData={res} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
