import { useNavigate } from "react-router-dom";

function ColorPage() {
  const navigate = useNavigate();

  const chooseColor = (color) => {
    navigate("/gift", { state: { color } });
  };

  return (
    <div className="color-page">
      <h1 className="color-title">🎨 Choose Your Holi Color</h1>
      <p className="color-subtitle">
        Every color holds a different energy. Pick yours!
      </p>

      <div className="color-grid">
        <div className="color-card pink" onClick={() => chooseColor("pink")}>
          💖 Passion
        </div>

        <div className="color-card yellow" onClick={() => chooseColor("yellow")}>
          🌟 Happiness
        </div>

        <div className="color-card blue" onClick={() => chooseColor("blue")}>
          💙 Growth
        </div>

        <div className="color-card green" onClick={() => chooseColor("green")}>
          🌿 Success
        </div>
      </div>
    </div>
  );
}

export default ColorPage;