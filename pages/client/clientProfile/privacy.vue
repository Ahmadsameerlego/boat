<template>
  <b-card no-body>
    <div class="flex-bet all-qestion m-1" role="tab" v-b-toggle.accordion-2>
      <div class="flex-qet-me">
        <div class="icon-faq color-main">
          <font-awesome-icon :icon="['fas', 'shield-halved']" />
        </div>
        <div class="full-q">{{ $t('ProfilePrivacy') }}</div>
      </div>
      <div class="dafeult-faq-icon">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
    </div>



    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
      <div class="parent-profile">
        <p class="text-center p-3 font20 line-h" v-html="policy"></p>
      </div>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      policy: "",
    };
  },
  methods: {
    // get whous 
    async getTerms(){
        await this.$axios.$get('/policy-web')
        .then( (res)=>{
          this.policy = res.data.policy
        } )
      }
  },
  mounted() {
    this.getTerms();
  },
};
</script>

<style></style>
