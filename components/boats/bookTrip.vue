<template>
    <div class="book-trip section-pad">
      <div class="container">
        <div class="flex-groupme">
          <h5 class="main-title color-main font600 mb-5"> {{ $t('bookTrip') }} </h5>
        </div>
        <div class="col-md-8 col-12 margin-auto">
          <form action="">
            <div class="row mb-3">

              <!-- السمات المجانية    -->
              <div class="col-lg-6 col-md-12 mb-4">
                  <div class="specials-box">
                      <h6 class="specials-heading mb-3"> {{ $t('freeAdditivs') }} </h6>

                      <!-- single feature  -->
                      <div class="flex-bet position-relative mb-5 mt-3" v-for="free in free_additives" :key="free.id">
                          
                          <div class="flex-sm-bt">
                            <input
                                type="checkbox"
                                :id="'check-spec'+free.id"
                                class="check-wid"
                                @change="setId(free.id)"
                               
                            />
                            <label class="labelChecked" :for="'check-spec'+free.id">
                          <div class="counter-main" >
                            <div class="qty counter-div justify-content-center">
                                <button
                                type="button"
                                class="plus counter-btn unselectable"
                                @click="increaseOrder(free)"
                                >
                                +
                                </button>

                                <input
                                type="text"
                                ref="freeCount"
                                :value="free.qty"
                                class="count output"
                                />

                                <button
                                type="button"
                                class="minus counter-btn unselectable"
                                @click="decreaseOrder(free)"
                                >
                                -
                                </button>
                            </div>
                          </div>
                            </label>
                            <span>{{ free.name }} </span>
                            
                          </div>

                          
                        
                      </div>
                      
                  </div>
              </div>
              <!-- السمات المدفوعة -->
              <div class="col-lg-6 col-md-12 mb-4">
                <div class="specials-box">
                  <h6 class="specials-heading mb-3"> {{ $t('paidFeatures') }} </h6>
                  
                  <!-- single additives  -->
                  <div class="flex-bet mb-5 mt-3 position-relative" v-for="add in additives" :key="add.id">

                    <div class="flex-sm-bt" >
                      <input
                        type="checkbox"
                        :id="'check-spec4'+add.id"
                        class="check-wid"
                      />
                      <label :for="'check-spec4'+add.id" class="labelChecked">
                        <div class="counter-main">
                          <div class="qty counter-div justify-content-center">
                            <button
                              type="button"
                              class="plus counter-btn unselectable"
                              @click="increasePaid(add)"
                            >
                              +
                            </button>
                            <input
                              type="text"
                              :value="add.qty"
                              class="count output"
                              id="paidAdditives"
                            />
                            <button
                              type="button"
                              class="minus counter-btn unselectable"
                              @click="decreasePaid(add)"
                            >
                              -
                            </button>
                          </div>
                        </div>
                        </label>
                      <span>{{ add.name }}</span>
                      <div class="color-main">{{ add.price }} ر.س</div>
                    </div>

                    

                    

                    
                  </div>

                </div>
              </div>
            </div>

            <!-- form  -->
            <div class="row mb-3">


              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold">  {{ $t('tripType') }} </h6>
                  <div class="relative-co">
                    <select name="trip_type_id" v-model="trip_type_id" id="" class="main-select">
                      <option value="" selected hidden disabled>
                        {{ $t('tripTypePlac') }}
                      </option>
                      <option v-for="cat in categories" :key="cat.id" :value="cat.id"> {{ cat.name }} </option>
                    </select>
                    <div class="icon-float">
                      
                      <font-awesome-icon :icon="['fas', 'sailboat']" class="font15" />
                    </div>
                    <div class="icon-float2">
                      <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('goDate') }} </h6>

                  <div class="relative-co">
                    <input
                      type="date"
                      :placeholder="$t('goDatePlace')"
                      class="inp-spe-tele dateme"
                      name="go_date"
                      v-model="go_date"
                      style="padding:15px"
                    />
                    <!-- <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'calendar-days']" />
                    </div> -->
                    <!-- <div class="icon-float2">
                      <font-awesome-icon :icon="['fas', 'calendar']" class="color-main" />
                    </div> -->
                  </div>

                  
                </div>
              </div>


              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('returnDate') }} </h6>
                  <div class="relative-co">
                    <input
                      type="date"
                      :placeholder="$t('returnDatePlace')"
                      class="inp-spe-tele dateme"
                      name="return_date"
                      v-model="return_date"
                      style="padding:15px"
                    />
                    <!-- <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'calendar-days']" />
                    </div>
                    <div class="icon-float2">
                      <font-awesome-icon :icon="['fas', 'calendar']" class="color-main" />
                    </div> -->
                  </div>
                </div>
              </div>


              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('numHours') }} </h6>
                  <div class="relative-co">
                    <!-- <input
                      type="number"
                      :placeholder="$t('hoursPlace')"
                      class="inp-spe-tele"
                      name="hours"
                      v-model="hours"
                    /> -->

                    <select name="hours" v-model="hours" id="" class="main-select">
                      <option value="" selected hidden disabled>
                        {{ $t('hoursPlace') }}
                      </option>
                      <option v-for="time in times" :key="time.id" :value="time.id"> {{ time.name }} </option>
                    </select>

                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'clock']" class="color-main" />
                    </div>
                    <div class="icon-float2">
                      <font-awesome-icon :icon="['fas', 'clock']" class="color-main" />
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('gooDate') }} </h6>
                  <div class="relative-co">
                    <input
                      type="time"
                      :placeholder="$t('gooDatePlace')"
                      class="inp-spe-tele time-me"
                      name="go_time"
                      v-model="go_time"
                      style="padding:15px"
                    />
                    <!-- <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'clock']" class="color-main" />
                    </div>
                    <div class="icon-float2">
                      <font-awesome-icon :icon="['fas', 'clock']" class="color-main" />
                    </div> -->
                  </div>
                </div>
              </div>


              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('numPerson') }} </h6>
                  <div class="relative-co">
                    <input
                      type="number"
                      :placeholder="$t('numPersonPlace')"
                      class="inp-spe-tele"
                      name="persons_num"
                      v-model="persons_num"
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'users']" class="color-main" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('paymentMethod') }} </h6>
                  <div class="relative-co">
                    <select name="payment_type" v-model="payment_type" id="" class="main-select">
                      <option value="" selected hidden disabled>
                        {{ $t('payPlace') }}
                      </option>
                      <option v-for="payment in payment_methods" :key="payment.id" :value="payment.key"> {{ payment.name }} </option>
                    </select>
                    <div class="icon-float">
                      
                      <font-awesome-icon :icon="['fas', 'sailboat']" class="font15" />
                    </div>
                    <div class="icon-float2">
                      <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </div>
                  </div>
                </div>
              </div>

              <div class=" col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('copoun') }}  </h6>
                  <div class="relative-co">
                    <input
                      type="text"
                      :placeholder="$t('enterCopoun')"
                      class="inp-spe-tele"
                      name="coupon"
                      v-model="coupon"
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'users']" class="color-main" />
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('notes') }} </h6>
                  <div class="relative-co">
                    <textarea
                      name="description"
                      v-model="description"
                      id=""
                      class="main-textarea"
                      :placeholder="$t('notesPlace')"
                      rows="4"
                    ></textarea>
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'object-ungroup']" class="color-main" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex-groupme">
              <button

                type="button"
                @click="createOrder"
                :disabled="disabled"
                class="main-btn up mb-2 w-50"
              >
                {{ $t('confirm') }}
              </button>
            </div>
          </form>
        </div>
      </div>



    
      <div class="modalOverLay"  v-show="showAdd">
            <section class="modal_body d-flex flex-column justify-content-center align-items-center">
              <div class="flex-groupme  mb-2">
              <img
                class="modal-img-m"
                :src="require('@/assets/imgs/91068-message-sent-successfully-plane.gif')"
                alt=""
              />
              </div>
              <h5 class="text-center mb-3 font-bold">
                تهانينا تم ارسال طلبك بنجاح في انتظار قبول مقدم الخدمة
              </h5>
              <div class="text-center mb-4 font14 gray-col">
                يمكنك متابعة الطلب من خلال صفحة حجوزاتي
              </div>
              <div class="flex-groupme mb-4">
                <nuxt-link :to="'/client/orders/'+order_id" class=" btn-main up lg"
                  >متابعة الطلب</nuxt-link
                >
                <nuxt-link to="/client/HomePage"  style="color:#111b5a !important" class="btn-main up lg light-b">الرئيسية</nuxt-link>
              </div>
            </section>
      </div>   

    </div>     
    
</template>

<script>
export default {
    data(){
        return{
            showAdd : false ,
            groups : [],
            appendGroups : [],
            paidGroups : [],
            appendPaidGroups : [],
            sendedGroups : [],
            count_free : 0,
            free_additives : [],
            additives : [],

            cities: [],
            regionQuery: "",
            showList1: false,
            city_id: "",

            description : '',
            persons_num : '',
            go_time : null,
            hours : '',
            return_date : null,
            go_date : null,

            // product id 
            id : null,
            // cat id 
            category_id : null,


            showCount : false,
            count1 : false,

            showPaid : false ,
            paidCheck : false,
            disabled : false,

            categories : [],

            finish : [],
            order_id : '',

            payment_methods : [],
            payment_type : '',
            coupon : '',
            times : []
        }
    },
    methods:{

      // create order 
        async createOrder(){
          
          this.disabled = true ;
          const fd = new FormData();

          fd.append('product_id', this.id);
          fd.append('trip_type_id', this.trip_type_id);
          fd.append('go_date', this.go_date);
          fd.append('return_date', this.return_date);
          fd.append('hours', this.hours);
          fd.append('go_time', this.go_time);
          fd.append('persons_num', this.persons_num);
          fd.append('description', this.description);
          fd.append('payment_type', this.payment_type);
          fd.append('coupon', this.coupon);

          
          fd.append('groups', JSON.stringify(   [{ "free_additives":this.groups},{"additives":this.paidGroups}]  ));

          await this.$axios.$post( '/create-order', fd , {
            headers:{
                  Authorization:  `Bearer ${localStorage.getItem('token')}`
            }
          } )

          .then( (res)=>{
            if( res.key == 'success' ){
              this.$swal('', `${res.msg}`, "success");
              // document.getElementById('modal-657').style.display = 'none';
              this.order_id = res.data.order_id ;
              setTimeout(() => {
                this.showAdd = true ;
              }, 2000);
            }else{
               this.$swal('', `${res.msg}`, "error");
            }
            this.disabled = false ;
          } )
        },

        // get payment methods 
        async getPaymentMethod(){
          await this.$axios.$get('/payment-methods', {
            headers:{
                Authorization:  `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then( (res)=>{
            this.payment_methods = res.data.payment_methods
          } )
        },

        // get times 
        async getTimes(){
          await this.$axios.$get('/times', {
            headers:{
                Authorization:  `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then( (res)=>{
            this.times = res.data.times ;
          } )
        },

        setId(id){
          // if(this.showCount == true){
          //   this.groups.push({"free_additives":[{"id":id,"qty":qty}]})

          //   console.log(this.groups)
          //   // console.log(this.$refs.freeCount)
          // }
          console.log(id)
        },

        // free additives 
        increaseOrder(free){
          free.qty +=1 ;

          const index = this.groups.findIndex(item => item.id === free.id);
          if( index === -1 ){
              this.groups.push({"id":free.id,"qty":free.qty})
          }else {
            // If the object already exists, update the existing object with the new one
            this.groups[index] = free;
          }
          
          this.sendedGroups = this.groups
          console.log(this.sendedGroups)


        },
        // free additives 
        decreaseOrder(free){
          if( free.qty > 1 ){
            free.qty -= 1 ;
            const index = this.groups.findIndex(item => item.id === free.id);
            if( index === -1 ){
                this.groups.push({"id":free.id,"qty":free.qty})
            }else {
              // If the object already exists, update the existing object with the new one
              this.groups[index] = free;
            }
            
            this.sendedGroups = this.groups
            console.log(this.sendedGroups)

          }
        },
        // paid additives 
        increasePaid(add){
          add.qty +=1 ;
          // this.paidGroups.push({"additives":[{"id":add.id,"qty":add.qty}]})
          
          // this.appendPaidGroups = this.paidGroups.slice(-1);

          // console.log(this.appendPaidGroups)

          // this.finish =  this.sendedGroups.concat(this.appendPaidGroups)
          // console.log(this.finish)

          const index = this.paidGroups.findIndex(item => item.id === add.id);
          if( index === -1 ){
              this.paidGroups.push({"id":add.id,"qty":add.qty})
          }else {
            // If the object already exists, update the existing object with the new one
            this.paidGroups[index] = add;
          }
          
          // this.finish =  this.sendedGroups.concat(this.appendPaidGroups)
          console.log(this.paidGroups)
        },
        // paid additives 
        decreasePaid(add){
          if( add.qty > 1 ){
            add.qty -= 1 ;
            const index = this.paidGroups.findIndex(item => item.id === add.id);
            if( index === -1 ){
                this.paidGroups.push({"id":add.id,"qty":add.qty})
            }else {
              // If the object already exists, update the existing object with the new one
              this.paidGroups[index] = add;
            }
            
            // this.finish =  this.sendedGroups.concat(this.appendPaidGroups)
            console.log(this.paidGroups)          
          }
        },
      
        // get trips 
        async getCategories(){
            await this.$axios.$get('/trip-types')
            .then( (res)=>{
                this.categories = res.data.trip_types
            } )
        },
        // filter city
        setNewValueForRegion(value1, id) {
          this.regionQuery = value1;
          this.city_id = id;
          if (this.regionQuery == value1) {
            this.showList1 = false;
          }
        },
        async getCities() {
            this.showList1 = true;
        },
        // show list of cities
        showList() {
          this.showList1 = true;
        },
        // get cities
        async getCity() {
          await this.$axios.$get("/cities").then((res) => {
            this.cities = res.data.cities;
          });
        },
        // increment(qty){
        //     qty += 1 ;
        // },
        decrement(qty){
            if( qty > 1  ){
                qty -= 1 ;
            }
        },


        async getSingleProduct(){
          await this.$axios.$get( `/single-product?product_id=${this.$route.params.id}` )
          .then( (res)=>{
            this.free_additives = res.data.product.free_additives;
            this.additives = res.data.product.additives;
            this.id = res.data.product.id;
            this.category_id = res.data.product.category_id;
          } )
        },

        addGroup(){

        }
    },


    computed: {
      filteredRegions() {
        if (!Array.isArray(this.cities)) {
          console.error("this.cities is not an array");
          return [];
        }
        return this.cities.filter((region) => {
          return region.name
            .toLowerCase()
            .includes(this.regionQuery.toLowerCase());
        });
      },
    },

    mounted(){
      this.getSingleProduct();
      this.getCity();
      this.getCategories();
      this.getPaymentMethod();
      this.getTimes();
    }
}
</script>

<style>
label.labelChecked{
  display: none;
  position: absolute;
  left: 0;
  top: -6px;
}
input.check-wid[type="checkbox"]:checked + label.labelChecked {
  display: block;
}

.modalOverLay{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #00000073;
  z-index: 9;
}
.modal_body{
  background: #fff;
  width: 50%;
    border-radius: 20px;
    margin: auto;
}
@media(max-width:768px){
  .modal_body{
    width: 80%;
  }
}
</style>