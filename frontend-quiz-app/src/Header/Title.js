import styles from "./Title.module.css";
export default function Title({ questions, dispatch }) {
  return (
    <div className={styles.title}>
      {questions.quizzes.map((question, index) => (
        <div
          className={styles.titleItem}
          onClick={() => dispatch({ type: "choosenTopic", payload: index })}
        >
          <img
            className={styles.titleImg}
            src={`${question.icon}`}
            alt="icon"
          />
          <p className={styles.titleName}>{question.title}</p>
        </div>
      ))}
    </div>
  );
}
