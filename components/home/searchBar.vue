<template>
    <section>
        <div v-if="client" class="col-md-8 col-12 margin-auto mt-5">
            <form action="">
                <div class="header-inp-search">
                    <input
                    type="text"
                    class="inp-search"
                    :placeholder="$t('searchHome')"
                    @input="getProduct()"
                    v-model="searchBar"
                    />
                    <button class="f-inp-icon color-main">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </button>
                </div>
            </form>

            <div class="filteredSearch" v-if="showList">
                <ul v-if="searchItems.length>0">
                    <li v-for="ad in searchItems" :key="ad.id" class="adName" @click="goToAd(ad.id, ad.name)"> {{ ad.name }} </li>
                </ul>
                <ul v-else>
                    <li>لا توجد رحلات</li>
                </ul>
            </div>
        </div>

        <!-- provider  -->
        <div v-else-if="provider" class="col-md-8 col-12 margin-auto mt-5">
            <form action="">
                <div class="header-inp-search">
                    <input
                    type="text"
                    class="inp-search"
                    :placeholder="$t('searchProvider')"
                    @input="getProduct2()"
                    v-model="searchBar2"
                    />
                    <button class="f-inp-icon">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </button>
                </div>
            </form>

            <div class="filteredSearch" v-if="showList2">
                <ul v-if="searchItems2.length>0">
                    <li v-for="ad in searchItems2" :key="ad.id" class="adName" @click="goToAd2(ad.id, ad.name)">
                         {{ ad.user_name }} ({{ ad.name }}) 
                    </li>
                </ul>
                <ul v-else>
                    <li> {{ $t('noOrders') }} </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            searchBar : null,
            searchItems : [],
            products : [],
            showList : false,
            searchBar2 : null,
            searchItems2 : [],
            products2 : [],
            showList2 : false,
            categories : {},
            provider : false,
            client : false
        }
    },
    methods:{
        // go to add 
        goToAd(id, name){
            this.$router.push(`/client/travels/${id}`);
            this.searchBar = name
            this.showList = false;
        },
        // go to add 
        goToAd2(id, name){
            this.$router.push(`/provider/orders/${id}`);
            this.searchBar = name
            this.showList = false;
        },

        // search  client
        async getProduct(){
            await this.$axios.$get(`/home?search=${this.searchBar}`)
            .then( (res)=>{
                if( res.key == "success" ){
                    if(this.searchBar != '' ){
                        this.showList = true
                    }                    

                    this.searchItems = res.data[1].trip_types ;

                    console.log(this.searchItems)

                }
                
            } )
        },

        // search provider 
         async getProduct2(){
            await this.$axios.$get(`/delegate-near-waiting-orders?search=${this.searchBar2}`,{
                headers:{
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.key == "success" ){
                    if(this.searchBar2 != '' ){
                        this.showList2 = true
                    }                    

                    this.searchItems2 = res.data.orders ;

                    console.log(this.searchItems2)

                }
                
            } )
        },
    },

    watch:{
        searchBar(){
            if( this.searchBar == '' ){
                this.showList = false
            }
        },
        searchBar2(){
            if( this.searchBar2 == '' ){
                this.showList2 = false
            }
        }
    },
    mounted(){
    // client show 
      if( this.$route.fullPath.includes('client') ){
        this.client = true ;
      }else if( this.$route.fullPath.includes('provider') ){
        this.provider = true ;
      }
    }
}
</script>

<style lang="scss">
.filteredSearch{       
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px 5px;
        margin-top: 10px;
        background: #fff;
        li{
            color: #333;
            padding: 5px 0;
            cursor: pointer;
            &:not(:last-of-type){
                border-bottom: 1px solid #dfdddd;
            }
        }
        .desc{
            font-size: 13px;
            color: #0e8686;
        }
    }
</style>