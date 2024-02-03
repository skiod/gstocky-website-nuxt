<template>
  <div>
    <custom-navbar></custom-navbar>

       <section class="bg-bg-3 py-10 py-lg-20">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8">
                    <div class="mb-10 row justify-content-between">
                        <a href="/fr/articles">Blog</a>
                        <div class="col-auto aos-init aos-animate"></div>
                    </div>
                    <h1 class="h3 display-5 mb-6 mb-md-15 aos-init aos-animate">Gérez vos Réceptions avec GStocky : Simplifiez le Processus de Réception de Marchandises</h1>
                    <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">
                        Optimisez la gestion de vos réceptions de marchandises avec GStocky. Suivez ces étapes pour créer, personnaliser et gérer vos réceptions de manière efficace et professionnelle.
                    </p>
                    <h5 class="mb-4">
                        Étape 1 : Accédez à la Section Réceptions
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Connectez-vous à votre compte GStocky, puis cliquez sur l'onglet "Réceptions" dans la barre latérale. Vous accéderez ainsi à la section dédiée aux réceptions où vous pourrez gérer tous les détails de vos arrivages de marchandises.
                    </p>
                    <h5 class="mb-4">
                        Étape 2 : Ajoutez une Nouvelle Réception
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        En haut à droite de la page, cliquez sur le bouton "Ajouter une Réception". Vous serez dirigé vers un formulaire vous permettant de saisir les détails essentiels de votre réception, y compris les produits, les quantités et les informations du fournisseur.
                    </p>
                    <h5 class="mb-4">
                        Étape 3 : Remplissez le Formulaire
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Complétez soigneusement le formulaire en fournissant toutes les informations nécessaires pour assurer une réception précise et transparente. Cela inclut les détails des produits, les quantités, les coordonnées du fournisseur et tout autre élément pertinent.
                    </p>
                    <h5 class="mb-4">
                        Étape 4 : Créez la Réception
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Une fois le formulaire rempli, cliquez sur "Créer". Votre réception sera enregistrée dans le système GStocky pour un suivi facile.
                    </p>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        GStocky simplifie la gestion des réceptions, vous permettant de suivre et de gérer vos arrivages de marchandises en toute simplicité. Utilisez ces fonctionnalités pour optimiser votre processus de réception et garantir un stockage efficace. Simplifiez la gestion de vos réceptions avec GStocky dès aujourd'hui !
                    </p>
                </div>
            </div>
        </div>
    </section>


    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomFooter from "../../../components/Footer.vue";
import CustomNavbar from "../../../components/Navbar.vue";
export default {
  name: "Article",
  components: { CustomFooter, CustomNavbar },
};
</script>
