import Button from "../Button/Button";
import ChoosenHeading from "../ChoosenHeading/ChoosenHeading";
import styles from "./QuizCompleted.module.css";

export default function QuizCompleted({
  noofcorrectanswers,
  questions,
  choosenTitle,
  dispatch,
}) {
  return (
    <div className={styles.quizCompleted}>
      <div className={styles.heading}>
        <h1 className={styles.mainHead}>Quiz completed</h1>
        <h4 className={styles.head}>You scored...</h4>
      </div>
      <div className={styles.count}>
        <ChoosenHeading questions={questions} choosenTitle={choosenTitle} />
        <p className={styles.correctAnswers}>{noofcorrectanswers}</p>
        <p className={styles.totalQn}>out of {questions.questions.length}</p>
      </div>
      <Button
        className={styles.playbtn}
        onClick={() => dispatch({ type: "restart" })}
      >
        Play Again
      </Button>
    </div>
  );
}
