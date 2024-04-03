import styles from "./Title.module.css";
export default function Title({ questions, dispatch, darkMode }) {
  return (
    <div className={styles.title}>
      {questions.quizzes.map((question, index) => (
        <div
          className={styles.titleItem}
          onClick={() => dispatch({ type: "choosenTopic", payload: index })}
          key={index}
          style={{
            backgroundColor: darkMode
              ? "var(--color-medium-grey)"
              : "var(--color-white)",
          }}
        >
          <img
            className={styles.titleImg}
            src={`${question.icon}`}
            alt="icon"
            style={{
              backgroundColor:
                question.title === "HTML"
                  ? "#FFF1e9"
                  : question.title === "CSS"
                  ? "#E0FDEF"
                  : question.title === "JavaScript"
                  ? "#EBF0FF"
                  : "#F6E7FF",
            }}
          />
          <p
            className={styles.titleName}
            style={{
              color: darkMode ? "var(--color-white)" : "var(--color-dark-grey)",
            }}
          >
            {question.title}
          </p>
        </div>
      ))}
    </div>
  );
}
