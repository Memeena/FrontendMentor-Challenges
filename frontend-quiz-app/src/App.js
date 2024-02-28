import { useReducer } from "react";
import data from "./data/data.json";
import Header from "./Header/Header";
import Questions from "./Questions/Questions";
import "./index.css";
import { ReactComponent as MoonLight } from "./assets/images/icon-moon-light.svg";
import { ReactComponent as SunLight } from "./assets/images/icon-sun-light.svg";
import Main from "./Main";

console.log(data);

const initalState = {
  status: "ready",
  questions: data,
  choosenTitle: null,
  index: 0,
  answer: null,
  hasAnswered: false,
  iscorrect: false,
  noofcorrectanswers: 0,
};

function reducer(state, action) {
  // console.log(state, action);
  switch (action.type) {
    case "choosenTopic":
      console.log(action.payload);
      const choosenTitle = state.questions.quizzes[action.payload].title;
      return {
        ...state,
        choosenTitle: choosenTitle,
        status: "active",
        questions: data.quizzes[action.payload],
      };

    case "checkAnswer":
      console.log(
        "checking answer",
        state.index + 1,
        state.questions.questions.length
      );

      return {
        ...state,
        hasAnswered: true,
        iscorrect:
          action.payload === state.questions.questions[state.index].answer,
        status:
          state.index + 1 === state.questions.questions.length
            ? "finished"
            : state.status,
        noofcorrectanswers:
          action.payload === state.questions.questions[state.index].answer
            ? state.noofcorrectanswers + 1
            : state.noofcorrectanswers,
      };
    case "nextQuestion":
      console.log("next question");
      return { ...state, index: state.index + 1, hasAnswered: false };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [
    {
      questions,
      status,
      choosenTitle,
      index,
      answer,
      hasAnswered,
      iscorrect,
      noofcorrectanswers,
    },
    dispatch,
  ] = useReducer(reducer, initalState);

  return (
    <div className="app">
      <div className="mode">
        <SunLight className="icon-sun" />
        <div className="mode-wrapper">
          <div className="mode-ball"></div>
        </div>
        <MoonLight className="icon-moon" />
      </div>
      <Main className="main">
        {status === "ready" && (
          <Header questions={questions} dispatch={dispatch} />
        )}

        {status === "active" && (
          <div>
            <img src={`${questions.icon}`} alt="icon" />

            <p>{choosenTitle}</p>
            <Questions
              questions={questions.questions[index]}
              numQuestions={questions.questions.length}
              index={index}
              dispatch={dispatch}
              answer={answer}
              hasAnswered={hasAnswered}
              iscorrect={iscorrect}
            />

            {/* </Questions> */}
          </div>
        )}

        {status === "finished" && (
          <h1>
            You have reached end of the quiz! scored {noofcorrectanswers} out of
            {questions.questions.length}
          </h1>
        )}
      </Main>
    </div>
  );
}

export default App;
