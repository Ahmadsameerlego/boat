<template>
    <section>
        <div class="img-background">
        <img :src="bg" alt="" />
        </div>
        <div class="login">
        <div class="container">
            <div class="col-md-6 col-12 margin-auto p-0">

            <form @submit.prevent="Login">
                <div class="login-box mt-3">
                <div class="login-img text-center mt-2">
                    <img :src="src" alt="" />
                </div>
                <div class="title-login text-center mt-3">{{ $t('logIn') }} </div>
                <div class="under-title mb-3 text-center mt-2">
                  {{ $t('fillData') }}
                </div>
                <div class="row">
                    <div class="col-md-9 col-12 margin-auto">
                    <div class="mb-3 main-inp-cont">
                        <h6 class="fontBold mainColor font14 font600">{{ $t('phoneNumber') }} </h6>
                        <div class="relative-co">
                        <input
                            type="tel"
                            id="telephone"
                            :placeholder="$t('fillPhoneNumber')"
                            class="inp-spe-tele"
                            name="phone"
                            v-model="phone"
                        />
                        <div class="icon-float">
                            <font-awesome-icon :icon="['fas', 'mobile-screen-button']" />
                        </div>

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
                    <div class="mt-4">
                        <button class="main-btn up mb-2" :disabled="disabled">
                            {{ $t('logIn') }}
                            <div class="spinner-border" role="status" v-if="disabled">
                            </div>
                        </button>
                    </div>
                    </div>
                </div>

                <div class="dont-have">
                   {{ $t('noAccount') }}<nuxt-link to="/providerRegister"> / {{ $t('newLogIn') }}  </nuxt-link>
                </div>

                <div class="forget-login mb-4">
                    <button class="decore-me font14 color-main" type="button" @click="setVisitor">{{ $t('visitorLogin') }} </button>
                </div>
            
                </div>
            </form>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
export default {
    // // middleware : ['auth'] ,
    data(){
        return{
            src : require('@/assets/imgs/Group 70332.png'),
            bg : require('@/assets/imgs/Rectangle 30488.png'),
            phone : '',
            disabled : false,

            country_key : '00966',
            countries : [],
            dropdownVisible: false,
            defaultImage : 'https://backend.bookaboat.app/assets/uploads/flags/96198928-39e5-4349-a8b1-35a036882ac2.png',
            device_type : 'android',
        }
    },
    methods:{
        setVisitor(){
            localStorage.setItem('visitor', 'true');
            this.$router.push("/provider/HomePage");
        },
        async Login(){
            
            this.disabled = true ;
            const fd = new FormData(this.$refs.regForm);

            fd.append('phone', this.phone);
            fd.append('device_type', this.device_type); 
            fd.append('device_id', localStorage.getItem('fcm')); 
            fd.append('country_key',this.country_key);

            await this.$axios.$post( '/mobile/login' , fd  )
            .then( (res)=>{
                if( res.key == 'success' && res.data.user.acc_type == 'delegate'){
                    this.$swal( '' , `سيتم إرسال الكود على هذا الرقم`, "success"  );
                    localStorage.setItem('token', res.data.token);
                    let user = JSON.stringify(res.data.user)
                    localStorage.setItem('user', user);
                    localStorage.setItem('phone', this.phone);

                    localStorage.setItem('delegateLoggedIn',true)
                    localStorage.removeItem('visitor');
                    setTimeout(() => {
                        this.$router.push("/providerActive");
                    }, 2000);
                }
                else{
                    this.$swal( '' , `${res.msg}`, "error"  );
                }
                this.disabled = false
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

        // get country key 
        async getCounrtyKey(){
            await this.$axios.$get('countries')
            .then( (res)=>{
                this.countries = res.data.countries
            } )
        },
    },
    mounted(){
        // get random device_id 
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => localStorage.setItem('device_id', data.ip))
        .catch(error => console.error(error));

        // get country key 
        this.getCounrtyKey();

        if( localStorage.getItem('delegateLoggedIn') == 'true' ){
            this.$router.push('/providerActive')
        }
    }
}
</script>

<style>

</style>