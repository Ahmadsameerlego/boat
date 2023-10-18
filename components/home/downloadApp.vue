<template>
    <div class="app section-pad">
        <div class="container">
            <div class="flex-groupme">
                <h5 class="main-title color-main font600 mb-5"> {{ $t('app') }}</h5>
            </div>
            <div class="landing mb-3 mt-3">
            <div class="container">
                <div class="row">
                <div class="col-md-6 col-12">
                    <div class="landing-right">
                    <h4 class="line-under mb-3 font600">
                        {{ site_title }}
                    </h4>
                    <h2 class="landing-join font-bold">Book A Boat</h2>
                    <p>
                        {{ site_secription }}
                    </p>
                    <div class="downloads">
                        <img :src="src1" alt="" />
                        <img :src="src2" alt="" />
                    </div>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="landing-left text-center">
                    <img :src="require('@/assets/imgs/device.png')" alt="" />
                    </div>
                </div>
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
            src1 : require('@/assets/imgs/Group 4460.png'),
            src2 : require('@/assets/imgs/Group 4461.png'),
            src3 : require('@/assets/imgs/device.png'),
            site_image : '',
            site_secription : '',
            site_title : ''
        } 
    },

    methods:{
        async getAboutData(){
            await this.$axios.$get('/general-data')
            .then( (res)=>{
                this.site_image = res.data.site_image ;
                this.site_secription = res.data.site_secription ;
                this.site_title = res.data.site_title ;

            } )
        }
    },
    mounted(){
        this.getAboutData()
    }
}
</script>

<style>

</style>