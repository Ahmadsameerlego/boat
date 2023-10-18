<template>
  <!--book trips  section-->
    <div class="book-trip section-pad">
      <div class="container">
        <div class="text-done-me" v-if="order.status=='inprogress'&&order.payment_status===false"> {{ $t('orderAccept') }} </div>
        <div class="text-done-me" v-if="order.status=='inprogress'&&order.payment_status===true"> تم الدفع من قبل العميل </div>

        <div class="flex-groupme">
          <h5 class="main-title color-main font600 mb-5"> {{ $t('OrderDetails') }} </h5>
        </div>
        <div class="row justify-content-center mt-2 mb-5">
          <div class="col-lg-6 col-12">

            <div class="flex-all-new">

              <div class="circle-spe text-center position-relative" :class="{ 'main-cir' : order.status=='pending'||order.status=='finished'||order.status=='finished_from_user'||order.status=='intransit'||order.status=='inprogress'}">
                <div class="real-circle " :class="{ 'cir-active' : order.status=='pending'||order.status=='finished'||order.status=='finished_from_user'||order.status=='intransit'||order.status=='inprogress'}">
                                  <font-awesome-icon :icon="['fas', 'check']" class="checkStep" v-if="order.status=='pending'||order.status=='finished'||order.status=='finished_from_user'||order.status=='intransit'||order.status=='inprogress'" />
                </div>
                <div class="circle-text mt-2"> {{ $t('new') }} </div>
              </div>

              <div class="circle-spe text-center position-relative" :class="{ 'main-cir' : order.status=='finished'||order.status=='finished_from_user'||order.status=='intransit'||order.status=='inprogress'}">
                <div class="real-circle" :class="{ 'cir-active' : order.status=='finished'||order.status=='finished_from_user'||order.status=='intransit'||order.status=='inprogress'}">
                                  <font-awesome-icon :icon="['fas', 'check']" class="checkStep" v-if="order.status=='finished'||order.status=='finished_from_user'||order.status=='intransit'||order.status=='inprogress'" />
                </div>
                <div class="circle-text mt-2"> {{ $t('paymentWait') }} </div>
              </div>

              <div class="circle-spe text-center position-relative" :class="{ 'main-cir' : order.status=='intransit'||(order.status=='inprogress'&&order.payment_status==true)||order.status=='finished'||order.status=='finished_from_user'}">
                <div class="real-circle" :class="{ 'cir-active' : order.status=='intransit'||(order.status=='inprogress'&&order.payment_status==true)||order.status=='finished'||order.status=='finished_from_user'}">
                      <font-awesome-icon :icon="['fas', 'check']" class="checkStep" v-if="order.status=='intransit'||(order.status=='inprogress'&&order.payment_status==true)||order.status=='finished'||order.status=='finished_from_user'" />
                </div>
                <div class="circle-text mt-2"> {{ $t('active') }} </div>
              </div>

              <div class="circle-spe text-center position-relative" :class="{ 'main-cir' : order.status=='finished'||order.status=='finished_from_user'}" >
                <div class="real-circle" :class="{ 'cir-active' : order.status=='finished'||order.status=='finished_from_user'}">
                      <font-awesome-icon :icon="['fas', 'check']" class="checkStep" v-if="order.status=='finished'||order.status=='finished_from_user'" />
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
                <div class="card-t"> {{$t('date') }} {{$t('return')}}</div>
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
            <div v-if="order.status=='intransit'">
              <nuxt-link :to="'/provider/pill/'+this.$route.params.id" class="all-price-ma pill"> {{ $t('orderPill') }} </nuxt-link>
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
                      <td><span class="gray-col"> {{ order.hours }} {{ $t('hour') }} </span></td>
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
              <h5 class="mb-3"> {{ $t('notes') }} :</h5>
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

              <div class="table-offer spe-table-o">
                <table id="myTable" class="table">
                  <thead>
                    <tr>
                      <th> عمولة التطبيق </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="gray-col"> {{ order.app_percentage }} ر.س </span></td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>


              <div class="flex-bet all-price-ma">
                <div class="right-all"> {{ $t('total') }} :</div>
                <div class="right-all"> {{ order.total_price }} ر.س</div>
              </div>
            </div>


          </div>
        </div>

        <!-- shows if order status == pending  -->
        <div class="flex-groupme" v-if="order.status=='pending'" >
          <button
            type="button"
            class="btn-main up mt-4 lg"
            @click="acceptOrder"
          >
            {{ $t('accOrder') }}
          </button>

          <button
            type="button"
            class="btn-main btn-danger up mt-4 lg"
            @click="showRefuseModal"
          >
            {{ $t('refuse_order') }}
          </button>
        </div>


        <!-- shows if order status == inprogress - start trip -->
        <div class="flex-groupme" v-if="order.status=='inprogress'&&order.payment_status===true" >
          <button
            type="button"
            class="btn-main up mt-4 lg"
            @click="startTrip()"
          >
            {{ $t('start_trip') }}
          </button>
        </div>


        <!-- shows if order status == intransit  -->
        <div class="flex-groupme" v-if="order.status=='intransit'" >
          <button
            type="button"
            class="btn-main up mt-4 lg"
            @click="endTrip()"
          >
            {{ $t('finishTrip') }}
          </button>
        </div>
      </div>

      <!-- accept order  -->
      <div class="modalOverLay"  v-show="showAccept">
            <section class="modal_body d-flex flex-column justify-content-center align-items-center">
              <div class="flex-groupme  mb-2">
              <img
                class="modal-img-m"
                :src="require('@/assets/imgs/91068-message-sent-successfully-plane.gif')"
                alt=""
              />
              </div>
              <h5 class="text-center mb-3 font-bold">
                تهانينا تم ارسال الطلب في انتظار الدفع من العميل
              </h5>
              <div class="text-center mb-4 font14 gray-col">
                يمكنك متابعة الطلب من خلال صفحة حجوزاتي
              </div>
              <div class="flex-groupme mb-4">
                <button @click="refreshOrder" class=" btn-main up lg"
                  >متابعة الطلب</button
                >
                <nuxt-link to="/provider/HomePage"  style="color:#111b5a !important" class="btn-main up lg light-b">الرئيسية</nuxt-link>
              </div>
            </section>
      </div>


      <!-- refuse order  -->
      <div class="modalOverLay"  v-show="showRefuse">
            <section class="modal_body d-flex flex-column ">
              <div class="flex-groupme  mb-2">
              
              </div>
              <h5 class="text-center mb-3 font-bold">
                {{ $t('refuseOrder') }}
              </h5>
              <div>
                <div class="d-flex mb-3 px-4" v-for="item in reasons" :key="item.id">
                  <input type="radio" :value="item.reason"  v-model="reason" name="reason" style="margin:0 10px" :id="'reasnonItem'+item.id" >
                  <label :for="'reasnonItem'+item.id"> {{ item.reason }} </label>
                </div>
              </div>
              <div class="flex-groupme mb-4">
                <button @click="refuseOrder" class="btn-danger btn-main up lg"
                  > {{$t('cancel')}} </button
                >
                <button @click="closeRefuse" style="color:#111b5a !important" class="btn-main up lg light-b">{{$t('return')}}</button>
              </div>
            </section>
      </div>


      <!-- rate  -->
      <div class="modalOverLay"  v-show="showRate">
        <booksRate @closeRate="closeRate" :user_name="user_name" :user_avatar="user_avatar" :user_id="user_id" />
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
      showRefuse : false,
      reasons : [],
      reason : false,
      showRate : false,

      user_id : '',
      user_name : '',
      user_avatar : '',
      delegate_refused_reason : '',
      is_delegate_refused : null,
      user_refused_reason : '',
      is_user_canceled : null

    }
  },
  watch:{
    reason(){
      console.log(this.reason)
    }
  },
  methods:{
    closeRate(){
      this.showRate = false
    },
    async getDelegateOrders(){
      await this.$axios.$get(`/delegate-single-order?order_id=${this.$route.params.id}`, {
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
        this.delegate_refused_reason = res.data.order.delegate_refused_reason;
        this.is_delegate_refused = res.data.order.is_delegate_refused;
        this.is_user_canceled = res.data.order.is_user_canceled;
        this.user_refused_reason = res.data.order.user_refused_reason ;
      } )
    },

    // accept order 
    async acceptOrder(){
      const fd = new FormData();
      fd.append('order_id', this.$route.params.id)
      await this.$axios.$post('/delegate-accept-order',fd, {
        headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if( res.key == 'success' ){
          this.showAccept = true;
          this.getDelegateOrders();
        }else{
          this.$swal('', `${res.msg}`, "error");
        }
      } )
    },

    // get refuse orders 
    async getRefuseReasons(){
      await this.$axios.$get('/refuse-reasons', {
        headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then( (res)=>{
        this.reasons = res.data.reasons
      } )
    },
    // refuse order 
    async refuseOrder(){
      const fd = new FormData()
      fd.append('order_id', this.$route.params.id)
      fd.append('reason' , this.reason)

      await this.$axios.$post('/delegate-refuse-order',fd , {
        headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then( (res)=>{
        if( res.key == 'success' ){
          this.$swal('', `${res.msg}`, "success");
          setTimeout(() => {
            this.$router.push('/provider/books/MyBooks')
          }, 2000);
        }else{
          this.$swal('', `${res.msg}`, "success");
        }
      } )
    },

    // cancel order 
    async endTrip(){
      const fd = new FormData()
      fd.append('order_id', this.$route.params.id)
      fd.append('delivery_status' , 'delivering')

      await this.$axios.$post('/finish-order', fd ,{
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
    showRefuseModal(){
      this.showRefuse = true ;
    },
    closeRefuse(){
      this.showRefuse = false ;
    },
    // refresh order after accept order => متابعة القارب
    refreshOrder(){
        this.showAccept = false;
        this.getDelegateOrders();
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
    this.getDelegateOrders()
    this.getRefuseReasons()
    this.order_id = this.$route.params.id
  }
} 
</script>

<style>
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