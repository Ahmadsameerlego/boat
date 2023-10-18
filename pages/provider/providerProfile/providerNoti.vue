<template>
    <b-card no-body>
      <div class="flex-bet all-qestion m-1" role="tab" v-b-toggle.accordion-7>
        <div class="flex-qet-me">
          <div class="icon-faq color-main">
            <font-awesome-icon :icon="['fas', 'bell']" />
          </div>
          <div class="full-q"> {{ $t('settingsAlerts') }} </div>
        </div>
        <div class="dafeult-faq-icon">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>
      </div>
  
      <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
        <div class="parent-profile">
          <div class="flex-row-sett">
            <div class="sett-right">
              <h5> {{ $t('adsTitle') }} </h5>
              <div class="under-h5 gray-col"> {{ $t('adsDesc') }} </div>
            </div>
            <div class="sett-left">
              <div class="switch-con">
                <input
                  v-model="offers_notify"
                  @change="changeNoti"
                  type="checkbox"
                  hidden
                  name="offers_notify"
                  id="switch"
                />
                <label for="switch" class="switch">
                  <div class="main-div">
                    <span></span>
                  </div>
                </label>
              </div>
            </div>
          </div>
           <div class="flex-row-sett">
          <div class="sett-right">
            <h5> {{ $t('newOrders') }} </h5>
            <!-- <div class="under-h5 gray-col"> الطلبات الجديدة </div> -->
          </div>
          <div class="sett-left">
            <div class="switch-con">
              <input
                v-model="offers_notify2"
                @change="changeNoti2"
                type="checkbox"
                hidden
                name="new_orders_notify"
                id="switch2"
              />
              <label for="switch2" class="switch">
                <div class="main-div">
                  <span></span>
                </div>
              </label>
            </div>
          </div>

          
        </div>
        </div>
      </b-collapse>
    </b-card>
</template>
  
  <script>
  export default {
    data() {
      return {
        offers_notify: null,
              offers_notify2: null,

      };
    },
    methods: {
      // changeNoti() {
      //   this.offers_notify = !this.offers_notify;
      //   console.log(this.offers_notify);
      // },
      // resend code

      async getNoti() {
        await this.$axios.$get("/profile/show", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }).then((res) => {
          this.offers_notify = res.data.user.offers_notify ;
                    this.offers_notify2 = res.data.user.new_orders_notify ;

          // console.log(res.data);

        });
      },
      async changeNoti() {
        const fd = new FormData();
        fd.append('offers_notify', this.offers_notify)
        await this.$axios
          .$post("/control-notification", fd, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(this.offers_notify);  
            
            if (res.key == "success") {
              this.$swal("", `${res.msg}`, "success");
            } else {
              this.$swal("", `${res.msg}`, "error");
            }
          });
      },
          async changeNoti2() {
      const fd = new FormData();
      fd.append('new_orders_notify', this.offers_notify2)
      await this.$axios
        .$post("/control-notification", fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.key == "success") {
            this.$swal("", `${res.msg}`, "success");
          } else {
            this.$swal("", `${res.msg}`, "error");
          }
        });
    },
    },
       mounted() {
      this.getNoti();
    },
  };
  </script>
  
  <style></style>
  