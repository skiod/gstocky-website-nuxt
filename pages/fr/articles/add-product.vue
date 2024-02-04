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

                    <h1 class="h3 display-5 mb-6 mb-md-15 aos-init aos-animate">Simplifiez votre Gestion des Stocks avec GStocky : Ajouter des Produits Facilement</h1>
                    <p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">
                        La gestion efficace des stocks est essentielle pour la réussite de toute entreprise. Avec GStocky, notre plateforme de gestion des stocks, ajouter de nouveaux produits à votre inventaire devient un jeu d'enfant. Suivez ces étapes simples pour enrichir votre catalogue sans tracas.
                    </p>
                    <h5 class="mb-4">
                        Connectez-vous ou Créez un Compte
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Avant de commencer, assurez-vous d'être connecté à votre compte GStocky. Si vous n'en avez pas encore un, vous pouvez créer un compte rapidement en suivant ce <a href="https://dash.gstocky.com/signup">lien d'inscription</a>. Si vous avez déjà un compte, connectez-vous <a href="https://dash.gstocky.com/login">ici</a>.
                    </p>
                    <h5 class="mb-4">
                        Accédez à la Section Produits
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Une fois connecté, dirigez-vous vers la section "Produits" dans la barre latérale de votre tableau de bord. C'est ici que vous pouvez voir tous les détails de votre inventaire existant et ajouter de nouveaux articles.
                    </p>
                    <h5 class="mb-4">
                        Ajoutez un Nouveau Produit
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Cliquez sur le bouton "Ajouter un Produit" situé en haut à droite. Une fenêtre modale apparaîtra, vous permettant de saisir les informations essentielles sur votre nouveau produit. Remplissez les champs requis, y compris la quantité, et cliquez sur "Enregistrer". Et voilà, votre produit est ajouté avec succès !
                    </p>
                                        <h5 class="mb-4">
                        Importez des Produits depuis un Fichier Excel
                    </h5>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Si vous préférez une méthode plus rapide pour ajouter plusieurs produits à la fois, vous pouvez utiliser la fonction d'importation depuis un fichier Excel.
                    </p>
                    <ol class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        <li>Cliquez sur le bouton "Importer" dans la section Produits.</li>
                        <li>Téléchargez le modèle Excel en cliquant sur le bouton de téléchargement.</li>
                        <li>Remplissez le modèle Excel avec les détails de vos produits.</li>
                        <li>Importez le fichier Excel rempli en cliquant sur le bouton d'importation.</li>
                    </ol>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        Votre importation sera traitée rapidement, et vos produits seront ajoutés à votre inventaire de manière propre et organisée. Et voilà, vous avez réussi à importer vos produits.
                    </p>
                    <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
                        GStocky simplifie chaque étape du processus, de la création du compte à l'ajout de produits. Explorez notre plateforme dès aujourd'hui pour une gestion des stocks sans tracas. Optimisez votre temps et concentrez-vous sur la croissance de votre entreprise avec GStocky.
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
