import Layout from "../../components/Layout";
import styles from "../../styles/home.module.css";

const Home = () => {
  return (
    <Layout showHeader={false}>
      <div className={styles.introContainer}>
        <div className={styles.introText}>
          <h1>Seja Bem-vindo!</h1> 
          <p>Explore nossos serviços e descubra como podemos ajudá-lo hoje.</p>
        </div>
        <div className={styles.introBlocks}>
          <div className={styles.upperBlock}>
            <img src="https://cdn.discordapp.com/attachments/1059425565330911284/1130927105417412608/359996092_1018526755953524_8054183437506109014_n.jpg" alt="Chat" className={styles.icon} />
            <div>
              <p>Precisa de uma ajuda para comprar?</p>
              <small>Fale com um especialista</small>
            </div>
          </div>
          <div className={styles.lowerBlock}>
            <img src="https://cdn.discordapp.com/attachments/1091506792900595863/1143575792396279939/chat-bubble.png" alt="Chat" className={styles.icon} />
            <div>
              <p>Tire suas dúvidas</p>
              <small>Estamos aqui para ajudar! Clique aqui para começar.</small>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>A</p>
      </div>
    </Layout>
  );
};

export default Home;