import React from "react";

const Progress = ({ cursor, numberOfQuestions, points, maxPoints }) => {
  return (
    <header className="progress">
      <progress max={numberOfQuestions} value={cursor} />
      <p>
        Question <strong>{cursor + 1}</strong>/ {numberOfQuestions}
      </p>

      <p>
        Points <strong>{points}</strong>/ {maxPoints}
      </p>
    </header>
  );
};

export default Progress;
