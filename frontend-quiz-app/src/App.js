import { useEffect, useReducer, useState } from "react";
import data from "./data/data.json";
import "./index.css";
import { ReactComponent as MoonLight } from "./assets/images/icon-moon-light.svg";
import { ReactComponent as SunLight } from "./assets/images/icon-sun-light.svg";
import Main from "./Main";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";
import QuizCompleted from "./components/QuizCompleted/QuizCompleted";
import ChoosenHeading from "./components/ChoosenHeading/ChoosenHeading";

const initalState = {
  status: "ready",
  questions: data,
  choosenTitle: null,
  index: 0,
  answer: null,
  answerSubmitted: false,
  hasAnswered: false,
  iscorrect: false,
  noofcorrectanswers: 0,
  noanswer: false,
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

    case "answerClicked":
      console.log("answer clicked");
      return {
        ...state,
        answer: action.payload,
        hasAnswered: true,
        noanswer: false,
      };

    case "checkAnswer":
      console.log(
        "checking answer",
        state.index + 1,
        state.questions.questions.length
      );
      if (!state.hasAnswered) return { ...state, noanswer: true };

      return {
        ...state,
        answerSubmitted: true,
        hasAnswered: false,
        iscorrect:
          state.answer === state.questions.questions[state.index].answer,

        noofcorrectanswers:
          state.answer === state.questions.questions[state.index].answer
            ? state.noofcorrectanswers + 1
            : state.noofcorrectanswers,
      };
    case "nextQuestion":
      console.log("next question");
      return {
        ...state,
        index: state.index + 1,
        hasAnswered: false,
        answerSubmitted: false,
        answer: null,
        iscorrect: false,
        noanswer: false,
      };
    case "finishQuiz":
      console.log(
        "Finishing quiz!",
        state.index,
        state.questions.questions.length,
        state.status
      );
      return {
        ...state,
        status:
          state.index + 1 === state.questions.questions.length
            ? "finished"
            : state.status,
      };
    case "restart":
      return initalState;

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
      answerSubmitted,
      noanswer,
    },
    dispatch,
  ] = useReducer(reducer, initalState);

  const [darkMode, setDarkMode] = useState(false);
  const [width, setWidth] = useState(0); //To update the width state based on the device

  function updateWidth() {
    const width = window.innerWidth;
    setWidth(width);
  }

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const device = width > 768 ? "desktop" : width > 592 ? "tablet" : "mobile";
  const mode = darkMode ? "dark" : "light";
  console.log(device, mode);

  const iconColorChange = {
    color: darkMode ? "var(--color-white)" : "var(--color-grey)",
  };

  return (
    <div
      className="app"
      style={{
        backgroundColor: darkMode ? "#313e51" : "var(--color-background)",
        backgroundImage: `url('../assets/images/pattern-background-${device}-${mode}.svg')`,
      }}
    >
      {status !== "ready" && (
        <ChoosenHeading
          questions={questions}
          choosenTitle={choosenTitle}
          darkMode={darkMode}
        />
      )}
      <div className="mode">
        <SunLight className="icon-sun" style={iconColorChange} />
        <div
          className="mode-wrapper"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          <div
            className="mode-ball"
            style={{ left: darkMode ? "2.3rem" : "0.5rem" }}
          ></div>
        </div>
        <MoonLight className="icon-moon" style={iconColorChange} />
      </div>
      <Main className="main">
        {status === "ready" && (
          <Header
            questions={questions}
            dispatch={dispatch}
            darkMode={darkMode}
          />
        )}

        {status === "active" && (
          <div>
            <Questions
              questions={questions.questions[index]}
              numQuestions={questions.questions.length}
              index={index}
              dispatch={dispatch}
              answer={answer}
              hasAnswered={hasAnswered}
              iscorrect={iscorrect}
              answerSubmitted={answerSubmitted}
              noanswer={noanswer}
              darkMode={darkMode}
            />
          </div>
        )}

        {status === "finished" && (
          <QuizCompleted
            questions={questions}
            choosenTitle={choosenTitle}
            noofcorrectanswers={noofcorrectanswers}
            dispatch={dispatch}
            darkMode={darkMode}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
