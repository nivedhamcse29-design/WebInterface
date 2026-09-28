import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import { Link } from "react-router-dom";
const ReportContext = createContext();
const initialStudents = [
  {
    id: 1,
    name: "Nivedha",
    dept: "CSE",
    year: "II",
    tamil: 85,
    english: 78,
    maths: 92,
    ds: 88,
    dbms: 90
  },
  {
    id: 2,
    name: "Priya",
    dept: "CSE",
    year: "II",
    tamil: 80,
    english: 82,
    maths: 75,
    ds: 86,
    dbms: 84
  },
  {
    id: 3,
    name: "Kaviya",
    dept: "IT",
    year: "II",
    tamil: 70,
    english: 76,
    maths: 68,
    ds: 80,
    dbms: 74
  },
  {
    id: 4,
    name: "Harini",
    dept: "ECE",
    year: "II",
    tamil: 90,
    english: 88,
    maths: 94,
    ds: 91,
    dbms: 89
  }
];
export function ReportProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved
      ? JSON.parse(saved)
      : initialStudents;
  });
  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );
  }, [students]);
  const addStudent = (student) => {
    setStudents([
      ...students,
      {
        ...student,
        id: Date.now()
      }
    ]);
  };
  const deleteStudent = (id) => {
    setStudents(
      students.filter(
        student => student.id !== id
      )
    );
  };
  const editStudent = (id) => {
    const student = students.find(
      item => item.id === id
    );
    const name = prompt(
      "Enter student name",
      student.name
    );
    if (name) {
      setStudents(
        students.map(item =>
          item.id === id
            ? {
                ...item,
                name: name
              }
            : item
        )
      );
    }
  };
  return (
    <ReportContext.Provider
      value={{
        students,
        addStudent,
        deleteStudent,
        editStudent
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}
function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎓 EduAdmin</h2>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/students">
          Students
        </Link>
        <Link to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}
export function Admin() {
  const { students } =
    useContext(ReportContext);
  const passed = students.filter(student => {
    const total =
      student.tamil +
      student.english +
      student.maths +
      student.ds +
      student.dbms;
    return total / 5 >= 40;
  }).length;
  return (
    <>
      <Navbar />
      <main className="dashboard">
        <div className="welcome">
          <div>
            <p>WELCOME ADMIN 👋</p>
            <h1>
              Student Report Dashboard
            </h1>
            <span>
              Manage student marks and academic
              performance.
            </span>
          </div>
          <div className="admin">
            👩‍💼 Admin
          </div>
        </div>
        <div className="cards">
          <div className="card purple">
            <h3>👨‍🎓</h3>
            <p>Total Students</p>
            <b>{students.length}</b>
          </div>
          <div className="card green">
            <h3>✅</h3>
            <p>Passed</p>
            <b>{passed}</b>
          </div>
          <div className="card orange">
            <h3>📚</h3>
            <p>Subjects</p>
            <b>5</b>
          </div>
          <div className="card blue">
            <h3>📊</h3>
            <p>Class</p>
            <b>II</b>
          </div>
        </div>
        <section className="panel">
          <h2>Student Overview</h2>
          <p>
            View all student marks and results.
          </p>
          <Link
            to="/students"
            className="view-button"
          >
            View Students →
          </Link>
        </section>
      </main>
    </>
  );
}
export function Students() {
  const {
    students,
    addStudent,
    deleteStudent,
    editStudent
  } = useContext(ReportContext);
  const [search, setSearch] =
    useState("");
  const filteredStudents =
    students.filter(student =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  const addNewStudent = () => {
    const name =
      prompt("Enter student name");

    if (!name) return;
    const dept =
      prompt("Enter department");
    addStudent({
      name: name,
      dept: dept || "CSE",
      year: "II",
      tamil: 75,
      english: 75,
      maths: 75,
      ds: 75,
      dbms: 75
    });
  };
  return (
    <>
      <Navbar />
      <main className="students-page">
        <div className="page-header">
          <div>
            <h1>All Students</h1>
            <p>
              Student marks and report cards
            </p>
          </div>
          <button
            className="add-button"
            onClick={addNewStudent}
          >
            + Add Student
          </button>
        </div>
        <div className="search">
          🔍
          <input
            placeholder="Search student..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Dept</th>
                <th>Tamil</th>
                <th>English</th>
                <th>Maths</th>
                <th>DS</th>
                <th>DBMS</th>
                <th>Total</th>
                <th>Avg</th>
                <th>Grade</th>
                <th>Result</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => {
                const total =
                  student.tamil +
                  student.english +
                  student.maths +
                  student.ds +
                  student.dbms;

                const average =
                  total / 5;

                const grade =
                  average >= 90 ? "A+" :
                  average >= 80 ? "A" :
                  average >= 70 ? "B" :
                  average >= 60 ? "C" :
                  average >= 50 ? "D" : "F";

                const result =
                  average >= 40
                    ? "PASS"
                    : "FAIL";
                return (
                  <tr key={student.id}>
                    <td>
                      <b>{student.name}</b>
                    </td>
                    <td>{student.dept}</td>
                    <td>{student.tamil}</td>
                    <td>{student.english}</td>
                    <td>{student.maths}</td>
                    <td>{student.ds}</td>
                    <td>{student.dbms}</td>
                    <td>
                      <b>{total}</b>
                    </td>
                    <td>
                      {average.toFixed(1)}%
                    </td>
                    <td>
                      <span className="grade">
                        {grade}
                      </span>
                    </td>
                    <td>
                      <span
                        className={
                          result === "PASS"
                            ? "pass"
                            : "fail"
                        }
                      >
                        {result}
                      </span>
                    </td>
                    <td>
                      <button
                        className="edit"
                        onClick={() =>
                          editStudent(student.id)
                        }
                      >
                        ✏️
                      </button>
                      <button
                        className="delete"
                        onClick={() =>
                          deleteStudent(student.id)
                        }
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
export function About() {
  return (
    <>
      <Navbar />
      <section className="about">
        <h1>
          Student Report Card System
        </h1>
        <p>
          An Admin-based React application
          for managing student academic records.
        </p>
        <div className="features">
          <div>
            👨‍🎓
            <h3>Student Management</h3>
            <p>
              Add, edit and delete students.
            </p>
          </div>
          <div>
            📊
            <h3>Mark Calculation</h3>
            <p>
              Total and average are calculated
              automatically.
            </p>
          </div>
          <div>
            🏆
            <h3>Grade System</h3>
            <p>
              Grade and result are displayed
              automatically.
            </p>
          </div>
          <div>
            💾
            <h3>Local Storage</h3>
            <p>
              Student data is saved locally.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}