import React, { useState, useEffect } from 'react';
import styles from "../../styles/home.module.css";

const Layout = ({ children, showHeader = true }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isDarkTheme ? styles.darkContainer : styles.container}>
      {showHeader && (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`} style={{ backgroundColor: isDarkTheme ? 'hsl(207, 8%, 13%)' : 'var(--body-color)' }}>
          <div className={styles.left}>
            <span className={styles.companyName} style={{ color: isDarkTheme ? 'white' : 'black' }}>project name</span>
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
      {React.cloneElement(children, { isDarkTheme })}
    </div>
  );
};

export default Layout;
