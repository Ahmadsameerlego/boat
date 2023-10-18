<template>
  <main>
    <h5 class="mt-4 text-center"> {{ $t('addPrices') }} </h5>
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
              <div class="times-row-loop color-main d-flex justify-content-between" v-for="duration in clientDurations" :key="duration.price">
                <div class="time-price"> {{ duration.price }} ر.س</div>
                <div class="time-price"> {{ duration.duration }} </div>
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
                  :placeholder="$t('hourPlace')"
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
                  :placeholder=" $t('offerEnd')"
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
                      <th> {{ $t('price') }} </th>
                      <th> {{ $t('offerEnd') }} </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody v-if="clientOffers.length>0">

                    <tr v-for="offer in clientOffers" :key="offer.price">
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
              :disabled="disabled"
            >
              {{ $t('certain') }}
            </button>
          </div>
      </div>
  </main>
</template>

<script>
export default {
  data(){
    return{
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
    async sendOffer(){
          this.disabled = true ;

          const fd = new FormData();
          fd.append('product_id', this.$route.params.id);          
          fd.append('price', this.price);          
          fd.append('durations',JSON.stringify(this.sendedDurations));
          fd.append('offers',JSON.stringify(this.sendedOffers));
          await this.$axios.$post('/post-offers', fd , {
              headers:{
                  Authorization:  `Bearer ${localStorage.getItem('token')}`
              }
          })
          .then( (res)=>{
              if( res.key == 'success' ){
                  this.$swal("", `${res.msg}`, "success");
                  
                  document.getElementById('modal-2').style.display = 'none';
                  // document.getElementById('modal-3').style.display = 'block';
                  document.getElementById('modal-2___BV_modal_backdrop_').style.display = 'none';

                  
                  setTimeout(() => {
                      location.reload()
                  }, 2000);

                  // this.paidAdds = true ;
                  // this.freeAdds = false ;
                

              }else{
                  this.$swal("", `${res.msg}`, "error");
              }
              this.disabled = false ;
          } )
    },
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
      this.clientDurations.push({"duration":this.selectedDuration[0].time , "price":this.duration_price});
      this.sendedDurations.push({"id":this.duration , "price":this.duration_price})
      this.duration = null ;
      this.duration_price = '';
    },
    // remove duration 
    removeDuration(price){
      this.clientDurations =  this.clientDurations.filter( item => item.price !== price )
    },

    // add offers 
    addOffer(){
      this.clientOffers.push({"trip_type":this.selectedOffer[0].name,"price":this.offer_price,"finish_date":this.finish_date});
      this.sendedOffers.push({"id":this.trip_type,"price":this.offer_price,"finish_date":this.finish_date});
      this.trip_type = null;
      this.offer_price = null ;
      this.finish_date = null
    },
    // remove offer 
    removeOffer(price){
      this.clientOffers = this.clientOffers.filter( item => item.price !== price )
    }
  },
  mounted(){
    this.getDurations();
    this.getTripsTypes()
  }
}
</script>

<style>

</style>