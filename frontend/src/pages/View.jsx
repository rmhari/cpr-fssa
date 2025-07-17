import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
// import { useSelector } from "react-redux";
// import API from "../services/api";

function View() {
 const [studentData, setStudentData] = React.useState({
        studentName: "John Doe",
        staffName: "Jane Smith",
        colorCode: "Green",
        staffComments: "Excellent progress.",
        managerComments: "Keep it up!",
        idp: "IDP-12345"
      });
const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState("");
//   const { id } = useParams();

//   React.useEffect(() => {
//     const fetchStudentData = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const response = await API.getCPRById(id);
//         setStudentData(response.data);
//       } catch (err) {
//         setError("Failed to fetch student data. Please try again later.");
//       }
//       setLoading(false);
//     };
//     if (id) fetchStudentData();
//   }, [id]);
  // Static data for demonstration
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setStudentData({
        studentName: "John Doe",
        staffName: "Jane Smith",
        colorCode: "Green",
        staffComments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        managerComments: "Keep up the good work!",
        idp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      });
      setLoading(false);
      console.log("Fetched student data:", studentData);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col items-center py-8 relative">
      <h2 className="text-2xl font-semibold mb-6">View Student Details</h2>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 relative">
        <Button
          content="Back"
          onClick={() => window.history.back()}
        />
         
        <div className="mt-14 space-y-4 text-gray-800">
          <div><strong>Student Name:</strong> {studentData.studentName}</div>
          <div><strong>Staff Name:</strong> {studentData.staffName}</div>
          <div><strong>Color Code:</strong> {studentData.colorCode}</div>
          <div><strong>Staff Comments:</strong> {studentData.staffComments}</div>
          <div><strong>Manager Comments:</strong> {studentData.managerComments || "N/A"}</div>
          <div><strong>IDP:</strong> {studentData.idp  || "N/A"}</div>
        </div>
      </div>
    </div>
  );
}

export default View;
