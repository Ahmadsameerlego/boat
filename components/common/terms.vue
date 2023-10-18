<template>
  <section class="mt-4 mb-4 mx-5">
    <h5 class="main-title color-main font600">{{ $t('Brief') }} </h5>

    <p v-html="terms">

    </p>
  </section>
</template>

<script>
export default {
    data(){
        return{
            terms : ''
        }
    },  
    methods:{
        // get whous 
      async getTerms(){
        await this.$axios.$get('/terms-web')
        .then( (res)=>{
          this.terms = res.data.terms
        } )
      }
    },
    mounted(){
        this.getTerms()
    }
}
</script>

<style>

</style>