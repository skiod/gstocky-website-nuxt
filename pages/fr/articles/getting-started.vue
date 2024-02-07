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

						<h1 class="h3 display-5 mb-6 mb-md-15 aos-init aos-animate" >Commencez votre gestion d'inventaire avec GStocky</h1>
						<p class="mb-4 text-dark-1 aos-init aos-animate" data-aos-delay="750">
              Découvrez comment débuter votre aventure avec la gestion d'inventaire grâce à GStocky, la solution complète et intuitive. Suivez ces étapes simples pour vous inscrire et commencer à optimiser la gestion de votre inventaire.
						</p>
            <h5 class="mb-4">
              Étape 1 : Accédez à <a href="https://gstocky.com">https://gstocky.com</a>
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
              Rendez-vous sur le site officiel de GStocky en cliquant sur <a href="https://gstocky.com">https://gstocky.com</a>. Cela vous conduira à la page d'accueil de la plateforme, où vous pourrez démarrer le processus d'inscription.
						</p>
            <h5 class="mb-4">
              Étape 2 : Cliquez sur 'S'inscrire'
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
              Une fois sur la page d'accueil, repérez le bouton 'S'inscrire' et cliquez dessus. Vous serez redirigé vers un formulaire d'inscription où vous pourrez fournir les informations nécessaires pour créer votre compte.
						</p>
            <h5 class="mb-8">
              Étape 3 : Remplissez le formulaire d'inscription
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
              Complétez le formulaire avec vos informations personnelles, y compris votre nom, adresse e-mail et mot de passe sécurisé. Assurez-vous de fournir des informations exactes pour garantir une expérience utilisateur fluide.
						</p>
            <h5 class="mb-8">
              Étape 4 : Vérification par e-mail
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
              Une fois le formulaire soumis, un e-mail de confirmation sera envoyé à l'adresse que vous avez fournie. Accédez à votre boîte de réception et cliquez sur le lien de confirmation pour activer votre compte GStocky.
						</p>
            <h5 class="mb-8">
              Étape 5 : Remplissez les informations de votre entreprise
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate" data-aos-delay="1000">
              Après la vérification de l'e-mail, connectez-vous à votre compte GStocky. Vous serez accueilli par un modal qui vous demandera des informations spécifiques sur votre entreprise. Remplissez ces détails pour personnaliser votre expérience d'inventaire en fonction des besoins uniques de votre entreprise.

En suivant ces étapes simples, vous serez prêt à utiliser GStocky pour optimiser la gestion de votre inventaire. Profitez de fonctionnalités avancées et d'une interface conviviale pour simplifier votre processus de suivi des stocks. Découvrez le pouvoir de la gestion d'inventaire avec GStocky dès aujourd'hui !
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
      title: "Guide d'inscription - Gstocky",
    };
  },
};
</script>
