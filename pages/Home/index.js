import React, { useRef } from "react";

import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Questions from "../Questions";

import styles from "../../styles/home.module.css";

const Home = ({ isDarkTheme }) => { 
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const aboutSectionRef = useRef(null); 
  const serviceSectionRef = useRef(null); 

  const scrollToAboutSection = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServiceSection = () => {
    serviceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }

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

                    <a onClick={scrollToServiceSection} className={styles.button}>Serviços</a>
                </div>
            </div>
        </section>
        <section className={styles.serviceContainer1} ref={serviceSectionRef} id="service">
            <span className={styles.sectionSubtitle}>Apresentação</span>
            <h2 className={styles.sectionTitle}>Nossos Serviços</h2>

            <div className={styles.serviceContainer}>
                <div className={styles.serviceCard} style={{ backgroundColor: isDarkTheme ? "hsl(207, 8%, 13%)" : "fff"}}>
                    <img src="https://cdn.discordapp.com/attachments/1091506792900595863/1145798943784050717/male-mechanic.png" alt="" className={styles.serviceImg} />

                    <h3 className={styles.serviceTitle}>Manutenção</h3>
                </div>

                <div className={styles.serviceCard} style={{ backgroundColor: isDarkTheme ? "hsl(207, 8%, 13%)" : "fff"}}>
                    <img src="https://cdn.discordapp.com/attachments/1091506792900595863/1145798683506507786/construction-worker-holding-drill-machine.png" alt="" className={styles.serviceImg} />

                    <h3 className={styles.serviceTitle}>Reparo</h3>
                </div>

                <div className={styles.serviceCard} style={{ backgroundColor: isDarkTheme ? "hsl(207, 8%, 13%)" : "fff"}}>
                    <img src="https://cdn.discordapp.com/attachments/1091506792900595863/1145799818451615765/empty-cart.png" alt="" className={styles.serviceImg} />

                    <h3 className={styles.serviceTitle}>Vendas</h3>
                </div>

                

                <div className={styles.serviceCard} style={{ backgroundColor: isDarkTheme ? "hsl(207, 8%, 13%)" : "fff"}}>
                    <img src="https://cdn.discordapp.com/attachments/1091506792900595863/1145798389888467095/shop-button.png" alt="" className={styles.serviceImg} />

                    <h3 className={styles.serviceTitle}>Compras</h3>
                </div>

            </div>
        </section>
        <Footer />
        <Questions />
      </main>
    </Layout>
   
  );
};

export default Home;