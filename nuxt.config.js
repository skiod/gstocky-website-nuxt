export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gstocky | Votre solution complète de gestion de stock et commerciale',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Optimisez votre gestion de stock et boostez votre activité commerciale avec notre application puissante. Gérez facilement vos stocks, suivez les ventes, automatisez les commandes et maximisez vos profits. Simplifiez vos opérations et prenez de meilleures décisions grâce à notre solution complète et intuitive. Essayez notre application de gestion de stock et commerciale dès maintenant pour une efficacité maximale et une croissance exponentielle.' },
      { hid: 'keyword', name: 'keyword', content: 'gestion de stock,gestion de commerciale,gestion,stock,facturation' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
      { rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@100;200;300;400;500;600;700;800;900&family=DM+Sans:wght@100;200;300;400;500;600;700;800;900&subset=latin&display=swap' },
      { rel: 'stylesheet', href: 'https://designmodo.com/startup/app/pub/141115/bc24779f9d0897a2a55b285cf3ff7a8c/styles/css/styles.min.css?v=1686351539' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
      { rel: 'stylesheet', href: '/css/preview.css'},
      { rel: 'stylesheet', href: '/css/style.css'},
      { rel: 'stylesheet', href: '/css/print.css', media: 'print'},
    ],
    script : [
      {
        hid: 'clarity-script',
        innerHTML: "(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, 'clarity', 'script', 'gy942a6ahl');",
      },
      // {
      //   hid: 'brevo-conversations-script',
      //   innerHTML: `
      //     (function(d, w, c) {
      //       w.BrevoConversationsID = '649c5fffc019833d5a561757';
      //       w[c] = w[c] || function() {
      //         (w[c].q = w[c].q || []).push(arguments);
      //       };
      //       var s = d.createElement('script');
      //       s.async = true;
      //       s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
      //       if (d.head) d.head.appendChild(s);
      //     })(document, window, 'BrevoConversations');
      //   `,
      // },
      {
        src :'https://www.google.com/recaptcha/api.js?render=6LetDZEmAAAAAEr9EdTVoDeg6-saEQYhXVSlrQhO'
      },
      {
        src : "https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js",
        body: true,
      },
      {
        src : "https://unpkg.com/aos@next/dist/aos.js",
        body: true,
      },
      {
        src : "/js/plugins.min.js?v=5.6.692",
        body: true,
      },
      {
        src : "/js/scripts.min.js?v=5.6.692",
        body: true,
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    distDir: 'dist',
  },
  router: {
    middleware: 'redirect',
  },

}
