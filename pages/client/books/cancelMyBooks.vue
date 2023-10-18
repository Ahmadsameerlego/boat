<template>
    <main>
        <!-- header  -->
        <homeHeader :headerTitle="$t('cancelBooks')"/>
        
        <!-- book status  -->
        <booksCancel />

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