import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientTable() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(storedPatients);
  }, []);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
    localStorage.setItem("patients", JSON.stringify(updatedPatients));
  };

  return (
    <div>
      <h1>Patient Data</h1>
      <button className="btn patient mb-3" onClick={() => navigate("/")}>
        Add New Patient
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.contact}</td>
              <td className="action-buttons">
                <button className="btn btn-success btn-sm" onClick={() => navigate(`/view/${patient.id}`)}>
                  View
                </button>
                <button className="btn btn-warning btn-sm" onClick={() => navigate(`/edit/${patient.id}`)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deletePatient(patient.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;
