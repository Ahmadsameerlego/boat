<template>
    <main>
        <!-- header  -->
        <homeHeader  />

        <!-- who us  -->
        <homeWhoUs />

        <providersNewOrders />

        <!-- about us  -->
        <homeAbout />

        <!-- download app  -->
        <homeDownloadApp />
        
        <!-- footer  -->
        <homeFooter />
    </main>
</template>

<script>
export default {
    data(){
        return{
            ads : [],
            trip_types : []
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