<template>
  <div class="profile-collapses contact-us section-pad mt-3">
    <div class="container">
      <div class="col-md-8 col-12 margin-auto p-0">
        <div class="accordion" id="accordionExample">
          <div class="accordion" role="tablist">
            <profileForm />
            <privacy />
            <terms />
            <complains />
            <comments />
            <wallet />
            <notifications />
            <webLang />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileForm from "./profileForm.vue";
import privacy from "./privacy.vue";
import terms from "./terms.vue";
import complains from "./complains.vue";
import comments from "./comments.vue";
import wallet from "./wallet.vue";
import notifications from "./notifications.vue";
import webLang from "./webLang.vue";
export default {
  components: {
    profileForm,
    privacy,
    terms,
    complains,
    comments,
    wallet,
    notifications,
    webLang,
  },
};
</script>

<style></style>
