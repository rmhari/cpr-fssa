import React, { useState } from "react";
import DropDown from "./DropDown";  
import TextArea from "./TextArea";
import Button from "./Button";
import Heading from "./Heading";

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
        <form className=" mx-auto p-6 bg-white">
            <Heading content="Create New CPR" />
            <div className="mb-4">
                <label className="block mb-1 font-medium">Staff Comments:</label>
                <TextArea className="w-full" />
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Color Code:</label>
                <DropDown
                    listItems={[
                        { id: 1, name: "Red" },
                        { id: 2, name: "Green" },
                        { id: 3, name: "Yellow" },
                    ]}
                    value={color}
                    onChange={setColor}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Add comments:</label>
                <DropDown
                    listItems={[
                        { id: 1, name: "Manager" },
                        { id: 2, name: "IDP" },
                    ]}
                    value={commentRole}
                    onChange={(val) => {
                        setCommentRole(val);
                        setManagerSubRole(null); // reset subrole if main role changes
                    }}
                />
            </div>

            {commentRole?.name === "Manager" && (
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Additional Comments:</label>
                    <TextArea
                        className="w-full"
                        value={managerText}
                        onChange={(e) => setManagerText(e.target.value)}
                    />
                    <div className="mt-4">
                        <label className="block mb-1 font-medium">Additional Comments: </label>
                        <DropDown
                            listItems={[
                                { id: 1, name: "Manager" },
                                { id: 2, name: "IDP" },
                            ]}
                            value={managerSubRole}
                            onChange={setManagerSubRole}
                        />
                    </div>
                    {managerSubRole?.name === "Manager" && (
                        <div className="mt-4">
                            <label className="block mb-1 font-medium">Manager Comments :</label>
                            <TextArea className="w-full" />
                        </div>
                    )}
                    {managerSubRole?.name === "IDP" && (
                        <div className="mt-4">
                            <label className="block mb-1 font-medium">IDP :</label>
                            <TextArea className="w-full" />
                        </div>
                    )}
                </div>
            )}

            {commentRole?.name === "IDP" && (
                <div className="mb-4">
                    <label className="block mb-1 font-medium">IDP:</label>
                    <TextArea
                        className="w-full"
                        value={idpText}
                        onChange={(e) => setIdpText(e.target.value)}
                    />
                </div>
            )}

            <Button
                className="mt-4 w-full"
                onClick={handleSubmit}
                content="Submit"
            />
        </form>
    );
};

export default Form;