import HobbyCard from "./components/HobbyCard.jsx";
import hobbies from "./data/hobbies.js";
import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="page__header">
        <span className="page__eyebrow">Hobby Card</span>
        <h1 className="page__title">Nivedha's Hobby Card</h1>
      </header>

      <main className="page__grid">
        {hobbies.map((hobby) => (
          <HobbyCard
            key={hobby.id}
            title={hobby.title}
            description={hobby.description}
            icon={hobby.icon}
            accent={hobby.accent}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
