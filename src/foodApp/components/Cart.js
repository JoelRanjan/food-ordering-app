import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearItems());
  };

  return (
    <div className="w-8/12 m-auto py-8">
      <button
        className="bg-slate-600 px-2 text-white rounded-xl"
        onClick={handleClearItems}
      >
        clear Items
      </button>
      {cartItems.items.map((res) => (
        <div className="flex justify-between ">
          <div className="w-8/12">
            <h3 className="font-semibold">{res?.card?.info?.name}</h3>
            <p>
              ₹{" "}
              {res?.card?.info?.price
                ? res?.card?.info?.price / 100
                : res?.card?.info?.defaultPrice / 100}
            </p>
            <p>
              ★{" "}
              {res?.card?.info?.ratings.aggregatedRating.rating
                ? res?.card?.info?.ratings.aggregatedRating.rating
                : 0.0}
              (
              {res?.card?.info?.ratings.aggregatedRating.ratingCountV2
                ? res?.card?.info?.ratings.aggregatedRating.ratingCountV2
                : 0.0}
              )
            </p>
            <p className="text-sm">{res?.card?.info?.description}</p>
            <br />
            <hr />
          </div>
          <div className="h-24 w-2/12">
            <div>
              <img
                className="h-24 w-56 rounded-xl"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  res?.card?.info?.imageId
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
