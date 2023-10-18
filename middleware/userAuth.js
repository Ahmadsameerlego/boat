// Middleware file (checkLocalStorage.js)
export default function ({ redirect }) {
    if( typeof localStorage !== 'undefined' ){
      // Get the value from localStorage
      const clientLogin = localStorage.getItem('userLoggedIn');
      console.log(clientLogin)
      // Check if the value exists
      if (clientLogin == 'true') {
        // Perform action if the value exists
        console.log('Value exists:', clientLogin);
        // Continue to the next route
        return Promise.resolve();
      } else if(clientLogin == 'false') {
        // Perform action if the value does not exist
        console.log('Value does not exist');
        return redirect('/client/HomePage');
      }
    }else{
      console.log('localStorage is not defined')
    }
}
  