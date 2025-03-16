import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <header className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Welcome to My Portfolio</h1>
        <p className={styles.heroSubtitle}>
          I'm Zaineb Hechich, a passionate and driven software developer. Explore my journey, my work, and the projects that define my skills.
        </p>
      </header>
      
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>
        Below are some of the projects I’m most proud of. Click on each card for more details. And of course, there are many more exciting projects on the way, as I continue to grow and challenge myself in the world of development.
        </p>
        <div className={styles.projects}>
          <ProjectCard title="Movie-App" description="A dynamic web application that allows users to search for movies, view detailed information. including ratings, and trailers, click the link to see more."  details="Built with React and Next.js, this app fetches movie data from an API, displaying trailers, ratings, and more in an interactive UI."link="http://localhost:3002"/>
          <ProjectCard title="person-profile-animated" description="A dynamic and interactive personal profile website , talking about A Manga Artist how created a masterpiece n click the link to see more."  details="This project includes smooth animations, an engaging UI, and bio details. Built using React, Framer Motion, and TailwindCSS."link="http://localhost:3001" />
          
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
