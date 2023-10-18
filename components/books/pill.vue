<template>
  <!--book trips  section-->
    <div class="book-trip section-pad">
      <div class="container">


        <div class="card-white mt-5">
          <div class="card-title text-center">{{ $t('orderPill') }}
          </div>
          <div class="card-white-body p-speee">
            
            <div class="col-md-6 col-12 margin-auto">
              <div class="table-offer">
                <table id="myTable" class="table">
                  <thead>
                    <tr>
                      <th>{{ $t('reserveCount') }}</th>
                      <th>{{ $t('additivesMoney') }}</th>
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
                      <th>{{ $t('discountAmount') }} </th>
                      <th>{{ $t('additiveValue') }}</th>
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
                <h5 class="text-center mb-3 font-bold">
                {{ $t('refuseOrder') }}
              </h5>
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
                <button @click="closeRefuse" style="color:#111b5a !important" class="btn-main up lg light-b">العودة</button>
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
      showRefuse : false,
      reasons : [],
      reason : false
    }
  },
  watch:{
    reason(){
      console.log(this.reason)
    }
  },
  methods:{
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
</style>