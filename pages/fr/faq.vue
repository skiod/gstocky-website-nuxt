<template>
  <div>
    <custom-navbar></custom-navbar>

    <section class="bg-bg-3 py-10 py-lg-20">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-8">
            <h1 class="h3 display-5 mb-6 mb-md-15 aos-init aos-animate">
              Foire aux questions (FAQ) - gstocky.com
            </h1>

            <h5 class="mb-4">1. Qu'est-ce que gstocky.com?</h5>
            <p
              class="mb-4 mb-0 text-dark-1 aos-init aos-animate"
              data-aos-delay="1000"
            >
              gstocky.com est une plateforme de gestion d'inventaire qui offre
              des solutions complètes pour vous aider à optimiser et à suivre
              efficacement votre inventaire d'entreprise.
            </p>
            <h5 class="mb-4">2. Comment puis-je m'inscrire sur gstocky.com?</h5>
            <p
              class="mb-4 mb-0 text-dark-1 aos-init aos-animate"
              data-aos-delay="1000"
            >
              Pour vous inscrire sur gstocky.com, suivez ces étapes simples :
              Rendez-vous sur <a href="https://gstocky.com">https://gstocky.com</a> Cliquez sur "Inscription".
              Remplissez le formulaire d'inscription avec vos informations.
              Vérifiez votre boîte e-mail et cliquez sur le lien de
              confirmation.
            </p>

            <h5 class="mb-8">
              3. Quelles fonctionnalités propose gstocky.com pour la gestion
              d'inventaire?
            </h5>
            <p
              class="mb-4 mb-0 text-dark-1 aos-init aos-animate"
              data-aos-delay="1000"
            >
              gstocky.com offre une gamme complète de fonctionnalités, y compris
              : Suivi des stocks en temps réel. Gestion des fournisseurs.
              Historique des transactions. Rapports personnalisés. Et bien plus
              encore.
            </p>

            <h5 class="mb-8">
              4. Comment puis-je ajouter des produits à mon inventaire?
            </h5>
            <p
              class="mb-4 mb-0 text-dark-1 aos-init aos-animate"
              data-aos-delay="1000"
            >
              Connectez-vous à votre compte gstocky.com, accédez à la section
              "Inventaire" et cliquez sur "Ajouter un produit". Remplissez les
              informations requises telles que le nom du produit, la quantité,
              et d'autres détails pertinents.
            </p>
            <h5 class="mb-8">
              5. Comment puis-je contacter le support client de gstocky.com?
            </h5>
            <p
              class="mb-4 mb-0 text-dark-1 aos-init aos-animate"
              data-aos-delay="1000"
            >
              Pour contacter notre support client, veuillez envoyer un e-mail à
              contact@gstocky.com ou utilisez le formulaire de contact
              disponible sur notre site.
            </p>

            <h5 class="mb-8">
              6. Quelle est la politique de confidentialité de gstocky.com?
            </h5>
            <p
              class="mb-4 mb-0 text-dark-1 aos-init aos-animate"
              data-aos-delay="1000"
            >
              Vous pouvez consulter notre politique de confidentialité complète
              <a href="https://gstocky.com/fr/tos">https://gstocky.com/fr/tos</a> pour comprendre
              comment nous traitons vos données personnelles.
            </p>

            <h5 class="mb-8">
              7. Comment puis-je réinitialiser mon mot de passe sur gstocky.com?
            </h5>
            <p
              class="mb-4 mb-0 text-dark-1 aos-init aos-animate"
              data-aos-delay="1000"
            >
              Si vous avez oublié votre mot de passe, cliquez sur "Mot de passe
              oublié" sur la page de connexion. Suivez les instructions pour
              réinitialiser votre mot de passe.
            </p>

            <h5 class="mb-8">
              8. gstocky.com propose-t-il une version mobile de la plateforme?
            </h5>
            <p
              class="mb-4 mb-0 text-dark-1 aos-init aos-animate"
              data-aos-delay="1000"
            >
              Oui, gstocky.com est accessible sur les appareils mobiles. Vous
              pouvez vous connecter à votre compte à partir de n'importe quel
              navigateur mobile. N'hésitez pas à personnaliser ces questions et
              réponses en fonction des spécificités de votre plateforme et des
              préoccupations courantes de vos utilisateurs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomFooter from "../../components/Footer.vue";
import CustomNavbar from "../../components/Navbar.vue";
export default {
  name: "About",
  components: { CustomFooter, CustomNavbar },
};
</script>
