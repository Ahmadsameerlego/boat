<template>
    <div class="profile-collapses contact-us section-pad mt-3">
      <div class="container">
        <div class="col-md-8 col-12 margin-auto p-0">
          <div class="accordion" id="accordionExample">
            <div class="accordion" role="tablist">
              <providerForm />
              <profilePrivacy />
              <providerTerms />
              <providerComplains />
              <providerComments />
              <providerWallet />
              <fainancialProvider />
              <providerNoti />
              <providerLang />

            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import providerForm from "./providerForm.vue";
  import profilePrivacy from "./profilePrivacy.vue";
  import providerTerms from "./providerTerms.vue";
  import providerComplains from "./providerComplains.vue";
  import providerComments from "./providerComments.vue";
  import providerWallet from "./providerWallet.vue";
  import fainancialProvider from "./fainancialProvider.vue";
  import providerNoti from "./providerNoti.vue";
  import providerLang from "./providerLang.vue";
  export default {
    components: {
      providerForm,
      profilePrivacy,
      providerTerms,
      providerComplains,
      providerComments,
      providerWallet,
      fainancialProvider,
      providerNoti,
      providerLang,
    },
  };
  </script>
  
  <style></style>
  