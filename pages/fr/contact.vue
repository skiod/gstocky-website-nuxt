<template>
  <div>
    <custom-navbar></custom-navbar>


      <section class="py-10 py-lg-20 bg-bg-3 text-center" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img style="width:100%" src="/images/contact.jpg" alt="easy to use" />
            </div>
            <div class="col-md-6">
              <h1 class="mb-10" >Contactez nous</h1>
              <p>N'hésitez pas à nous contacter et à nous faire part de votre problème.</p>
              <form method="post" class="mb-15 js-ajax-form">
                <!-- Forms alerts -->
                <div id="successMessage" class="alert alert-action-8" data-result="success" role="alert">
                  <span class="js-form-alert-text" data-default-text="Thank you for your message!">Thank you for your message!</span>
                </div>
                <div class="alert alert-action-5 fixed-top invisible fade js-form-result" data-result="error" role="alert">
                  <span class="js-form-alert-text"> Error! </span>
                </div>
                <!-- Forms alerts end -->
                <div class="row">
                  <div class="col-sm-6">
                    <input id="name" type="text" name="name" placeholder="Nom" class="form-control border border-dark-3" required="required"/>
                  </div>

                  <div class="col-sm-6">
                    <input id="phone" type="text" name="phone" placeholder="Téléphone" class="mb-6 form-control border border-dark-3" required="required"/>
                  </div>

                  <div class="col-sm-12">
                    <input id="email" type="email" name="email" placeholder="Email" class="mb-6 form-control border border-dark-3" required="required"/>
                  </div>
                </div>

                <textarea id="message" name="message" placeholder="Votre Message" class="mb-6 form-control border border-dark-3" rows="5" required="required"></textarea>
                <div class="mb-6 row justify-content-center">
                  <div class="col-sm-6">
                    <button class="btn btn-action-1 w-100" id="sendMessage">Envoyer</button>
                  </div>
                </div>
              </form>
              <div class="w-50 border-bottom border-dark-3 mx-auto mb-10" data-aos-delay="250"></div>
              <p class="mb-2" >Or call us via WhatsApp</p>
              <a href="tel:++212760363100" class="text-dark-1 fw-bold fs-1" >+212 760363100</a>
            </div>
          </div>
        </div>
      </section>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomFooter from '../../components/Footer.vue';
import CustomContactUS from '../../components/ContactUs.vue';
import CustomNavbar from '../../components/Navbar.vue';
export default {
  name: "Contact",
  components : {CustomContactUS,CustomFooter,CustomNavbar}
};
</script>
