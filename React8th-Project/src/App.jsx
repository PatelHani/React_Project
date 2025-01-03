import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PatientAdd from './Components/PatientAdd';
import PatientEdit from './Components/PatientEdit';
import PatientView from './Components/PatientView';


const App = () => {
  return (
    <>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<PatientView />} />
          <Route path="/add" element={<PatientAdd />} />
          <Route path="/edit" element={<PatientEdit />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
