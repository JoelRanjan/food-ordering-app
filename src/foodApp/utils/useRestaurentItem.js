import { useEffect, useState } from "react";

const useRestaurentItem = (resId) => {
  const [resItemList, setResItemList] = useState([]);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const jsonData = await data.json();
    const itemCardsList =
      jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (item) =>
          item.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setResItemList(itemCardsList);
  };

  return resItemList;
};

export default useRestaurentItem;
