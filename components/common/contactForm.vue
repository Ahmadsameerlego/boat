<template>
    <div class="contact-us section-pad mt-3">
      <div class="container">
        <div class="col-md-10 col-12 margin-auto">
          <div class="row">
            <div class="col-lg-10 col-12 margin-auto">


              <form @submit.prevent="contactUs" ref="contactForm">
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3 main-inp-cont">
                      <div class="form__label">
                        <input
                          class="default_inputme"
                          type="text"
                          required=""
                          :placeholder="$t('firstName')"
                          name="name"
                          v-model="name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="mb-3 main-inp-cont">
                      <div class="form__label position-relative">
                        <input
                          class="default_inputme"
                          type="number"
                          required=""
                          name="phone"
                          v-model="phone"
                          :placeholder="$t('phoneNumber')"
                        />

                        <!-- custom select box  -->
                        <div class=" country_select">
                            <div class="selected-option" @click="toggleDropdown">
                                <img :src="defaultImage" alt="Option Image">
                                <span>{{ country_key }}</span>
                            </div>
                            <div class="options-container" v-if="dropdownVisible">
                            <div v-for="option in countries" :key="option.id" class="option" @click="selectOption(option)">
                                <img :src="option.flag" alt="Option Image">
                                <span>{{ option.calling_code }}</span>
                            </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="mb-3 main-inp-cont">
                      <div class="form__label">
                        <input
                          class="default_inputme"
                          type="text"
                          required=""
                          name="city"
                          v-model="city"
                          :placeholder="$t('City')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3 main-inp-cont">
                      <div class="form__label">
                        <input
                          class="default_inputme"
                          type="email"
                          required=""
                          name="email"
                          v-model="email"
                          :placeholder="$t('email')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3 main-inp-cont">
                      <div class="form__label">
                        <input
                          class="default_inputme"
                          type="text"
                          required=""
                          :placeholder="$t('subject')"
                          name="subject"
                          v-model="subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3 main-inp-cont">
                      <div class="form__label">
                        <textarea
                          class="textarea-spe-me default_input5"
                          rows="5"
                          type="text"
                          required=""
                          :placeholder="$t('message')"
                          name="message"
                          v-model="message"
                        ></textarea>
                        <label class="float__label" for=""></label>
                      </div>
                    </div>
                  </div>
                  <div class="flex-groupme w-100">
                    <button class="btn-main up mt-3 mega-lg form-btn" :disabled="disabled">
                      {{ $t('Send') }}
                      <div class="spinner-border" role="status" v-if="disabled">
                            </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      country_key : '00966',
      countries : [],
      dropdownVisible: false,
      defaultImage : 'https://backend.bookaboat.app/assets/uploads/flags/96198928-39e5-4349-a8b1-35a036882ac2.png',
      disabled : false ,

      phone : '',
      name : '',
      email : '',
      subject : '',
      city : '',
      message : ''
    }
  },
  methods:{
    // send contact us 
    async contactUs(){
      const fd = new FormData(this.$refs.contactForm);
      fd.append('country_key', this.country_key);
      this.disabled = true ;
      await this.$axios.$post('/contact-us', fd)
      .then( (res)=>{
        if( res.key == 'success' ){
          this.$swal( '' , `${res.msg}`, "success"  );
          
          setTimeout(() => {
            this.phone = '';
            this.name = '';
            this.message = '';
            this.subject = '';
            this.city = '';
            this.email = '';
          }, 2000);
        }else{
          this.$swal( '' , `${res.msg}`, "error"  );
        }
        this.disabled = false ;
      } )
    },
    // get country key 
      async getCounrtyKey(){
          await this.$axios.$get('countries')
          .then( (res)=>{
              this.countries = res.data.countries
          } )
      },

      // toggle country select 
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible
        },
        // choose option and close dropdown 
        selectOption(option) {
            this.country_key = option.calling_code
            this.defaultImage = option.flag
            this.dropdownVisible = !this.dropdownVisible
        },

        // toggle country select 
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible
        },
        // choose option and close dropdown 
        selectOption(option) {
            this.country_key = option.calling_code
            this.defaultImage = option.flag
            this.dropdownVisible = !this.dropdownVisible
        },
  },
  mounted(){
    this.getCounrtyKey()
  }
}
</script>

<style scoped>
.selected-option {
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
}

.selected-option img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.options-container {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer;
}

.option {
  display: flex;
  align-items: center;
  padding: 8px;
}

.option img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.option:hover {
  background-color: #f5f5f5;
}
.country_select{
    position: absolute;
    width: 100px !important;
    left: 0px !important;
    top: 0px !important;
    height: 51px;
}
.main-btn:disabled{
    opacity: .4;
    cursor: not-allowed;
}
body.ltr .country_select {
    top: 0;
    right: 0  !important;
    left: auto !important;
}
</style>