// src/context/AuthProvider/store.js
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore({
  reducer: reducers,  // Reducer doğru bağlanmalı
});

export default store;
