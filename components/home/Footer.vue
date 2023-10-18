<template>
  <footer class="footer">
      <div class="main-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12 mb-3">
              <div class="footer-colomn-me">
                <h6 class="main-title color-main font600">{{ $t('knowUs') }}</h6>
                <ul>
                  <li>
                    <nuxt-link v-if="client" to="/client/whoUS">
                      <div class="my-l">
                       {{ $t('writingStore') }}
                      </div>
                    </nuxt-link>
                    <nuxt-link v-if="provider" to="/provider/whoUS">
                      <div class="my-l">
                       {{ $t('writingStore') }}
                      </div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link v-if="client" to="/client/terms">
                      <div class="my-l">{{ $t('Brief') }}</div>
                    </nuxt-link>
                    <nuxt-link v-else-if="provider" to="/provider/terms">
                      <div class="my-l">{{ $t('Brief') }}</div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link v-if="client" to="/client/qommonQuestions" >
                      <div class="my-l">{{ $t('commandQuestions') }}</div>
                    </nuxt-link>
                    <nuxt-link v-else-if="provider" to="/provider/qommonQuestions" >
                      <div class="my-l">{{ $t('commandQuestions') }}</div>
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link v-if="client" to="/client/contactUs">
                      <div class="my-l"> {{ $t('terms') }}</div>
                    </nuxt-link>
                    <nuxt-link v-else-if="provider" to="/provider/contactUs">
                      <div class="my-l"> {{ $t('terms') }}</div>
                    </nuxt-link>
                  </li>

                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mb-3">
              <div class="footer-colomn-me">
                <h6 class="main-title color-main font600">
                  {{ $t('contactUs') }}
                </h6>
                <ul>
                  <li>
                    <a :href="'mailto:'+email"
                    target="_blank"
                      ><div class="dot-foot-icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div class="my-l"> {{ email }} </div>
                    </a>
                  </li>
                  <li>
                    <a :href="'tel:'+phone"
                    target="_blank"
                      ><div class="dot-foot-icon">
                        <i class="fa-solid fa-phone"></i>
                      </div>
                      <div class="my-l"> {{ phone }} </div>
                    </a>
                  </li>
                  <li>
                    <div 
                      ><div class="dot-foot-icon">
                        <i class="fa-solid fa-envelope"></i>
                      </div>
                      <div class="my-l"> {{ address }} </div>
                    </div>
                  </li>
                  <div class="flex-socials">

                    <a v-for="social in socials" :key="social.id" :href="social.link" target="_blank"><img :src="social.image" :alt="social.name" /></a>
                  </div>

                  <!-- join  -->
                <section class="mx-3">
                  <div class="d-flex mt-3" v-if="client">
                    <nuxt-link to="/providerLogin" class="btn-main up">
                      {{  $t('joinAsProvider')  }}
                    </nuxt-link>
                  </div>

                  <div class="d-flex mt-3" v-if="provider">
                    <nuxt-link to="/clientLogin" class="btn-main up">
                      {{  $t('joinAsClient')  }}
                    </nuxt-link>
                  </div>
                </section>


                </ul>
              </div>
            </div>
            <div class="col-lg-5 col-md-6 col-12 mb-3">
              <div class="footer-colomn-me">
                <h6 class="main-title color-main font600"> {{ $t('email') }} </h6>
                <p class="gray-col mt-2 font14">{{ $t('linkBetweenUs') }}</p>
                <form @submit.prevent="subscribeEmail">
                  <div class="mt-3 mb-3">
                    <input type="email" name="subEmail" v-model="subEmail" class="footer-m-i" :placeholder="$t('email')">
                  </div>
                  <button type="submit" class="btn-main up">{{ $t('subscripe') }}</button>

                </form>
              </div>
            </div>
          </div>

          <section class="d-flex align-items-center">
            <!-- downloads  -->
            <section>
              <!-- <div class="down-app mb-3">{{ $t('uploadApp') }}</div> -->

                <div class="down-app mb-3"> {{ $t('clientApp') }} </div>
                <div class="downloads mb-2">
                  <a :href="ios_link" target="_blank">
                    <img :src="src1" alt="" />
                  </a>
                  <a :href="android_link" target="_blank">
                    <img :src="src2" alt="" />
                  </a>

                </div>

                <div class="down-app mb-3"> {{ $t('providerApp') }} </div>
                <div class="downloads mb-2">
                  <a :href="provider_ios_link" target="_blank">
                    <img :src="src1" alt="" />
                  </a>
                  <a :href="provider_android_link" target="_blank">
                    <img :src="src2" alt="" />
                  </a>

                </div>
            </section>
          
          </section>

          

        </div>
      </div>
      <div class="down-footer">
        <div class="container">
          <div class="down-footer-r font14">
              {{  $t('Rights') }}
          </div>
      
          <div class="down-footer-l font14">
            <a href="https://aait.sa/" target="_blank">{{ $t('awamer') }}</a>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";
export default {
    data(){
        return{
            face : require('@/assets/imgs/facebook (7).png'),
            insta : require('@/assets/imgs/instagram (6).png'),
            src1 : require('@/assets/imgs/Group 4460.png'),
            src2 : require('@/assets/imgs/Group 4461.png'),
            email :'',
            phone : '',
            address : '',
            socials : [],
            ios_link : null,
            ios_link1 : 'https://www.buffalowildwings.com/en/food/',
            android_link : null,

            client : false,
            provider : false,
            subEmail : '',
            provider_android_link : '',
            provider_ios_link : ''
        }
    },
    methods:{
      async getAboutData(){
        await this.$axios.$get('/general-data')
        .then( (res)=>{
          this.email = res.data.email ;
          this.phone = res.data.phone ;
          this.address = res.data.address ;
          this.socials = res.data.socials ;
          this.ios_link = res.data.ios_link;
          this.android_link = res.data.android_link;
          this.provider_android_link = res.data.provider_android_link;
          this.provider_ios_link = res.data.provider_ios_link;
        } )
      },
      async subscribeEmail(){
        const fd = new FormData()
        fd.append('email', this.subEmail)
        await this.$axios.$post('/subscribe', fd)
        .then( (res)=>{
          if( res.key == 'success' ){
            this.$swal("", `${res.msg}`, "success");
          }else{
            this.$swal("", `${res.msg}`, "error");
          }
        } )
      },
    },
    
    mounted(){
      this.getAboutData()

      if( this.$route.fullPath.includes('client') ){
        this.client = true ;
      }else if( this.$route.fullPath.includes('provider') ){
        this.provider = true ;
      }
    },
    components: {
      qrcode: VueQrcode,
    }
}
</script>

<style>

</style>