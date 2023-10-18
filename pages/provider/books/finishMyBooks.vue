<template>
    <main>
        <!-- header  -->
        <homeHeader :headerTitle="$t('finishBooks')"/>
        
        <!-- book status  -->
        <booksFinish />

        <!-- download app  -->
        <HomeDownloadApp />

        <!-- footer  -->
        <homeFooter />
    </main>
</template>

<script>
export default {
    // middleware : ['auth']

}
</script>

<style>

</style>