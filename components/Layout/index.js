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
        <header className={styles.header} style={{ backgroundColor: isDarkTheme ? 'hsl(207, 8%, 13%)' : 'var(--body-color)' }}>
          <div className={styles.left}>
          <span className={styles.companyName} style={{ color: isDarkTheme ? '#fff' : 'black' }}>victoria. fit</span>
          </div>
          <div className={styles.right}>
            <img
              src={isDarkTheme
                ? "https://cdn.discordapp.com/attachments/1091506792900595863/1144058096461824010/moon-regular-240.png"
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
