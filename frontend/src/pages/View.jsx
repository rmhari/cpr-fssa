import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function View() {
  const [studentData, setStudentData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      setLoading(true);
      setError("");
      axios
        .get(`/api/students/${id}`)
        .then((response) => setStudentData(response.data))
        .catch(() => {
          setError("Student not found or error fetching data.");
          setStudentData(null);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <div>
      <h2>View Student Details</h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {studentData && (
        <div style={{ marginTop: "20px" }}>
          <div><strong>Student Name:</strong> {studentData.studentName}</div>
          <div><strong>Staff Name:</strong> {studentData.staffName}</div>
          <div><strong>Color Code:</strong> {studentData.colorCode}</div>
          <div><strong>Staff Comments:</strong> {studentData.staffComments}</div>
          <div><strong>Manager Comments:</strong> {studentData.managerComments || "N/A"}</div>
          <div><strong>IDP:</strong> {studentData.idp}</div>
        </div>
      )}
    </div>
  );
}

export default View;
