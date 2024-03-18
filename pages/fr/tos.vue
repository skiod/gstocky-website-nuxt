<template>
  <div>
    <custom-navbar></custom-navbar>

        <section class="bg-bg-3 py-10 py-lg-20">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-10 col-xl-8">
						<h1 class="h3 display-5 mb-6 mb-md-15 aos-init aos-animate" >Conditions d'utilisation de gstocky.com</h1>

            <h5 class="mb-4">
              1. Acceptation des conditions d'utilisation
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate">
              En accédant et en utilisant gstocky.com (ci-après dénommé "la Plateforme"), vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser la Plateforme.
						</p>
            <h5 class="mb-4">
              2. Compte utilisateur
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate">
              a. Pour accéder à certaines fonctionnalités de la Plateforme, vous devrez créer un compte utilisateur. Vous êtes responsable de la confidentialité de vos informations d'identification et de toutes les activités qui se déroulent sous votre compte.
						</p>
            <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate">
              b. Vous vous engagez à fournir des informations exactes, à jour et complètes lors de la création de votre compte.
						</p>
            <h5 class="mb-8">
              3. Utilisation de la Plateforme
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate">
              a. Vous vous engagez à utiliser la Plateforme conformément aux lois en vigueur et aux présentes conditions.
						</p>
            <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate">
              b. Vous acceptez de ne pas utiliser la Plateforme à des fins illégales, frauduleuses ou nuisibles, et de ne pas violer les droits d'autrui.
						</p>
            <h5 class="mb-8">
              4. Contenu de l'utilisateur
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate">
              a. En soumettant du contenu sur la Plateforme, vous accordez à gstocky.com une licence mondiale, non exclusive, transférable, libre de redevance et pouvant être sous-licenciée pour utiliser, reproduire, distribuer, préparer des œuvres dérivées, afficher et exécuter ce contenu.
						</p>
            <p class="mb-4 mb-0 text-dark-1 aos-init aos-animate">
              b. Vous êtes seul responsable du contenu que vous publiez sur la Plateforme, et vous garantissez que vous avez tous les droits nécessaires pour le faire.
						</p>

            <h5 class="mb-8">
              5. Propriété intellectuelle
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate">
              a. gstocky.com détient tous les droits de propriété intellectuelle associés à la Plateforme. Vous vous engagez à respecter ces droits.
						</p>

            <h5 class="mb-8">
              6. Modifications des conditions d'utilisation
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate">
              gstocky.com se réserve le droit de modifier ces conditions d'utilisation à tout moment. Les modifications prendront effet dès leur publication sur la Plateforme.
						</p>

            <h5 class="mb-8">
              7. Résiliation
            </h5>
						<p class="mb-4 mb-0 text-dark-1 aos-init aos-animate">
              gstocky.com se réserve le droit de résilier votre accès à la Plateforme à sa seule discrétion, avec ou sans préavis, pour toute violation de ces conditions d'utilisation.
						</p>


					</div>
				</div>
			</div>
		</section>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomFooter from '../../components/Footer.vue';
import CustomNavbar from '../../components/Navbar.vue';
export default {
  name: "About",
  components : {CustomFooter,CustomNavbar},
  head() {
    return {
      title: "Conditions d'utilisation - Gstocky",
      link: [
        {
          rel: 'canonical',
          href: 'https://gstocky.com/fr/tos'
        }
      ]
    }
  }
};
</script>
