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

                    <h1 class="h3 display-5 mb-6 mb-md-15 aos-init aos-animate">Gérez vos Livraisons avec GStocky : Simplifiez le Processus de Distribution</h1>
                    <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">
                        Optimisez la gestion de vos livraisons avec GStocky. Suivez ces étapes pour créer, personnaliser et gérer vos livraisons de manière efficace et professionnelle.
                    </p>
                    <h5 class="mb-4">
                        Étape 1 : Accédez à la Section Livraisons
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Connectez-vous à votre compte GStocky, puis cliquez sur l'onglet "Livraisons" dans la barre latérale. Vous accéderez ainsi à la section dédiée aux livraisons où vous pourrez gérer tous les détails de vos expéditions.
                    </p>
                    <h5 class="mb-4">
                        Étape 2 : Ajoutez une Nouvelle Livraison
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        En haut à droite de la page, cliquez sur le bouton "Ajouter une Livraison". Vous serez dirigé vers un formulaire vous permettant de saisir les détails essentiels de votre livraison, y compris les produits, les quantités et les informations du destinataire.
                    </p>
                    <h5 class="mb-4">
                        Étape 3 : Remplissez le Formulaire
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Complétez soigneusement le formulaire en fournissant toutes les informations nécessaires pour assurer une livraison précise et transparente. Cela inclut les détails des produits, les quantités, les coordonnées du destinataire et tout autre élément pertinent.
                    </p>
                    <h5 class="mb-4">
                        Étape 4 : Créez la Livraison
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Une fois le formulaire rempli, cliquez sur "Créer". Votre livraison sera enregistrée dans le système GStocky pour un suivi facile.
                    </p>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        GStocky simplifie la gestion des livraisons, vous permettant de suivre et de gérer vos expéditions en toute simplicité. Utilisez ces fonctionnalités pour optimiser votre processus de distribution et garantir des livraisons réussies. Simplifiez la gestion de vos livraisons avec GStocky dès aujourd'hui !
                    </p>

                    <div class="row">
                      <div class="col-sm-6">
                          <a class="mt-4" href="/fr/articles/add-order">Ajouter les Commandes</a>
                      </div>
                      <div class="col-sm-6" style="text-align:right">
                    <a class="mt-4" href="/fr/articles/add-invoice">Ajouter les Factures</a>
                        </div>
                    </div>

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
      title: 'Ajouter des Livraisons - Gstocky',
    };
  },
};
</script>
