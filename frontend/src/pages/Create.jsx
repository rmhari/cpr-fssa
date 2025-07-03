import React from "react";
import Form from "../components/Form";
import Heading from "../components/Heading";

function Create() {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        {/* Left side content */}
        <div className="text-xl font-bold">Content</div>
      </div>
      <div className="flex-1 bg-gray-50 py-5">
        <Form />
      </div>
    </div>
  );
}

export default Create;
