// pages/about.js
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import profilePic from '../public/images/profile.jpg';

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>About Me</h1>
        <Image src={profilePic} alt="Profile Picture" width={150} height={150} />
        <p>Hi, I'm Onyekachi Ngwobia. I am a software engineer undergraduate.</p>
      </div>
    </Layout>
  );
}
