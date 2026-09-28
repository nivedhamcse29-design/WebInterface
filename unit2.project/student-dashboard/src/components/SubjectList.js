import React from "react";
import "./SubjectList.css";

function SubjectList({ subjects }) {
  return (
    <div className="subjects">
      <h3 className="subjects__title">Enrolled Subjects</h3>
      <ul className="subjects__list">
        {subjects.map((subject, index) => (
          <li key={subject}>
            <span className="subjects__index">{String(index + 1).padStart(2, "0")}</span>
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SubjectList;
