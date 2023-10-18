<template>
    <section>
      <!-- background  -->
      <div class="img-background">
        <img class="" :src="bg" alt="" />
      </div>
      <!-- login form  -->
      <div class="login">
        <div class="container">
          <div class="col-md-5 col-12 margin-auto p-0">
            <div class="login-box mt-3">
              <div class="login-img text-center mt-2">
                <img :src="src" alt="" />
              </div>
              <div class="title-login text-center mt-3">
                {{ $t('chooseLogin') }}
              </div>
              <div class="under-title mb-3 text-center mt-2">
              
                {{ $t('chooseLoginComplete') }}
              </div>
              <div class="row">
                <div class="col-md-7 col-12 margin-auto">
                  <div class="mt-3">
                    <nuxt-link to="/clientLogin" class="main-btn up mb-4"
                      >
                    {{ $t('clientLogin') }}
                    </nuxt-link>
                    <nuxt-link to="/providerLogin" class="main-btn light-bg mb-4"
                      >
                      {{ $t('providerLogin')}}
                      </nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      src : require('@/assets/imgs/Group 70332.png'),
      bg : require('@/assets/imgs/Rectangle 30488.png'),
      loader : true
    }
  },
  mounted(){
    this.loader = false;

    if (typeof localStorage !== 'undefined') {
      const providerLoggedIn = localStorage.getItem('delegateLoggedIn');
      if (providerLoggedIn === 'true') {
        console.log('Value exists:', providerLoggedIn);
        this.$router.push('/provider/HomePage');
      }
      const userLoggedIn = localStorage.getItem('userLoggedIn');
      if (userLoggedIn === 'true') {
        console.log('Value exists:', userLoggedIn);
        this.$router.push('/client/HomePage');
      }
    } else {
      console.log('localStorage is not defined');
    }

  }
}
</script>

