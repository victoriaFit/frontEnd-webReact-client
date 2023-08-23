import React, { useState } from 'react';
import styles from "../../styles/home.module.css";

const Layout = ({ children, showHeader = true }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? styles.darkContainer : styles.container}>
      {showHeader && (
        <header className={styles.header}>
          <div className={styles.left}>
            <span className={styles.companyName}>victoria.fit</span>
          </div>
          <div className={styles.right}>
            <img
              src={isDarkTheme
                ? "https://cdn.discordapp.com/attachments/1091506792900595863/1144045840340619285/moon.png"
                : "https://cdn.discordapp.com/attachments/1091506792900595863/1144048381535211550/sun.png"}
              alt="Toggle Theme"
              className={styles.themeButton}
              onClick={toggleTheme}
            />
          </div>
        </header>
      )}
      {children}
    </div>
  );
};

export default Layout;
