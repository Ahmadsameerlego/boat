export default function ({ redirect }) {
  if (typeof localStorage !== 'undefined') {
    // Get the value from localStorage
    const providerLoggedIn = localStorage.getItem('delegateLoggedIn');
    // Check if the value exists
    if (providerLoggedIn == 'true') {
      // Perform action if the value exists
      console.log('Value exists:', providerLoggedIn);
      // Continue to the next route
      return redirect('/provider/HomePage');
    }
  } else {
    console.log('localStorage is not defined');
  }
}
