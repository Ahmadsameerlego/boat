<template>
    <main>
        <!-- header  -->
        <homeHeader  />

        <!-- who us  -->
        <homeWhoUs />

        <!-- travel types  -->
        <homeTravelTypes :trip_types="trip_types" />

        <!-- top rated  -->
        <homeTopRated />

        <!-- about us  -->
        <homeAbout />

        <!-- download app  -->
        <homeDownloadApp />
        
        <!-- footer  -->
        <homeFooter />

        <commonLoader v-if="loader" />
    </main>
</template>

<script>
export default {
    data(){
        return{
            ads : [],
            trip_types : [],
            loader : true
        }
    },
    methods:{
        async getHome(){
            await this.$axios.$get('/home', {
                headers:{
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                console.log(res.data)
                
                this.ads = res.data[0].ads;
                this.trip_types = res.data[1].trip_types ;


                this.loader = false

                
            } )
        }
    },
    mounted(){
        this.getHome() ;
    }
}
</script>

<style>

</style>