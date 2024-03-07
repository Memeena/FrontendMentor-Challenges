import styles from "./Header.module.css";
import Title from "./Title";

export default function Header({ questions, dispatch }) {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <h1 className={styles.head}>
          Welcome to the
          <strong className={styles.headBold}> Frontend Quiz!</strong>
        </h1>
        <p className={styles.para}>Pick a subject to get started.</p>
      </div>
      <Title questions={questions} dispatch={dispatch} />
    </div>
  );
}
