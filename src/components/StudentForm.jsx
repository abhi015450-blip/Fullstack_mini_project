import React, { useState } from "react";
import "./form.css";

const StudentForm = ({ addStudent, goBack }) => {
  const [data, setData] = useState({
    name: "",
    roll: "",
    className: "",
    section: "",
    grade: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(data);
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required onChange={(e) => setData({...data, name: e.target.value})} />
        <input placeholder="Roll No" required onChange={(e) => setData({...data, roll: e.target.value})} />
        <input placeholder="Class" required onChange={(e) => setData({...data, className: e.target.value})} />
        <input placeholder="Section" required onChange={(e) => setData({...data, section: e.target.value})} />
        <input placeholder="Grade" required onChange={(e) => setData({...data, grade: e.target.value})} />

        <button type="submit" className="save-btn">Save</button>
        <button type="button" className="back-btn" onClick={goBack}>Back</button>
      </form>
    </div>
  );
};

export default StudentForm;

