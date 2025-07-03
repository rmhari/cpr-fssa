import React,{useState} from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import Form from "./components/Form";
import DropDown from "./components/DropDown";
import Button from "./components/Button";


function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div >
      <RouterProvider router={router} />   
     
    
      
      </div>
    
  );
}

export default App;
