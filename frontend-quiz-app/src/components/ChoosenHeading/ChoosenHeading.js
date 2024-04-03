import styles from "./ChoosenHeading.module.css";

export default function ChoosenHeading({ questions, choosenTitle, darkMode }) {
  const iconbg = {
    backgroundColor:
      questions.title === "HTML"
        ? "#FFF1e9"
        : questions.title === "CSS"
        ? "#E0FDEF"
        : questions.title === "Javascript"
        ? "#EBF0FF"
        : "#F6E7FF",
  };
  return (
    <div className={styles.choosenHeading}>
      <img
        src={`${questions.icon}`}
        style={iconbg}
        alt="icon"
        className={styles.iconImage}
      />
      <p
        className={styles.choosenTitle}
        style={{
          color: darkMode ? "var(--color-white)" : "var(--color-dark-grey)",
        }}
      >
        {choosenTitle}
      </p>
    </div>
  );
}
