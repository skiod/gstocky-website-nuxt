<template>
  <div>
    <custom-navbar></custom-navbar>

    <!-- Blog 2 -->
    <section class="py-10 py-lg-20 bg-bg-3 text-center text-lg-start">

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
