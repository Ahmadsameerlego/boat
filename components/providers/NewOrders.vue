<template>
  <section class="newOrders">
    <div class="container">
        <h5 class="main-title color-main font600 mb-3"> {{ $t('newOrders') }} </h5>
        <div class="row" v-if="products.length>0">
            <div class="col-md-4 mb-2" v-for="product in products" :key="product.id">
                <div class="main-box-sh position-relative">
                    <div class="flex-groupme">
                        <img
                        :src="product.image"
                        class="person-im"
                        alt=""
                    />
                    </div>

                    <div class="text-center mt-3"> {{ product.user_name }} </div>
                    <h6 class="text-center"> رقم الطلب : # {{ product.id }} </h6>
                    <h6 class="text-center mb-3 " v-if="product.status=='pending'"> الحالة : <span class="color-main">في انتظار قبول الطلب</span>  </h6>
                    <h6 class="text-center mb-3 " v-if="product.status=='inprogress'"> الحالة : <span class="color-main">جاري العمل عليه</span>  </h6>
                    <h6 class="text-center mb-3 " v-if="product.status=='canceled'"> الحالة : <span class="color-main">ملغى</span>  </h6>
                    <h6 class="text-center mb-3 " v-if="product.status=='finished'"> الحالة : <span class="color-main">منتهي</span>  </h6>
                    <nuxt-link :to="'/provider/orders/'+product.id" class="btn-main up big-100" >الاطلاع على الطلب</nuxt-link>
                
                    <span class="created_at text-muted">
                        {{ product.created_at }}
                    </span>
                </div>
            </div>
        </div>

        <div class="notFound d-flex align-items-center" v-else>
              <font-awesome-icon :icon="['fas', 'circle-info']" />
              <p> {{ $t('noNewOrders') }} </p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            products : []
        }
    },
    methods:{
        async getNewOrders(){
            await this.$axios.$get(`/delegate-near-waiting-orders`, {
                headers:{
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                this.products = res.data.orders
            } )
        }
    },
    mounted(){
        this.getNewOrders()
    }
}
</script>

<style  scoped>
    .created_at{
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 14px;
    }
</style>>

</style>