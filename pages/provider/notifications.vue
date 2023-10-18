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
    // // middleware : ['auth']
}
</script>

<style>

</style>