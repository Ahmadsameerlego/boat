<template>
  <b-card no-body>
    <div class="flex-bet all-qestion m-1" role="tab" v-b-toggle.accordion-12>
      <div class="flex-qet-me">
        <div class="icon-faq color-main">
          <font-awesome-icon :icon="['fas', 'money-bill']" />
        </div>
        <div class="full-q"> {{ $t('financeTreates') }} </div>
      </div>
      <div class="dafeult-faq-icon">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
    </div>

    <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
      <div class="parent-profile p-0">
        <div class="tabs-head mb-3">
          <button
            class="tab-btn-main"
            :class="{ active: showTab1 }"
            @click="showTab1Fun"
          >
            {{ $t('myPills') }}
          </button>
          <button
            class="tab-btn-main"
            :class="{ active: showTab2 }"
            @click="showTab2Fun"
          >
            {{ $t('reserveNotes') }}
          </button>
          <button
            class="tab-btn-main"
            :class="{ active: showTab3 }"
            @click="showTab3Fun"
          >
            {{ $t('winns') }}
          </button>
        </div>
        <div class="tabs-show-spe">
          <div class="tab-content" v-if="showTab1">
            <div v-if="financial.length > 0">
              <div
                class="sh-report mb-3 mt-3"
                v-for="fin in financial"
                :key="fin.id"
              >
                <div class="flex-bet2 end-spe wrab-sm">
                  <div class="flex-defi-report wrab-db-sm align-items-center">
                    <div class="right-report shrink-no">
                      <img :src="fin.boat_image" alt="" />
                    </div>
                    <div class="left-report">
                      <h6>رقم الطلب : {{ fin.id }}</h6>

                      <div class="all-condition color-main mt-2">
                        <span class="gray-col">اسم القارب :</span>
                        {{ fin.boat_name }}
                      </div>
                    </div>
                  </div>
                  <NuxtLink :to="'/provider/pill/'+fin.id" class="gray-col font14 shrink-no"
                    > {{ $t('showPill') }}
                    <font-awesome-icon :icon="['fas', 'chevron-left']"
                  /></NuxtLink>
                </div>
              </div>
            </div>
            <div class="not-f text-center text-danger mb-3" v-else>
              {{ $t('noPills') }}
            </div>
          </div>

          <div class="tab-content" v-if="showTab2">
            <div v-if="financial.length > 0">
              <div
                class="sh-report mb-3 mt-3"
                v-for="fin in financial"
                :key="fin.id"
              >
                <div class="flex-bet2 wrab-sm">
                  <div class="flex-defi-report wrab-db-sm">
                    <div class="right-report shrink-no">
                      <img :src="fin.boat_image" alt="" />
                    </div>
                    <div class="left-report">
                      <h6>رقم الطلب : {{ fin.id }}</h6>

                      <div class="all-condition color-main mt-2 underline-p">
                        <span class="gray-col">اسم القارب :</span>
                        {{ fin.boat_name }}
                      </div>
                    </div>
                  </div>
                  <div class="flex-book-spe">
                    <p class="gray-col font14 shrink-no">
                      {{ fin.created_at }}
                    </p>
                    <NuxtLink :to="'/provider/orders/'+fin.id" class="gray-col font14 shrink-no"
                      > {{ $t('showMore') }}
                      <font-awesome-icon :icon="['fas', 'chevron-left']"
                    /></NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="not-f text-center text-danger mb-3" v-else>
              {{ $t('noReserves') }}
            </div>
          </div>
          <div class="tab-content" v-if="showTab3">
            <div v-if="financial.length > 0">
              <div
                class="sh-report mb-3 mt-3"
                v-for="fin in financial"
                :key="fin.id"
              >
                <div class="flex-bet2 wrab-sm">
                  <div class="flex-defi-report wrab-db-sm">
                    <div class="left-report">
                      <h6>رقم الطلب : {{ fin.id }}</h6>
                    </div>
                  </div>
                </div>
                <div class="bet-flex-book mb-3 mt-3">
                  <div class="order-roe-spe">
                    <div class="gray-col mb-1">قيمة الطلب</div>
                    <div class="text-center">{{ fin.total_price }}</div>
                  </div>
                  <div class="order-roe-spe">
                    <div class="gray-col mb-1">عمولة التطبيق</div>
                    <div class="text-center">{{ fin.app_percentage }}</div>
                  </div>
                  <div class="order-roe-spe">
                    <div class="gray-col mb-1">القيمة المضافة</div>
                    <div class="text-center">{{ fin.added_value }}</div>
                  </div>
                </div>
                <div class="flex-book-spe-end">
                  <NuxtLink :to="'/provider/orders/'+fin.id" class="gray-col font14 shrink-no"
                    >عرض الطلب
                    <font-awesome-icon :icon="['fas', 'chevron-left']"
                  /></NuxtLink>
                </div>
              </div>
            </div>
            <div class="not-f text-center text-danger mb-3" v-else>
              {{ $t('noWinnsProfits') }}
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
      showTab1: true,
      showTab2: false,
      showTab3: false,
      financial: [],
    };
  },
  methods: {
    showTab1Fun() {
      this.showTab1 = true;
      this.showTab2 = false;
      this.showTab3 = false;
    },
    showTab2Fun() {
      this.showTab1 = false;
      this.showTab2 = true;
      this.showTab3 = false;
    },
    showTab3Fun() {
      this.showTab1 = false;
      this.showTab2 = false;
      this.showTab3 = true;
    },
    async getFainancial() {
      await this.$axios.$get("/financial" , {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then((res) => {
        this.financial = res.data.financial;
      });
    },
  },
  mounted() {
    this.getFainancial();
  },
};
</script>

<style></style>
