<template>
  <div class="loader">
        <img :src="require('@/assets/imgs/Group 12312.png')" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style>
.loader {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     z-index: 9999999999;
     background: #FFF;
     overflow: hidden;
     display: -webkit-flex;
     display: -moz-flex;
     display: -ms-flex;
     display: -o-flex;
     display: flex;
     -ms-align-items: center;
     align-items: center;
     justify-content: center;
 }

 .loader img {
     animation: logoeffect2 0.9s linear 0s infinite;
     position: relative;
     width: 150px;
 }


 @keyframes logoeffect2 {


     100% {

         transform: scale(1.5);
         opacity: 0;
     }

 }

</style>