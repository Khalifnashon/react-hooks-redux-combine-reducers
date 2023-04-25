import { combineReducers } from "redux";
import authorsReducer from "./features/authors/authorSlice";
import booksReducer from "./features/books/bookSlice";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer;