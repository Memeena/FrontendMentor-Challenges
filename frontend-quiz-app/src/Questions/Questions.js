import { useState } from "react";
import styles from "./Question.module.css";

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
    <div className={styles.questions}>
      <h5 className={styles.qnNumber}>
        Question {index + 1} of {numQuestions}
      </h5>
      <h2 className={styles.question}>{questions.question}</h2>
      <progress
        className={styles.progress}
        max={numQuestions}
        value={index + Number(answer !== null)}
      />

      <div className={styles.options}>
        {questions.options.map((option, index) => (
          <button
            key={option}
            disabled={hasAnswered}
            onClick={() => setAnswerClicked(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className={styles.button}>
        {hasAnswered && index + 1 < numQuestions ? (
          <button onClick={() => dispatch({ type: "nextQuestion" })}>
            Next Question
          </button>
        ) : (
          <button
            onClick={() => {
              console.log(answerClicked);
              return dispatch({
                type: "checkAnswer",
                payload: answerClicked,
              });
            }}
          >
            Submit answer
          </button>
        )}
      </div>
    </div>
  );
}
