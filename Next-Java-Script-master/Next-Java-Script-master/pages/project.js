// pages/projects.js
import Layout from '../components/Layout';
import styles from '../styles/Projects.module.css';
import ProjectCard from '../components/ProjectCard';
import project1Img from '../public/images/project1.jpg';
import project2Img from '../public/images/project2.jpg';

export default function Projects() {
  const projects = [
    { id: 1, title: 'Project One', image: project1Img, description: 'Description of project one.' },
    { id: 2, title: 'Project Two', image: project2Img, description: 'Description of project two.' },
  ];

  return (
    <Layout>
      <div className={styles.projects}>
        <h1>My Projects</h1>
        <div className={styles.projectGrid}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
