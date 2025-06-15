import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import useStore from "./store/store";
import Loader from "./components/Loader";

function App() {
  const { setQuestion } = useStore();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const response = await fetch("http://localhost:8000/questions");
      const data = await response.json();
      if (response.ok) {
        setQuestion(data);
      }
      setLoading(false);
    }

    getData().catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [setQuestion]);

  return (
    <div className="app">
      <Header />

      {loading ? (
        <Loader />
      ) : (
        <Main>
          <StartScreen />
        </Main>
      )}
    </div>
  );
}

export default App;
