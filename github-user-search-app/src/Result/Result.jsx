import styles from "./Result.module.css";
import ContactDetails from "./ContactDetails";

export default function Result({ result }) {
  const { location, html_url, twitter_username, company } = result;

  const date = new Date(result.created_at);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const joinDate = `Joined ${day} ${month} ${year}`;

  const defaultBio = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `;
  return (
    <div className={styles.result}>
      <div className={styles.resultHeader}>
        <img src={result.avatar_url} alt="userImage" className={styles.image} />
        <div className={styles.userDetails}>
          <div className={styles.nameDetails}>
            <p className={styles.userName}>{result.name}</p>
            <p className={styles.loginName}>@{result.login}</p>
          </div>
          <p className={styles.joinDate}>{joinDate}</p>
        </div>
      </div>

      <div className={styles.bio}>{result.bio ? result.bio : defaultBio}</div>

      <div className={styles.repoDetails}>
        <p className={styles.repSub}>
          Repos <span>{result.public_repos}</span>
        </p>
        <p className={styles.repSub}>
          Followers <span>{result.followers}</span>
        </p>
        <p className={styles.repSub}>
          Following <span>{result.following}</span>
        </p>
      </div>

      <div className={styles.contactDetails}>
        <ContactDetails icon={"icon-location"} value={location} />
        <ContactDetails icon={"icon-website"} value={html_url} />
        <ContactDetails icon={"icon-twitter"} value={twitter_username} />
        <ContactDetails icon={"icon-company"} value={company} />
      </div>
    </div>
  );
}
