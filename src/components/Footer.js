// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Importe o CSS Module

function Footer() {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual dinamicamente

  return (
    <footer style={{
      textAlign: 'center',
      marginTop: '60px',
      padding: '20px',
      backgroundColor: '#f0f0f0', // Mesma cor de fundo do cabeçalho
      borderTop: '1px solid #ddd',
      color: '#666',
      fontSize: '0.9em',
    }}>
      <p>&copy; {currentYear} Maria Eduarda. Todos os direitos reservados.</p>
      {/* Você pode adicionar links para redes sociais aqui futuramente */}
    </footer>
  );
}

export default Footer;