import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const resList = useRestaurantList();

  useEffect(() => {
    setFilteredList(resList);
  }, [resList]);

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
          <button
            className="cursor"
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
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            {" "}
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
