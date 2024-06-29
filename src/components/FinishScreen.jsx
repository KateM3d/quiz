import React from "react";

const FinishScreen = ({ points, maxPoints, highscore, dispatch }) => {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <p className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart the quiz
      </p>
    </>
  );
};

export default FinishScreen;
