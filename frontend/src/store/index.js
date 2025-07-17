import { configureStore } from "@reduxjs/toolkit";
import cprReducer from "./reducers/cpr";
import staffReducer from "./reducers/staffs";
import studentReducer from "./reducers/students";

const store = configureStore({
  reducer: {
    cpr: cprReducer,
    staffs: staffReducer,
    students: studentReducer,
  },
});

export default store;
