<template>
  <section>
    <!--trips type section-->
    <div class="trips section-pad">
      <div class="container">
        <div class="flex-groupme">
          <h5 class="main-title color-main font600 mb-4"> {{ $t('boat') }} </h5>
        </div>


        <!-- is featured is not added -->
        <div class="row" v-if="additives.length==0&&free_additives.length==0&&offers.length==0&&special_prices.length==0">
          <div class="col-12 under-bor">
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
                <font-awesome-icon :icon="['fas', 'location-dot']" class="color-main" />
                <div class="book-loc-real"> {{ product.address }} </div>
              </div>
              <div class="nationality-me"> {{ $t('capacity') }} : {{ product.capacity }} </div>
            </div>
            <div class="flex-rairing mt-3 mb-4 font14">
              <div class="light-box">

                <font-awesome-icon :icon="['fas', 'star']" class="star-yellow" />
                {{ product.rate }}
              </div>
              <div class="light-box">
                <font-awesome-icon :icon="['fas', 'paper-plane']" class="color-main" />
                {{ product.distance }}
              </div>
            </div>
          </div>

          <div class="col-md-6 col-12 p-0">
            <div class="boat-box new">
              <h6 class="mb-3">{{ $t('desc') }}</h6>
              <p class="mb-2 gray-col">
                {{ product.desc }}
              </p>
              
            </div>
          </div>

          <div class="col-md-6 col-12 p-0" >
            <div class="boat-box new no-left-border">
              <div class="flex-groupme mt-3">
                <img :src="require('@/assets/imgs/43.png')" class="up-attr-img" alt="" />
              </div>
              <div class="not-yet text-center mt-3 mb-3">
                {{ $t('noAddedPrices') }}
              </div>
              <div class="flex-groupme mb-2">
                <button
                  type="button"
                  class="btn-main up lg"
                  v-b-modal.modal-2
                >
                  {{ $t('addFeatures') }}
                </button>


                 
              </div>
            </div>
          </div>            
        </div>

        <!-- is featured added  -->
        <div class="row" v-else>
          <div class="col-12 under-bor">
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
                <font-awesome-icon :icon="['fas', 'location-dot']" class="color-main" />
                <div class="book-loc-real"> {{ product.address }} </div>
              </div>
              <div class="nationality-me"> {{ $t('capacity') }} : {{ product.capacity }} </div>
            </div>
            <div class="flex-rairing mt-3 mb-4 font14">
              <div class="light-box">

                <font-awesome-icon :icon="['fas', 'star']" class="star-yellow" />
                {{ product.rate }}
              </div>
              <div class="light-box">
                <font-awesome-icon :icon="['fas', 'paper-plane']" class="color-main" />
                {{ product.distance }}
              </div>
            </div>
          </div>

          <div class="col-md-6 col-12 p-0">
            <div class="boat-box new">
              <h6 class="mb-3"> {{ $t('desc') }} </h6>
              <p class="mb-2 gray-col" v-text="product.desc"></p>
              
            </div>
          </div>        

          <div class="col-md-6 col-12 p-0" >
            <div class="boat-box no-left-border position-relative">

              <!-- edit featured  -->
              <button class="btn-main text-white editButton" v-b-modal.modal-6>
                <font-awesome-icon :icon="['fas', 'pen-to-square']" />
              </button>

               <!-- add features  -->
                <b-modal id="modal-6" >
                    <boatsEditFeature @updateFeature="updateFeature" @closeModal="closeModal" :freeAdditives="free_additives" :additives="additives" :offers2="offers" :specialOffers="special_prices" />
                </b-modal>

              <h6 class="mb-3"> {{ $t('price') }} </h6>
              <div class="flex-bet font14 mb-3">
                <div class="color-main">{{ product.display_price }} ر.س</div>
                <div class="color-main"> {{ $t('hour') }} </div>
              </div>
              <h6 class="mb-3"> {{ $t('specialPrices') }}</h6>

              <section v-if="special_prices.length>0">
                <div class="flex-bet font14 mb-3" v-for="special in special_prices" :key="special.id">
                  <div class="color-main"> {{  special.price }} ر.س</div>
                  <div class="color-main"> من {{ special.start }} إلى {{ special.end }} ساعة </div>
                </div>
              </section>

              <section v-else>
                <p class="text-center"> {{ $t('noSpecial') }} </p>
              </section>
            

            <!-- العروض  -->
              <h6 class="mb-3"> {{ $t('offers') }}</h6>

              <div class="table-offer" v-if="offers.length>0">

                <table id="myTable" class="table">
                  <thead>
                    <tr>
                      <th>{{ $t('tripType') }}</th>
                      <th>{{ $t('price') }}</th>
                      <th>{{ $t('offerEnd') }} </th>
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

          <div class="col-md-6 col-12 p-0" >
            <div class="boat-box new">
              <h6 class="mb-3 text-center"> {{ $t('freeAdditivs') }} </h6>

              <div class="flex-bet font14 mb-3" v-for="free in free_additives" :key="free.id">
                <div class="color-main"> {{ free.name }} </div>
                <div class="color-main fw-bold"> {{ $t('free') }} </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-12 p-0">
            <div class="boat-box no-left-border">
              <h6 class="mb-3 text-center"> {{ $t('paidFeatures') }} </h6>

              <div class="flex-bet font14 mb-3" v-for="free in additives" :key="free.id">
                <div class="color-main"> {{ free.name }} </div>
                <div class="color-main fw-bold"> {{ free.price }} ر.س</div>
              </div>
            </div>
          </div>
          


        </div>


        <h6 class="mb-3 mt-3 font600"> {{ $t('boatImgs') }}  </h6>
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
          <button class="btn-main up lg" v-b-modal.modal-12 @click="showEditModal=true" > {{ $t('editBoat') }} </button>
          <b-modal id="modal-12" v-if="showEditModal">
            <boatsEditBoat @updateBoat="updateBoat" />
          </b-modal>
        </div>

      </div>
    </div>


     <!-- add features  -->
      <b-modal id="modal-2">
          <boatsAddFeature @getProduct="getProduct"/>
      </b-modal>

  </section>
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
      additives : [],
      free_additives : [],
      isFeaturedAdded : null,
       options: {
                loop: true,
                perPage: 4,
                paginationEnabled: true,
                autoplay : true,
                speed : 5000
        },
        showEditModal : true
    }
  },
  methods:{
    closeModal(){
        document.getElementById('modal-6').style.display = 'none';
        document.getElementById('modal-6___BV_modal_backdrop_').style.display = 'none';    
    },
    getProduct(){
      this.getSingleProduct()
    },
    // get single product 
    async getSingleProduct(){
        await this.$axios.$get(`/single-product?product_id=${this.$route.params.id}`)
        .then( (res)=>{
          this.product = res.data.product ;
          this.provider = res.data.product.provider ;
          this.images = res.data.product.images ;
          this.special_prices = res.data.product.special_prices ;
          this.offers = res.data.product.offers  ;

          this.additives = res.data.product.additives  ;
          
          this.free_additives = res.data.product.free_additives  ;
        } )
    },
    updateFeature(){
      this.getSingleProduct()
    },
    updateBoat(){
      this.getSingleProduct()
      // document.getElementById('modal-12___BV_modal_backdrop_').style.visibility = 'hidden';
      // document.getElementById('modal-12').style.visibility = 'hidden';
      this.showEditModal = false ;
    }
  },
  // beforeMount(){
        
  //       // if( this.additives.length === 0 && this.free_additives.length === 0 && this.offers.length === 0 &&  this.special_prices.length === 0 ){
  //       //   this.isFeaturedAdded = false ;
  //       // }else{
  //       //   this.isFeaturedAdded = true ;
  //       // }
  //       // console.log(this.additives)
  // },
  mounted(){

    this.getSingleProduct();
    
  }
}
</script>

<style>
  .modal-footer{
    display: none !important;
  }
  .editButton{
    position: absolute;
    left: 10px;
    top: 10px;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .owl-item{
    width: 140px;
    height:110px;
    margin:0 10px
  }
  .owl-item img{
    width: 100%;
    height: 100%;
  }
</style>