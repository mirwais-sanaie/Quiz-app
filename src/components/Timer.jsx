import { useEffect } from "react";

function Timer({ dispatch, timer, numOfQuestions }) {
  let time = numOfQuestions * 30;
  // const min = time / 60;
  // const sec = time % 60;

  useEffect(
    function () {
      const myTimer = setInterval(() => {
        time--;
        dispatch({ type: "changeTime", payload: time });
      }, 1000);

      return function cleanup() {
        clearInterval(myTimer);
      };
    },
    [dispatch, time]
  );

  return <p className="timer">{timer}</p>;
}

export default Timer;
