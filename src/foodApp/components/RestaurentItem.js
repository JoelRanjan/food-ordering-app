import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurentItem from "../utils/useRestaurentItem";
import { useDispatch } from "react-redux";
import { addCart } from "../utils/cartSlice";

const RestaurentItem = () => {
  const { resId } = useParams();
  const [itemIndex, setItemIndex] = useState(0);

  const resItemList = useRestaurentItem(resId);

  const sendIndex = (index) => {
    setItemIndex(index);
  };

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addCart(item));
  };

  return (
    <div className="m-4">
      <ul className="list-none w-8/12 m-auto">
        {resItemList?.map((item, index) => (
          <li className=" mx-5">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold my-5">
                  {item?.card?.card?.title} (
                  {item?.card?.card?.itemCards.length})
                </h2>
              </div>
              <div>
                <button type="button" onClick={() => sendIndex(index)}>
                  ★
                </button>
              </div>
            </div>
            {index === itemIndex ? (
              <div>
                {item?.card?.card?.itemCards.map((res) => (
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
                          ? res?.card?.info?.ratings.aggregatedRating
                              .ratingCountV2
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
                        <button
                          className="bg-black text-white rounded-xl px-2"
                          onClick={() => handleAddItem(res)}
                        >
                          Add+
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentItem;
