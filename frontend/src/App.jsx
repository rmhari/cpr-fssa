import "./App.css";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Pagination from "./components/Pagination";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div >
      <RouterProvider router={router} />  
      
      </div>
    
  );
}

export default App;
