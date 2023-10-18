<template>
   <main>
        <homeHeader :headerTitle="$t('notificationsTitle')" />
        <notsNotifications/>
        <!-- download app  -->
        <homeDownloadApp />
        <homeFooter />
    </main>
</template>

<script>
export default {
    // middleware : ['userAuth'],
    beforeMount(){
        let user = localStorage.getItem('user');
        if( !user ){
            this.$router.push('/client/HomePage')
        }
    }
}
</script>

<style>

</style>