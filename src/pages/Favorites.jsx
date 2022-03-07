import React from "react";

import MeetupList from "../Components/meetups/meetupList";
import MeetupItem from "../Components/meetups/MeetupItem";
import { useDispatch, useSelector } from "react-redux";
import classes from "../Components/meetups/Meetuplist.module.css";

const FavoritesPage = () => {
  const favData = useSelector((state) => state.cardList);
  console.log("favedata", favData);


  let content;

  if (favData.length === 0) {
    content = <p>No favorites Added Yet</p>;
  } else {
    content = <MeetupList meetups={favData} />;
  }
  return (
    <section>
      <h1>Favorites</h1>
     {content}
    </section>
  );
};

export default FavoritesPage;
