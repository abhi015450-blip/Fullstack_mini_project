import React from "react";

const StudentDetails = ({ student }) => {
  if (!student) return <p>Select a student to view details.</p>;

  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Roll:</strong> {student.roll}</p>
      <p><strong>Section:</strong> {student.section}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <p><strong>Marks:</strong> {student.marks}</p>
    </div>
  );
};

export default StudentDetails;



