import { createStore } from "redux";
import Favorites from "./Reducers/Favorites";

const store = createStore(Favorites);
export default store;
