 <template>
  <!--book trips  section-->
    <div class="book-trip section-pad">
      <div class="container">
        <div class="text-done-me" v-if="order.status=='inprogress'&&order.payment_status===false"> {{ $t('orderAccept') }} </div>
        <!-- <div class="text-done-me" > تم قبول طلبك برجاء الدفع </div> -->
        <div class="flex-groupme">
          <h5 class="main-title color-main font600 mb-5"> {{ $t('OrderDetails') }} </h5>
        </div>
        <div class="row justify-content-center mt-2 mb-5">
          <div class="col-lg-6 col-12">

            <div class="flex-all-new">

              <div class="circle-spe text-center position-relative" :class="{ 'main-cir' : order.status=='pending'||order.status=='finished'||order.status=='intransit'||order.status=='inprogress'}">
                <div class="real-circle " :class="{ 'cir-active' : order.status=='pending'||order.status=='finished'||order.status=='intransit'||order.status=='inprogress'}">
                                  <font-awesome-icon :icon="['fas', 'check']" class="checkStep" v-if="order.status=='pending'||order.status=='finished'||order.status=='intransit'||order.status=='inprogress'" />
                </div>
                <div class="circle-text mt-2"> {{ $t('new') }} </div>
              </div>

              <div class="circle-spe text-center position-relative" :class="{ 'main-cir' : order.status=='finished'||order.status=='intransit'||order.status=='inprogress'}">
                <div class="real-circle" :class="{ 'cir-active' : order.status=='finished'||order.status=='intransit'||order.status=='inprogress'}">
                                  <font-awesome-icon :icon="['fas', 'check']" class="checkStep" v-if="order.status=='finished'||order.status=='intransit'||order.status=='inprogress'" />
                </div>
                <div class="circle-text mt-2"> {{ $t('paymentWait') }} </div>
              </div>

              <div class="circle-spe text-center position-relative" :class="{ 'main-cir' : (order.status=='intransit'&&order.payment_status==true)||(order.status=='inprogress'&&order.payment_status==true)||order.status=='finished'}">
                <div class="real-circle" :class="{ 'cir-active' : (order.status=='intransit'&&order.payment_status==true)||(order.status=='inprogress'&&order.payment_status==true)||order.status=='finished'}">
                      <font-awesome-icon :icon="['fas', 'check']" class="checkStep" v-if="(order.status=='intransit'&&order.payment_status==true)||(order.status=='inprogress'&&order.payment_status==true)||order.status=='finished'" />
                </div>
                <div class="circle-text mt-2"> {{ $t('active') }} </div>
              </div>

              <div class="circle-spe text-center position-relative" :class="{ 'main-cir' : order.status=='finished'}" >
                <div class="real-circle" :class="{ 'cir-active' : order.status=='finished'}">
                      <font-awesome-icon :icon="['fas', 'check']" class="checkStep" v-if="order.status=='finished'" />
                </div>
                <div class="circle-text mt-2"> {{ $t('finished') }} </div>
              </div>

            </div>
          </div>
        </div>
        <div class="card-white card-pad">
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="card-right text-center">
                <div class="card-t"> {{ $t('goDate') }} </div>
                <div class="card-f">
                  <div class="card-f-text color-main"> {{ order.go_date }} </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="card-right text-center">
                <div class="card-t">{{ $t('returnDate') }}</div>
                <div class="card-f">
                  <div class="card-f-text color-main">{{ order.return_date }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-white mt-5">
          <div class="card-title text-center"> {{ $t('OrderDetails') }}

            <!-- show only in active orders -->
            <div v-if="(order.status=='inprogress'&&order.payment_status==true)">
              <nuxt-link :to="'/client/pill/'+this.$route.params.id" class="all-price-ma pill"> {{ $t('orderPill') }} </nuxt-link>
            </div>
          </div>
          <div class="card-white-body p-speee">
            <div class="col-md-6 col-12 margin-auto mb-3">
              <div class="table-offer">
                <table id="myTable" class="table">
                  <thead>
                    <tr>
                      <th> {{ $t('numHours') }} </th>
                      <th> {{ $t('gooDate') }} </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="gray-col"> {{ order.hours }} ساعة</span></td>
                      <td>
                        <span class="gray-col"> {{ order.go_time }} </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-8 col-12 margin-auto mb-3">
              <div class="row mt-3">
                <div class="col-md-6 mb-3 pl-md-5">
                  <h5 class="mb-2"> {{ $t('freeAdditivs') }} </h5>


                  <section v-if="free_additives.length>0">
                    <div class="flex-bet yes-rap gray-col" v-for="free in free_additives" :key="free.id">
                      <div class="bet-right mb-3"> {{ free.name }} </div>
                      <div class="bet-right mb-3"> {{ free.qty }} </div>
                    </div>
                  </section>

                  <section v-else>
                    <p class="text-center"> {{ $t('noFree') }} </p>
                  </section>
                  
                </div>
                <div class="col-md-6 mb-3 pl-md-5">
                  <h5 class="mb-2"> {{ $t('paidFeatures') }} </h5>


                  <section v-if="additives.length>0">
                    <div class="flex-bet yes-rap gray-col"  v-for="free in additives" :key="free.id">
                       <div class="bet-right mb-3"> {{ free.name }} </div>
                      <div class="bet-right mb-3"> {{ free.qty }} </div>
                    </div>
                  </section>

                  <section v-else>
                    <p class="text-center"> {{ $t('noPaid') }} </p>
                  </section>
                  
                </div>
              </div>
              <h5 class="mb-3">{{$t('notes')}}:</h5>
              <p class="para-w">
                {{ order.description }}
              </p>

              <div v-if="is_delegate_refused">
                <h5 class="mb-3"> سبب رفض الرحلة:</h5>
                <p class="para-w">
                  {{ delegate_refused_reason }}
                </p>
              </div>

              <div v-if="is_user_canceled">
                <h5 class="mb-3"> سبب الغاء الرحلة:</h5>
                <p class="para-w">
                  {{ user_refused_reason }}
                </p>
              </div>


            </div>
            <div class="col-md-6 col-12 margin-auto">
              <div class="table-offer">
                <table id="myTable" class="table">
                  <thead>
                    <tr>
                      <th> {{ $t('reserveCount') }} </th>
                      <th> {{ $t('additivesMoney') }} </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="gray-col"> {{ order.price }} ر.س</span></td>
                      <td>
                        <span class="gray-col"> {{ order.additives_price }} ر.س </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-6 col-12 margin-auto mb-4">
              <div class="table-offer spe-table-o">
                <table id="myTable" class="table">
                  <thead>
                    <tr>
                      <th> {{ $t('discountAmount') }} </th>
                      <th> {{ $t('additiveValue') }} </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="gray-col"> {{ order.discount }} ر.س </span></td>
                      <td>
                        <span class="gray-col"> {{ order.added_value }} ر.س </span>
                      </td>
                    </tr>
                  </tbody>
                    </table>
              </div>
              <div class="flex-bet all-price-ma">
                <div class="right-all">{{ $t('total') }} :</div>
                <div class="right-all"> {{ order.total_price }} ر.س</div>
              </div>
            </div>
          </div>
        </div>

        <!-- payment button shows if order status == pending  -->
        <div class="flex-groupme" v-if="order.status=='inprogress'&&order.payment_status==false" >
          <button
            type="button"
            class="btn-main up mt-4 lg"
           
            v-b-modal.modal-19
          >
            {{ $t('pay') }}
          </button>

          <!-- payment modal  -->
          <b-modal id="modal-19">
            <section class="payment_method">
              <h5 class="text-center"> {{ $t('payPlace') }}  </h5>
              <form>
                <div class="d-flex align-items-center mt-4">
                  <input type="radio" name="pay_method" v-model="pay_method" class="payment_radio" id="payment">
                  <label for="payment" class="d-flex">
                    <img :src="order.payment_method.image" class="payment_image" alt="">
                    <div>
                      <h6 class="color-main"> {{ order.payment_method.name }} </h6>
                      <p class="text-muted"> {{ order.payment_method.desc }} </p>
                    </div>
                  </label>
                </div>

                <div class="flex-groupme mb-4 mt-4">

                  <!-- if payment with wallet  -->
                  <button type="button" :disabled="payment_disabled" v-if="order.payment_method.key=='wallet'" @click="paymentWithWallet" class=" btn-main up lg"
                    > {{ $t('pay') }}
                  </button>
                  <!-- if payment online  -->
                  <a  :disabled="payment_disabled" v-if="order.payment_method.key=='online'" :href="'https://backend.bookaboat.app/pay-invoice/'+order.id" target="_blank" class=" btn-main up lg"
                    > {{ $t('pay') }}
                </a>

                  <button @click="closePayment"  style="color:#111b5a !important" class="btn-main up lg light-b"> {{ $t('return') }} </button>
                </div>
              </form>
            </section>
          </b-modal>
        </div>

        <!-- choose brands  -->

        <b-modal id="modal-chooseMethod">
            <section class="payment_method">
              <h5 class="text-center"> اختر وسيلة الدفع  </h5>
              <form>

                <div class="d-flex align-items-center mt-4" v-for="brand in brands" :key="brand.id">
                  <input type="radio" name="brand_type" v-model="brand_type" :value="brand.brand" class="payment_radio" >
                  <label for="payment" class="d-flex">
                    <img :src="brand.image" class="payment_image" alt="">
                    <div>
                      <h6 class="color-main"> {{ brand.name }} </h6>
                      <p class="text-muted"> {{brand.brand }} </p>
                    </div>
                  </label>
                </div>

                <div class="flex-groupme mb-4 mt-4">
                  <button type="button" :brand_disabled="brand_disabled"  @click="paymentOnline" class=" btn-main up lg"
                    > 
                    استمرار
                  </button>

                  <button @click="closeBrands"  style="color:#111b5a !important" class="btn-main up lg light-b"> {{ $t('return') }} </button>
                </div>
              </form>
            </section>
        </b-modal>


        <!-- shows if order status  cancel order == inprogress  -->
        <div class="flex-groupme" v-if="(order.status=='inprogress'||order.status=='pending')&&order.payment_status==false" >
          <button
            type="button"
            class="btn-main btn-danger up mt-4 lg"
            @click.prevent="cancelOrder()"
          >
            {{ $t('cancelTrip') }}
          </button>
        </div>
      

        <!-- shows if order status == intransit  -->
        <div class="flex-groupme" v-if="(order.status=='intransit'&&order.payment_status==true)||(order.status=='inprogress'&&order.payment_status==true)" >
          <button
            type="button"
            class="btn-main up mt-4 lg"
            @click="endTrip()"
          >
            {{ $t('finishTrip') }}
          </button>
        </div>

      </div>





      <!-- rate  -->
      <div class="modalOverLay"  v-show="showRate">
        <booksRate @closeRate="closeRate" :delegate_name="delegate_name" :delegate_id="delegate_id" :delegate_avatar="delegate_avatar" :user_name="user_name" :user_avatar="user_avatar" :user_id="user_id" />
      </div>

      <!-- cancel order => shows only in inprogress  -->
      <div class="modalOverLay"  v-if="showCancel">
          <section class="modal_body d-flex flex-column ">
            <div class="flex-groupme  mb-2">
            
            </div>
            <h5 class="text-center mb-3 font-bold">
              {{ $t('cancelReason') }}
            </h5>
            <div>
              <div class="d-flex mb-3 px-4" v-for="item in reasons" :key="item.id">
                <input type="radio" :value="item.reason"  v-model="reason" name="reason" style="margin:0 10px" :id="'reasnonItem'+item.id" >
                <label :for="'reasnonItem'+item.id"> {{ item.reason }} </label>
              </div>
            </div>
            <div class="flex-groupme mb-4">
              <button @click="refuseOrder" class="btn-danger btn-main up lg"
                > {{ $t('cancel') }} </button
              >
              <button @click="closeRefuse" style="color:#111b5a !important" class="btn-main up lg light-b"> {{ $t('return') }} </button>
            </div>
          </section>
      </div>

    </div>

</template>

<script>
export default {
  data(){
    return{
      order : {},
      additives : [],
      free_additives : [],
      showAccept : false,
      order_id : '',
      showCancel : false,
      reasons : [],
      reason : false,
      showRate : false,

      user_id : '',
      user_name : '',
      user_avatar : '',
      delegate_id :'',
      delegate_avatar : '',
      delegate_name : '',
      payment_disabled : true ,
      pay_method : '',
      delegate_refused_reason : '',
      is_delegate_refused : null,
      user_refused_reason : '',
      is_user_canceled : null,
      brands : [],
      brand_type : null,
      brand_disabled : true,
      brand_name : ''
    }
  },
  watch:{
    reason(){
      console.log(this.reason)
    },
    pay_method(){
      if(this.pay_method !== ''){
        this.payment_disabled = false
      }
    },
    brand_type(){
      console.log(this.brand_type)
      if( this.brand_type !== null ){
        this.brand_disabled = false ;
      }
      
    }
  },
  methods:{
    // get payment brands
    async getBrands(){
      await this.$axios.$get('/hyperpay-brands', {
        headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.brands = res.data.hyperpay_brands ;
      } )
    } ,
    // pay online  
    async paymentOnline(){
      await this.$axios.$post()
    },
    // get cancel orders 
    async getRefuseReasons(){
      await this.$axios.$get('/cancel-reasons', {
        headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then( (res)=>{
        this.reasons = res.data.reasons
      } )
    },

    closeRate(){
      this.showRate = false
      this.getDelegateOrders()
    },
    async getDelegateOrders(){
      await this.$axios.$get(`/user-single-order?order_id=${this.$route.params.id}`, {
        headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then( (res)=>{
        this.order = res.data.order;
        this.additives = res.data.order.additives;
        this.free_additives = res.data.order.free_additives;
        this.user_id = res.data.order.user_id;
        this.user_avatar = res.data.order.user_avatar;
        this.user_name = res.data.order.user_name;
        this.delegate_name = res.data.order.delegate_name;
        this.delegate_id = res.data.order.delegate_id;
        this.delegate_avatar = res.data.order.delegate_avatar;
        this.delegate_refused_reason = res.data.order.delegate_refused_reason;
        this.is_delegate_refused = res.data.order.is_delegate_refused;
        this.is_user_canceled = res.data.order.is_user_canceled;
        this.user_refused_reason = res.data.order.user_refused_reason ;
      } )
    },

    closePayment(){
      document.getElementById('modal-19').style.display = 'none';
      document.getElementById('modal-19___BV_modal_backdrop_').style.display = 'none';
    },
    closeBrands(){
      document.getElementById('modal-chooseMethod').style.display = 'none';
      document.getElementById('modal-chooseMethod___BV_modal_backdrop_').style.display = 'none';
    },

    // cancel order 
    async endTrip(){
      const fd = new FormData()
      fd.append('order_id', this.$route.params.id)
      fd.append('delivery_status' , 'inprogress')

      await this.$axios.$post('/user-finish-order', fd ,{
        headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then( (res)=>{
        if( res.key == 'success' ){
          this.$swal('', `${res.msg}`, "success");
          setTimeout(() => {
            this.showRate = true ;
          }, 2000);  
        }else{
            this.$swal('', `${res.msg}`, "error");
        }
      } )
    },
    cancelOrder(){
      this.showCancel  = true ;
    },
    closeRefuse(){
      this.showCancel = false ;
    },
    // refresh order after accept order => متابعة القارب
    refreshOrder(){
        this.showAccept = false;
        this.getDelegateOrders();
    },


    // payment with wallet 
    async paymentWithWallet(){
      const fd = new FormData();
      fd.append('order_id', this.$route.params.id)
      await this.$axios.$post(`/pay-order-with-wallet`, fd , {
        headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      } )
      .then( (res)=>{
        if( res.key == 'success' ){
          this.$swal('', `${res.msg}`, "success");
          setTimeout(() => {
            this.showCancel = false ;
            this.getDelegateOrders()
          }, 2000);
        }else{
          this.$swal('', `${res.msg}`, "error");
        }
      } )
    },


    // refuse order 
    async refuseOrder(){
      const fd = new FormData()
      fd.append('order_id', this.$route.params.id)
      fd.append('reason' , this.reason)

      await this.$axios.$post('/cancel-order',fd , {
        headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then( (res)=>{
        if( res.key == 'success' ){
          this.$swal('', `${res.msg}`, "success");
          setTimeout(() => {
            this.$router.push('/client/books/MyBooks')
          }, 2000);
        }else{
          this.$swal('', `${res.msg}`, "success");
        }
      } )
    },

    // delegate start trip 
    async startTrip(){
      const fd = new FormData();
      fd.append('order_id', this.$route.params.id);
      fd.append('delivery_status', 'delivering');
      await this.$axios.$post('/delegate-start-order',fd, {
        headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if( res.key == 'success' ){
          
          this.getDelegateOrders();
        }else{
          this.$swal('', `${res.msg}`, "error");
        }
      } )
    }

  },
  mounted(){
    this.getDelegateOrders();
    this.getRefuseReasons();
    this.getBrands();
    this.order_id = this.$route.params.id
  }
} 
</script>

<style>
.btn-main:disabled{
  opacity: .4;
  cursor: not-allowed;
}
.payment_radio{
  width: 25px;
  height: 25px;
  margin-left: 20px;
}

.payment_image{
  width: 28px;
  height: 28px;
}
.btn-danger{
  background-color: rgb(189, 18, 18);
}
.pill{
  float: left;
  color: #fff;
  margin-top: -29px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  border-radius: 4px;
  font-size: 14px;
  margin-left: 12px;
}
.checkStep{
    position: absolute;
    top: 12px;
    left: 29%;
    color: #fff;
}
.real-circle{
  position: relative;
}
</style>