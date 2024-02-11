<template>
  <div class="error-page">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link to="/">Go to Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style scoped>
.error-page {
  text-align: center;
  margin-top: 50px;
}
</style>
