<template>
  <div style="height:100%;width:100%">
    <custom-navbar></custom-navbar>

    <invoice></invoice>

  </div>
</template>

<script>
import CustomFooter from '../../components/Footer.vue';
import CustomNavbar from '../../components/Navbar.vue';
import Invoice from '../../components/Invoice.vue';
export default {
  name: "InvoiceGenerator",
  components : {Invoice,CustomFooter,CustomNavbar},
  head() {
    return {
      title: 'Générateur de Factures - Gstocky',
      link: [
        {
          rel: 'canonical',
          href: 'https://gstocky.com/fr/invoice-generator'
        }
      ]
    }
  }
};
</script>

<style>
body{
  background: #ddd;
}

.x-container{
  margin-top:1rem;
  margin-bottom: 1rem !important;
}
</style>
