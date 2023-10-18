<template>
    <main>
        <!-- header  -->
        <homeHeader :headerTitle="$t('activeBooks')" />
        
        <!-- book status  -->
        <booksActive />

        <!-- download app  -->
        <HomeDownloadApp />

        <!-- footer  -->
        <homeFooter />
    </main>
</template>

<script>
export default {
    // middleware : ['userAuth'],
}
</script>

<style>

</style>