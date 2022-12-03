import { combineReducers } from "redux";
import MovieListReducer from "./MovieListReducer";

const rootReducer = combineReducers({
    MovieListReducer,
});

export default rootReducer;