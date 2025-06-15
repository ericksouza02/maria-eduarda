// pages/index.js
import Head from 'next/head'; // Importe Head para SEO e título da página
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard'; // Importe o ProjectCard

import styles from '../styles/Home.module.css'; // Importe o CSS Module para a Home

export default function Portfolio() {
  // Dados dos projetos - Agora com títulos e descrições para os cards
  const photos = [
    { src: '/images/foto1.jpeg', alt: 'Design Gráfico para Marca X', title: 'Intercámbio Canadá', description: 'Criação de logotipo e material de marca completo para startup de tecnologia.' },
    { src: '/images/foto2.jpeg', alt: 'Série de Fotos Urbanas', title: 'Projeto Político', description: 'Ensaios fotográficos explorando a arquitetura e vida nas grandes cidades.' },
    { src: '/images/foto3.jpeg', alt: 'Voluntáriado Inglaterra', title: 'Ilustrações para Livros', description: 'Desenvolvimento de personagens e cenários para histórias infantis digitais.' },
    { src: '/images/foto4.jpeg', alt: 'Te amo', title: 'Te amo', description: 'Você é 100% do que preciso.' },
    { src: '/images/foto5.jpeg', alt: 'Volta para mim', title: 'Volta para mim', description: 'Te amo como nunca amei ninguem.' },
    { src: '/images/foto6.jpeg', alt: 'Te quero para toda vida', title: 'Te quero para toda vida', description: 'Meu pão de batata.' },
    // Adicione mais fotos/projetos aqui com título e descrição
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio de Maria Eduarda - Designer Gráfico & Fotógrafa</title>
        <meta name="description" content="Portfólio profissional de Maria Eduarda, com trabalhos em design gráfico, fotografia e arte visual." />
        {/* Adicione outras meta tags para SEO aqui */}
      </Head>

      {/* Cabeçalho */}
      <Header />

      {/* Corpo da Página - Seção "Sobre Mim" */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sobre Mim</h2>
        <div className={styles.aboutContent}>
          {/* Adicione uma imagem de perfil profissional aqui, em public/images/maria-eduarda-profile.jpeg */}
          <Image
            src="/images/foto2.jpeg" // Certifique-se de ter essa imagem em public/images
            alt="Maria Eduarda"
            width={200}
            height={200}
            className={styles.profileImage}
          />
          <p className={styles.aboutText}>
            Maria Eduarda Matos Batista, 21 anos, é uma jovem determinada e cheia de experiências enriquecedoras. Natural de São Bernardo do Campo, atualmente atua como estagiária na área de Compras no Banco Safra, enquanto cursa Administração na Anhanguera.
            Sempre em busca de novos aprendizados, Maria Eduarda realizou um intercâmbio no Canadá, participou de um projeto de voluntariado na Inglaterra, País de Gales e Escócia, além de ter se envolvido ativamente em um projeto político,
            demonstrando desde cedo interesse em causas sociais e no desenvolvimento de uma visão global.
            <br />
          </p>
        </div>
      </section>

      {/* Corpo da Página - Seção "Meus Trabalhos" (Galeria de Projetos) */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Histórico</h2>
        <div className={styles.projectsGrid}>
          {photos.map((project, index) => (
            // Use o ProjectCard para cada item
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}