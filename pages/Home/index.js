import Layout from "../../components/Layout";
import styles from "../../styles/home.module.css";

const Home = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <Layout showHeader={false}>
      <div className={styles.introContainer}>
        <div className={styles.introText}>
          <h1><span className={styles.introTextOrange}>Assistaência</span>. Exatamente o que você precisa.</h1>
          <p className={styles.introTextDescription}>Suporte e manutenção especializada para equipamentos de academia. Seja para sua casa ou negócio, estamos aqui para garantir que seus equipamentos estejam sempre em perfeitas condições.</p>
          <button onClick={handleScrollDown}>Descubra Mais</button>
        </div>
      </div>
      <div>
        <p>A</p>
      </div>
    </Layout>
  );
};

export default Home;
