<template>
    <div class="trips section-pad">
      <div class="container">
        <div class="flex-groupme">
          <h5 class="main-title color-main font600 mb-4"> {{ $t('boat') }} </h5>
        </div>
        <div class="row">
          <div class="col-md-6 col-12 p-0">
            <div class="boat-box">
              <div class="flex-groupme mb-3">
                <img
                  :src="provider.avatar"
                  class="img-prof"
                  alt=""
                />
              </div>
              <!-- provider details  -->
              <div class="mb-3 text-center"> {{ provider.name }} </div>
              <div class="flex-rairing gap-book gray-col mt-3 mb-4 font14">
                <div class="book-nums">{{ $t('resNumbers') }} : {{ provider.num_orders }} {{ $t('res') }}</div>
                <div class="book-loc">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                  <div class="book-loc-real">  {{ provider.address }} </div>
                </div>
                <div class="nationality-me"> {{ provider.nationality }} </div>
              </div>
              <div class="flex-rairing mt-3 mb-4 font14">
                <div class="light-box">
                  <font-awesome-icon :icon="['fas', 'star']" class=" star-yellow" />
                  {{ provider.rate }}
                </div>
                <div class="light-box">
                  <font-awesome-icon :icon="['fas', 'paper-plane']" class="color-main" />
                  {{ provider.distance }}
                </div>
              </div>
            </div>
          </div>

          <!-- boat details  -->
          <div class="col-md-6 col-12 p-0">
            <div class="boat-box no-left-border">
              <div class="gray-col font14 text-up"> {{ product.category }} </div>
              <div class="flex-groupme mb-3">
                <img
                  :src="product.image"
                  class="img-prof"
                  alt=""
                />
              </div>
              <div class="mb-3 text-center"> {{ product.name }} </div>
              <div class="flex-rairing gap-book gray-col mt-3 mb-4 font14">
                <div class="book-nums"> {{ $t('boatNumber') }} : {{ product.number }} </div>
                <div class="book-loc">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                  <div class="book-loc-real"> {{ product.address }} </div>
                </div>
                <div class="nationality-me"> {{ $t('capacity') }} : {{ product.capacity }}</div>
              </div>
              <div class="flex-rairing mt-3 mb-4 font14">
                <div class="light-box">
                  <font-awesome-icon :icon="['fas', 'star']" class=" star-yellow" />
                  {{ product.rate }}
                </div>
                <div class="light-box">
                  <font-awesome-icon :icon="['fas', 'paper-plane']" class="color-main" />
                  {{ product.distance }}
                </div>
              </div>
            </div>
          </div>
          <!-- description  -->
          <div class="col-md-6 col-12 p-0">
            <div class="boat-box">
              <h6 class="mb-3"> {{ $t('desc') }} </h6>
              <p class="mb-2 gray-col" v-html="product.desc">
                
              </p>
              
            </div>
          </div>

          <!-- price  -->
          <div class="col-md-6 col-12 p-0">
            <div class="boat-box no-left-border">
              <h6 class="mb-3"> {{ $t('price') }} </h6>
              <div class="flex-bet font14 mb-3">
                <div class="color-main">{{ product.display_price }} ر.س</div>
                <div class="color-main">{{ $t('hour') }}</div>
              </div>
              <h6 class="mb-3"> {{ $t('specialPrices') }} </h6>

              <section v-if="special_prices.length>0">
                <div class="flex-bet font14 mb-3" v-for="special in special_prices" :key="special.id">
                  <div class="color-main"> {{  special.price }} ر.س</div>
                  <div class="color-main"> {{ $t('from') }} {{ special.start }} {{ $t('to') }} {{ special.end }} {{ $t('hour') }} </div>
                </div>
              </section>

              <section v-else>
                <p class="text-center"> {{ $t('noSpecial') }} </p>
              </section>
             

             <!-- العروض  -->
              <h6 class="mb-3"> {{ $t('offers') }} </h6>

              <div class="table-offer" v-if="offers.length>0">

                <table id="myTable" class="table">
                  <thead>
                    <tr>
                      <th> {{ $t('tripType') }} </th>
                      <th> {{ $t('price') }} </th>
                      <th> {{ $t('offerEnd') }} </th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr v-for="offer in offers" :key="offer.id">
                      <td><span class="gray-col"> {{ offer.trip_type   }} </span></td>
                      <td>
                        <span class="gray-col"> {{ offer.price }}ر.س / ساعة</span>
                      </td>
                      <td class="gray-col"> {{ offer.finish_date }} </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>

              <p class="text-center" v-else> {{ $t('noOffers') }} </p>
            </div>
          </div>
        </div>

        <!-- slider  -->
        <h6 class="mb-3 mt-3 font600"> {{ $t('boatImgs') }} </h6>
        <div class="slider3">
          

            <carousel v-bind="options">
                  <slide v-for="image in images" :key="image.id" :index='image.id' class="owl-item">
                    <img
                      :src="image.url"
                      alt=""
                    />
                  </slide>
            </carousel>
        </div>

        <div class="flex-groupme mt-4">
          <nuxt-link :to="'/client/creatOrder/'+product.id" class="btn-main up lg"> {{ $t('reserve2') }} </nuxt-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      src : require('@/assets/imgs/marcin-ciszewski-Zexjl0v3MRU-unsplash.png'),
      product : {},
      provider : {},
      images : [],
      special_prices : [],
      offers : [],
      options: {
          loop: true,
          perPage: 4,
          paginationEnabled: true,
          autoplay : true,
          speed : 5000
      }
    }
  },
  methods:{
    async getSingleProduct(){
      await this.$axios.$get( `/single-product?product_id=${this.$route.params.id}` )
      .then( (res)=>{
        this.product = res.data.product ;
        this.provider = res.data.product.provider ;
        this.images = res.data.product.images ;
        this.special_prices = res.data.product.special_prices ;
        this.offers = res.data.product.offers  ;
      } )
    }
  },
  mounted(){
    this.getSingleProduct()
  }
}
</script>

<style lang="scss">

.owl-item {
    width: 140px;
    height: 110px;
    margin: 0 10px;

    img{
      width:100%;
      height:100%;
    }
}
</style>