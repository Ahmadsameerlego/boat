<template>
  <b-card no-body>
    <div class="flex-bet all-qestion m-1" role="tab" v-b-toggle.accordion-3>
      <div class="flex-qet-me">
        <div class="icon-faq color-main">
          <font-awesome-icon :icon="['fas', 'file']" />
        </div>
        <div class="full-q"> {{ $t('Brief') }} </div>
      </div>
      <div class="dafeult-faq-icon">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
    </div>

    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
      <div class="parent-profile">
        <p class="text-center p-3 font20 line-h" v-html="terms"></p>
      </div>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      terms: "",
    };
  },
  methods: {
     // get whous 
     async getTerms(){
        await this.$axios.$get('/terms-web')
        .then( (res)=>{
          this.terms = res.data.terms
        } )
      }
  },
  mounted() {
    this.getTerms();
  },
};
</script>

<style></style>
