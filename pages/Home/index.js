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
                    <span className={styles.homeGreeting} style={{ color: isDarkTheme ? '#fff' : "#000000"}}>subtitle</span>
                    <h1 className={styles.homeTitle} style={{ color: isDarkTheme ? '#fff' : '#000000' }}>title</h1> 
                    <h3 className={styles.homeSubtitle}>description</h3>

                    <div className={styles.homeButtons}>
                        <a href="home/index.html" className={styles.buttonGhost} style={{ color: isDarkTheme ? '#fff' : 'black'}}>
                           common button 
                        </a>
                        <a onClick={scrollToAboutSection} className={styles.button} >call to action</a>
                    </div>
                </div>

                <img src="https://media.discordapp.net/attachments/1091506792900595863/1177045365992722432/image.png?ex=657113eb&is=655e9eeb&hm=c8f4f1152d082faabc91e79895fad7ddce1e4fd5f372f054538f9ebd90b0840e&=" alt="" className={styles.homeImg} />
            </div>
        </section>

        <section className={styles.section}>
            <p className={styles.sectionSubtitle}>Introdução</p>
            <h2 className={styles.sectionTitle}>Sobre Nós</h2>

            <div className={styles.aboutContainer} ref={aboutSectionRef}>
                <img src="https://media.discordapp.net/attachments/1091506792900595863/1177045365992722432/image.png?ex=657113eb&is=655e9eeb&hm=c8f4f1152d082faabc91e79895fad7ddce1e4fd5f372f054538f9ebd90b0840e&=" alt="" className={styles.aboutImg} />

                <div className={styles.aboutProject}>
                    <p className={styles.aboutDescription}>
                    Procuramos fornecer uma abordagem única - e inovadora - no âmbito da assistência a equipamentos de academia, uma forma renovada de encarar e aprimorar o desempenho dos equipamentos que impulsionam sua jornada fitness.
                    </p>

                    <a onClick={scrollToServiceSection} className={styles.button}>Serviços</a>
                </div>
            </div>
        </section>
        
        <Footer />
        {/* <Questions /> */}
      </main>
    </Layout>
   
  );
};

export default Home;