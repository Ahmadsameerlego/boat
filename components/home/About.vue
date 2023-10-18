<template>
  <div class="reach-us section-pad">
      <div class="container">
        <h5 class="main-title color-main font600 mb-4">{{ $t('whoArewe') }} </h5>
        <div class="flex-bet yes-rap mb-4">
          <a class="social" :href="'mailto:'+email">
            <div class="icon-foot">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </div>
            <div> {{ email }} </div>
          </a>
          <a class="social" :href="'tel:'+phone">
            <div class="icon-foot">
              <font-awesome-icon :icon="['fas', 'phone']" />
            </div>
            <div> {{ phone }} </div>
          </a>
          <div class="social">
            <div class="icon-foot">
              <font-awesome-icon :icon="['fas', 'location-dot']" />
            </div>
            <div> {{ address }} </div>
          </div>
        </div>
        
        <div class="mt-4 mb-4">
          
          <GMap
            ref="gMap"
            language="en"
            :center="locations"
            :zoom="10"
            style="width: 100%; height: 400px"
            v-if="load"
          >
            <GMapMarker
              :position="locations"
            >
            </GMapMarker>
          </GMap>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      
      email : '',
      phone : '',
      address : '',
      locations : {
        lat : 0 , 
        lng: 0
      },
      load : false
    }
  },
  methods:{
    async getAboutData(){
      await this.$axios.$get('/general-data')
      .then( (res)=>{
        this.email = res.data.email ;
        this.phone = res.data.phone ;
        this.address = res.data.address ;
        this.locations = {
            lat: parseFloat(res.data.lat),
            lng: parseFloat(res.data.long),
          };

      } )
    }
  },
  mounted(){
    this.getAboutData()
    setTimeout(() => {
      this.load = true
    }, 2000);
  }
}
</script>

<style>

</style>