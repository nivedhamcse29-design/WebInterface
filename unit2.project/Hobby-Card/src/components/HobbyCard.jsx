import "./HobbyCard.css";

function HobbyCard({ title, description, icon, accent = "ink" }) {
  return (
    <article className={`hobby-card hobby-card--${accent}`}>
      <span className="hobby-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h2 className="hobby-card__title">{title}</h2>
      <p className="hobby-card__description">{description}</p>
    </article>
  );
}

export default HobbyCard;
