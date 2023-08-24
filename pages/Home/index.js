import Layout from "../../components/Layout";
import styles from "../../styles/home.module.css";

const Home = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <Layout showHeader={false}>
    </Layout>
  );
};

export default Home;
