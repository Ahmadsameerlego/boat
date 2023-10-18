<template>
    <div class="orders section-pad">
      <div class="container">
        <div class="flex-groupme">
          <h5 class="main-title color-main font600 mb-5"> {{ $t('myBoats') }} </h5>
        </div>
        <div class="row" v-if="products.length>0">
          
          <div class="col-lg-4 col-md-6 col-12 mb-3" v-for="product in products" :key="product.id">
            <div class="order-box">
              <div class="img-order-cont mb-2">
                <img :src="product.image" alt="" />
              </div>
            
              <div class="d-flex justify-content-center align-items-center flex-column">
                <h6 class="order-num mb-2"> {{ product.name }} </h6>  
                <div class="order-num"> {{ $t('boatNumber') }}  :<span># {{ product.number }}</span></div>
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
                  <div class="light-box"> {{ product.display_price }} ر.س / ساعة</div>
                </div>
              <nuxt-link :to="'/provider/boats/'+product.id" class="main-btn up mt-4 mb-3"
                > {{ $t('showBoat') }} </nuxt-link
              >
            </div>
          </div>

        </div>

        <v-pagination
            v-if="products.length>0"
            v-model="currentPageP"
            :total-visible="totalPageP"
            class="mt-6"
            :length="totalPageP"
            color="#FF9A00"
            @input="(page) => handlePagination2(page)"
          ></v-pagination>

        <div class="notFound d-flex align-items-center" v-else>
              <font-awesome-icon :icon="['fas', 'circle-info']" />
              <p> {{ $t('noBoats') }} </p>
        </div>


        <button class="main-btn up mt-4 mb-3 w-25 mx-auto" v-b-modal.modal-54 @click="showNewBoat=true" > {{ $t('newBoats') }} </button>
        <b-modal id="modal-54" v-if="showNewBoat">
            <boatsNewBoat @NewBoats="NewBoats"/>
        </b-modal>




      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            src : require('@/assets/imgs/Group 70332.png'),
            products : [],
            showNewBoat : true,
                        currentPage: 1,
            count: 20,
            pageLimit: 10,
            totalPage: 0,
            currentPageP: 1,
            countP: 20,
            pageLimitP: 10,
            totalPageP: 0,

        }
    },
    methods:{
     
      handlePagination2(page) {
        this.currentPageP = page;
        this.getProviderDelegate()
      },
      async getProviderDelegate(){
            await this.$axios.$get(`/delegate-products?page=${this.currentPageP}`, {
                headers:{
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                this.products = res.data.products;
                                    this.totalPageP = res.data.pagination.total_pages
          this.currentPageP = res.data.pagination.current_page
          this.pageLimitP = res.data.pagination.per_page

            } )
      },
      NewBoats(){
        this.getProviderDelegate()
        // document.getElementById('modal-54___BV_modal_backdrop_').style.display = "none";
        // document.getElementById('modal-54').style.display = "none";
        this.showNewBoat = false ;
      }
    },

        created() {
      this.totalPageP = Math.ceil(this.products.length / this.pageLimitP);
    },

    mounted(){
      this.getProviderDelegate();


    }
}
</script>

<style>

</style>