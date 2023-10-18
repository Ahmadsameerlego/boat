<template>
  <section id="faqs">
    <div class="container">
        <div class="accordion" role="tablist">
            <b-card no-body class="mb-1" v-for="faq in faqs" :key="faq.id">

            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle="`accordion-${faq.id}`" variant="info" class="text-right"> {{ faq.question }} </b-button>
            </b-card-header>

            <b-collapse :id="'accordion-'+faq.id" visible accordion="my-accordion" role="tabpanel">

                <b-card-body>
                <b-card-text>
                    {{ faq.answer }}
                </b-card-text>
                </b-card-body>

            </b-collapse>
            </b-card>

        </div>    
  </div>
  </section>
</template>
<script>
export default {
    data(){
        return{
            text : "lorem ",
            faqs : []
        }
    },
    methods:{
        async getFaqs(){
            await this.$axios.get('/faqs')
            .then( (res)=>{
                this.faqs = res.data.data.faqs;
                console.log(res.data.data);
            } )
        }
    },
    mounted(){
        this.getFaqs()
    }
}
</script>

<style lang="scss" scoped>
    .btn-info{
        background-color: #111b5a;
        color:#fff ;
        border: 1px solid #111b5a;
    }

</style>

