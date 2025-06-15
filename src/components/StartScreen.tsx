// { numOfQuestions : number , dispatch }

import useStore from "../store/store";

function StartScreen() {
  const { questions } = useStore();
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{questions.length} questions to test your React mastry</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
