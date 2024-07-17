import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counterReducer";
import { contactSlice } from "./contactReducer";
import { cartSlice } from "./cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
  counterReducer: counterSlice.reducer,
  contactReducer: contactSlice.reducer,
  cart: cartSlice.reducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
