<template>
  <div class="trips section-pad">
      <div class="container">

        <!-- start providers details  -->
        <div class="flex-groupme">
          <h5 class="main-title color-main font600 mb-4"> {{ $t('serviceProviderss') }} </h5>
        </div>
        <div class="flex-groupme mb-3">
          <img
            :src="store.avatar"
            class="img-prof"
            alt=""
          />
        </div>
        <div class="mb-3 text-center"> {{ store.name }} </div>
        <div class="flex-rairing gap-book gray-col mt-3 mb-4 font14">
          <div class="book-nums">عدد الحجوزات : {{ store.num_orders }} حجز</div>
          <div class="book-loc">
            <i class="fa-solid fa-location-dot"></i>
            <div class="book-loc-real"> {{ store.address }} </div>
          </div>
          <div class="nationality-me"> {{ store.nationality }} </div>
        </div>
        <div class="flex-rairing mt-3 mb-4 font14">
          <div class="light-box">
            <font-awesome-icon :icon="['fas', 'star']" class=" star-yellow" />
            {{ store.rate }}
          </div>
          <div class="light-box">
            <font-awesome-icon :icon="['fas', 'paper-plane']" class="color-main" />
            {{ store.distance }}
          </div>
        </div>
        <!-- end providers details  -->

        <!-- start providers boats  -->
        <div class="row">

            <!-- single boat  -->
            <div class="col-lg-4 col-md-6 col-12 mb-4" v-for="product in products" :key="product.id">
            <div class="main-box-sh">
                <div class="flex-groupme">
                <img
                    :src="product.image"
                    class="person-im"
                    alt=""
                />
                </div>
                <div class="text-center mt-3 mb-3"> {{ product.name }} </div>
                <div class="text-center gray-col font14">
                سعة القارب : {{ product.capacity }} فرد
                </div>
                <div class="flex-rairing mt-3 mb-4">
                <div class="light-box">
                    <font-awesome-icon :icon="['fas', 'star']" class=" star-yellow" />
                    {{ product.rate }}
                </div>
                <div class="light-box">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="color-main" />
                    {{ product.address }}
                </div>
                <div class="light-box"> {{ product.display_price }}  ر.س / ساعة</div>
                </div>
                <nuxt-link :to="'/client/boats/'+product.id" class="btn-main up big-100">
                    {{ $t('boatDetails') }}
                </nuxt-link>
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
      // for paginataion 
      currentPage : 1,
      store : {},
      products : []
    }
  },
  methods:{
    // get provider info 
    async getProviderInfo(){
      await this.$axios.$get(`/single-provider?provider_id=${this.$route.params.id}&page=${this.currentPage}`,{
        headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if( res.key == 'success' ){
          this.store = res.data.store ;
          this.products = res.data.store.products ;
        }
      } )
      .catch( (err) => console.error(err) )
    }
  },
  mounted(){
    this.getProviderInfo()
  }
}
</script>

<style>

</style>