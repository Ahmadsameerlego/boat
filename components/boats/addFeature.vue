<template>
  <main> 
    <!-- السمات المجانية  -->
    <section v-if="freeAdds">
        <h5 class="mt-4 text-center"> {{ $t('addFreeFeature') }} </h5>
            <div class="p-4">
              <form @submit.prevent="AppendFeatures">
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600">
                    {{ $t('featureArabic') }}
                  </h6>
                  <div class="relative-co">
                    <input
                      type="text"
                      :placeholder="$t('arabicPlace')"
                      class="inp-spe-tele"
                      name="name_ar"
                      v-model="name_ar"
                      required
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'sailboat']" />
                    </div>
                  </div>
                </div>
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600">
                    {{ $t('featureEn') }}
                  </h6>
                  <div class="relative-co">
                    <input
                      type="text"
                      :placeholder="$t('enPlace')"
                      class="inp-spe-tele"
                      name="name_en"
                      v-model="name_en"
                      required
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'sailboat']" />
                    </div>
                  </div>
                </div>
                <div class="right-just-flex mt-3 d-flex justify-content-end">
                  <button  class="btn-main up lg" >{{ $t('addFeat') }}</button>
                </div>
                <div class="attrs mt-3">
                  <div class="attrs-head">{{ $t('addedFeats') }}</div>

                  <section v-if="free.length>0">
                    <div class="attr-loop d-flex justify-content-between align-items-center" v-for="add in free" :key="add.id">
                        <div class="attr-name"> {{ add.name_ar }} </div>
                        <button class="attr-remove text-danger" type="button" @click="removeItem(add.name_ar)">
                          <font-awesome-icon :icon="['fas', 'trash']" />
                        </button>
                    </div>
                  </section>

                  <section v-else>
                    <div class="d-flex justify-content-center align-items-center">  {{ $t('addFeatureShow') }} </div>
                  </section>
                  
                </div>
                <div class="flex-groupme">
                  <button
                    class="main-btn up mt-4 wid-85"
                    type="button"
                    @click="addFreeFeature"
                  >
                    {{ $t('next') }}
                  </button>
                </div>
              </form>
            </div>
    </section>

    <!-- السمات المدفوعة -->
    <section v-if="paidAdds">
    <h5 class="mt-4 text-center">{{ $t('addPayFeat') }}</h5>
            <div class="p-4">
              <form @submit.prevent="AppendPaidFeatures">
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600">
                    {{ $t('featureArabic') }}
                  </h6>
                  <div class="relative-co">
                    <input
                      type="text"
                      :placeholder="$t('arabicPlace')"
                      class="inp-spe-tele"
                      name="paid_name_ar"
                      v-model="paid_name_ar"
                      required
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'sailboat']" />
                    </div>
                  </div>
                </div>
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600">
                    {{ $t('featureEn') }}
                  </h6>
                  <div class="relative-co">
                    <input
                      type="text"
                      :placeholder="$t('enPlace')"
                      class="inp-spe-tele"
                      name="paid_name_en"
                      v-model="paid_name_en"
                      required
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'sailboat']" />
                    </div>
                  </div>
                </div>
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600"> {{ $t('featurePrice') }} </h6>
                  <div class="relative-co">
                    <input
                      type="number"
                      :placeholder="$t('pricePlace1')"
                      class="inp-spe-tele"
                      name="price"
                      v-model="price"
                      required
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'sailboat']" />
                    </div>
                  </div>
                </div>
                <div class="right-just-flex mt-3 d-flex justify-content-end">
                  <button  class="btn-main up lg" >
                    {{ $t('addFeat') }}
                  </button>
                </div>
                <div class="attrs mt-3">
                  <div class="attrs-head"> {{ $t('addedFeats') }} </div>

                  <section v-if="paids.length>0">
                    <div class="attr-loop d-flex justify-content-between align-items" v-for="paid in paids" :key="paid">
                      <div class="attr-name"> {{ paid.name_ar }} </div>
                      <div class="attr-price color-main"> {{ paid.price }} ر.س </div>
                      <button class="attr-remove text-danger" type="button"  @click="removePaidItem(paid.price)">
                            <font-awesome-icon :icon="['fas', 'trash']" />
                      </button>
                    </div>
                  </section>

                  <section v-else>
                    <div class="attr-name d-flex justify-content-center"> {{ $t('addFeatureShow') }} </div>
                  </section>
                  
                </div>
                <div class="flex-groupme">
                  <button
                    class="main-btn up mt-4 wid-85"
                    type="button"
                    @click="addPaifFreeFeature"
                    :disabled="disabled2"
                  >
                    {{ $t('next') }}
                  </button>
                </div>
              </form>
            </div>
    </section>

    <!-- العروض -->
    <section v-if="offers">
      <boatsOffers />    
    </section>
  </main>
</template>

<script>
export default {
    data(){
        return{
            name_ar : '',
            name_en : '',
            paid_name_ar : '',
            paid_name_en : '',
            free_additives : [],
            free : [],
            paids : [],

            // default => false 
            paidAdds : false,

            // default => true 
            freeAdds : true,

            // default => false 
            offers : false ,

            price : null,
            disabled2 : false ,
            disabled : false
        }
    },
    watch:{
    },
    methods:{
      // add features 
      AppendFeatures(){
        this.free.push({"name_ar":this.name_ar , "name_en" : this.name_en})
        this.name_ar = "";
        this.name_en = "";
      },

      AppendPaidFeatures(){
        this.paids.push({"name_ar":this.paid_name_ar , "name_en" : this.paid_name_en,"price":this.price})
        this.paid_name_ar = "";
        this.paid_name_en = "";
        this.price = null ;
      },
      // remove feature 
      removeItem(name){
        this.free = this.free.filter( item => item.name_ar !== name );
      },
      removePaidItem(price){
        this.paids = this.paids.filter( item => item.price !== price );
      },
      // send feature 
      async addFreeFeature(){
          this.disabled = true ;

          const fd = new FormData();
          fd.append('product_id', this.$route.params.id);          
          fd.append('additives',JSON.stringify(this.free));
          await this.$axios.$post('/post-free-additives', fd , {
              headers:{
                  Authorization:  `Bearer ${localStorage.getItem('token')}`
              }
          })
          .then( (res)=>{
              if( res.key == 'success' ){
                  this.$swal("", `${res.msg}`, "success");
                  this.name_ar = '';
                  this.name_en = '';
                  

                  // document.getElementById('modal-2').style.display = 'none';
                  // // document.getElementById('modal-3').style.display = 'block';
                  // document.getElementById('modal-2___BV_modal_backdrop_').style.display = 'none';

                  
                  setTimeout(() => {
                      this.$emit('getProduct')
                  }, 2000);

                  this.paidAdds = true ;
                  this.freeAdds = false ;


              }else{
                  this.$swal("", `${res.msg}`, "error");
              }
              this.disabled = false ;
          } )
      },

      // send paid feature
      async addPaifFreeFeature(){
          
          this.disabled = true ;

          const fd = new FormData();
          fd.append('product_id', this.$route.params.id);          
          fd.append('additives',JSON.stringify(this.paids));
          await this.$axios.$post('/post-additives', fd , {
              headers:{
                  Authorization:  `Bearer ${localStorage.getItem('token')}`
              }
          })
          .then( (res)=>{
              if( res.key == 'success' ){
                  this.$swal("", `${res.msg}`, "success");
                  this.name_ar = '';
                  this.name_en = '';
                  

                  // document.getElementById('modal-2').style.display = 'none';
                  // // document.getElementById('modal-3').style.display = 'block';
                  // document.getElementById('modal-2___BV_modal_backdrop_').style.display = 'none';

                  
                  setTimeout(() => {
                      this.$emit('getProduct')
                  }, 2000);

                  this.paidAdds = false ;
                  this.offers = true ;
              }else{
                  this.$swal("", `${res.msg}`, "error");
              }
              this.disabled2 = false ;
          } )
      },

      

      // get single product 
      async getSingleProduct(){
          await this.$axios.$get(`/single-product?product_id=${this.$route.params.id}`)
          .then( (res)=>{
              this.free_additives = res.data.product.free_additives  ;
              console.log(this.free_additives)
          } )
      }
    }
}
</script>

<style scoped>
    .modal-footer{
        display:  none !important;
    }
</style>