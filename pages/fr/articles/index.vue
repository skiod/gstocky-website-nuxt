<template>
  <div>
    <custom-navbar></custom-navbar>

    <!-- Blog 2 -->
    <section class="py-10 py-lg-20 bg-bg-3 text-center text-lg-start">

        <div class="container">


          <h2 class="mb-8">Articles</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/getting-started">Guide d'inscription</a></h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/add-product">Ajouter L'inventaires</a></h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/add-quote">Ajouter les Devis</a></h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/add-order">Ajouter les Commandes</a></h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/add-delivery">Ajouter les Livraisons</a></h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/add-invoice">Ajouter les Factures</a></h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/add-purchase">Ajouter les Achats</a></h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/add-reception">Ajouter les Réceptions</a></h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/add-payment">Ajouter les Paiments</a></h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/add-return">Ajouter les Retours</a></h5>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="/fr/articles/add-credit-note">Ajouter les Avoirs</a></h5>
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
  head() {
    return {
      title: 'Articles - Gstocky',
      link: [
        {
          rel: 'canonical',
          href: 'https://gstocky.com/fr/articles'
        }
      ]
    };
  },
};
</script>

<style scoped>

.card {
      transition: box-shadow 0.3s;
    }

    .card:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card-title a {
      color: #333;
      text-decoration: none;
    }

    .card-title a:hover {
      color: #007bff;
    }

</style>
