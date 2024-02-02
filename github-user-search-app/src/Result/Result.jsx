import styles from "./Result.module.css";

export default function Result({ result }) {
  console.log(result);
  const { location, html_url, twitter_username, company } = result;
  console.log(location, html_url, twitter_username, company);

  return (
    <div className={styles.result}>
      <img src={result.avatar_url} alt="userImage" className={styles.image} />
      <div className={styles.userDetails}>
        <div className={styles.nameDetails}>
          <p className={styles.userName}>{result.name}</p>
          <p className={styles.loginName}>@{result.login}</p>
        </div>
        <p className={styles.joinDate}>{result.created_at}</p>
      </div>

      <div className={styles.bio}>{result.bio}</div>

      <div className={styles.repoDetails}>
        <p className={styles.noOfRepos}>Repos {result.public_repos}</p>
        <p className={styles.followers}>Followers {result.followers}</p>
        <p className={styles.following}>Following {result.following}</p>
      </div>

      <div className={styles.contactDetails}>
        <div className={styles.locDetails}>
          <img
            src="../../assets/icon-location.svg"
            alt="location-icon"
            className={styles.locIcon}
          />
          <p className={styles.location}>{result.location}</p>
        </div>

        <div className={styles.blogDetails}>
          <img
            src="../../assets/icon-website.svg"
            alt="website-icon"
            className={styles.websiteIcon}
          />
          <p className={styles.website}>{result.html_url}</p>
        </div>

        <div className={styles.twitterDetails}>
          <img
            src="../../assets/icon-twitter.svg"
            alt="twitter-icon"
            className={styles.twitterIcon}
          />
          <p className={styles.twitterName}>{result.twitter_username}</p>
        </div>

        <div className={styles.companyDetails}>
          <img
            src="../../assets/icon-company.svg"
            alt="company-icon"
            className={styles.locIcon}
          />
          <p className={styles.company}>{result.company}</p>
        </div>
      </div>
    </div>
  );
}
