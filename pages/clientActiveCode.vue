<template>
    <section>
        <div class="img-background">
        <img :src="bg" alt="" />
        </div>
        <div class="login">
        <div class="container">
            <div class="col-md-6 col-12 margin-auto p-0">

            <form @submit.prevent="sendOtp">
                <div class="login-box mt-3">
                <div class="login-img text-center mt-2">
                    <img :src="src" alt="" />
                </div>
                <div class="title-login text-center mt-3">
                {{ $t('activationCode') }}
                </div>
                <div class="under-title mb-3 text-center mt-2">
                    {{  $t('sendingActivationCode') }}
                </div>
                <div class="row">
                    <div class="col-md-9 col-12 margin-auto">
                    <div class="code-container">
                        <v-otp-input
                            length="4"
                            ref="otp"
                            v-modal="otpInput"
                            name="otpInput"
                        ></v-otp-input>
                    </div>

                    <div class="dont-have">
                        {{ $t('didNotReceiveCode') }}
                        <button type="button" class="resent-btn" @click.prevent="resendCode">
                        {{ $t('resendCode') }}
                        </button>
                    </div>
                    <div class="mt-4">
                        <button class="main-btn up mb-2" id="formsub" :disabled="disabled">
                            {{ $t('certain') }}
                            <div class="spinner-border" role="status" v-if="disabled">
                            </div>
                        </button>
                    </div>
                    </div>
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
    data(){
        return{
            src : require('@/assets/imgs/Group 70332.png'),
            bg : require('@/assets/imgs/Rectangle 30488.png'),
            person : require('@/assets/imgs/185644495_1667380803456791_1968050560740665054_n.jpg'),
            otpInput : null,
            disabled : false,
            
        }
    },

    mounted(){
        // auto focus first input in otp 
        setTimeout(() => {
            this.$refs.otp.$refs.input[0].focus()
        }, 0)

        // if( localStorage.getItem('userActived') == 'true' ){
        //     this.$router.push('/client/HomePage')
        // }
    },

    methods:{
        // send otp 
        async sendOtp(){
            this.disabled = true ;
            const fd = new FormData();
            
            // convert otp to number 
            let otpString = JSON.stringify(this.$refs.otp.otp.join(""));
            let otpsNumber = JSON.parse(otpString)
            
            fd.append('code', otpsNumber);

            await this.$axios.$post('/account/activation', fd , {
                headers:{
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.key == 'success' ){
                    this.$swal( '' , `تم تسجيل الدخول بنجاح , مرحبا بك في صفحتك الرئيسية`, "success"  );

                    // route to home page 
                    setTimeout(() => {
                        this.$router.push('/client/HomePage')
                    }, 2000);

                    localStorage.setItem('userActived', true);
                }
                else{
                    this.$swal( '' , `${res.msg}`, "error"  );
                }
                this.disabled = false ;
            } )
        },

        // resend code 
        async resendCode(){
            const fd = new FormData();
            fd.append('phone', localStorage.getItem('phone'));
            await this.$axios.$post('/code/resend', fd )
            .then( (res)=>{
                if( res.key == 'success' ){
                    this.$swal( '' , `${res.msg}`, "success"  );
                }
                else{
                    this.$swal( '' , `${res.msg}`, "error"  );
                }
                
            } )
        },
    }
}
</script>

<style>

</style>