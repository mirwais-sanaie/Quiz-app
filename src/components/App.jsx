import { useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Error from "./Error";

const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, status: "succes", questions: action.payload };
    case "loading":
      return { ...state, status: "loading" };
    case "failed":
      return { ...state, status: "error" };
    default:
      return;
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numOfQuestions = questions.length;

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
        {status === "succes" && <StartScreen numOfQuestions={numOfQuestions} />}
        {status === "error" && <Error />}
      </Main>
    </div>
  );
}

export default App;
