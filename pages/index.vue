<template>
  <div>
    <custom-navbar></custom-navbar>
    <header class="py-20 ">
      <div class="container">
        <div class="row align-items-center flex-md-row-reverse">
          <div class="col-md-6">
            <img src="/images/home.png" srcset="/images/home.png 2x" alt="gestion de stock" class="w-100"  data-aos-delay="0"/>
          </div>
          <div class="col-md-6 mt-8 mt-md-0">
            <h1 class="mb-6 display-5"  data-aos-delay="150">Simplifier, optimiser, prospérer avec Gstocky !</h1>
            <p class="mb-8 fs-1"  >Gérez avec facilité, contrôlez avec précision - Votre solution intégrée pour inventaires, factures, achats, commandes, réceptions, livraisons, paiements, notes de crédit, retours, clients, fournisseurs et bien plus encore!</p>
            <a href="https://dash.gstocky.com/signup" class="btn btn-action-1"  >Commencez gratuitement</a>
          </div>
        </div>
      </div>
    </header>

    <section class="py-10 py-lg-20 text-center ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-7 col-xl-6 col-xxl-5">
            <h2 class="display-5 mb-6"  data-aos-delay="0">Pourquoi nous ?</h2>
            <p class="fs-2 mb-15">Choisir notre application de gestion des stocks et des affaires, c'est opter pour une solution fiable et efficace. Nous nous distinguons par notre expertise et notre engagement à fournir une expérience utilisateur exceptionnelle.</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="mb-8 mb-lg-0 col-sm-8 col-md-7 col-lg-4 d-flex"  data-aos-delay="0">
            <div class="w-100 p-8 p-md-16 p-lg-8 p-xl-12 p-xxl-20 bg-bg-2">
              <img style="margin-bottom: 2rem" src="/images/easy-to-use.png" alt="easy to use" />
              <h5>Facile à utiliser</h5>
              <p class="my-4">
                Simplifiez la gestion de vos stocks et augmentez vos ventes sans effort ! Une interface conviviale et intuitive vous permet de gérer facilement vos stocks et vos activités commerciales.
              </p>
            </div>
          </div>
          <div class="mb-8 mb-lg-0 col-sm-8 col-md-7 col-lg-4 d-flex"  >
            <div class="w-100 p-8 p-md-16 p-lg-8 p-xl-12 p-xxl-20 bg-bg-2">
              <img style="margin-bottom: 2rem" src="/images/support.png" alt="support" />
              <h5>Support</h5>
              <p class="my-4">
                Notre application offre un support complet et réactif, prêt à répondre à vos questions et à résoudre vos problèmes rapidement. Nous sommes là pour vous accompagner tout au long de votre expérience.
              </p>
            </div>
          </div>
          <div class="col-sm-8 col-md-7 col-lg-4 d-flex"  >
            <div class="w-100 p-8 p-md-16 p-lg-8 p-xl-12 p-xxl-20 bg-bg-2">
              <img style="margin-bottom: 2rem" src="/images/update.png" alt="updates" />
              <h5>Updates</h5>
              <p class="my-4">
                L'application continue de proposer de nouvelles mises à jour et fonctionnalités.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 py-lg-20 ">
      <div class="container">
        <div class="p-6 p-sm-12 bg-bg-2 rounded-2 text-center text-lg-start">
          <div class="row flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between">
            <div class="col-md-8 col-lg-6 col-xxl-5">
              <h2 class="display-5 aos-init aos-animate" data-aos-delay="0">Améliorez votre rentabilité et votre efficacité</h2>
              <a href="https://dash.gstocky.com/signup" class="mt-8 mb-6 btn btn-action-1 aos-init aos-animate">Commencez gratuitement</a>
              <p class="mb-0 aos-init aos-animate" >L'outil puissant qui vous aide à tout gérer en un seul endroit</p>
            </div>
            <div class="col-md-8 col-lg-6 text-lg-end">
              <img src="/images/business.png" srcset="/images/business.png 2x" alt="business" class="img-fluid mb-8 mb-md-0 aos-init aos-animate"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
import ContactUs from '../components/ContactUs.vue';
import CustomFooter from '../components/Footer.vue';
import CustomNavbar from '../components/Navbar.vue';
export default {
  name: "Index",
  components : {ContactUs,CustomFooter,CustomNavbar}
};
</script>
