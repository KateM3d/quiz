import React from "react";

const StartScreen = ({ numberOfQuestions, dispatch }) => {
  return (
    <div className="start">
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎯</div>
      <h2>Welcome to Quiz Master!</h2>
      <h3>
        Test your knowledge with {numberOfQuestions} challenging questions
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        🚀 Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
