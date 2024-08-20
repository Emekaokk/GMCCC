// components/ProjectCard.js
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image src={project.image} alt={project.title} width={300} height={200} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
