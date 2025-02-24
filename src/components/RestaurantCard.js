import { IMG_CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const resData = props.resObj;
  //console.log(resData);
  const {loggedInUser} = useContext(UserContext);
  //console.log(loggedInUser);
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="w-55 rounded-lg" src={IMG_CDN_URL + resData.info.cloudinaryImageId} />
      <h4 className="font-bold py-4 text-lg">{resData.info.name}</h4>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4>{resData.info.avgRating} Rating</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const withLocationLabel = (RestaurantCard) => {
  return (props) => {
    const resIsOpen = props.resObj;
    //console.log(resIsOpen);
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{resIsOpen.info.areaName}</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};


export default RestaurantCard;
