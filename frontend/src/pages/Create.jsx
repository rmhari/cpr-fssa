import React from "react";
import Form from "./Form";

function Create() {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <div className="text-xl font-medium bg-transparent text-black">
          Content
        </div>
      </div>
      <div className="flex-1 bg-gray-50 py-5">
        <Form />
      </div>
    </div>
  );
}

export default Create;
