import "./Project.css"
import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { Link } from "react-router-dom";
const TodoContext = createContext();
export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (tasks.length > 0) return;
    const getTasks = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.log("API Error");
      } finally {
        setLoading(false);
      }
    };
    getTasks();
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);
  const addTask = (title) => {
    setTasks([
      {
        id: Date.now(),
        title: title,
        completed: false
      },
      ...tasks
    ]);
  };
  const deleteTask = (id) => {
    setTasks(
      tasks.filter(task => task.id !== id)
    );
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );
  };
  const editTask = (id) => {
    const task = tasks.find(
      task => task.id === id
    );
    const newTitle = prompt(
      "Edit Task",
      task.title
    );
    if (newTitle && newTitle.trim()) {
      setTasks(
        tasks.map(task =>
          task.id === id
            ? {
                ...task,
                title: newTitle
              }
            : task
        )
      );
    }
  };
  return (
    <TodoContext.Provider
      value={{
        tasks,
        loading,
        addTask,
        deleteTask,
        toggleTask,
        editTask
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
function Navbar() {
  return (
    <nav className="navbar">
      <h2>✓ TaskFlow</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/about">About</Link>
      </div>
</nav>
  );
}
export function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div>
          <p>✨ SMART TASK MANAGER</p>
          <h1>
            Organize.
            <br />
            <span>Plan. Achieve.</span>
          </h1>
          <p>
            Manage your daily tasks easily
            with TaskFlow.
          </p>
          <Link
            to="/tasks"
            className="hero-button"
          >
            Get Started →
          </Link>
        </div>
        <div className="hero-card">
          <h3>Today's Focus 🔥</h3>
          <p>✅ Complete Project</p>
          <p>✅ Study React</p>
          <p>○ Practice Coding</p>
          <b>Progress: 67%</b>
        </div>
      </section>
    </>
  );
}
export function TodoPage() {
  const {
    tasks,
    loading,
    addTask,
    deleteTask,
    toggleTask,
    editTask
  } = useContext(TodoContext);
  const [input, setInput] = useState("");
  const completed = tasks.filter(
    task => task.completed
  ).length;
  const pending = tasks.length - completed;
  const progress = tasks.length
    ? Math.round(
        (completed / tasks.length) * 100
      )
    : 0;
  const addNewTask = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };
  return (
    <>
      <Navbar />
      <main className="dashboard">
        <h1>My Task Dashboard</h1>
        <p>Stay organized and productive.</p>
        <div className="stats">
          <div>
            <b>{tasks.length}</b>
            <p>Total</p>
          </div>
          <div>
            <b>{completed}</b>
            <p>Completed</p>
          </div>
          <div>
            <b>{pending}</b>
            <p>Pending</p>
          </div>
          <div>
            <b>{progress}%</b>
            <p>Progress</p>
          </div>
        </div>
        <section className="panel">
          <h2>Add New Task</h2>
          <form
            className="add-form"
            onSubmit={addNewTask}
          >
            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="Enter your task..."
            />
            <button>Add Task</button>
          </form>
        </section>
        <section className="panel">
          <h2>My Tasks</h2>
          {loading && (
            <p>Loading tasks...</p>
          )}
          {tasks.map(task => (
            <div
              className={
                task.completed
                  ? "task completed"
                  : "task"
              }
              key={task.id}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  toggleTask(task.id)
                }
              />
              <span>
                {task.title}
              </span>
              <button
                onClick={() =>
                  editTask(task.id)
                }
              >
                ✏️
              </button>
              <button
                onClick={() =>
                  deleteTask(task.id)
                }
              >
                🗑️
              </button>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
export function About() {
  return (
    <>
      <Navbar />
      <section className="about">
        <h1>About TaskFlow</h1>
        <p>
          A React To-Do List project created
          using Unit 5 concepts.
        </p>
        <div className="features">
          <div>
            ⚛️
            <h3>React State</h3>
            <p>useState and useEffect</p>
          </div>
          <div>
            🔗
            <h3>Context API</h3>
            <p>Share task data</p>
          </div>
          <div>
            🌐
            <h3>API</h3>
            <p>Fetch external tasks</p>
          </div>
          <div>
            💾
            <h3>Local Storage</h3>
            <p>Save tasks</p>
          </div>
        </div>
      </section>
    </>
  );
}