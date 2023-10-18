<template>
    <section>

    <!--start content-->

    <!--book trips  section-->
    <div class="who us section-pad">
      <div class="container">
        <div class="col-md-10 col-12 margin-auto">
          <p class="text-center whous-p mt-4">
            {{ whous }}
          </p>
          <div class="row align-items-center mt-5">
            <div class="col-md-6 mb-4 mt-4">
              <div class="col-box"><img :src="require('@/assets/imgs/Group 30525.png')" alt="" /></div>
            </div>
            <div class="col-md-6 mb-3 mt-4">
              <div class="col-box">
                <h2 class="text-center font-bold mb-3"> {{ $t('enjoy') }} </h2>
                <!-- <p class="col-box-p">
                  نقوم بشحن ونقل الشحنة في أسرع وقت مع الدقة اللازمة خلال نقلها
                </p> -->
              </div>
            </div>

            <div class="d-flex justify-content-between w-100">
              <p class="col-box-p">  {{ $t('reserve') }}  </p>
              <p class="col-box-p"> {{ $t('providerUS') }} </p>
              <p class="col-box-p"> {{ $t('vacation') }} </p>
            </div>
  
            <div class="col-md-6 mb-3 mt-4">
              <div class="col-box">
                <h2 class="text-center font-bold mb-3"> {{ $t('providerUS') }} </h2>
                <!-- <p class="col-box-p">
                  نقوم بشحن ونقل الشحنة في أسرع وقت مع الدقة اللازمة خلال نقلها
                </p> -->
              </div>
            </div>
            <div class="col-md-6 mb-4 mt-4">
              <div class="col-box"><img :src="require('@/assets/imgs/Group 30477.png')" alt="" /></div>
            </div>
            <div class="col-md-6 mb-4 mt-4">
              <div class="col-box"><img :src="require('@/assets/imgs/Group 30564.png')" alt="" /></div>
            </div>
            <div class="col-md-6 mb-3 mt-4">
              <div class="col-box">
                <h2 class="text-center mb-3 font-bold">{{ $t('enjoy')}}</h2>
                <!-- <p class="col-box-p">
                  نقوم بشحن ونقل الشحنة في أسرع وقت مع الدقة اللازمة خلال نقلها
                </p> -->
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>

    <!-- download app  -->
    <homeDownloadApp />

    <!--end content-->
    </section>
</template>

<script>
export default {
  data(){
    return{
      whous : ''
    }
  },
  methods:{
    async getWhoUs(){
      await this.$axios.$get('/whous')
      .then( (res)=>{
        this.whous = res.data.whous
      } )
    }
  },
  mounted(){
    this.getWhoUs()
  }
}
</script>

<style>

</style>