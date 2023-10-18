<template>
  <div class="trips section-pad">
      <div class="container">

        <div class="flex-groupme">
          <h5 class="main-title color-main font600 mb-5"> {{ $t('serviceProviderss') }} </h5>
        </div>

        <!-- start filter  -->
        <h6 class="mb-3 font600 p-1"> {{ $t('filterDepend') }} </h6>
        <div class="col-md-9 mb-5">
          <div class="row">


            <div class="col-lg-4 col-md-6 col-12 pr-0">
              <div class="filter-sele">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('tripType') }} </h6>
                  <div class="relative-co">
                    <select name="trip_type_id" v-model="trip_type_id" id="" class="main-select">
                      <option value="" selected hidden disabled>
                        {{  $t('chooseTravelType')}}
                      </option>
                      <option v-for="cat in categories" :key="cat.id" :value="cat.id"> {{ cat.name }} </option>
                    </select>
                    <div class="icon-float">
                      
                      <font-awesome-icon :icon="['fas', 'sailboat']" class="font15" />
                    </div>
                    <div class="icon-float2">
                      <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 pr-0">
              <div class="filter-sele">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('price') }} </h6>
                  <div class="relative-co">
                    <input
                      type="number"
                      :placeholder="$t('pricePlace')"
                      class="inp-spe-tele dateme"
                      name="price"
                      v-model="price"
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'sack-dollar']" />
                    </div>
                    <!-- <div class="icon-float2">
                      <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 pr-0">
              <div class="filter-sele">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('tripDate') }} </h6>
                  <div class="relative-co">
                    <input
                      type="date"
                      :placeholder="$t('DatePlace')"
                      class="inp-spe-tele dateme"
                      style="padding:0 7px"
                      name="date"
                      v-model="date"
                    />
                    <!-- <div class="icon-float">
                      <font-awesome-icon :icon="['far', 'calendar-days']" class="color-main" />
                    </div> -->
                    <div class="icon-float2">
                      <!-- <font-awesome-icon :icon="['fas', 'calendar']" class="color-main" /> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end filter  -->

        <!-- service provider boats  -->
        <div class="row" v-if="products.length>0">
            <!-- single item  -->

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
              <div class="flex-rairing mt-3 mb-4">
                <div class="light-box">
                  <!-- <i class="fa-solid fa-star star-yellow"></i> -->
                  <font-awesome-icon :icon="['fas', 'star']" class=" star-yellow" />
                  {{ product.rate }}
                </div>
                <div class="light-box">
                  <!-- <i class="fa-solid fa-paper-plane color-main"></i> -->
                  <font-awesome-icon :icon="['fas', 'paper-plane']" class="color-main" />
                  {{ product.address }}
                </div>
                <div class="light-box">{{ product.display_price }} ر.س / ساعة</div>
              </div>
              <nuxt-link :to="'/client/providers/'+product.provider_id" class="btn-main up big-100">
                {{ $t('servicesProvider') }}
              </nuxt-link>
            </div>
          </div>
        </div>


        <div class="notFound d-flex align-items-center" v-else>
          <font-awesome-icon :icon="['fas', 'circle-info']" />
          <p> {{ $t('noBoats') }} </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            src : require('@/assets/imgs/185644495_1667380803456791_1968050560740665054_n.jpg'),
            categories : [],
            trip_type_id : '',
            date : '',
            price : '',
            lat : '',
            lng : '',
            products : []
        }
    },

    watch:{
          price(){
            this.filterBoats();
          },
          date(){
            this.filterBoats();
          },
          trip_type_id(){
            this.filterBoats(); 
          }
    },
    methods:{
      // get categories 
      async getCategories(){
          await this.$axios.$get('/trip-types')
          .then( (res)=>{
              this.categories = res.data.trip_types
          } )
      },


      // filter boats 
      async filterBoats(){
        const fd = new FormData();

        if( this.trip_type_id === '' ){
          fd.append('trip_type_id', this.$route.params.id);
        }else if( this.trip_type_id !== '' ){
          fd.append('trip_type_id', this.trip_type_id);
        }

        
        if( this.price !== ''){
          fd.append('price', this.price);
        }
        if( this.date !== '' ){
          fd.append('date', this.date);
        }
        fd.append('lat', this.lat);
        fd.append('long', this.lng);
        
        await this.$axios.$post('/filter-boats', fd , {
          headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then( (res)=>{
          if( res.key == 'success' ){
            this.products = res.data.products ;
          }
        } )
      }

    },

    beforeMount(){
            let user = localStorage.getItem('user');
      this.lat = JSON.parse(user).lat;
      this.lng = JSON.parse(user).long

    },
    mounted(){
      this.getCategories();

      this.filterBoats();
    }
}
</script>

<style>

</style>