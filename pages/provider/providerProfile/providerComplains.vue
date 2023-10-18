<template>
  <b-card no-body>
    <div class="flex-bet all-qestion m-1" role="tab" v-b-toggle.accordion-4>
      <div class="flex-qet-me">
        <div class="icon-faq color-main">
          <font-awesome-icon :icon="['fas', 'file']" />
        </div>
        <div class="full-q"> {{ $t('complaints') }} </div>
      </div>
      <div class="dafeult-faq-icon">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
    </div>

    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
      <div class="parent-profile">
        <div v-if="complains.length > 0">
          <div
            v-for="complain in complains"
            :key="complain.id"
            class="sh-report mb-3 mt-3"
          >
            <div class="flex-bet2 wrab-sm">
              <div class="flex-defi-report wrab-db-sm">
                <div class="right-report shrink-no">
                  <img :src="complain.order.image" alt="" />
                </div>
                <div class="left-report">
                  <h6>رقم الشكوى : {{ complain.id }}</h6>
                  <p class="underline-p gray-col font14">
                    {{ complain.text }}
                  </p>
                  <div class="all-condition color-main mt-2">
                    <span class="gray-col">الحالة :</span> {{ complain.status }}
                  </div>
                </div>
              </div>
              <div class="gray-col font14 shrink-no">
                {{ complain.created_at }}
              </div>
            </div>
          </div>
        </div>
        <div class="not-f text-center text-danger" v-else> {{ $t('noComplaints') }} </div>
      </div>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      complains: [],
    };
  },
  methods: {
    async getComplains() {
      await this.$axios
        .$get("/get-tickets", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.complains = res.data.tickets;
         
        });
    },
  },
  mounted() {
    this.getComplains();
  },
};
</script>

<style></style>
