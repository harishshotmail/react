import { addItem } from "../utils/cartSlice.js";
import { IMG_CLOUD_CDN } from "../utils/constants.js";
import { useDispatch } from "react-redux";

const ItemList = (props) => {
  const dispatchEvent = useDispatch()
  const items = props;
  const handleDispatchEvent = (item) => {
    dispatchEvent(addItem(item));
  }
  return (
    <div className="item-list">
      {items.harish.map((item, index) => (
        <div
          className="bg-gray-50 py-2 text-left border-b-2 border-gray-200 flex justify-between"
          key={index}
        >
          <div>
            <p className="font-bold">{item.card.info.name}</p>
            <p>₹{item.card.info.price / 100}</p>
            <p>
              {item.card.info.ratings.aggregatedRating.rating} (
              {item.card.info.ratings.aggregatedRating.ratingCountV2})
            </p>
            <p>{item.card.info.description}</p>
          </div>
          <div className="relative">
            <img src={IMG_CLOUD_CDN + item.card.info.imageId}></img>
            <button className="absolute bg-white text-green-500 border font-bold left-1/2 translate-x-y-50 py-1 px-10 rounded-md hover:bg-gray-200"
            onClick={() => handleDispatchEvent(item)}>
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
