import React, { useState } from "react";
import DropDown from "../components/DropDown";
import { LIST_ITEMS, LIST_COACHES } from "../helpers/index";
import { STATIC_CODES } from "../config/staticMenus";

function Dashboard() {
  const [student, setStudent] = useState("");
  const [coach, setCoach] = useState("");
  const [criteria, setCriteria] = useState("");

  return (
    <div className="flex gap-x-4 items-center justify-between px-2 mx-auto">
      <div className="w-1/2 flex justify-start gap-x-5.5">
        <DropDown
          listItems={LIST_ITEMS}
          placeholder="Select Student"
          setValue={setStudent}
        />
        <DropDown
          listItems={LIST_COACHES}
          placeholder="Select Staff"
          setValue={setCoach}
        />
      </div>
      <div className="">
        <DropDown
          listItems={STATIC_CODES}
          placeholder="Select Criteria"
          setValue={setCriteria}
        />
      </div>
    </div>
  );
}

export default Dashboard;
