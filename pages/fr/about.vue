<template>
  <div>
    <custom-navbar></custom-navbar>

    <section>
        about us
    </section>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomFooter from '../../components/Footer.vue';
import CustomNavbar from '../../components/Navbar.vue';
export default {
  name: "About",
  components : {CustomFooter,CustomNavbar}
};
</script>
