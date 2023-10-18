<template>
    <main>
        <!-- header  -->
        <homeHeader :headerTitle="$t('bookTrip')" />

        <!-- travel types  -->
        <commonTravelTypes :trip_types="trip_types" />
        
        <!-- download app  -->
        <homeDownloadApp />
        
        <!-- footer  -->
        <homeFooter />
    </main>
</template>

<script>
export default {
    // middleware : ['userAuth'],
    data(){
        return{
            trip_types : []
        }
    },
    methods:{
        async getTravelTypes(){
            await this.$axios.$get('/trip-types')
            .then( (res)=>{
                this.trip_types = res.data.trip_types;
                // console.log(res.data.trip-types)
            } )
        },

        
    },
    mounted(){
        this.getTravelTypes()
    },
    //  beforeRouteEnter(to, from, next) {
    //     this.$i18n.locale = localStorage.getItem('locale')
    //     console.log('before route')
    //     next()
    // }
}
</script>

<style>

</style>