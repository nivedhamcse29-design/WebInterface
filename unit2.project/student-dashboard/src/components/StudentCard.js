import React from "react";
import "./StudentCard.css";
const nameStyle = { color: "#1d4ed8" }; 
const cgpaStyle = { color: "#15803d" }; 
const attendanceStyle = { color: "#c2650c" }; 

function StudentCard({ name, registerNo, department, year, cgpa, attendance, photo }) {
  const isAttendanceEligible = attendance >= 75;
  const isPlacementEligible = cgpa >= 8;
  return (
    <div className="id-card">
      <div className="id-card__band">Identity Card</div>
      <div className="id-card__photo-wrap">
        <img className="id-card__photo" src={photo} alt={name} />
      </div>
      <h2 className="id-card__name" style={nameStyle}>
        {name}
      </h2>
      <p className="id-card__dept">
        {department} &middot; Year {year}
      </p>
      <dl className="id-card__facts">
        <div>
          <dt>Register No</dt>
          <dd>{registerNo}</dd>
        </div>
        <div>
          <dt>Department</dt>
          <dd>{department}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{year}</dd>
        </div>
        <div>
          <dt>CGPA</dt>
          <dd style={cgpaStyle}>{cgpa}</dd>
        </div>
        <div>
          <dt>Attendance</dt>
          <dd style={attendanceStyle}>{attendance}%</dd>
        </div>
      </dl>
      <div className="id-card__status">
        <div className={`status-seal ${isAttendanceEligible ? "status-seal--good" : "status-seal--bad"}`}>
          <span className="status-seal__label">Attendance Status</span>
          <span className="status-seal__value">
            {isAttendanceEligible ? "Eligible for Semester Exam" : "Not Eligible"}
          </span>
        </div>
        <div className={`status-seal ${isPlacementEligible ? "status-seal--good" : "status-seal--bad"}`}>
          <span className="status-seal__label">Placement Status</span>
          <span className="status-seal__value">{isPlacementEligible ? "Eligible" : "Need Improvement"}</span>
        </div>
      </div>
    </div>
  );
}
export default StudentCard;
