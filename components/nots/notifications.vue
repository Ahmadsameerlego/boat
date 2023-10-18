<template>
  <!--notification  section-->
  <div class="notification-sec section-pad">
    <div class="container">
      <div class="col-md-10 col-12 margin-auto">

        <section v-if="notifications.length>0">
          <div
          class="noti-box mb-3 notification active"
          v-for="notification in notifications"
          :key="notification.id"
            >

              <div v-if="notification.notification_type=='new_review'">
                <nuxt-link to="/provider/providerProfile/providerInfo" v-if="provider" class="d-flex">
                  <div class="noti-box-right"><font-awesome-icon :icon="['fas', 'bell']" /></div>
                    <div class="noti-box-left">
                      <div class="noti-text font_bold mb-2">
                        {{ notification.title }}
                      </div>
                      <p class="mb-2">
                        {{ notification.message }}
                      </p>
                      <div class="flex-noti gray-col">
                        <i class="fa-regular fa-clock"></i
                        ><span>{{ notification.created_at }}</span>
                      </div>
                    </div>
                </nuxt-link>
                <nuxt-link to="/client/clientProfile/profileInfo" v-else-if="client" class="d-flex">
                  <div class="noti-box-right"><font-awesome-icon :icon="['fas', 'bell']" /></div>
                    <div class="noti-box-left">
                      <div class="noti-text font_bold mb-2">
                        {{ notification.title }}
                      </div>
                      <p class="  mb-2">
                        {{ notification.message }}
                      </p>
                      <div class="flex-noti gray-col">
                        <i class="fa-regular fa-clock"></i
                        ><span>{{ notification.created_at }}</span>
                      </div>
                    </div>
                </nuxt-link>
              </div>

              <div v-else>
                <nuxt-link :to="'/provider/orders/'+notification.order_id" v-if="provider" class="d-flex">
                  <div class="noti-box-right">
                    <font-awesome-icon :icon="['fas', 'bell']" />
                  </div>
                    <div class="noti-box-left">
                      <div class="noti-text font_bold mb-2">
                        {{ notification.title }}
                      </div>
                      <p class="  mb-2">
                        {{ notification.message }}
                      </p>
                      <div class="flex-noti gray-col">
                        <i class="fa-regular fa-clock"></i
                        ><span>{{ notification.created_at }}</span>
                      </div>
                    </div>
                </nuxt-link>
                <nuxt-link :to="'/client/orders/'+notification.order_id" v-else-if="client" class="d-flex">
                  <div class="noti-box-right"><font-awesome-icon :icon="['fas', 'bell']" /></div>
                    <div class="noti-box-left">
                      <div class="noti-text font_bold mb-2">
                        {{ notification.title }}
                      </div>
                      <p class="  mb-2">
                        {{ notification.message }}
                      </p>
                      <div class="flex-noti gray-col">
                        <i class="fa-regular fa-clock"></i
                        ><span>{{ notification.created_at }}</span>
                      </div>
                    </div>
                </nuxt-link>    
              </div>
            </div>
        </section>

        <div class="notFound d-flex align-items-center" v-else>
              <font-awesome-icon :icon="['fas', 'circle-info']" />
              <p> {{ $t('noNotifications') }} </p>
        </div>



        <v-pagination
          v-if="notifications.length>0"
          v-model="currentPage"
          :total-visible="totalPage"
          class="mt-6"
          :length="totalPage"
          color="#FF9A00"
          @input="(page) => handlePagination(page)"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      count: 20,
      pageLimit: 10,
      totalPage: 0,
      notifications: [],
      client : false,
      provider : false
    };
  },
  computed: {
    displayedData() {
      let start = (this.currentPage - 1) * this.pageLimit;
      let end = start + this.pageLimit;
      return this.notifications.slice(start, end);
    },
  },
  created() {
    this.totalPage = Math.ceil(this.notifications.length / this.pageLimit);
  },
  methods: {
    handlePagination(page) {
      this.currentPage = page;
      this.getNotifications()
    },

    async getNotifications(){
      await this.$axios.$get(`/notifications?page=${this.currentPage}`, {
        headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.notifications = res.data.notifications;
        this.totalPage = res.data.pagination.total_pages
        this.currentPage = res.data.pagination.current_page
        this.pageLimit = res.data.pagination.per_page
        // this.count = res.data.pagination.total
      } )
    }
  },
  mounted() {
    this.getNotifications()
      // client show 
      if( this.$route.fullPath.includes('client') ){
        this.client = true ;
      }else if( this.$route.fullPath.includes('provider') ){
        this.provider = true ;
      }
  },
};
</script>

<style scoped>
  .gray-col{
    position: absolute;
    left: 31px;
    top: 31px;
  }
</style>
