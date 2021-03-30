import { useRef } from "react";
import styles from "./header.module.css";

const Header = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;

    onSearch(value);
  };

  const onClick = (event) => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <span className={styles.headerName}>YOUTUBE</span>
      </div>
      <input
        type="search"
        placeholder="Search"
        ref={inputRef}
        className={styles.input}
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.btnImg} src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default Header;
