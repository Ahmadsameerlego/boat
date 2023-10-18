<template>
    <div class="who-us section-pad">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12 mb-3">
            <div class="who-us-right">
              <h5 class="main-title color-main font600">{{ $t('whoArewe') }} </h5>
              <p class="mt-3">
                {{ whous }}
              </p>
              <div class="row">

                <div class="col-md-6 col-12 mb-2" v-for="intro in intros" :key="intro.id">
                  <div class="who-box mt-4">
                    <img
                      :src="intro.image"
                      alt=""
                      class="who-box-img"
                    />
                    <h6 class="color-main mt-2 mb-2">
                      {{ intro.title }}
                    </h6>
                    <p> {{ intro.desc }} </p>
                  </div>
                </div>
                
              </div>
              <nuxt-link v-if="client" to="/client/whous" class="btn-main mt-4 up">{{ $t('more') }}</nuxt-link>
              <nuxt-link v-else-if="provider" to="/provider/whous" class="btn-main mt-4 up">{{ $t('more') }}</nuxt-link>
            </div>
          </div>
          <div class="col-md-6 col-12">

            <div class="who-us-left rela-p">
              <img
                :src="image"
                class="left-img-who"
                alt=""
              />

              <div class="abs-photo">

                <!-- fancy box  -->
                <div class="rela-p">
                  <img
                    :src="image"
                    class="world-img"
                    alt=""
                  />
                  <a
                    :href="video"
                    data-fancybox="gallery"
                    class="aps-pho-play"
                  >
                    <img :src="src7" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            intros : [],
            image : '',
            video : '',
            whous : '',
            client : false,
            provider : false,
            src7 : require('@/assets/imgs/Group 82425.png'),
        }
    },
    methods:{
      // get intro 
      async getIntro(){
        await this.$axios.$get('/intro')
        .then( (res)=>{
          this.intros = res.data.intros;
          this.image = res.data.image;
          this.video = res.data.video ;
        } )
        
      },

      // get whous 
      async getWhoUs(){
        await this.$axios.$get('/whous')
        .then( (res)=>{
          this.whous = res.data.whous
        } )
      }
    },
    mounted(){
      this.getIntro();
      this.getWhoUs();

      // client show 
      if( this.$route.fullPath.includes('client') ){
        this.client = true ;
      }else if( this.$route.fullPath.includes('provider') ){
        this.provider = true ;
      }
    }
}
</script>

<style>

</style>