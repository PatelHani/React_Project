import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientForm() {
  const [formData, setFormData] = useState(
    { name: "",
      age: "",
      contact: "",
      weight: "",
      address: "",
      gender: "",
      dob: ""
    }
);
  const [patients, setPatients] = useState(() =>
    JSON.parse(localStorage.getItem("patients")) || []
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (patients.length >= 10) {
      alert("Cannot add more than 10 records.");
      return;
    }

    const newPatient = { ...formData, id: Date.now().toString() };
    const updatedPatients = [...patients, newPatient];

    setPatients(updatedPatients);
    localStorage.setItem("patients", JSON.stringify(updatedPatients));
    setFormData({ name: "", age: "", contact: "" });
    navigate("/patients");
  };

  return (
    <div>
      <h1>Add Patient</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contact:</label>
          <input
            type="text"
            className="form-control"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label className="form-label">Weight:</label>
          <input
            type="number"
            className="form-control"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label className="form-label">address:</label>
          <input
            type="address"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label className="form-label">gender:</label>
          <input
            type="gender"
            className="form-control"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label className="form-label">DOB:</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default PatientForm;
