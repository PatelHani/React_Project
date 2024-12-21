import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function PatientView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const patient = JSON.parse(localStorage.getItem("patients")).find(
    (p) => p.id === id
  );

  if (!patient) {
    return <div>Patient not found</div>;
  }

  return (
    <div>
      <h1>Patient Details</h1>
      <p><strong>Name:</strong> {patient.name}</p>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Contact:</strong> {patient.contact}</p>
      <p><strong>Weight:</strong> {patient.weight}</p>
      <p><strong>Address:</strong> {patient.address}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>DOB:</strong> {patient.dob}</p>
      <button className="btn btn-secondary" onClick={() => navigate("/patients")}>
        Back to Patients
      </button>
    </div>
  );
}

export default PatientView;
