// src/components/Header/Header.js
import React from 'react';
import styles from './Header.module.css'; // Importe o CSS Module

function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>
        <span className={styles.highlight}>Maria Eduarda</span> {/* Aplica a cor rosa aqui */}
      </h1>
      <p className={styles.subtitle}>Compras | Comércio Exterior | Designer</p>
    </header>
  );
}

export default Header;