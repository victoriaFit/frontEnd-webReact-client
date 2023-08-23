import styles from "../../styles/home.module.css";
import Link from 'next/link';

const Layout = ({ children, showHeader = true }) => { 
    return (
      <div className={styles.container}>
        {showHeader && ( 
          <header className={styles.header}>
            <Link href="/"><a className={styles["header-link"]}>Início</a></Link>
            <Link href="/Services"><a className={styles["header-link"]}>Serviços</a></Link>
            <Link href="/Questions"><a className={styles["header-link"]}>Contato e FAQ</a></Link>
          </header>
        )}
        {children}
      </div>
    );
};

export default Layout;
