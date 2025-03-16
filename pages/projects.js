import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <header className={styles.header}>
        <h1>My Projects</h1>
        <p>
          Explore some of the projects I've worked on. Each project showcases my skills, problem-solving abilities, 
          and dedication to building high-quality applications.
        </p>
      </header>
      
      <section className={styles.projectsGrid}>
        <ProjectCard 
          title="Movie App" 
          description="A dynamic web application that allows users to search for movies and view details."
          details="Built with React and Next.js, featuring API integration for movie data, trailers, and ratings."
        />
        
        <ProjectCard 
          title="Person Profile Animated" 
          description="An interactive profile website featuring a renowned Manga Artist."
          details="Created with smooth animations using Framer Motion and styled with Tailwind CSS."
        />

        {/* More projects can be added here */}
      </section>

      <p className={styles.futureProjects}>
        🚀 Stay tuned! More exciting projects are coming soon.
      </p>

      <Footer />
    </div>
  );
}
