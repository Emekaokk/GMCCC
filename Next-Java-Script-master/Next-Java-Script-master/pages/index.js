// pages/index.js
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my skills and projects.</p>
      </div>
    </Layout>
  );
}
