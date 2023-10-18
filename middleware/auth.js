// Middleware file (checkLocalStorage.js)
export default function ({ redirect }) {
    if( typeof localStorage !== 'undefined' ){
      // Get the value from localStorage
      const providerLoggedIn = localStorage.getItem('delegateLoggedIn');
      console.log(providerLoggedIn)
      // Check if the value exists
      if (providerLoggedIn == 'true') {
        // Perform action if the value exists
        console.log('Value exists:', providerLoggedIn);
        // Continue to the next route
        return Promise.resolve();
      } else if(providerLoggedIn == 'false') {
        // Perform action if the value does not exist
        console.log('Value does not exist');
        return redirect('/provider/HomePage');
      }
    }else{
      console.log('localStorage is not defined')
    }
}
  