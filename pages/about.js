import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';
import Image from 'next/image';



function About() {
  return (
    <div>
      <Navbar />
      
      <section className={styles.about}>
        <div className={styles.container}>
          {/* Profile Image */}
          <div className={styles.imageContainer}>
            <Image 
              src="https://i.pinimg.com/736x/5f/e9/b6/5fe9b659b4ff224fce491cf3da1858fb.jpg" 
              alt="Profile" 
              width={150} 
              height={150} 
              className={styles.profileImg} 
            />   
          </div>

          {/* About Text */}
          <div className={styles.textContainer}>
            <h1>About Me</h1>
            <p>
              Hi, I'm <strong> Zaineb hechich</strong>,an aspiring<strong> software developer </strong> 
               currently honing my skills through an intensive Software Development Bootcamp. 
               I'm passionate about building innovative, user-centric solutions, and I'm excited to bring ideas to life with technologies like React, Next.js, and modern JavaScript. 
               My goal is to continually learn, grow, and contribute to impactful projects that push the boundaries of web development."
            </p>
            <p><strong>Fun Fact:</strong> I love coffee ☕ and enjoy solving coding challenges!</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
