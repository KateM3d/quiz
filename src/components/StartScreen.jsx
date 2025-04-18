import React from "react";

const StartScreen = ({ numberOfQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to The Quiz Please!</h2>
      <h3>{numberOfQuestions} questions to test your travel knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
