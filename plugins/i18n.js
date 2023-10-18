export default ({ app }) => {
    app.i18n = app.i18n || {};

  const getLocaleFromStorage = () => {
    const locale = localStorage.getItem('locale');
    console.log(locale)
    return locale || 'ar'; // Use 'ar' as the fallback locale
  };

  const newLocale = getLocaleFromStorage();
  app.i18n.defaultLocale = newLocale;
  app.i18n.fallbackLocale = newLocale;
  app.i18n.locale = newLocale;


  window.addEventListener('storage', () => {
    const newLocale = getLocaleFromStorage();
    app.i18n.defaultLocale = newLocale;
    app.i18n.fallbackLocale = newLocale;
    app.i18n.locale = newLocale;



  });
};
  