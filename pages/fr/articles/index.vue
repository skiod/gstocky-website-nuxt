<template>
  <div>
    <custom-navbar></custom-navbar>

    <!-- Blog 2 -->
    <section class="py-10 py-lg-20 bg-bg-3 text-center text-lg-start">
      <div class="container">
        <div class="row justify-content-center" style="min-height:500px">
          <div class="col-lg-6 col-md-5 col-sm-8 mb-8 mb-md-15">
            <div class="row">
              <div class="col-lg-4 mb-4 mb-lg-0">
                <a href="/fr/articles/getting-started" class="d-block">
                  <img src="/images/pexel-1.jpg" srcset="/images/pexel-1.jpg 2x" alt="" class="img-fluid"/>
                </a>
              </div>
              <div class="col-lg-8">
                <a href="/fr/articles/getting-started" class="font-heading text-dark-1 fs-3 mb-2">Guide d'inscription étape par étape</a>
                <p class="fs-4">Commencez votre gestion d'inventaire avec GStocky : Guide d'inscription étape par étape</p>
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
  name: "About",
  components: { CustomFooter, CustomNavbar },
};
</script>
