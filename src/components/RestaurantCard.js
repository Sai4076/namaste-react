import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const resData = props.resObj;
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" src={IMG_CDN_URL + resData.info.cloudinaryImageId} />
      <h4>{resData.info.name}</h4>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4>{resData.info.avgRating} Rating</h4>
    </div>
  );
};
export default RestaurantCard;
