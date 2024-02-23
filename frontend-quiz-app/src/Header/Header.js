import styles from "./Header.module.css";

export default function Header({ questions, dispatch }) {
  //   const title = questions[0];
  //   console.log(questions.quizzes[0].title);
  console.log("in header:", dispatch);
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <h1 className={styles.head}>
          Welcome to the
          <strong className={styles.headingBold}>Frontend Quiz</strong>
        </h1>
      </div>
      {questions.quizzes.map((question, index) => (
        <div
          className={styles.headingTopic}
          onClick={() => dispatch({ type: "choosenTopic", payload: index })}
        >
          <img src={`${question.icon}`} alt="icon" />
          <p>{question.title}</p>
        </div>
      ))}
    </div>
  );
}
