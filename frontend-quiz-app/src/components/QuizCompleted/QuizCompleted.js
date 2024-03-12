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
        <h1>Quiz completed</h1>
        <h4>You scored...</h4>
      </div>
      <div className={styles.count}>
        <ChoosenHeading questions={questions} choosenTitle={choosenTitle} />
        <p>{noofcorrectanswers}</p>
        <p>out of {questions.questions.length}</p>
      </div>
      <Button onClick={() => dispatch({ type: "restart" })}>Play Again</Button>
    </div>
  );
}
