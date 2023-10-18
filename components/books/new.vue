<template>
    <div class="orders section-pad">
      <div class="container">
        <div class="flex-groupme">
          <h5 class="main-title color-main font600 mb-5">{{ $t('allBooks') }}</h5>
        </div>

        <!-- client  -->
        <section v-if="client">
          <div class="row" v-if="orders.length>0">

            <!-- single order  -->
            <div class="col-lg-4 col-md-6 col-12 mb-3" v-for="order in orders" :key="order.id">
              <div class="order-box">
                <div class="order-time"> {{ order.created_at }} </div>
                <div class="img-order-cont mb-2">
                  <img :src="order.image" alt="" />
                </div>
                <div class="order-num">{{ $t('order_num') }} :<span>#{{ order.id }}</span></div>
                <div class="order-name mt-2">
                  {{ order.user_name }} :<span>{{ $t('providerName') }}</span>
                </div>
                <div class="order-case mt-2 mb-2">
                  <div class="or-flex">
                    <i class="fa-solid fa-drum-steelpan"></i>
                    <div class="or-text">{{ $t('status') }}:</div>
                  </div>
                  <span class="color-main"> {{ $t('newBook') }} </span>
                </div>
                <nuxt-link :to="'/client/orders/'+order.id" class="main-btn up mt-4 mb-3"
                  >{{ $t('OrderDetails') }}</nuxt-link
                >
              </div>
            </div>

          </div>

          <v-pagination
            v-if="orders.length>0"
            v-model="currentPage"
            :total-visible="totalPage"
            class="mt-6"
            :length="totalPage"
            color="#FF9A00"
            @input="(page) => handlePagination(page)"
          ></v-pagination>

          <div class="notFound d-flex align-items-center" v-else>
              <font-awesome-icon :icon="['fas', 'circle-info']" />
              <p> {{ $t('noBooks') }} </p>
          </div>
        </section>

        <!-- provider  -->
        <section v-else-if="provider">
          <div class="row" v-if="providerOrders.length>0">

            <!-- single order  -->
            <div class="col-lg-4 col-md-6 col-12 mb-3" v-for="order in providerOrders" :key="order.id">
              <div class="order-box">
                <div class="order-time"> {{ order.created_at }} </div>
                <div class="img-order-cont mb-2">
                  <img :src="order.image" alt="" />
                </div>
                <div class="order-num text-center mt-2">
                  {{ order.user_name }} 
                </div>

                <h6 class="text-center">رقم الطلب :<span>#{{ order.id }}</span></h6>
                
                <div class="order-case text-center justify-content-center mt-2 mb-2">
                  <div class="or-flex text-center">
                    <i class="fa-solid fa-drum-steelpan"></i>
                    <div class="or-text text-center">الحالة:</div>
                  </div>
                  <span class="color-main text-center"> حجز جديد </span>
                </div>
                <nuxt-link :to="'/provider/orders/'+order.id" class="main-btn up mt-4 mb-3"
                  >{{ $t('OrderDetails') }}</nuxt-link
                >
              </div>
            </div>

          </div>

          <v-pagination
            v-if="providerOrders.length>0"
            v-model="currentPageP"
            :total-visible="totalPageP"
            class="mt-6"
            :length="totalPageP"
            color="#FF9A00"
            @input="(page) => handlePagination2(page)"
          ></v-pagination>

          <div class="notFound d-flex align-items-center" v-else>
              <font-awesome-icon :icon="['fas', 'circle-info']" />
              <p> {{ $t('noBooks') }} </p>
          </div>
        </section>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            src : require('@/assets/imgs/Group 70332.png'),
            orders : [],
            providerOrders : [],
            currentPage : 1,
            client : false,
            provider : false,
            order_id : '',
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
      handlePagination(page) {
        this.currentPage = page;
        this.getUserOrders()
      },
      handlePagination2(page) {
        this.currentPageP = page;
        this.getDelegateOrders()
      },
      // get user orders 
      async getUserOrders(){
        await this.$axios.$get(`/user-orders?status=open&page=${this.currentPage}` , {
          headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then( (res)=>{
          this.orders = res.data.orders;
          this.totalPage = res.data.pagination.total_pages
          this.currentPage = res.data.pagination.current_page
          this.pageLimit = res.data.pagination.per_page

        } )
      },


      // get provider orders 
      async getDelegateOrders(){
        await this.$axios.$get(`/delegate-orders?status=open` , {
          headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then( (res)=>{
          this.providerOrders = res.data.orders;
          this.totalPageP = res.data.pagination.total_pages
          this.currentPageP = res.data.pagination.current_page
          this.pageLimitP = res.data.pagination.per_page


        } )
      },
    },

    created() {
      this.totalPage = Math.ceil(this.orders.length / this.pageLimit);
      this.totalPageP = Math.ceil(this.providerOrders.length / this.pageLimitP);
    },
    beforeMount(){
      // client show 
      if( this.$route.fullPath.includes('client') ){
        this.client = true ;
      }else if( this.$route.fullPath.includes('provider') ){
        this.provider = true ;
      }
    },
    mounted(){
      if( this.client == true ){
        this.getUserOrders();
      }else if(this.provider == true){
        this.getDelegateOrders()
      }


      
    }
}
</script>

<style>

</style>