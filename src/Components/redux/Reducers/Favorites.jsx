import React from "react";

const initialstate = {
  cardList: [],
};

const Favorites = (state = initialstate, action) => {
  console.log("reducer", state.cardList);

  switch (action.type) {
    case "addFavorites":
      return {
        ...state,
        cardList: [...state.cardList, action.payLoad],
      };

      break;
    case "removeFavorites":
      return {
        ...state,
        cardList: [
          ...state.cardList.filter((meetup) => meetup.id !== action.payLoad),
        ],
      };

      break;
    default:
      return state;
      break;
  }
};

export default Favorites;
