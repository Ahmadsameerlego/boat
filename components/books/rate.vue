<template>
<section>
    <form action="" class="rateForm">
        <h5 class="fw-bold text-center mt-3 pt-3"> {{ $t('rating') }} </h5>
        <div class="row">
        <div class="col-md-6 col-12">
            <div class="rate-box">
            <img
                :src="user_avatar"
                alt=""
                class="mx-auto mt-3 d-flex"
            />
            <h6 class="text-center" v-if="provider">{{ $t('experience') }} {{user_name}} ؟</h6>
            <h6 class="text-center" v-else-if="client">{{ $t('experience') }} {{delegate_name}} ؟</h6>
            <div class="inner-spe-text text-center">
                {{ $t('leaveComment') }}
            </div>
   
            <div class="rating ">
                <input type="radio" id="star1" name="rate" value="5" v-model="rate">
                <label for="star1" title="text"></label>
                <input type="radio" id="star2" name="rate" value="4" v-model="rate">
                <label for="star2" title="text"></label>
                <input  type="radio" id="star3" name="rate" value="3" v-model="rate">
                <label for="star3" title="text"></label>
                <input type="radio" id="star4" name="rate" value="2" v-model="rate">
                <label for="star4" title="text"></label>
                <input type="radio" id="star5" name="rate" value="1" v-model="rate">
                <label for="star5" title="text"></label> 
            </div>
            <div class="text-area-spp">
                <textarea
                name=""
                v-model="userComment"
                class=""
                id=""
                cols="30"
                rows="4"
                :placeholder="$t('leaveComment')"
                ></textarea>
            </div>
            </div>
        </div>
        <div class="col-md-6 col-12">
            <div class="rate-box">
            <img
                :src="require('@/assets/imgs/Group 12312.png')"
                alt=""
                class="mx-auto mt-3 d-flex"
            />
            <h6 class="text-center"> {{ $t('websiteExpe') }} </h6>
            <div class="inner-spe-text text-center">
                {{ $t('leaveComment') }}
            </div>
            <div class="rating ">
                <input type="radio" id="star11" name="rate1" value="5" v-model="rate2">
                <label for="star11" title="text"></label>
                <input type="radio" id="star22" name="rate1" value="4" v-model="rate2">
                <label for="star22" title="text"></label>
                <input  type="radio" id="star33" name="rate1" value="3" v-model="rate2">
                <label for="star33" title="text"></label>
                <input type="radio" id="star44" name="rate1" value="2" v-model="rate2">
                <label for="star44" title="text"></label>
                <input type="radio" id="star55" name="rate1" value="1" v-model="rate2">
                <label for="star55" title="text"></label> 
            </div>

            <div class="text-area-spp">
                <textarea
                name=""
                v-model="appComment"
                id=""
                cols="30"
                rows="4"
                :placeholder="$t('leaveComment')"
                ></textarea>
            </div>
            </div>
        </div>
        </div>
        <div class="flex-groupme mb-4 mt-4">
        <button
            type="button"
            class="btn-main up"
            @click.prevent="rateUser()"
        >
            {{ $t('Send') }}
        </button>
        <nuxt-link
            type="button"
            to="/provider/HomePage"
            style="color:#111b5a !important"
            class="btn-main up light-b"
        >
            {{ $t('return') }}
        </nuxt-link>
        </div>
    </form>
</section>
</template>

<script>
export default {
    data(){
        return{
            rate: 0,
            rate2 : 0,
            showSuccess : false,
            appComment : '',
            userComment : '',
            provider : false,
            client : false
        }
    },
    props:{
        user_id : String,
        user_name : String,
        user_avatar : String,
        delegate_avatar : String,
        delegate_id : String,
        delegate_name : String,
    },
    methods:{
        

        async rateUser(){
            const fd = new FormData();
            fd.append('app_rate', this.rate2)
            fd.append('app_comment', this.appComment)
            fd.append('rate', this.rate)
            fd.append('comment', this.userComment);
            if( this.provider == true ){
                fd.append('seconduser_id', this.user_id);
            }else if( this.client == true ){
                fd.append('seconduser_id', this.delegate_id);
            }
            fd.append('order_id', this.$route.params.id);

            await this.$axios.$post('/review-user', fd ,{
                headers:{
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(( res )=>{
                if( res.key == 'success' ){
                    this.$emit('closeRate')
                   this.$swal('', `${res.msg}`, "success");
                }else{
                    this.$swal('', `${res.msg}`, "error");
                }
            })
        }
    },
    mounted(){
    // client show 
    if( this.$route.fullPath.includes('client') ){
        this.client = true ;
    }else if( this.$route.fullPath.includes('provider') ){
        this.provider = true ;
    }
    }
}
</script>

<style>
.rateForm{
    background: #fff;
    width: 70%;
    height: 58ch;
    margin: auto;
    border-radius: 7px;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 130px;
}
.successModal{
    width: 63%;
    margin: auto;
    background: #fff;
    height: 40vh;
    padding: 25px;
    border-radius: 10px;
}



.modalOverLay{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #00000073;
  z-index: 9;
}
.modal_body{
  background: #fff;
  width: 50%;
    border-radius: 20px;
    margin: auto;
}



.rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}

.rating:not(:checked) > input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked) > label {
  cursor: pointer;
  font-size: 35px;
  color: #ccc;
}

.rating:not(:checked) > label:before {
  content: '★';
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ff9e0b;
}

.rating > input:checked ~ label {
  color: #ffa723;
}

</style>