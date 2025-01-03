import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import PatientView from './PatientView';
import PatientEdit from './PatientEdit';
import { FaUsers } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

const PatientAdd = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
 


  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    dob: '',
    phone: '',
    address: '',
    disease: '',
    admissionDate: '',
    DoctorsName: [],
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const doctors = ['Dr.Bella Shah', 'Dr.Kiran', 'Dr.Vishal', 'Dr.Shila'];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age || formData.age <= 0) newErrors.age = 'Age must be greater than 0';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.phone.match(/^[0-9]{10}$/)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.disease.trim()) newErrors.disease = 'Disease is required';
    if (!formData.admissionDate) newErrors.admissionDate = 'Admission Date is required';
    if (formData.DoctorsName.length === 0) newErrors.DoctorsName = 'At least one doctor must be assigned';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const patients = JSON.parse(localStorage.getItem('patients')) || [];
      const newPatient = { id: Date.now(), ...formData };
      localStorage.setItem('patients', JSON.stringify([...patients, newPatient]));
      setSubmitted(true);
      setTimeout(() => navigate('/'), 500);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const DoctorsName = checked
        ? [...prevData.DoctorsName, value]
        : prevData.DoctorsName.filter((doctor) => doctor !== value);
      return { ...prevData, DoctorsName };
    });
  };

      const handleView = () => {
      navigate('/');    
      };
      const handleEdit = () => {
      navigate('/edit');    
      };

  return (
    <div className="patient-form">
        <div class='header'>
    <button className="one-btn" onClick={handleView} element={<PatientView />}><span className="text-underline">View Patients</span></button>
    <div class='title'>
      <h4>Hospital Management System</h4> 
    </div>
    <button className="two-btn" onClick={handleEdit} element={<PatientEdit />}><span className="text-underline">    Edit Patient</span></button>
  </div>
      <h2 className="add-title">Add Patient Data</h2>
      {(
      <Form className='form-container' onSubmit={handleSubmit} noValidate>
        <div className='form-input-edit'>
          {/* Name */}
        <Form.Group className="input-data input-name mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        {/* Age */}
        <Form.Group className="input-data input-age mb-4">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>
        </div>

        <div className='form-input-edit'>
          {/* Gender */}
        <Form.Group className="input-data input-gender mb-3">
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check
              
              label="Male"
              type="radio"
              value="Male"
              name="gender"
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />
            <Form.Check
              inline
              label="Female"
              type="radio"
              value="Female"
              name="gender"
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />
          </div>
          {errors.gender && <div className="text-danger">{errors.gender}</div>}
        </Form.Group>
        
          {/* Date of Birth */}
        <Form.Group className="input-data input-dob mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            isInvalid={!!errors.dob}
          />
          <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
        </Form.Group>


        {/* Phone Number */}
        <Form.Group className="input-data input-phone mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>
        </div>

        {/* Address */}
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            isInvalid={!!errors.address}
          />
          <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
        </Form.Group>

        <div className='form-input-edit'>
          {/* Disease */}
        <Form.Group className="input-data input-disease mb-3">
          <Form.Label>Illness</Form.Label>
          <Form.Control
            type="text"
            value={formData.disease}
            onChange={(e) => setFormData({ ...formData, disease: e.target.value })}
            isInvalid={!!errors.disease}
          />
          <Form.Control.Feedback type="invalid">{errors.disease}</Form.Control.Feedback>
        </Form.Group>

        {/* Admission Date */}
        <Form.Group className="input-data input-admission-date mb-3">
          <Form.Label>Appointment Date</Form.Label>
          <Form.Control
            type="date"
            value={formData.admissionDate}
            onChange={(e) => setFormData({ ...formData, admissionDate: e.target.value })}
            isInvalid={!!errors.admissionDate}
          />
          <Form.Control.Feedback type="invalid">{errors.admissionDate}</Form.Control.Feedback>
        </Form.Group>
        </div>

        {/* Assigned Doctor */}
        <Form.Group className="mb-5">
          <Form.Label> Doctor</Form.Label>
          <div className='d-flex'>
          {doctors.map((doctor) => (
              <div className='me-5'>
                <Form.Check className='doctor-checkbox'
              key={doctor}
              label={doctor}
              type="checkbox"
              value={doctor}
              onChange={handleCheckboxChange}
            />
              </div>
          ))}
          </div>
          {errors.DoctorsName && <div className="text-danger">{errors.DoctorsName}</div>}
        </Form.Group>

        <Button type="submit" className='sbt-btn'>Add Patient</Button>
      </Form>
      )}
    </div>
  );
};

export default PatientAdd;