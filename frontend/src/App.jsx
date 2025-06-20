import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import "./App.css";

function App() {
  return (
    <div className="w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
