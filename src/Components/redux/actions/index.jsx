import React from "react";



export const removeFavorites = (props) => {
  return (dispatch, getState) => {
    dispatch({ type: "removeFavorites", payLoad: props });
  };
};

export const addFavorites = (props) => {
  return (dispatch, getState) => {
    dispatch({ type: "addFavorites", payLoad: props });
  };
};

export const isItemFavorite = (props) => {
  return (dispatch, getState) => {
    dispatch({ type: "isItemFavorite", payLoad: props });
  };
};
