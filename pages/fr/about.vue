<template>
  <div>
    <custom-navbar></custom-navbar>

    <section class="bg-bg-3 py-10 py-lg-20">
      <div class="container">
        <h1 class="mb-8">A propos de nous</h1>
        <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">Bienvenue sur Gstocky, votre solution complète de gestion des stocks conçue pour simplifier et optimiser la gestion de vos commandes, achats, et bien plus encore. Notre plateforme offre une approche intuitive et efficace pour aider les entreprises de toutes tailles à gérer efficacement leur inventaire.</p>
        <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">Chez Gstocky, nous comprenons les défis auxquels les entreprises sont confrontées lorsqu'il s'agit de gérer leur inventaire. C'est pourquoi nous avons développé une solution puissante qui combine des fonctionnalités avancées avec une interface conviviale, offrant ainsi une expérience utilisateur optimale.</p>
        <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">Notre système de gestion des stocks permet de gérer facilement les commandes clients, de suivre les niveaux de stock en temps réel, et de gérer les achats fournisseurs de manière efficace. Grâce à nos outils de reporting avancés, vous disposez des informations nécessaires pour prendre des décisions éclairées et optimiser vos opérations.</p>
        <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">Que vous soyez une petite entreprise en pleine croissance ou une entreprise établie, Gstocky s'adapte à vos besoins. Notre équipe dévouée est là pour vous accompagner à chaque étape, en vous offrant un support personnalisé et des conseils d'experts pour maximiser les avantages de notre plateforme.</p>
        <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">Rejoignez-nous dès aujourd'hui et découvrez comment Gstocky peut simplifier la gestion de votre inventaire, libérant ainsi votre temps pour vous concentrer sur ce qui compte vraiment : faire croître votre entreprise.</p>
        <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">N'hésitez pas à ajuster ce texte en fonction des fonctionnalités spécifiques de votre plateforme et de la tonalité que vous souhaitez adopter pour votre public cible.</p>
      </div>

    </section>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomFooter from '../../components/Footer.vue';
import CustomNavbar from '../../components/Navbar.vue';
export default {
  name: "About",
  components : {CustomFooter,CustomNavbar},
  head() {
    return {
      title: 'A propos de nous - Gstocky',
    };
  },
};
</script>
