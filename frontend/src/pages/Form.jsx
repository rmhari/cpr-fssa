import React, { useState } from "react";
import DropDown from "../components/DropDown";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Label from "../components/Label";
import { STATIC_CODES, STATIC_ROLES } from "../config/staticMenus";
import Accordion from "../components/Accordion";

const Form = () => {
  const [color, setColor] = useState(null);
  const [commentRole, setCommentRole] = useState(null);
  const [managerText, setManagerText] = useState("");
  const [idpText, setIdpText] = useState("");
  const [managerSubRole, setManagerSubRole] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form className="mx-auto p-6 bg-transparent">
      <Heading content="Create New CPR" />
      <div className="mb-4">
        <Label>Staff Comments:</Label>
        <TextArea className="w-full" />
      </div>

      <div className="mb-12">
        <Label>Student's Criteria:</Label>
        <DropDown listItems={STATIC_CODES} value={color} />
      </div>

      <Accordion title="IDP Comments" placeholder="Enter IDP Comments" />
      <Accordion
        title="Manager Comments"
        placeholder="Enter Manager Comments"
      />

      <Button className="mt-4 w-full" onClick={handleSubmit} content="Submit" />
    </form>
  );
};

export default Form;
