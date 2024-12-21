import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientForm from "./Components/PatientForm";
import PatientTable from "./Components/PatientTable";
import PatientView from "./Components/PatientView";
import EditPatient from "./Components/EditPatient";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<PatientForm />} />
          <Route path="/patients" element={<PatientTable />} />
          <Route path="/view/:id" element={<PatientView />} />
          <Route path="/edit/:id" element={<EditPatient />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
