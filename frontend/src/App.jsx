import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    <div className="w-full font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
