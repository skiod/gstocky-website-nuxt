<template>
  <div style="height:100%;width:100%">
    <custom-navbar></custom-navbar>

    <invoice></invoice>

    <!-- <custom-footer></custom-footer> -->
  </div>
</template>

<script>
import CustomFooter from '../../components/Footer.vue';
import CustomNavbar from '../../components/Navbar.vue';
import Invoice from '../../components/Invoice.vue';
export default {
  name: "InvoiceGenerator",
  components : {Invoice,CustomFooter,CustomNavbar}
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
