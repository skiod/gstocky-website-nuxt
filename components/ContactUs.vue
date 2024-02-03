<template>
  <section class="py-10 py-lg-20 bg-bg-3 text-center" id="contact">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
        <h1 class="mb-6" >Contact us</h1>
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
              <input id="name" type="text" name="name" placeholder="Name" class="form-control border border-dark-3" required="required"/>
            </div>

            <div class="col-sm-6">
              <input id="phone" type="text" name="phone" placeholder="Phone" class="mb-6 form-control border border-dark-3" required="required"/>
            </div>

            <div class="col-sm-12">
              <input id="email" type="email" name="email" placeholder="Email" class="mb-6 form-control border border-dark-3" required="required"/>
            </div>
          </div>

          <textarea id="message" name="message" placeholder="Your message" class="mb-6 form-control border border-dark-3" rows="5" required="required"></textarea>
          <div class="mb-6 row justify-content-center">
            <div class="col-sm-6">
              <button class="btn btn-action-1 w-100" id="sendMessage">Send</button>
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
</template>

<script>
export default {
  name: "ContactUs",
};
</script>
