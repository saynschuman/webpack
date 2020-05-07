import { combineReducers } from "redux";
import search from "@/features/search/reducer";
import city from "@/features/city/reducer";

export default combineReducers({ search, city });
