<template>
    <main>
        <!-- header  -->
        <homeHeader  :headerTitle="$t('newBooks')"/>
        
        <!-- book status  -->
        <booksNew />

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