import { useEffect } from "react";
import useQuizStore from "../store/store";

function Timer() {
  const { status, setTimer, timeLeft, questions } = useQuizStore();

  useEffect(() => {
    if (status === "playing" && timeLeft === 0 && questions.length > 0) {
      const totalTime = questions.length * 1;
      setTimer(totalTime);
    }
  }, [status, questions, timeLeft, setTimer]);

  useEffect(() => {
    if (status !== "playing") return;

    const interval = setInterval(() => {
      useQuizStore.setState((prev) => {
        if (prev.timeLeft > 1) {
          return { timeLeft: prev.timeLeft - 1 };
        } else {
          clearInterval(interval);
          return {
            timeLeft: 0,
            status: "finished",
            highestScore:
              prev.points > prev.highestScore ? prev.points : prev.highestScore,
          };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <p className="timer">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
}

export default Timer;
