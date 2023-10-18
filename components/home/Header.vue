<template>
  <section>
    <!-- header  -->
    <header class="header" :class="{ 'bg-header': activeHeader }">
      <div class="container">
        <nuxt-link v-if="client" to="/client/HomePage" class="logo"><img :src="src1" alt="" /></nuxt-link>
        <nuxt-link v-else-if="provider" to="/provider/HomePage" class="logo"><img :src="src1" alt="" /></nuxt-link>

 
            <ul class="links" :class="{ slideto: showSide }">
              <li v-if="client"><nuxt-link to="/client/HomePage"> {{ $t('main') }} </nuxt-link></li>
              <li v-else-if="provider"><nuxt-link to="/provider/HomePage">{{ $t('main') }}</nuxt-link></li>

              <li v-if="client"><nuxt-link to="/client/tripesTypes"> {{ $t('book') }} </nuxt-link></li>
              <li v-else-if="provider"  ><nuxt-link to="/provider/boats/AllBoats"> {{ $t('books') }} </nuxt-link></li>
              <li class="flex-li">

                <div class="text-li"> {{ $t('myBooks') }} </div>
                <div class="icon-li">
                  <font-awesome-icon :icon="['fas', 'chevron-down']" />
                </div>
                <div class="drop-down-order">
                  <ul>
                    <li>
                      <button  @click="setBookByNew"  class="flex-a">
                        <div class="flex-a-text"> {{ $t('newBook') }} </div>
                      </button>

                    </li>
                    <li>
                      <button @click="setBookByActive"  class="flex-a">
                        <div class="flex-a-text"> {{ $t('activeBook') }} </div>
                      </button>
                    </li>
                    <li>
                      <button @click="setBookByFinished"  class="flex-a">
                        <div class="flex-a-text"> {{ $t('finishedBook') }} </div>
                      </button>
                    </li>
                    <li>
                      <button @click="setBookByCanceld"  class="flex-a">
                        <div class="flex-a-text"> {{ $t('canceledBook') }} </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li v-if="client"><nuxt-link to="/client/whoUs">{{ $t('whoArewe') }} </nuxt-link></li>
              <li v-else-if="provider"><nuxt-link to="/provider/whoUs">{{ $t('whoArewe') }}</nuxt-link></li>

              <li v-if="client"><nuxt-link to="/client/contactUs"> {{ $t('contactUs') }}</nuxt-link></li>
              <li v-else-if="provider"><nuxt-link to="/provider/contactUs"> {{ $t('contactUs') }}</nuxt-link></li>
            </ul>

              <!-- chat rooms  -->
            <b-dropdown>
              <template #button-content>
                <button>
                  <font-awesome-icon class="white-col" :icon="['fas', 'globe']" />
                </button>
              </template>
              <b-dropdown-item href="#" >
                <button class="btn text-center" @click="setArabic()"> 
                  <img :src="require('@/assets/imgs/saudi.png')" width="35" height="25" alt="" />
                  العربية 
                </button>
              </b-dropdown-item>
              <b-dropdown-item href="#" >
                <button class="btn text-center" @click="setEnglish()"> 
                  <img :src="require('@/assets/imgs/united_states.png')" width="35" height="25" alt="" />
                  English 
                </button>
              </b-dropdown-item>
            </b-dropdown>
            
              <homeChatRooms  />


            <!-- is logged in  -->
            <div class="media-spe" v-if="isLoggedIn">
              

              
              <button v-b-modal.modal-map_header
                >
                <font-awesome-icon class="white-col" :icon="['fas', 'location-dot']" />
              </button>

              <!-- google map current location  -->
              <b-modal id="modal-map_header">
                  <!-- <p> {{ locations.lat }} {{ locations.lng }} </p> -->
                  <GMap ref="map" language="en" :center="locations" :zoom="10">
                      <GMapMarker :clickable="true" :position="locations">
                      </GMapMarker>
                  </GMap>
              </b-modal>
              
              <!-- notification  -->
              <nuxt-link v-if="client" to="/client/notifications" class="noti">
                <font-awesome-icon class="white-col" :icon="['fas', 'bell']" />
                <div class="dot-spe"> {{ num_not_seen_notifications }} </div>
              </nuxt-link>

              <nuxt-link v-if="provider" to="/provider/notifications" class="noti">
                <font-awesome-icon class="white-col" :icon="['fas', 'bell']" />
                <div class="dot-spe"> {{ num_not_seen_notifications }} </div>
              </nuxt-link>


         <div class="flex-profile-d rela-p"  @click="showDrop">
            <img :src="client_image" alt="" />
            <div class="pro-nnma"> {{ $t('personalAcc') }}</div>

            <ul class="my-drop-now" ref="dropMenu">
              <li>
                <nuxt-link v-if="client" to="/client/clientProfile/profileInfo" class="flex-in-drop">
                  <i class="fa-regular fa-user"></i>
                  <div class="in-f-text">{{ $t('myData') }}</div>
                </nuxt-link>
                <nuxt-link v-else-if="provider" to="/provider/providerProfile/providerInfo" class="flex-in-drop">
                  <i class="fa-regular fa-user"></i>
                  <div class="in-f-text">{{ $t('myData') }}</div>
                </nuxt-link>
              </li>

              <li>
                <button v-if="client" @click.prevent="signOut()" class="flex-in-drop red-drop">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <div class="in-f-text">{{ $t('logOut') }} </div>
                </button>

                <button v-else-if="provider" @click.prevent="signOutProvider()" class="flex-in-drop red-drop">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <div class="in-f-text"> {{ $t('logOut') }} </div>
                </button>
              </li>
            </ul>
          </div>

          


            </div>

            <!-- if not  -->
            <div v-else>
              <nuxt-link v-if="client" to="/clientLogin" class="text-white"> {{ $t('logIn') }} </nuxt-link>
              <nuxt-link v-else-if="provider" to="/providerLogin" class="text-white"> {{ $t('logIn') }} </nuxt-link>
            </div>
          <div class="bars" :class="{ 'bar-tog' : showSide }" @click="showSideBar">
            <span></span>
            <span></span>
            <span></span>
          </div>  
      </div>  
        </header>

        <!-- land page -->
        <div class="landing-main" ref="landPage">
          <div class="container">
            <div class="parent-landing">

              <!-- show only in home page  -->
              <div class="down-land" v-if="homeShow">
                <homeSearchBar />
              </div>

              <!-- dynamic depend on each page called  -->
              <div class="down-land" v-else>
                <h3 class="text-center"> {{ headerTitle }} </h3>
              </div>


              <div class="slider" ref="slider" v-if="ads">

                <v-carousel
                    :show-arrows="false"
                    cycle
                    v-if="ads.length>0"
                >
                    <v-carousel-item
                        :src="ad.image"
                        cover
                        v-for="ad in ads" :key="ad.id" 
                    >
                      <div class="slider_content" v-if="homeShow" >
                        <h2 class="text-center">
                          {{ ad.title }}
                        </h2>
                        <p class="big-p text-center mt-4">
                          {{ ad.content }}
                        </p>
                      </div>
                    </v-carousel-item>
                </v-carousel>
              </div>





            </div>

          </div>
        </div>

  </section>
</template>

<script>
export default {

    data(){
        return{
            src1 : require('@/assets/imgs/Group 12312.png'),
            src2 : require('@/assets/imgs/185644495_1667380803456791_1968050560740665054_n.jpg'),
            src3 : require('@/assets/imgs/Rectangle 30488.png'),
            homeShow : false,
            title : '',
            headerTitle : '',
            ads : [],
            provider : false ,
            client : false ,
            client_image : '',
            activeHeader : false,
            showSide : false,
            locations:
            {
                lat: 0,
                lng: 0
            },

            num_not_seen_notifications : '',

            isLoggedIn : false
        }
    },
    methods:{
       // change language and local
      setArabic() {
        localStorage.setItem("locale", "ar");
        this.$i18n.locale = "ar";
        this.$i18n.fallbackLocale = "ar";
        this.$i18n.defaultLocale = "ar";
        location.reload();
      },
      setEnglish() {
        localStorage.setItem("locale", "en");
        this.$i18n.locale = "en";
        this.$i18n.fallbackLocale = "en";
        this.$i18n.defaultLocale = "en";

        location.reload()
      },
      showSideBar(){
        this.showSide = !this.showSide
      },
      // get unseen not count 
      async getUnSeenCount(){
        await this.$axios.$get('/unseen-notifications-count', {
          headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then( (res)=>{
          this.num_not_seen_notifications = res.data.num_not_seen_notifications ;
        } )
      },
      // get current location  
        geolocation() {
            navigator.geolocation.getCurrentPosition((position) => {
                this.locations = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
            });
        },
      // log out 
      async signOut(){
        const fd = new FormData();
        fd.append('phone', localStorage.getItem('phone'));
        fd.append('device_id', localStorage.getItem('device_id'));
        await this.$axios.$post('/logout', fd ,{
          headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((res)=>{
          if( res.key == 'success' ){
            this.$swal("", `${res.msg}`, "success");
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('phone');
            localStorage.removeItem('device_id');

            localStorage.setItem('userActived', false);
            localStorage.setItem('userLoggedIn', false);

            setTimeout(() => {
              this.$router.push('/');
            }, 2000);

          }else{
            this.$swal("", `${res.msg}`, "error");
          }
        })
      },

      async signOutProvider(){
        const fd = new FormData();
        fd.append('phone', localStorage.getItem('phone'));
        fd.append('device_id', localStorage.getItem('device_id'));
        await this.$axios.$post('/logout', fd ,{
          headers:{
              Authorization:  `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((res)=>{
          if( res.key == 'success' ){
            this.$swal("", `${res.msg}`, "success");
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('phone');
            localStorage.removeItem('device_id');
            
            localStorage.setItem('providerActived', false)
            localStorage.setItem('delegateLoggedIn', false)
            setTimeout(() => {
              this.$router.push('/providerLogin');
            }, 2000);

          }else{
            this.$swal("", `${res.msg}`, "error");
          }
        })
      },
      // get home  
        async getHome(){
            await this.$axios.$get('/home', {
                // headers:{
                //     Authorization:  `Bearer ${localStorage.getItem('token')}`
                // }
            })
            .then( (res)=>{
                this.ads = res.data[0].ads;
            } )
        },
        // toggle drop-down
        showDrop(e){
            this.$refs.dropMenu.classList.toggle("show-drop"); 
            e.stopPropagation();  
            console.log(e)     
        },

        
        setBookByNew(){
          // if user is client 
          if( this.client == true ){
            this.$router.push('/client/books/MyBooks')
          }
          // if user is provider
          else if ( this.provider = true ){
            this.$router.push('/provider/books/MyBooks')
          }
          localStorage.setItem('bookType', 'new')
          
        },
        setBookByActive(){
          
          // if user is client 
          if( this.client == true ){
            this.$router.push('/client/books/activeMyBooks')
          }
          // if user is provider
          else if ( this.provider = true ){
            this.$router.push('/provider/books/activeMyBooks')
          }
          localStorage.setItem('bookType', 'active')
          
        },
        setBookByFinished(){
          

          // if user is client 
          if( this.client == true ){
            this.$router.push('/client/books/finishMyBooks')
          }
          // if user is provider
          else if ( this.provider = true ){
            this.$router.push('/provider/books/finishMyBooks')
          }
          localStorage.setItem('bookType', 'finished')
          
        },
        setBookByCanceld(){
          
          // if user is client 
          if( this.client == true ){
            this.$router.push('/client/books/cancelMyBooks')
          }
          // if user is provider
          else if ( this.provider = true ){
            this.$router.push('/provider/books/cancelMyBooks')
          }
          localStorage.setItem('bookType', 'cancel')
        },

        handleScroll(){
          if (window.pageYOffset > 30) {
            this.activeHeader = true
          } else {
            this.activeHeader = false
          }
        }


        
    },
    props:{
      headerTitle : String,
    },
    updated(){

      // this.$refs.dropMenu.addEventListener("click", function (e) {
      //     e.stopPropagation();
      // });
      // document.body.addEventListener("click", function () {
      //     this.$refs.dropMenu.classList.remove("show-drop");
      // });


      console.log(this.$i18n.locale)

    },

    mounted(){

      console.log(this.locations.lat)
      console.log(this.locations.lng)
      


      if( this.isLoggedIn == true ){
        this.getUnSeenCount();
      }
      this.geolocation();
      this.getHome();
      // show & hide & toggle headers data among pages  
      if( this.$route.path.includes('HomePage') ){
        this.homeShow = true;
      }else{
          this.$refs.slider.style.height = '280px'
          this.$refs.landPage.style.height = '280px'
          this.$refs.landPage.style.minHeight = '280px'
      }

      this.title = this.headerTitle


      // client show 
      if( this.$route.fullPath.includes('client') ){
        this.client = true ;
      }else if( this.$route.fullPath.includes('provider') ){
        this.provider = true ;
      }

      if( this.isLoggedIn == true ){
        let user = localStorage.getItem('user');
        this.client_image = JSON.parse(user).avatar
      }

      
       

    
    },

    beforeMount () {
        window.addEventListener('scroll', this.handleScroll)

        let user = localStorage.getItem('user');
        if( user ){
          this.isLoggedIn = true ;
        }else{
          this.isLoggedIn = false ;
        }


              

    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    beforeCreate(){

    },
    created(){
      if (process.client) {
          if (localStorage.getItem('locale')) {
            this.$i18n.locale = localStorage.getItem('locale');
            this.$i18n.defaultLocale = localStorage.getItem('locale');
            this.$i18n.fallbackLocale = localStorage.getItem('locale');
          }
        }
    }

    // created(){
    //   if( typeof localStorage !== 'undefined' ){
    //     // this.$i18n.locale = localStorage.getItem('locale')
    //     console.log('sssssssssssffffssssssssssssssssssssss')
    //   }else{
        
    //     this.$i18n.locale = localStorage.getItem('locale')
    //   }
    // }


    // middleware : ['  auth']

};
</script>

<style lang="scss">
.v-window,
.v-image.v-responsive {
  height: 100% !important;
}
.slider_content {
  position: absolute;
  top: 25%;
  right: 16%;
  h2 {
    color: #fff;
  }
  p {
    color: #fff;
  }
}

.v-image__image--cover {
  filter: brightness(0.7);
}

.bg-header {
  background-color: rgba(0, 0, 0, 0.8);
  /* color: #000; */
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
}
.v-btn:before{
  background-color: transparent;
}
.v-item--active .v-icon{
  color:#111b5a !important;
  opacity: 1;
}
</style>