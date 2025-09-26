import React from "react";

const FinishScreen = ({ points, maxPoints, dispatch }) => {
  const percentage = (points / maxPoints) * 100;

  let emoji, message, color;

  if (percentage === 100) {
    emoji = "🏆";
    message = "Perfect! You're a quiz master!";
    color = "var(--gradient-success)";
  } else if (percentage >= 80) {
    emoji = "🎉";
    message = "Excellent work!";
    color = "var(--gradient-primary)";
  } else if (percentage >= 60) {
    emoji = "👍";
    message = "Good job!";
    color = "var(--gradient-secondary)";
  } else {
    emoji = "💪";
    message = "Keep practicing!";
    color = "var(--gradient-error)";
  }

  return (
    <div className="finish-screen">
      <div style={{ fontSize: "6rem", marginBottom: "2rem" }}>{emoji}</div>
      <h2>Quiz Complete!</h2>
      <div className="result" style={{ background: color }}>
        <span>{emoji}</span>
        You scored {points} out of {maxPoints} points ({Math.ceil(percentage)}%)
      </div>
      <p className="finish-message">{message}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        🔄 Try Again
      </button>
    </div>
  );
};

export default FinishScreen;
