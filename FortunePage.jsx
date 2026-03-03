import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FortunePage() {
  const [selected, setSelected] = useState(null);
const navigate = useNavigate();
  const careers = {
    developer: {
      badge: "🏆 Future Tech Architect",
      line1: "You are built to solve complex problems.",
      line2: "Your code will shape tomorrow’s world."
    },
    startup: {
      badge: "🚀 Visionary Founder",
      line1: "You think beyond limits.",
      line2: "Your ideas will create new possibilities."
    },
    leader: {
      badge: "🌟 Inspiring Leader",
      line1: "You have natural confidence and clarity.",
      line2: "People will trust and follow your vision."
    }
  };

  const restart = () => {
    setSelected(null);
  };

  return (
    <div className="holi-career-page">

      {!selected ? (
        <>
          <h1 className="career-title">
            🌈 Choose Your Holi Career Fortune 🌈
          </h1>

          <div className="career-options">

            <div
              className="career-option"
              onClick={() => setSelected("developer")}
            >
              💻 Developer
            </div>

            <div
              className="career-option"
              onClick={() => setSelected("startup")}
            >
              🚀 Entrepreneur
            </div>

            <div
              className="career-option"
              onClick={() => setSelected("leader")}
            >
              🌟 Leader
            </div>

          </div>
        </>
      ) : (
        <div className="result-container">

          <div className="badge">
            {careers[selected].badge}
          </div>

          <p className="power-line">
            {careers[selected].line1}
          </p>

          <p className="power-line">
            {careers[selected].line2}
          </p>

          <div className="button-area">
            <button className="again-btn" onClick={restart}>
              🔁 Try Again
            </button>

           <button
  className="journey-btn"
  onClick={() => navigate(`/roadmap/${selected}`)}
>
  🚀 Start My Journey
</button>
          </div>

        </div>
      )}

    </div>
  );
}

export default FortunePage;