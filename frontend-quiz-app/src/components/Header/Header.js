import styles from "./Header.module.css";
import Title from "./Title";

export default function Header({ questions, dispatch, darkMode }) {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <h1
          className={styles.head}
          style={{
            color: darkMode ? "var(--color-white)" : "var(--color-dark-grey)",
          }}
        >
          Welcome to the
          <strong className={styles.headBold}> Frontend Quiz!</strong>
        </h1>
        <p
          className={styles.para}
          style={{
            color: darkMode
              ? "var(--color-very-light-grey)"
              : "var(--color-light-grey)",
          }}
        >
          Pick a subject to get started.
        </p>
      </div>
      <Title questions={questions} dispatch={dispatch} darkMode={darkMode} />
    </div>
  );
}
