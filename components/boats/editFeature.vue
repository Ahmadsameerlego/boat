<template>
  <main> 
    <!-- السمات المجانية  -->
    <section v-if="freeAdds">
        <h5 class="mt-4 text-center"> {{ $t('editFeat2') }} </h5>
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
                  <button  class="btn-main up lg" > {{ $t('addFeat') }} </button>
                </div>
                <div class="attrs mt-3">
                  <div class="attrs-head"> {{ $t('addedFeats') }} </div>

                  <section v-if="free.length>0">
                    <div class="attr-loop d-flex justify-content-between align-items-center" v-for="add in free" :key="add.id">
                        <div class="attr-name"> {{ add.name_ar }} </div>
                        <button class="attr-remove text-danger" type="button" @click="removeItem(add.name_ar)">
                          <font-awesome-icon :icon="['fas', 'trash']" />
                        </button>
                    </div>
                  </section>

                  <section v-else>
                    <div class="d-flex justify-content-center align-items-center"> {{ $t('addFeatureShow') }} </div>
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
    <h5 class="mt-4 text-center"> {{ $t('editFeat3') }} </h5>
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
      <h5 class="mt-4 text-center"> {{ $t('editPrices') }} </h5>
      <div class="p-4">

        <!-- durations  -->
          <div class="mb-3 main-inp-cont">
            <h6 class="fontBold mainColor font14 font600"> {{ $t('hourPrice') }} </h6>
            <div class="relative-co">
              <input
                type="number"
                :placeholder="$t('hourPlace')"
                class="inp-spe-tele"
                v-model="price"
                name="price"
                required
              />
              <div class="icon-float">
                <font-awesome-icon :icon="['fas', 'sailboat']" />
              </div>
            </div>
          </div>
          <form @submit.prevent="addDuration">
            <div class="mb-3 main-inp-cont">
              <h6 class="font-bold"> {{ $t('duration') }} </h6>
              <div class="relative-co">
                <select name="duration" v-model="duration" id="" class="main-select" >
                  <option value="" selected hidden disabled>
                    {{ $t('durationPlace') }}
                  </option>
                  <option v-for="duration in durations" :key="duration.id" :value="duration.id" > {{ $t('from') }} {{ duration.start }} {{ $t('to') }} {{ duration.end }} </option>
                </select>
                <div class="icon-float">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                </div>
                <div class="icon-float2">
                  <font-awesome-icon :icon="['fas', 'chevron-down']" /> 
                </div>
              </div>
            </div>
            <div class="mb-3 main-inp-cont">
              <h6 class="fontBold mainColor font14 font600"> {{ $t('price') }} </h6>
              <div class="relative-co">
                <input
                  type="number"
                  :placeholder="$t('durationPrice')"
                  class="inp-spe-tele"
                  v-model="duration_price"
                  name="duration_price"
                  required
                />
                <div class="icon-float">
                  <font-awesome-icon :icon="['fas', 'sailboat']" />
                </div>
              </div>
            </div>

            <div class="right-just-flex mt-3 d-flex justify-content-end">
              <button  class="btn-main up lg">
                {{ $t('addDuration') }}
              </button>
            </div>
          </form>
          <!-- durations template  -->
          <div class="times-box mt-4 mb-4">
            <section v-if="clientDurations.length>0">
              <h6> {{ $t('addedFeats2') }} </h6>
              <div class="times-row-loop color-main d-flex justify-content-between" v-for="duration in clientDurations" :key="duration.duration_id">
                <div class="time-price"> {{ duration.price }} ر.س</div>
                <div class="time-price">  {{ duration.duration }}  </div>
                <button type="button" class="attr-remove text-danger" @click="removeDuration(duration.price)">
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </div>
            </section>
            <section v-else>
              <p class="text-center"> {{ $t('addedFeaEdi') }} </p>
            </section>
          </div>

          <!-- offers  -->
          <form @submit.prevent="addOffer">
            <div class="mb-3 main-inp-cont">
              <h6 class="font-bold"> {{ $t('tripType') }} </h6>
              <div class="relative-co">
                <select name="trip_type" v-model="trip_type" id="" class="main-select">
                  <option value="" selected hidden disabled>
                    {{ $t('DatePlace') }}
                  </option>
                  <option v-for="trip in trips_types" :key="trip.id" :value="trip.id"> {{ trip.name }} </option>
                </select>
                <div class="icon-float">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                </div>
                <div class="icon-float2">
                  <font-awesome-icon :icon="['fas', 'chevron-down']" />
                </div>
              </div>
            </div>
            <div class="mb-3 main-inp-cont">
              <h6 class="fontBold mainColor font14 font600"> {{ $t('price') }} </h6>
              <div class="relative-co">
                <input
                  type="number"
                  :placeholder="$t('pricePlace')"
                  class="inp-spe-tele"
                  name="offer_price"
                  v-model="offer_price"
                  required
                />
                <div class="icon-float">
                  <font-awesome-icon :icon="['fas', 'sailboat']" />
                </div>
              </div>
            </div>
            <div class="mb-3 main-inp-cont">
              <h6 class="fontBold mainColor font14 font600">
                {{ $t('offerEnd') }}
              </h6>
              <div class="relative-co">
                <input
                  type="date"
                  :placeholder="$t('offerEnd')"
                  class="inp-spe-tele"
                  name="finish_date"
                  v-model="finish_date"
                  required
                />
                <!-- <div class="icon-float">
                  <font-awesome-icon :icon="['fas', 'sailboat']" />
                </div> -->
              </div>
            </div>

          <div class="right-just-flex mt-3 d-flex justify-content-end">
            <button class="btn-main up lg">
              {{ $t('addOffer') }}
            </button>
          </div>
          </form>

          <div class="times-box mt-4 mb-4">
            <section >
              <h6> {{ $t('addedFeats2') }} </h6>
              <div class="table-offer table-offer2 font13" >
                <table id="myTable" class="table">
                  <thead>
                    <tr>
                      <th> {{ $t('tripType') }} </th>
                      <th>{{ $t('price') }}  </th>
                      <th> {{ $t('offerEnd') }} </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody v-if="clientOffers.length>0">

                    <tr v-for="offer in clientOffers" :key="offer.trip_type_id">
                      <td><span class="gray-col"> {{ offer.trip_type }} </span></td>
                      <td>
                        <span class="gray-col"> {{ offer.price }} ر.س / ساعة</span>
                      </td>
                      <td class="gray-col"> {{ offer.finish_date }} </td>
                      <td class="red-col">
                        <button type="button" class="attr-remove text-danger" @click="removeOffer(offer.price)">
                          <font-awesome-icon :icon="['fas', 'trash']" />
                        </button>
                      </td>
                    </tr>
                    
                  </tbody>
                  <div v-else class="d-flex justify-content-center">
                    <p class="text-center"> {{ $t('offerEdi') }} </p>
                  </div>
                </table>
              </div>
            </section>

            
          </div>

          <div class="flex-groupme">
            <button
              class="main-btn up mt-4 wid-85"
              @click.prevent="sendOffer"
              :disabled="disabled5"
            >
              {{ $t('certain') }}
            </button>
          </div>
      </div>    
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
            disabled5 : false ,
            disabled : false,




            durations : [],

            price : null,

            duration : '',
            duration_price : null,
            // looped duations 
            clientDurations : [],
            // looped offers 
            clientOffers : [],

            trips_types : [],
            trip_type : '',
            offer_price :null,
            finish_date : null,

            sendedDurations : [],
            sendedOffers : [],
            durationId : '',
            selectedDuration : {},
            selectedOffer : {},
            disabled : false
        }
    },
    watch:{
        duration(){
        this.selectedDuration = this.durations.filter( item => item.id  == this.duration )
        },
        trip_type(){
            this.selectedOffer = this.trips_types.filter( item => item.id  == this.trip_type )
        }
    },
    methods:{


        // get durations 
        async getDurations(){
        await this.$axios.$get('/durations')
        .then( (res)=>{
            this.durations = res.data.durations
        } )
        },

        // get trips types 
        async getTripsTypes(){
        await this.$axios.$get('/trip-types')
        .then( (res)=>{
            this.trips_types = res.data.trip_types
        } )
        },

        // add durations 
        addDuration(){
          this.clientDurations.push({"duration_id":this.duration,"duration":this.selectedDuration[0].time , "price":this.duration_price});
          // this.sendedDurations.push({"id":this.duration , "price":this.duration_price})
          this.duration = null ;
          this.duration_price = '';
        },
        // remove duration 
        removeDuration(price){
        this.clientDurations =  this.clientDurations.filter( item => item.price !== price )
        },

        // add offers 
        addOffer(){
          this.clientOffers.push({"trip_type_id":this.trip_type,"trip_type":this.selectedOffer[0].name,"price":this.offer_price,"finish_date":this.finish_date});
          // this.sendedOffers.push({"id":this.trip_type,"price":this.offer_price,"finish_date":this.finish_date});
          this.trip_type = null;
          this.offer_price = null ;
          this.finish_date = null

          console.log(this.clientOffers)
          // console.log(this.sendedOffers)
        },
        // remove offer 
        removeOffer(price){
        this.clientOffers = this.clientOffers.filter( item => item.price !== price )
        },    
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
          // this.disabled = true ;

          const fd = new FormData();
          fd.append('product_id', this.$route.params.id);  
          if( this.free.length == 0 ){
            fd.append('additives',JSON.stringify(this.freeAdditives));
          } else{
              fd.append('additives',JSON.stringify(this.free));
          }       
          
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
                      this.$emit('updateFeature')
                  }, 2000);

                  this.paidAdds = true ;
                  this.freeAdds = false ;


              }else{
                  this.$swal("", `${res.msg}`, "error");
              }
              // this.disabled =/ false ;
          } )
      },

      // send paid feature
      async addPaifFreeFeature(){
          
          this.disabled2 = true ;

          const fd = new FormData();
          fd.append('product_id', this.$route.params.id);   
          if(this.paids.length == 0){
            fd.append('additives',JSON.stringify(this.additives));
          }else{
            fd.append('additives',JSON.stringify(this.paids));
          }       
          
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
                      this.$emit('updateFeature')
                  }, 2000);

                  this.paidAdds = false ;
                  this.offers = true ;
              }else{
                  this.$swal("", `${res.msg}`, "error");
              }
              this.disabled2 = false ;
          } )
      },
      // send offers 
      async sendOffer(){
          this.disabled5 = true ;

          const fd = new FormData();
          fd.append('product_id', this.$route.params.id);          
          fd.append('price', this.price);   

          // append durations 
          for( let i = 0 ; i < this.clientDurations.length ; i++){
            this.sendedDurations.push({"id":this.clientDurations[i].duration_id , "price":this.clientDurations[i].price})          
          }
               
          fd.append('durations',JSON.stringify(this.sendedDurations));
          
          // // append offers 
          // if( this.sendedOffers.length == 0 ){
          //   fd.append('offers',JSON.stringify(this.offers2));
          // }else{
            
          //   fd.append('offers',JSON.stringify(this.sendedOffers.concat(this.offers2)));
          // }

          // append durations 
          for( let i = 0 ; i < this.clientOffers.length ; i++){
            this.sendedOffers.push({"id":this.clientOffers[i].trip_type_id,"price":this.clientOffers[i].price,"finish_date":this.clientOffers[i].finish_date});
          }
               
          fd.append('offers',JSON.stringify(this.sendedOffers));

          await this.$axios.$post('/post-offers', fd , {
              headers:{
                  Authorization:  `Bearer ${localStorage.getItem('token')}`
              }
          })
          .then( (res)=>{
              if( res.key == 'success' ){
                  this.$swal("", `${res.msg}`, "success");
                  
                  // document.getElementById('modal-6').style.display = 'none';
                  // // document.getElementById('modal-3').style.display = 'block';
                  // document.getElementById('modal-6___BV_modal_backdrop_').style.display = 'none';    

                  this.$emit('closeModal')

                  
                  setTimeout(() => {
                      location.reload()
                  }, 2000);

                  // this.paidAdds = true ;
                  // this.freeAdds = false ;
                

              }else{
                  this.$swal("", `${res.msg}`, "error");
              }
              this.disabled5 = false ;
          } )
        },

      

      // // get single product 
      // async getSingleProduct(){
      //     await this.$axios.$get(`/single-product?product_id=${this.$route.params.id}`)
      //     .then( (res)=>{
      //         this.free_additives = res.data.product.free_additives  ;
      //         // console.log(this.free_additives)
      //     } )
      // }
    },
    props:{
        freeAdditives : Array,
        specialOffers : Array,
        offers2 : Array,
        additives : Array
    },
    mounted(){
        this.free = this.freeAdditives;
        this.paids = this.additives;
        this.clientDurations = this.specialOffers;

      

        
        
        this.clientOffers = this.offers2;

        console.log(this.sendedDurations)
    },
    beforeMount(){
        this.getDurations();
        this.getTripsTypes()
    }
}
</script>

<style scoped>
    .modal-footer{
        display:  none !important;
    }
</style>