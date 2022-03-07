import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card/card";
import classes from "./Meetupitem.module.css";

//import { addFavorites, removeFavorites } from "../redux/actions/index";

function MeetupItem(props) {
  const dispatch = useDispatch();

  const removeFavorite = () => {
    dispatch({ type: "removeFavorites", payLoad: props.id });
  };

  const addFavorite = () => {
    dispatch({ type: "addFavorites", payLoad: props });
  };

  const isItemisFavorites = useSelector((state) =>
    state.cardList.some((meetup) => meetup.id === props.id)
  );

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={isItemisFavorites ? removeFavorite : addFavorite}>
            {isItemisFavorites ? "remove from Favorites" : "TO Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
