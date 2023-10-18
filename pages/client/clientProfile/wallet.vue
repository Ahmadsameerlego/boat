<template>
  <b-card no-body>
    <div class="flex-bet all-qestion m-1" role="tab" v-b-toggle.accordion-6>
      <div class="flex-qet-me">
        <div class="icon-faq color-main">
          <font-awesome-icon :icon="['fas', 'wallet']" />
        </div>
        <div class="full-q"> {{ $t('wallet') }} </div>
      </div>
      <div class="dafeult-faq-icon">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
    </div>

    <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
      <div class="parent-profile text-center">
        <div class="flex-groupme mb-3">
          <img class="wallet-img" src="imgs/43.png" alt="" />
        </div>
        <div class="gray-col mb-1"> {{ $t('current_wallet') }} </div>
        <div class="fontbolder28 mb-1">{{ wallet }}</div>
        <div class="mb-1">ريال سعودي</div>
        <div class="flex-groupme mt-3">
          <button type="button" class="btn-main up" @click="showChargeForm=true"> {{ $t('chargeWallet') }} </button>

          
        </div>
      </div>
      <form v-if="showChargeForm">
        <div class="form-group">
          <input type="number" class="form-control" v-model="amount" placeholder="قم بادخال المبلغ المراد شحنه">
          <a class="btn-main up mx-auto d-flex justify-content-center mt-3" :href="'https://backend.bookaboat.app/charge-wallet/'+user_id+'?amount='+amount" >  تأكيد </a>
        </div>
      </form>

    </b-collapse>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      wallet: "",
      showChargeForm : false,
      amount : 0,
      user_id : null
    };
  },
  methods: {
    async getWallet() {
      await this.$axios
        .$get("/wallet", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.wallet = res.data.wallet;
          // console.log(res);
        });
    },

  },
  mounted() {
    this.getWallet();
    let user = localStorage.getItem('user');
    this.user_id = JSON.parse(user).id;
  },
};
</script>

<style></style>
