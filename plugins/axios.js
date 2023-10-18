export default function ({ $axios, app, redirect }) {
    $axios.onRequest((config) => {
      const lang = app.i18n.locale
      if (lang) {
        config.headers.common['lang'] = lang
      }
     
    });

    $axios.onResponse( (response)=>{
      if( response.data.msg === 'Unauthenticated.' ){
        if( !localStorage.getItem('visitor') ){
          localStorage.removeItem('userLoggedIn');
          localStorage.removeItem('delegateLoggedIn');
          redirect('/');
        }
      }
    } )
}
