import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [idToEdit, setIdToEdit] = useState(null);

  const addPatient = () => {
    if (!name || !age) return;
    
    const newPatient = { id: Date.now(), name, age };
    setPatients([...patients, newPatient]);
    setName('');
    setAge('');
  };

  const deletePatient = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  const editPatient = (id) => {
    const patientToEdit = patients.find(patient => patient.id === id);
    setName(patientToEdit.name);
    setAge(patientToEdit.age);
    setIdToEdit(id);
  };

  const savePatient = () => {
    setPatients(patients.map(patient => 
      patient.id === idToEdit ? { ...patient, name, age } : patient
    ));
    setName('');
    setAge('');
    setIdToEdit(null);
  };

  return (
    <div className="app">
      <h1>Patient Management System</h1>
      <div className="form">
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
        <button onClick={idToEdit ? savePatient : addPatient}>
          {idToEdit ? 'Save Changes' : 'Add Patient'}
        </button>
      </div>
      <PatientList patients={patients} deletePatient={deletePatient} editPatient={editPatient} />
    </div>
  );
};

const PatientList = ({ patients, deletePatient, editPatient }) => {
  return (
    <div className="patient-list">
      <h2>Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            {patient.name} (Age: {patient.age}) 
            <button onClick={() => editPatient(patient.id)}>Edit</button>
            <button onClick={() => deletePatient(patient.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
