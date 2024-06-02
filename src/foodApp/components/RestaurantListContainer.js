import restaurantsListArray from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContextData from "../utils/contextData";

const RestaurantCard = (props) => {
  const { restaurantDetails } = props;
  const userNameFromData = useContext(ContextData);
  const restName = restaurantDetails.name;
  const restImg =
    " https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    restaurantDetails.cloudinaryImageId;
  const rating = restaurantDetails.avgRating;
  const cuisineList = restaurantDetails.cuisines;
  return (
    <div className="p-3 w-64 break-words m-3 hover:border border-xl-45 ">
      <img className="h-60 w-96 rounded-xl" src={restImg} alt="rstImg" />
      <h4>{restName}</h4>
      <h4>Rating : {rating}</h4>
      <h4 className="break-words"> Cusines :{cuisineList.join(", ")}</h4>
    </div>
  );
};

const RestaurantListContainer = () => {
  const [restarurentsList, setRestarurentsList] = useState([]);
  const getFilteredRestaurents = () => {
    const rrestaurantsListArray = restaurantsListArray.filter(
      (eachRes) => JSON.parse(eachRes.info.rating.rating_text) > 4.2
    );
    setRestarurentsList(rrestaurantsListArray);
  };

  const userInputData = (event) => {
    const filteredUserInput = restaurantsListArray.filter((res) =>
      res.info.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRestarurentsList(filteredUserInput);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jasonData = await apiData.json();
    setRestarurentsList(
      jasonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="w-10/12 m-auto">
      <div>
        <input type="search" onChange={userInputData} />
        <button
          type="button"
          className="top-btn"
          onClick={getFilteredRestaurents}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {restarurentsList.map((eachRestaurant) => (
          <Link
            className="linkClass"
            to={"/restaurants/" + eachRestaurant.info.id}
          >
            <RestaurantCard restaurantDetails={eachRestaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListContainer;
