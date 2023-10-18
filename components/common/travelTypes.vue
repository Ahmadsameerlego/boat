<template>
  <div class="trips section-pad">
      <div class="container">
        <div class="flex-groupme">
          <h5 class="main-title color-main font600 mb-5"> {{ $t('travelTrips') }} </h5>
        </div>
        <div class="col-md-10 col-12 margin-auto">
          <div class="row" v-if="trip_types.length>0" >


            <div class="col-md-6 col-12 mb-4" v-for="type in trip_types" :key="type.id">
              <nuxt-link  :to="'/client/travels/'+type.id" class="trip-box rela-p">
                <img :src="type.image" alt="" />
                <div class="abs-text"> {{ type.name }} </div>
              </nuxt-link>
            </div>

            
            
          </div>
          <div class="notFound d-flex align-items-center" v-else>
              <font-awesome-icon :icon="['fas', 'circle-info']" />
              <p> لا توجد رحلات الى الان </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            src1 : require('@/assets/imgs/Group 82427.png'),
            src2 : require('@/assets/imgs/Group 82427.png'),
            src3 : require('@/assets/imgs/Group 82427.png'),
        }
    },

    props:{
      trip_types : Array
    }
}
</script>

<style lang="scss">
  .notFound{
      width: 100%;
      padding: 10px 7px;
      background: #a1a1a1;
      border-radius: 3px;
      height: 50px;
      p , svg{
        color:#fff;
        margin:0 10px;
      }
  }
</style>