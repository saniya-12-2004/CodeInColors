import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="holi-home">
      <div className="overlay">
        <h1 className="holi-title">HAPPY HOLI</h1>

        <p className="holi-quote">
          "Let the colors of Holi fill your life with happiness,
          success, and endless opportunities."
        </p>

        <button
          className="holi-btn"
          onClick={() => navigate("/color")}
        >
          Start My Colorful Journey 🎨
        </button>
      </div>
    </div>
  );
}

export default Home;