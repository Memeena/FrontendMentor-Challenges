import styles from "./Question.module.css";
import Button from "../Button/Button";

export default function Questions({
  questions,
  numQuestions,
  index,
  dispatch,
  answer,
  hasAnswered,
  iscorrect,
}) {
  console.log(numQuestions, index, hasAnswered);

  // function nextButton() {
  //   console.log("next button clicked");
  // }

  return (
    <div className={styles.questions}>
      <div className={styles.question}>
        <h5 className={styles.qnNumber}>
          Question {index + 1} of {numQuestions}
        </h5>
        <h2 className={styles.qn}>{questions.question}</h2>
      </div>
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
            onClick={() => dispatch({ type: "answerClicked", payload: option })}
            className={styles.option}
          >
            <span className={styles.optionCount}>
              {index === 0
                ? "A"
                : String.fromCharCode("A".charCodeAt() + index)}
            </span>
            <p>{option}</p>
          </button>
        ))}
      </div>

      <div className={styles.button}>
        {hasAnswered && index + 1 < numQuestions ? (
          <Button
            onClick={() => {
              console.log("next button clicked");
              return dispatch({ type: "nextQuestion" });
            }}
          >
            Next Question
          </Button>
        ) : (
          <Button
            onClick={() => {
              return dispatch({
                type: "checkAnswer",
                payload: answer,
              });
            }}
          >
            Submit answer
          </Button>
        )}
      </div>
    </div>
  );
}
