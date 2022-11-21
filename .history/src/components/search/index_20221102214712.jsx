import React from 'react';
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="g" />
    </div>
  )
}

export default Search;
