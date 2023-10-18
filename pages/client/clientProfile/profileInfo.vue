<template>
  <div>
    <!-- header  -->
    <homeHeader :headerTitle="$t('personalTitle')" />

    <infoComp />

    <!-- footer  -->
    <homeFooter />
  </div>
</template>

<script>
import infoComp from "./infoComp.vue";
export default {
  components: {
    infoComp,
  },
  // middleware : ['userAuth']
};
</script>

<style>
.card {
  border: none;
}
.dafeult-faq-icon {
  transition: all 0.3s ease-in-out;
}
.not-collapsed .dafeult-faq-icon {
  transform: rotate(270deg);
}
</style>
