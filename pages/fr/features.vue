<template>
  <div>
    <custom-navbar></custom-navbar>

      <section class="py-10 py-lg-20 text-center text-md-start bg-bg-3" id="features">
					<div class="container">
						<h2 class="h1 text-center">Fonctionnalités</h2>
						<div class="mb-15 mb-md-8 row align-items-center flex-md-row-reverse justify-content-center" draggable="true">
							<div class="mb-8 mb-md-0 col-10 col-sm-7 col-md-5 col-xl-4">
								<img src="/images/devis.png" srcset="/images/devis.png 2x" alt="devis" class="img-fluid w-100 aos-init aos-animate"  data-aos-delay="250">
							</div>
							<div class="col-md-1">
							</div>
							<div class="col-md-6 col-xl-5 col-xxl-4">
								<h4 class="mb-6 remove-br aos-init aos-animate" >
									Devis
express
								</h4>
								<p class="mb-0 fs-1 aos-init aos-animate"  >
									Créez des devis professionnels en quelques clics pour attirer et convertir vos clients
								</p>
							</div>
						</div>
						<div class="mb-md-8 row align-items-center justify-content-center">
							<div class="mb-8 mb-md-0 col-10 col-sm-7 col-md-5 col-xl-4">
								<img src="/images/order.png" srcset="/images/order.png 2x" alt="order" class="img-fluid w-100 aos-init aos-animate"  data-aos-delay="250">
							</div>
							<div class="col-md-1">
							</div>
							<div class="col-md-6 col-xl-5 col-xxl-4">
								<h4 class="mb-6 remove-br aos-init aos-animate" >
									Gestion des commandes simplifiée
								</h4>
								<p class="mb-0 fs-1 aos-init aos-animate"  >
									Suivez et gérez efficacement toutes vos commandes, de la réception à la livraison, pour des transactions fluides
								</p>
							</div>
						</div>
						<div class="mb-15 mb-md-8 row align-items-center flex-md-row-reverse justify-content-center">
							<div class="mb-8 mb-md-0 col-10 col-sm-7 col-md-5 col-xl-4">
								<img src="/images/inventory.png" srcset="/images/inventory.png 2x" alt="inventory" class="img-fluid w-100 aos-init aos-animate"  data-aos-delay="250">
							</div>
							<div class="col-md-1">
							</div>
							<div class="col-md-6 col-xl-5 col-xxl-4">
								<h4 class="mb-6 remove-br aos-init aos-animate" >
									Inventaire en temps réel
								</h4>
								<p class="mb-0 fs-1 aos-init"  >
									Tenez vos stocks à jour et optimisez votre gestion des produits pour éviter les ruptures et maximiser vos ventes.
								</p>
							</div>
						</div>
						<div class="mb-md-8 row align-items-center justify-content-center">
							<div class="mb-8 mb-md-0 col-10 col-sm-7 col-md-5 col-xl-4">
								<img src="/images/invoice2.png" srcset="/images/invoice2.png 2x" alt="invoice" class="img-fluid w-100 aos-init"  data-aos-delay="250">
							</div>
							<div class="col-md-1">
							</div>
							<div class="col-md-6 col-xl-5 col-xxl-4">
								<h4 class="mb-6 remove-br aos-init" >
									Facturation rapide et précise
								</h4>
								<p class="mb-0 fs-1 aos-init"  >
									Générez des factures professionnelles en un clin d'œil et assurez le suivi des paiements pour une gestion financière sans faille.
								</p>
							</div>
						</div>
						<div class="mb-md-8 mb-15 mb-md-8 row align-items-center flex-md-row-reverse justify-content-center">
							<div class="mb-8 mb-md-0 col-10 col-sm-7 col-md-5 col-xl-4">
								<img src="/images/clients.png" srcset="/images/clients.png 2x" alt="clients" class="img-fluid w-100 aos-init"  data-aos-delay="250">
							</div>
							<div class="col-md-1">
							</div>
							<div class="col-md-6 col-xl-5 col-xxl-4">
								<h2 class="mb-6 remove-br aos-init" >
									Gestion des clients et fournisseurs efficace
								</h2>
								<p class="mb-0 fs-1 aos-init"  >
									Centralisez et organisez toutes les informations relatives à vos clients et fournisseurs pour des relations durables et fructueuses.
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
  name: "Features",
  components: { CustomFooter, CustomNavbar },
};
</script>
