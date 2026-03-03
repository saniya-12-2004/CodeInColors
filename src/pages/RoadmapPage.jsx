import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function RoadmapPage() {
  const { careerType } = useParams();
  const navigate = useNavigate();

  const roadmaps = {
    developer: [
      "Learn HTML & CSS",
      "Master JavaScript",
      "Learn React",
      "Build 5 Projects",
      "Apply for Internships"
    ],
    startup: [
      "Learn Business Basics",
      "Find a Real Problem",
      "Build MVP",
      "Learn Marketing",
      "Launch Startup"
    ],
    leader: [
      "Improve Communication",
      "Build Confidence",
      "Learn Team Management",
      "Lead Small Projects",
      "Inspire Others"
    ]
  };

  const [completed, setCompleted] = useState([]);

  const toggleStep = (index) => {
    if (completed.includes(index)) {
      setCompleted(completed.filter((i) => i !== index));
    } else {
      setCompleted([...completed, index]);
    }
  };

  const totalSteps = roadmaps[careerType]?.length || 0;
  const progress = (completed.length / totalSteps) * 100;

  return (
    <div className="roadmap-page">

      <h1>🚀 Your Career Roadmap</h1>

      {/* Progress Bar */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="progress-text">{Math.round(progress)}% Completed</p>

      {/* Steps */}
      <div className="steps">
        {roadmaps[careerType]?.map((step, index) => (
          <div
            key={index}
            className={`step-card ${completed.includes(index) ? "done" : ""}`}
            onClick={() => toggleStep(index)}
          >
            {completed.includes(index) ? "✅ " : "⬜ "}
            {step}
          </div>
        ))}
      </div>

      {/* Completion Message */}
      {progress === 100 && (
        <h2 className="complete-msg">
          🎉 Amazing! You Are Ready To Shine!
        </h2>
      )}

      <button className="back-btn" onClick={() => navigate("/fortune")}>
        🔙 Back
      </button>

    </div>
  );
}

export default RoadmapPage;