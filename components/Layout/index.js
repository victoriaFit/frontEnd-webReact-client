import styles from "../../styles/home.module.css";
import Link from 'next/link';

const Layout = ({ children, showHeader = true }) => { 
    return (
      <div className={styles.container}>
        {showHeader && ( 
          <header className={styles.header}>
            <Link href="/" className={styles["header-link"]}>Início</Link>
            <Link href="/About" className={styles["header-link"]}>Sobre Nós</Link>
            <Link href="/Services" className={styles["header-link"]}>Serviços</Link>
            <Link href="/Questions" className={styles["header-link"]}>Dúvidas e FAQ</Link>
          </header>
        )}
        {children}
      </div>
    );
  };
  
export default Layout;
