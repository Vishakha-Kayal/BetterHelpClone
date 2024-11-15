import { configureStore } from "@reduxjs/toolkit";
import  groupSlice  from "./slice/GroupSlice";

const store = configureStore({
  reducer: {
    groups: groupSlice,
  },
});

export default store;