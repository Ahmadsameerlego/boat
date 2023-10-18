<template>
    <div>
      <!-- header  -->
      <homeHeader  :headerTitle="$t('personalTitle')" />
  
      <providerInfoComp />
  
      <!-- footer  -->
      <homeFooter />
    </div>
</template>
  
<script>
import providerInfoComp from "./providerInfoComp.vue";
export default {
  components: {
      providerInfoComp,
  },
  // middleware : ['auth']
};
</script>
  
  <style scoped>
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
  