<template>
  <client-only>
    <div class="best-sells section-pad">
      <div class="">
        <h5 class="main-title color-main mb-4 font600" style="margin:0 100px">{{  $t('topRated') }}
        </h5>
        <div class="slider2">
            <client-only>

                <carousel v-bind="options">
                    <slide v-for="product in products" :key="product.id" class="img-wrapper">
                        <div   class="slide item"  >
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
                                <i class="fa-solid fa-star star-yellow"></i>
                                {{ product.rate }}
                            </div>
                            <div class="light-box">
                                <i class="fa-solid fa-paper-plane color-main"></i>
                                {{ product.address }}
                            </div>
                            <div class="light-box"> {{ product.display_price }} {{ $t('priceUnit') }}</div>
                            </div>
                            <nuxt-link :to="'/client/providers/'+product.provider_id" class="btn-main up big-100"
                            > {{ $t('servicesProvider') }}</nuxt-link
                            >
                        </div>
                    </div>
                    </slide>
                </carousel>

            </client-only>
            
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
    data(){
        return{
            src1 : require('@/assets/imgs/185644495_1667380803456791_1968050560740665054_n.jpg'),
            products : [],
            lat : '',
            lng : '',
            options: {
                perPage: 4,
                paginationEnabled: true,
                autoplay : true,
                speed : 2200,
                autoplayDirection : 'backward',
                centerMode : true
                
            }
        }
    },
    methods:{
        async getAllProducts(){
            await this.$axios.$get(`/all-products?lat=${this.lat}&long=${this.lng}`, {
                headers:{
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                this.products = res.data.products
            } )
        },

        async notLoggedGetAllProducts(){
            await this.$axios.$get(`/all-products`)
            .then( (res)=>{
                this.products = res.data.products
            } )
        },
    },
    beforeMount(){
        if( localStorage.getItem('user') ){
            let user = localStorage.getItem('user');
            this.lat = JSON.parse(user).lat;
            this.lng = JSON.parse(user).long
        }
    },
    mounted(){
        if( localStorage.getItem('user')  ){
            this.getAllProducts()
        }else{
            this.notLoggedGetAllProducts()
        }
    }
}
</script>

<style>
.main-box-sh{
    margin: 0 10px;
}

.VueCarousel-dot.VueCarousel-dot--active{
    width: 15px !important;
    height: 15px !important;
    background-color: rgb(17 27 90) !important;
}
.VueCarousel-dot{
    width: 15px !important;
    height: 15px !important;
   
}

.slide{
    width: 100%;
    height:100%;    
}

.VueCarousel-inner{
    direction: ltr;
}
.VueCarousel-slide{
    flex-basis: auto !important;
}
</style>