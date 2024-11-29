import { useEffect } from "react";

function Timer({ dispatch, timer, numOfQuestions }) {
  let time = numOfQuestions * 30;
  const min = Math.trunc(timer / 60);
  const sec = timer % 60;

  useEffect(
    function () {
      const myTimer = setInterval(() => {
        if (time > 0) {
          time--;
        }
        dispatch({ type: "changeTime", payload: time });
      }, 1000);

      return function cleanup() {
        clearInterval(myTimer);
      };
    },
    [dispatch, time]
  );

  return (
    <p className="timer">
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </p>
  );
}

export default Timer;
