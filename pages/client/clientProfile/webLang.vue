<template>
    <b-card no-body>
      <div class="flex-bet all-qestion m-1" role="tab" v-b-toggle.accordion-8>
        <div class="flex-qet-me">
          <div class="icon-faq color-main">
            <font-awesome-icon :icon="['fas', 'repeat']" />
          </div>
          <div class="full-q"> {{ $t('webLang') }} </div>
        </div>
        <div class="dafeult-faq-icon">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>
      </div>
  
      <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
        <div class="parent-profile">
          <h5 class="mb-2"> {{ $t('welcome') }} </h5>
          <div class="gray-col font14"> {{ $t('chooseLang') }} </div>
          <div class="flex-groupme yes-wrap mt-3">
            <button class="lang-box" :class="{ active: activeArLang }" @click="setArabic()">
              <div class="lang-flag">
                <img :src="require('@/assets/imgs/saudi.png')" alt="" />
              </div>
              <div class="lang-text"> {{ $t('arabic') }} </div>
            </button>
            <button class="lang-box" :class="{ active: activeEnLang }" @click="setEnglish()">
              <div class="lang-flag">
                <img :src="require('@/assets/imgs/united_states.png')" alt="" />
              </div>
              <div class="lang-text"> {{ $t('english') }} </div>
            </button>
          </div>
        </div>
      </b-collapse>
    </b-card>
</template>
  
  <script>
  export default {
    data(){
      return{
        activeArLang: true,
        activeEnLang: false,
      }
    },
    methods: {
      // change language and local
      setArabic() {
        this.activeArLang = true;
        this.activeEnLang = false;
        localStorage.setItem("locale", "ar");
        this.$i18n.locale = "ar";
        location.reload();
      },
      setEnglish() {
        this.activeArLang = false;
        this.activeEnLang = true;
        localStorage.setItem("locale", "en");
        this.$i18n.locale = "en";
        location.reload()
      },
    },
    updated() {
      console.log(this.$i18n.locale);
    },
    mounted(){
      if(localStorage.getItem('locale') == 'en'){
        this.activeArLang = false;
        this.activeEnLang = true;
      } else{
        this.activeArLang = true;
        this.activeEnLang = false;
      }

       this.$i18n.locale = localStorage.getItem('locale')
    }
  };
  </script>
  
  <style></style>
  