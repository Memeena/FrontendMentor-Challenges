import { useReducer } from "react";
import data from "./data/data.json";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";
import "./index.css";
import { ReactComponent as MoonLight } from "./assets/images/icon-moon-light.svg";
import { ReactComponent as SunLight } from "./assets/images/icon-sun-light.svg";
import Main from "./Main";
import QuizCompleted from "./components/QuizCompleted/QuizCompleted";
import ChoosenHeading from "./components/ChoosenHeading/ChoosenHeading";

console.log(data);

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
      console.log("amswer clicked");
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

  return (
    <div className="app">
      {status !== "ready" && (
        <ChoosenHeading questions={questions} choosenTitle={choosenTitle} />
      )}
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
            />
          </div>
        )}

        {status === "finished" && (
          <QuizCompleted
            questions={questions}
            choosenTitle={choosenTitle}
            noofcorrectanswers={noofcorrectanswers}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
