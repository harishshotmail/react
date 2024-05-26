import { IMG_CLOUD_CDN } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, cloudinaryImageId, areaName } =
    resData.info;

  return (
    <div className="w-[250] m-2 bg-gray-100 hover:bg-gray-200 hover:cursor-zoom-in">
      <img className="max-h-32 w-[250]" alt="" src={IMG_CLOUD_CDN + cloudinaryImageId} />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
