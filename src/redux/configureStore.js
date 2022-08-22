import { combineReducers, configureStore } from "@reduxjs/toolkit";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reviewsReducer from "./features/reviews";

const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk], // To remove a non-serializable value was detected in the state error
});
export const persistor = persistStore(store);
