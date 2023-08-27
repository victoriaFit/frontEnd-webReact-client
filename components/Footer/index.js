import styles from "../css/footer.module.css";

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <h1 className={styles.footerTitle}>victoria. fit</h1>

                    <ul className={styles.footerList}>
                        <li>
                            <a href="#news" className={styles.footerLink}>Sobre</a>
                        </li>

                        <li>
                            <a href="#service" className={styles.footerLink}>Serviços</a>
                        </li>

                        <li>
                            <a href="#team" className={styles.footerLink}>Membros</a>
                        </li>
                    </ul>

                    <ul className={styles.footerSocial}>
                    <a href="https://www.whatsapp.com/" target="_blank" className={styles.footerSocialLink}>
                        <img className={styles.footerSocialIcon} src="https://cdn.discordapp.com/attachments/1091506792900595863/1145149565461352479/whatsapp.png" alt="WhatsApp" />
                    </a>

                    <a href="https://www.facebook.com/" target="_blank" className={styles.footerSocialLink}>
                        <img className={styles.footerSocialIcon} src="https://cdn.discordapp.com/attachments/1091506792900595863/1145149259457499177/facebook.png" alt="Facebook" />
                    </a>
                </ul>

                    <span className={styles.footerCopy}>
                        &#169; victoriaFit. All rigths reserved
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
