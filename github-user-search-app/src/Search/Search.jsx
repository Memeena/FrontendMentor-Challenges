import styles from "./Search.module.css";

export default function Search() {
  const searchIcon = "../../assets/icon-search.svg";
  return (
    <div className={styles.search}>

    <form className={styles.searchForm}>
    <img src={searchIcon} alt="search-icon" className={styles.searchIcon}/>
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        placeholder="Search Github username..."
        className={styles.input}></input>
      <button className={styles.btn}>Search</button>
    </form>
        </div>
  );
}
