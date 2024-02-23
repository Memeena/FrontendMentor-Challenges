import { useState } from "react";

export default function Questions({
  questions,
  numQuestions,
  index,
  dispatch,
  answer,
  hasAnswered,
  iscorrect,
}) {
  console.log("in question", questions);
  console.log(iscorrect);
  const [answerClicked, setAnswerClicked] = useState("");

  return (
    <div className="questions">
      <p>
        Question {index + 1} of {numQuestions}
      </p>
      <h1>{questions.question}</h1>
      <div>
        {questions.options.map((option, index) => (
          <button
            // className={`btn btn-option ${index === answer ? "answer" : ""} ${
            //   hasAnswered
            //     ? index === question.correctOption
            //       ? "correct"
            //       : "wrong"
            //     : ""
            // }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => setAnswerClicked(option)}
          >
            {option}
          </button>
        ))}
        {hasAnswered && index + 1 < numQuestions ? (
          <button onClick={() => dispatch({ type: "nextQuestion" })}>
            Next Question
          </button>
        ) : (
          <button
            onClick={() => {
              console.log(answerClicked);
              return dispatch({ type: "checkAnswer", payload: answerClicked });
            }}
          >
            Submit answer
          </button>
        )}
      </div>
    </div>
  );
}
