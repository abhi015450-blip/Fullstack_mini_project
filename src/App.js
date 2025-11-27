import React, { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import './styles.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState("dashboard");

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) {
      setStudents(JSON.parse(saved));
    }
  }, []);

  // Save every time data updates
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
    setView("dashboard");
  };

  return (
    <div className="main-container">
      {view === "dashboard" && (
        <StudentList students={students} goAdd={() => setView("add")} />
      )}

      {view === "add" && (
        <StudentForm addStudent={addStudent} goBack={() => setView("dashboard")} />
      )}
    </div>
  );
};

export default App;


