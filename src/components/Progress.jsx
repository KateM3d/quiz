import React from "react";

const Progress = ({ cursor, numberOfQuestions, points, maxPoints, answer }) => {
  return (
    <header className="progress">
      <progress
        max={numberOfQuestions}
        value={cursor + Number(answer !== null)}
      />
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
