<template>
    <b-card no-body>
      <div class="flex-bet all-qestion m-1" role="tab" v-b-toggle.accordion-5>
        <div class="flex-qet-me">
          <div class="icon-faq color-main">
            <font-awesome-icon :icon="['fas', 'comments']" />
          </div>
          <div class="full-q"> {{ $t('commentsUser') }} </div>
        </div>
        <div class="dafeult-faq-icon">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>
      </div>
  
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <div class="parent-profile">
          <div v-if="reviews.length > 0" class="row mt-3">
            <div
              v-for="review in reviews"
              :key="review"
              
              class="col-md-4 col-12 mb-3"
            >
              <div class="flex-profile-rate">
                <img
                  class="user-co-img shrink-no"
                  :src="review.user_avatar"
                  alt=""
                />
                <div class="user-info-pro">
                  <div class="flex-bet3">
                    <h6 class="font13">{{ review.user_name }}</h6>
                    <div class="gray-col font11">{{ review.created_at }}</div>
                  </div>
                  <v-rating
                    half-increments
                    readonly="true"
                    color="#f39c12"
                    length="5"
                    size="18"
                    marginRight="2"
                    v-model="review.rate"
                  ></v-rating>
                  <p class="gray-col font12">
                    {{ review.comment }}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <div class="not-f text-center text-danger" v-else> {{ $t('noComments') }} </div>
        </div>
      </b-collapse>
    </b-card>
</template>
  
<script>
  export default {
    data() {
      return {
        reviews: [],
      };
    },
    methods: {
      async getComments() {
        await this.$axios
          .$get("/user-reviews?provider_id=2", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            this.reviews = res.data.reviews;
            
          });
      },
    },
    mounted() {
      this.getComments();
    },
  };
  </script>
  
  <style></style>
  