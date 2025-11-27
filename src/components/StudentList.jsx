import React from "react";
import "./list.css";

const StudentList = ({ students, goAdd }) => {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>📘 Student Dashboard</h1>
        <button className="add-btn" onClick={goAdd}>+ Add Student</button>
      </div>

      <div className="card-list">
        {students.length === 0 ? (
          <p className="empty">No students added yet.</p>
        ) : (
          students.map((s, index) => (
            <div key={index} className="card">
              <h3>{s.name}</h3>
              <p><b>Roll:</b> {s.roll}</p>
              <p><b>Class:</b> {s.className}</p>
              <p><b>Section:</b> {s.section}</p>
              <p><b>Grade:</b> {s.grade}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentList;


