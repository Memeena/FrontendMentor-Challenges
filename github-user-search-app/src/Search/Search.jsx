import { useState } from "react";
import styles from "./Search.module.css";

export default function Search({ searchUser, setSearchUser, setResult }) {
  const searchIcon = "../../assets/icon-search.svg";
  const [error, setError] = useState("");

  // useEffect(() => {}, [error]);

  function handleInputChange(e) {
    setError("");
    setSearchUser(e.target.value);
  }

  //Fetching from API using Asyunc function
  async function fetchAPI(user) {
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      console.log(data);
      if (!data.message) {
        setResult(data);
      } else {
        //Setting the Error state if there is no data available from the API
        // console.log("error");
        setError("No results!");
        setResult("");
      }
    } catch (err) {
      console.log("no data");
      setError("No data available!");

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
      setResult("");
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
        {error && <span>{error}</span>}
        <button className={styles.btn} onClick={handleSearchUser}>
          Search
        </button>
      </form>
    </div>
  );
}
