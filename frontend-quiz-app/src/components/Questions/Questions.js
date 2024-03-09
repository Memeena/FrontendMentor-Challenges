import styles from "./Question.module.css";
import Button from "../Button/Button";
import "../../index.css";

export default function Questions({
  questions,
  numQuestions,
  index,
  dispatch,
  answer,
  hasAnswered,
  iscorrect,
  answerSubmitted,
}) {
  console.log(answerSubmitted, hasAnswered);

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
        {questions.options.map((option, i) => (
          <button
            key={option}
            disabled={answerSubmitted}
            onClick={() => dispatch({ type: "answerClicked", payload: option })}
            className={styles.option}
            style={{
              border: answerSubmitted
                ? iscorrect
                  ? option === questions.answer
                    ? "5px solid var(--color-green)"
                    : "none"
                  : option === answer
                  ? "5px solid var(--color-red)"
                  : "none"
                : hasAnswered
                ? option === answer
                  ? "5px solid var(--color-blue)"
                  : "none"
                : "none",
            }}
          >
            <span
              className={styles.optionCount}
              style={{
                backgroundColor: answerSubmitted
                  ? iscorrect
                    ? option === questions.answer
                      ? "var(--color-green)"
                      : "none"
                    : option === answer
                    ? "var(--color-red)"
                    : "none"
                  : hasAnswered
                  ? option === answer
                    ? "var(--color-blue)"
                    : "none"
                  : "none",
                color:
                  answerSubmitted || hasAnswered
                    ? option === answer
                      ? "var(--color-white)"
                      : "var(--color-light-grey)"
                    : "var(--color-light-grey)",
              }}
            >
              {i === 0 ? "A" : String.fromCharCode("A".charCodeAt() + i)}
            </span>
            <p>{option}</p>
            {answerSubmitted ? (
              iscorrect ? (
                option === answer ? (
                  <img
                    className={styles.chkicon}
                    src="../../assets/images/icon-correct.svg"
                    alt="icon"
                  />
                ) : (
                  ""
                )
              ) : option === questions.answer ? (
                <img
                  className={styles.chkicon}
                  src="../../assets/images/icon-correct.svg"
                  alt="icon"
                />
              ) : option === answer ? (
                <img
                  className={styles.chkicon}
                  src="../../assets/images/icon-incorrect.svg"
                  alt="icon"
                />
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </button>
        ))}
      </div>

      <div className={styles.button}>
        {answerSubmitted && index + 1 < numQuestions ? (
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
                // payload: answer,
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
