import { useState } from "react";
import "./project.css";

function Project() {

  const students = [
    "Ajay",
  "Arun",
  "Bala",
  "Divya",
  "Eniyal",
  "Eshanth",
  "Gayathri",
  "Harini",
  "Karthik",
  "Lakshaman",
  "Mohan",
  "Nithish",
  "Prabavathi",
  "Rahul",
  "Ram",
  "Ramya",
  "Sabarish",
  "Sneha",
  "Swetha",
  "Varshan"
  ];

  // Initially everyone is Not Marked
  const [attendance, setAttendance] = useState({});

  const markAttendance = (name, status) => {
    setAttendance({
      ...attendance,
      [name]: status
    });
  };

  const present = Object.values(attendance).filter(
    (status) => status === "Present"
  ).length;

  const absent = Object.values(attendance).filter(
    (status) => status === "Absent"
  ).length;

  const notMarked = students.length - present - absent;

  return (
    <div className="attendance-app">

      <div className="attendance-header">
        <h1>Daily Attendance</h1>
        <p>Mark attendance for 20 students</p>
      </div>

      <div className="attendance-card">

        <div className="table-heading">
          <span>Student Name</span>
          <span>Attendance</span>
          <span>Status</span>
        </div>

        {students.map((student, index) => (

          <div className="student-row" key={student}>

            <div className="student-info">
              <span className="student-number">
                {index + 1}
              </span>

              <span className="student-name">
                {student}
              </span>
            </div>

            <div className="attendance-buttons">

              <button
                className={
                  attendance[student] === "Present"
                    ? "btn present selected"
                    : "btn present"
                }
                onClick={() =>
                  markAttendance(student, "Present")
                }
              >
                Present
              </button>

              <button
                className={
                  attendance[student] === "Absent"
                    ? "btn absent selected"
                    : "btn absent"
                }
                onClick={() =>
                  markAttendance(student, "Absent")
                }
              >
                Absent
              </button>

            </div>

            <div
              className={
                attendance[student] === "Present"
                  ? "student-status present-text"
                  : attendance[student] === "Absent"
                  ? "student-status absent-text"
                  : "student-status pending-text"
              }
            >
              {attendance[student] || "Not Marked"}
            </div>

          </div>

        ))}

      </div>

      <div className="summary-box">

        <h2>Attendance Summary</h2>

        <div className="summary-container">

          <div className="summary-item total">
            <span>Total</span>
            <strong>{students.length}</strong>
          </div>

          <div className="summary-item present-box">
            <span>Present</span>
            <strong>{present}</strong>
          </div>

          <div className="summary-item absent-box">
            <span>Absent</span>
            <strong>{absent}</strong>
          </div>

          <div className="summary-item pending-box">
            <span>Not Marked</span>
            <strong>{notMarked}</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Project;