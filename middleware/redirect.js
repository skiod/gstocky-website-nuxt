// middleware/redirect.js

export default function ({ route, redirect }) {
  // Check if the current path is the root path ("/")
  if (route.path === '/') {
    // Redirect to the "/fr" path
    // return redirect('/fr');
  }

  if (route.path === '/invoice' || route.path === '/facture') {
    // Redirect to the "/fr" path
    return redirect('/fr/invoice-generator');
  }
}
