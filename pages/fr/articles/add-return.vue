<template>
  <div>
    <custom-navbar></custom-navbar>

    <section class="bg-bg-3 py-10 py-lg-20">
        <div class="container">
<div class="row">
          <div class="col-lg-3 col-xl-3">
            <h2>Articles</h2>
            <ul style="list-style:none;padding:0">
              <li class="mt-4"><a href="/fr/articles/getting-started">Guide d'inscription</a></li>
              <li class="mt-2"><a href="/fr/articles/add-product">Ajouter L'inventaires</a></li>
              <li class="mt-2"><a href="/fr/articles/add-quote">Ajouter les Devis</a></li>
              <li class="mt-2"><a href="/fr/articles/add-order">Ajouter les Commandes</a></li>
              <li class="mt-2"><a href="/fr/articles/add-delivery">Ajouter les Livraisons</a></li>
              <li class="mt-2"><a href="/fr/articles/add-invoice">Ajouter les Factures</a></li>
              <li class="mt-2"><a href="/fr/articles/add-purchase">Ajouter les Achats</a></li>
              <li class="mt-2"><a href="/fr/articles/add-reception">Ajouter les Réceptions</a></li>
              <li class="mt-2"><a href="/fr/articles/add-payment">Ajouter les Paiments</a></li>
              <li class="mt-2"><a href="/fr/articles/add-return">Ajouter les Retours</a></li>
              <li class="mt-2"><a href="/fr/articles/add-credit-note">Ajouter les Avoirs</a></li>
            </ul>
          </div>
					<div class="col-lg-9 col-xl-7">

                    <h1 class="h3 display-5 mb-6 mb-md-15 aos-init aos-animate">Gérez vos Retours avec GStocky : Simplifiez le Processus de Gestion des Retours</h1>
                    <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">
                        Simplifiez la gestion de vos retours de produits avec GStocky. Suivez ces étapes pour créer, personnaliser et gérer vos retours de manière efficace et professionnelle.
                    </p>
                    <h5 class="mb-4">
                        Étape 1 : Accédez à la Section Retours
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Connectez-vous à votre compte GStocky, puis cliquez sur l'onglet "Retours" dans la barre latérale. Vous accéderez ainsi à la section dédiée aux retours où vous pourrez gérer tous les détails de vos processus de retour.
                    </p>
                    <h5 class="mb-4">
                        Étape 2 : Ajoutez un Nouveau Retour
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        En haut à droite de la page, cliquez sur le bouton "Ajouter un Retour". Vous serez dirigé vers un formulaire vous permettant de saisir les détails essentiels de votre retour, y compris les produits concernés, la raison du retour et l'état des articles.
                    </p>
                    <h5 class="mb-4">
                        Étape 3 : Remplissez le Formulaire
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Complétez soigneusement le formulaire en fournissant toutes les informations nécessaires pour assurer un processus de retour précis et transparent. Cela inclut les détails des produits, la raison du retour, l'état des articles et toute autre information pertinente.
                    </p>
                    <h5 class="mb-4">
                        Étape 4 : Créez le Retour
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Une fois le formulaire rempli, cliquez sur "Créer". Votre retour sera enregistré dans le système GStocky pour un suivi facile.
                    </p>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        GStocky simplifie la gestion des retours, vous permettant de suivre et de gérer vos processus de retour en toute simplicité. Utilisez ces fonctionnalités pour optimiser votre processus de gestion des retours et garantir la satisfaction de vos clients. Simplifiez la gestion de vos retours avec GStocky dès aujourd'hui !
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
   head() {
    return {
      title: 'Ajouter des Retours - Gstocky',
    };
  },
};
</script>
