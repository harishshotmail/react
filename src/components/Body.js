import RestaurantCard, { WithPromotedLabel } from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const resList = useRestaurantList();
  console.log("filteredList", filteredList);
  const PromotedRestaurant = WithPromotedLabel(RestaurantCard);
  useEffect(() => {
    setFilteredList(resList);
  }, [resList]);

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="res-body m-4">
      <div className="filter">
        <div className="search-bar">
          <input
            className="border border-black border-solid my-4 mr-4"
            type="text"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
          />
          <button
            className="p-1 bg-green-200 border rounded-lg cursor-pointer hover:bg-green-300"
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
      <div className="flex flex-wrap">
        {filteredList.map((res) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            {res.info.isOpen ? (
              <PromotedRestaurant resData={res}/>
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
