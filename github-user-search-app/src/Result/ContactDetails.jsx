import styles from "./ContactDetails.module.css";

export default function ContactDetails({ icon, value }) {
  return (
    <div className={styles.contactDet}>
      <img
        src={`../../assets/${icon}.svg`}
        alt="icon"
        className={styles.contactIcon}
      />
      <p
        className={`{styles.contactValue} ${
          !value ? styles.notAvailable : ""
        }`}>
        {value ? value : "Not Available"}
      </p>
    </div>
  );
}
