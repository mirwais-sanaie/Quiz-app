import { useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Error from "./Error";
import Question from "./Question";
import NextQuestion from "./NextButton";
import PrograssBar from "./PrograssBar";
import Timer from "./Timer";
import FinishScreen from "./FinishScreen";

const initialState = {
  questions: [],
  status: "loading",
  answer: null,
  index: 0,
  points: 0,
  timer: 450,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, status: "succes", questions: action.payload };
    case "loading":
      return { ...state, status: "loading" };
    case "failed":
      return { ...state, status: "error" };
    case "active":
      return { ...state, status: "start" };
    case "check":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "newAnswer":
      return { ...state, answer: null, index: state.index + 1 };
    case "changeTime":
      return { ...state, timer: action.payload };
    case "finish":
      return { ...state, status: "finish" };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "succes",
      };
    default:
      return;
  }
}

function App() {
  const [{ questions, status, index, answer, points, timer }, dispatch] =
    useReducer(reducer, initialState);

  const numOfQuestions = questions?.length;
  let total = [];
  function add() {
    questions.map((question) => total.push(question.points));
  }
  add();

  const totalPoints = total.reduce((acc, cur) => acc + cur, 0);

  useEffect(function () {
    async function getData() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        console.log(data);
        dispatch({ type: "dataRecieved", payload: data });
      } catch (error) {
        dispatch({ type: "failed" });
      }
    }

    getData();
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "succes" && (
          <StartScreen dispatch={dispatch} numOfQuestions={numOfQuestions} />
        )}
        {status === "error" && <Error />}
        {status === "finish" && (
          <FinishScreen points={points} dispatch={dispatch} />
        )}
        {status === "start" && (
          <>
            {timer === 0 ? (
              <FinishScreen points={points} dispatch={dispatch} />
            ) : (
              <>
                <PrograssBar
                  points={points}
                  index={index}
                  numOfQuestions={numOfQuestions}
                  totalPoints={totalPoints}
                />
                <Question
                  dispatch={dispatch}
                  question={questions[index]}
                  index={index}
                  answer={answer}
                />
                <Timer
                  dispatch={dispatch}
                  timer={timer}
                  numOfQuestions={numOfQuestions}
                />
              </>
            )}
            {answer !== null && (
              <NextQuestion
                dispatch={dispatch}
                numOfQuestions={numOfQuestions}
                index={index}
              />
            )}
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
