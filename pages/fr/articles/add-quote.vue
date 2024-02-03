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
