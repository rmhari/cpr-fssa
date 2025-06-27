import React, { useState } from "react";
import TextArea from "./TextArea";

const Form = () => {
    const [color, setColor] = useState("");
    const [role, setRole] = useState("");
    const [showManagerTextarea, setShowManagerTextarea] = useState(false);
    const [mainText, setMainText] = useState("");
    const [managerText, setManagerText] = useState("");
    const [finalText, setFinalText] = useState("");

    const handleRoleChange = (e) => {
        setRole(e.target.value);
        setShowManagerTextarea(e.target.value === "manager");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
        alert("Form submitted!");
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
            <div>
                <label>Staff Comments:</label>
                <br />
                <TextArea
                    value={mainText}
                    onChange={(e) => setMainText(e.target.value)}
                    rows={6}
                    style={{ width: "100%" }}
                />
            </div>
            <div>
                <label>Color Code:</label>
                <br />
                <DropDown listItems={["red", "green", "yellow"]} value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            <div>
                <label>Add comments</label>
                <br />
                <DropDown listItems={["manager"]} />
            </div>
            {showManagerTextarea && (
                <div>
                    <label>Manager Text:</label>
                    <br />
                    <TextArea
                        value={managerText}
                        onChange={(e) => setManagerText(e.target.value)}
                        rows={2}
                        style={{ width: "100%" }}
                    />
                </div>
            )}
            <div>
                <label>IDP:</label>
                <br />
                <TextArea
                    value={finalText}
                    onChange={(e) => setFinalText(e.target.value)}
                    rows={2}
                    style={{ width: "100%" }}
                />
            </div>
            <Button style={{ marginTop: 10 }} onClick={handleSubmit}>
                Submit
            </Button>
        </form>
    );
};

export default Form;