import { useEffect } from "react";
import styles from "./Search.module.css";

export default function Search({ searchUser, setSearchUser, setResult }) {
  const searchIcon = "../../assets/icon-search.svg";

  useEffect(() => {}, [searchUser]);

  function handleInputChange(e) {
    setSearchUser(e.target.value);
  }

  //Fetching from API using Asyunc function
  async function fetchAPI(user) {
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      if (!data.message) {
        setResult(data);
      } else {
        //Setting the Error state if there is no data available from the API
        console.log("error");
      }
    } catch (err) {
      console.log("error");

      //Setting the Error state if there is a different status code from the Fetch API function
      // setErr((prev) => {
      //   return {
      //     ...prev,
      //     err: true,
      //     title: "Could not fetch from API",
      //     message: err,
      //     resolution: "Please try again later..",
      //   };
      // });
    }
  }

  //Handling the Search after click of the Search Icon
  function handleSearchUser(e) {
    e.preventDefault();

    //If there is no word entered in the input field
    if (!searchUser) {
      // setError({ error: true, msg: "Whoops, can't be empty..." });
      // setResult("");
      return;
    }

    //Fetching from API
    fetchAPI(searchUser);

    //Clearing the input field
    setSearchUser("");
  }

  return (
    <div className={styles.search}>
      <form className={styles.searchForm}>
        <img src={searchIcon} alt="search-icon" className={styles.searchIcon} />
        {/* <label htmlFor="search"></label> */}
        <input
          id="search"
          type="text"
          placeholder="Search Github username..."
          onChange={handleInputChange}
          value={searchUser}
          className={styles.input}></input>
        <button className={styles.btn} onClick={handleSearchUser}>
          Search
        </button>
      </form>
    </div>
  );
}
