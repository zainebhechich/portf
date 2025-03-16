import { useState } from "react";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ title, description, details, link }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.projectCard} onClick={toggleDetails}>
      <h3>{title}</h3>
      <p>{description}</p>
      
      {showDetails && (
        <div className={styles.projectDetails}>
          <p>{details}</p>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.projectLink}
              onClick={(e) => e.stopPropagation()} // Prevent closing details when clicking link
            >
              View Project
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
