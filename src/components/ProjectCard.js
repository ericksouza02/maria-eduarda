// src/components/ProjectCard/ProjectCard.js
import React from 'react';
import Image from 'next/image';
import styles from './ProjetctCard.module.css'; // Crie este CSS Module também

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <Image
        src={project.src}
        alt={project.alt}
        width={300} // Tamanho base, será ajustado pelo CSS
        height={220} // Altura fixa para consistência
        className={styles.projectImage}
        priority // Carrega as primeiras imagens mais rápido
      />
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;