import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllStudents } from "../store/reducers/students";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);
  return <div className="">Dashboard</div>;
}

export default Dashboard;
