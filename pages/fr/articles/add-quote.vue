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

                    <h1 class="h3 display-5 mb-6 mb-md-15 aos-init aos-animate">Ajouter un Devis avec GStocky : Simplifiez le Processus de Facturation</h1>
                    <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">
                        Facturer vos clients n'a jamais été aussi simple avec GStocky. Suivez ces étapes pour créer, personnaliser et gérer vos devis en un clin d'œil.
                    </p>
                    <h5 class="mb-4">
                        Étape 1 : Accédez à la Section Devis
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Connectez-vous à votre compte GStocky, puis cliquez sur l'onglet "Devis" dans la barre latérale. Vous serez redirigé vers la section des devis où toutes vos transactions seront centralisées.
                    </p>
                    <h5 class="mb-4">
                        Étape 2 : Ajoutez un Nouveau Devis
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        En haut à droite de la page, cliquez sur le bouton "Ajouter un Devis". Une fenêtre modale apparaîtra, vous présentant un formulaire à remplir avec des informations cruciales telles que la date de référence, les produits et les clients associés.
                    </p>
                    <h5 class="mb-4">
                        Étape 3 : Remplissez le Formulaire
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Dans le formulaire, saisissez toutes les informations nécessaires, y compris la date de référence, les produits sélectionnés et les coordonnées du client. Assurez-vous de fournir des détails précis pour une facturation transparente.
                    </p>
                    <h5 class="mb-4">
                        Étape 4 : Créez le Devis
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Une fois le formulaire rempli, cliquez sur "Créer". Votre devis sera enregistré avec succès dans votre système GStocky.
                    </p>
                    <h5 class="mb-4">
                        Étape 5 : Options de Gestion
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Vous avez plusieurs options de gestion disponibles. Vous pouvez télécharger le devis au format PDF en cliquant sur "Aperçu" et en sélectionnant l'option de téléchargement. De plus, vous pouvez également modifier ou supprimer le devis selon vos besoins.
                    </p>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        GStocky rend la facturation simple et efficace. Utilisez ces fonctionnalités pour optimiser votre processus de création de devis et fournir des documents professionnels à vos clients. Simplifiez la gestion de vos transactions avec GStocky dès aujourd'hui !
                    </p>

                    <div class="row">
                      <div class="col-sm-6">
                          <a class="mt-4" href="/fr/articles/add-product">Ajouter L'inventaires</a>
                      </div>
                      <div class="col-sm-6" style="text-align:right">
                        <a class="mt-4" href="/fr/articles/add-order">Ajouter les Commandes</a>
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
      title: 'Ajouter des Devis - Gstocky',
      link: [
        {
          rel: 'canonical',
          href: 'https://gstocky.com/fr/add-quote'
        }
      ]
    };
  },
};
</script>
