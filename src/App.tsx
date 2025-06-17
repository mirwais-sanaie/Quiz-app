import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import useQuizStore from "./store/store";
import Question from "./components/Question";
import PrograssBar from "./components/PrograssBar";
import Footer from "./components/Footer";
import NextButton from "./components/NextButton";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";

function App() {
  const { setQuestions, status } = useQuizStore();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const response = await fetch("http://localhost:8000/questions");
      const data = await response.json();
      if (response.ok) {
        setQuestions(data);
      }
      setLoading(false);
    }

    getData().catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [setQuestions]);

  return (
    <div className="app">
      <Header />

      {loading ? (
        <Loader />
      ) : (
        <Main>
          {status === "ready" && <StartScreen />}
          {status === "playing" && (
            <>
              <PrograssBar />
              <Question />
              <Footer>
                <Timer />
                <NextButton />
              </Footer>
            </>
          )}
          {status === "finished" && <FinishScreen />}
        </Main>
      )}
    </div>
  );
}

export default App;
