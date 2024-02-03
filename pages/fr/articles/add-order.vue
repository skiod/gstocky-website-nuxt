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
                    <h1 class="h3 display-5 mb-6 mb-md-15 aos-init aos-animate">Ajouter des Commandes avec GStocky : Facilitez le Traitement des Transactions</h1>
                    <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">
                        Optimisez votre processus de gestion des commandes avec GStocky. Suivez ces étapes pour créer, personnaliser et gérer vos commandes en toute simplicité, y compris la possibilité de transférer des devis en commandes d'un simple clic.
                    </p>
                    <h5 class="mb-4">
                        Étape 1 : Accédez à la Section Commandes
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Connectez-vous à votre compte GStocky, puis cliquez sur l'onglet "Commandes" dans la barre latérale. Vous accéderez ainsi à la section dédiée aux commandes où vous pourrez gérer toutes vos transactions en cours.
                    </p>
                    <h5 class="mb-4">
                        Étape 2 : Ajoutez une Nouvelle Commande
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        En haut à droite de la page, cliquez sur le bouton "Ajouter une Commande". Vous serez dirigé vers un formulaire qui vous permettra de saisir les détails essentiels de votre commande, y compris les produits, les quantités et les informations du client.
                    </p>
                    <h5 class="mb-4">
                        Étape 3 : Remplissez le Formulaire
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Complétez soigneusement le formulaire en fournissant toutes les informations nécessaires pour assurer une commande précise et efficace. Cela inclut les détails des produits, les quantités et les coordonnées du client.
                    </p>
                    <h5 class="mb-4">
                        Étape 4 : Créez la Commande
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Une fois le formulaire rempli, cliquez sur "Créer". Votre commande sera enregistrée dans le système GStocky pour un suivi facile.
                    </p>
                    <h5 class="mb-4">
                        Étape 5 : Transfert depuis un Devis
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Dans la section Devis, utilisez le bouton de transfert pour convertir un devis en commande en un seul clic. Cela simplifie considérablement le processus de conversion, vous permettant de gagner du temps et d'éviter la saisie manuelle des détails.
                    </p>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        GStocky offre une gestion efficace des commandes, vous permettant de traiter rapidement vos transactions. Explorez ces fonctionnalités pour optimiser votre processus de commande et simplifier votre flux de travail. Gérez vos transactions en toute simplicité avec GStocky dès aujourd'hui !
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
