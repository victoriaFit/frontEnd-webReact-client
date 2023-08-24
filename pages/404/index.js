import React from 'react';
import Link from 'next/link';
import styles from '../../styles/404.module.css'; 

const Custom404 = () => {
  return (
    <div className={styles.errorContainer}>
      <img className={styles.errorImage} src="https://cdn.discordapp.com/attachments/1091506792900595863/1144341132973715528/caution-sign.png" alt="" />
      <h1 className={styles.errorTitle}>Página não encontrada!</h1>
      <p className={styles.errorDescription}>Pode ficar tranquilo(a), estamos cientes disso e estamos lidando com a situação.</p>
      <Link href="/">
        <a className={styles.errorButton}>Retornar para página inicial</a>
      </Link>
    </div>
  );
};

export default Custom404;
