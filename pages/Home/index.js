import React, { useRef } from "react";

import Layout from "../../components/Layout";
import styles from "../../styles/home.module.css";

const Home = ({ isDarkTheme }) => { 
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const aboutSectionRef = useRef(null); 

  const scrollToAboutSection = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout showHeader={false}>
      <main class="main" >
      <section className={styles.section}>
            <div className={styles.homeContainer}>
                <div className={styles.homeData}>
                    <span className={styles.homeGreeting} style={{ color: isDarkTheme ? '#fff' : "#000000"}}>assistência</span>
                    <h1 className={styles.homeTitle} style={{ color: isDarkTheme ? '#fff' : '#000000' }}>victoria. fit</h1> 
                    <h3 className={styles.homeSubtitle}>o que você precisa.</h3>

                    <div className={styles.homeButtons}>
                        <a href="home/index.html" className={styles.buttonGhost} style={{ color: isDarkTheme ? '#fff' : 'black'}}>
                            Contato
                        </a>
                        <a onClick={scrollToAboutSection} className={styles.button}>Conhecer</a>
                    </div>
                </div>

                <img src="https://cdn.discordapp.com/attachments/1091506792900595863/1144309465349357670/treadmill.png" alt="" className={styles.homeImg} />
            </div>
        </section>

        <section className={styles.section}>
            <p className={styles.sectionSubtitle}>Introdução</p>
            <h2 className={styles.sectionTitle}>Sobre Nós</h2>

            <div className={styles.aboutContainer} ref={aboutSectionRef}>
                <img src="https://cdn.discordapp.com/attachments/1091506792900595863/1144326893445845032/wearing-fitness-watch.png" alt="" className={styles.aboutImg} />

                <div className={styles.aboutProject}>
                    <p className={styles.aboutDescription}>
                    Procuramos fornecer uma abordagem única - e inovadora - no âmbito da assistência a equipamentos de academia, uma forma renovada de encarar e aprimorar o desempenho dos equipamentos que impulsionam sua jornada fitness.
                    </p>

                    <a href="#service" className={styles.button}>Serviços</a>
                </div>
            </div>
        </section>
        <a href="/Questions">botão muito épico para levar para o chat muito epico</a>
      </main>
    </Layout>
   
  );
};

export default Home;
