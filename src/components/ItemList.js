import { addItem , removeItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddItem = (items) =>{
    console.log("Items==>",items);
    dispatch(addItem(items));
  }

  const handleRemoveItem = (items) =>{
    console.log("Items in  handleRemove Item==>",items);
    dispatch(removeItem(items));
  }

  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          data-testid="foodItems"
          className="p-2 m-2 border-gary-100 border-b-1 shadow-amber-100 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <span className="font-medium pr-2">{items.card.info.name} -</span>
              <span className="font-medium">
                ₹{(items.card.info.defaultPrice || items.card.info.price) / 100}
              </span>
            </div>
            <p className="text-xs font-light">{items.card.info.description}</p>
          </div>
          <div className="w-3/12 px-4">
            <div className="absolute">
                <button className="px-2 cursor-pointer rounded-lg text-green-800 font-bold bg-white shadow-lg"
                onClick={() => handleAddItem(items)}
                >ADD +</button>
                <button className="px-2 cursor-pointer rounded-lg text-green-800 font-bold bg-white shadow-lg"
                onClick={() => handleRemoveItem(items)}
                >Remove -</button>

            </div>
            <img className="w-40 rounded-lg" src={IMG_CDN_URL + items.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
