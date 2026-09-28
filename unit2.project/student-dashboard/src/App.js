import React from "react";
import "./App.css";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import SubjectList from "./components/SubjectList";
import Footer from "./components/Footer";
import studentPhoto from "./assets/student-photo.jpg";

function App() {
  // ---- Task 4: subjects array ----
  const subjects = ["React", "Java", "Python", "SQL", "DBMS"];

  // ---- Task 5: semester / year values for JSX expressions ----
  const semester = "III";
  const year = "II";

  // Student data - passed down to StudentCard via props (Task 3)
  const student = {
    name: "Nivedha",
    registerNo: "411625104051",
    department: "CSE",
    year: "II",
    cgpa: 8.5,
    attendance: 92.19,
    photo: studentPhoto,
  };

  return (
    <div className="app-shell">
      <Header
        collegeName="Prince Dr.K Vasudevan College of Engineering and Technology"
      />

      <main className="dashboard">
        <section className="dashboard__top">
          <StudentCard
            name={student.name}
            registerNo={student.registerNo}
            department={student.department}
            year={student.year}
            cgpa={student.cgpa}
            attendance={student.attendance}
            photo={student.photo}
          />

          <div className="ledger-panel">
            <h2 className="ledger-panel__title">
              Academic Record
            </h2>

            {/* Task 5: JSX Expressions */}
            <ul className="ledger-list">
              <li>
                <span>Current Semester</span>
                <span className="ledger-list__leader" />
                <strong>{semester}</strong>
              </li>

              <li>
                <span>Current Year</span>
                <span className="ledger-list__leader" />
                <strong>{year}</strong>
              </li>

              <li>
                <span>Total Subjects</span>
                <span className="ledger-list__leader" />
                <strong>{subjects.length}</strong>
              </li>
            </ul>

            <SubjectList subjects={subjects} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="footer-wrapper">
        <Footer
          collegeName="Prince Dr.K Vasudevan College of Engineering and Technology"
        />
      </div>
    </div>
  );
}

export default App;