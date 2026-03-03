import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function GiftPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);

    setTimeout(() => {
      navigate("/fortune", { state: location.state });
    }, 1200);
  };

  return (
    <div className="gift-page">
      <h1 className="gift-title">🎁 Tap To Reveal Your Holi Fortune</h1>

      <div
        className={`gift-box ${open ? "open" : ""}`}
        onClick={handleClick}
      >
        {open ? "✨" : "🎁"}
      </div>
    </div>
  );
}

export default GiftPage;