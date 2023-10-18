<template>
    <main>
        <!-- header  -->
        <homeHeader :headerTitle="$t('myBoats')" />

        <!-- all boats -->
        <providersAllBoats />

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
        }
    },
    methods:{
        
    },
    mounted(){
    },
    // // middleware : ['auth']
}
</script>

<style>

</style>