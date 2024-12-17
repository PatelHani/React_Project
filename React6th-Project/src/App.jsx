import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    weight: "",
    illness: "",
    address: "",
    contactNo: "",
    appointmentDate: "",
    doctorName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Patient data submitted successfully!");
    console.log(patient);
    
    setPatient({
      name: "",
      age: "",
      weight: "",
      illness: "",
      address: "",
      contactNo: "",
      appointmentDate: "",
      doctorName: "",
    });
  };

  return (
    <div className="App">
      <h1>Hospital Patient Management System</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={patient.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={patient.weight}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Illness:</label>
          <input
            type="text"
            name="illness"
            value={patient.illness}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={patient.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Contact No:</label>
          <input
            type="text"
            name="contactNo"
            value={patient.contactNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Date of Appointment:</label>
          <input
            type="date"
            name="appointmentDate"
            value={patient.appointmentDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Doctor's Name:</label>
          <input
            type="text"
            name="doctorName"
            value={patient.doctorName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="patient-info">
        <h3>Submitted Patient Information:</h3>
        <ul>
          <li><strong>Name:</strong> {patient.name}</li>
          <li><strong>Age:</strong> {patient.age}</li>
          <li><strong>Weight:</strong> {patient.weight} kg</li>
          <li><strong>Illness:</strong> {patient.illness}</li>
          <li><strong>Address:</strong> {patient.address}</li>
          <li><strong>Contact No:</strong> {patient.contactNo}</li>
          <li><strong>Date of Appointment:</strong> {patient.appointmentDate}</li>
          <li><strong>Doctor's Name:</strong> {patient.doctorName}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;



