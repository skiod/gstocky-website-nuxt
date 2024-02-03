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
                    <h1 class="h3 display-5 mb-6 mb-md-15 aos-init aos-animate">Gérez vos Factures avec GStocky : Simplifiez le Processus de Facturation</h1>
                    <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">
                        Facilitez la gestion de vos factures avec GStocky. Suivez ces étapes pour créer, personnaliser et gérer vos factures de manière efficace et professionnelle.
                    </p>
                    <h5 class="mb-4">
                        Étape 1 : Accédez à la Section Factures
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Connectez-vous à votre compte GStocky, puis cliquez sur l'onglet "Factures" dans la barre latérale. Vous accéderez ainsi à la section dédiée aux factures où vous pourrez gérer toutes vos transactions financières.
                    </p>
                    <h5 class="mb-4">
                        Étape 2 : Ajoutez une Nouvelle Facture
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        En haut à droite de la page, cliquez sur le bouton "Ajouter une Facture". Vous serez dirigé vers un formulaire vous permettant de saisir les détails essentiels de votre facture, y compris les produits, les quantités et les informations du client.
                    </p>
                    <h5 class="mb-4">
                        Étape 3 : Remplissez le Formulaire
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Complétez soigneusement le formulaire en fournissant toutes les informations nécessaires pour assurer une facturation précise et transparente. Cela inclut les détails des produits, les quantités, les coordonnées du client et tout autre élément pertinent.
                    </p>
                    <h5 class="mb-4">
                        Étape 4 : Créez la Facture
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Une fois le formulaire rempli, cliquez sur "Créer". Votre facture sera enregistrée dans le système GStocky pour une gestion aisée.
                    </p>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        GStocky simplifie la facturation, vous permettant de gérer vos transactions financières en toute simplicité. Utilisez ces fonctionnalités pour optimiser votre processus de facturation et fournir des documents professionnels à vos clients. Simplifiez la gestion de vos finances avec GStocky dès aujourd'hui !
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
