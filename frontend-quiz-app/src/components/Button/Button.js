import styles from "./Button.module.css";

export default function Button({ children, onClick }) {
  // function nextButton() {
  //   console.log("i m clicked");
  // }
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
}
