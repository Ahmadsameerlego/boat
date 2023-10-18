<template>
  <div class="login pt-0">
        <div class="w-100">
            <div class="">
                <!-- form  -->
                <form ref="regForm" @submit.prevent="register">
                    <div class="">
                        <div class="login-img text-center mt-2">
                            <img :src="src" alt="" />
                        </div>
                        <div class="title-login text-center mt-3"> {{ $t('editBoat') }} </div>
                        <div class="under-title mb-3 text-center mt-2">
                            {{ $t('plsFillEdit') }}
                        </div>
                        
                        <!-- <div class="img-regester-cont mb-3 mt-3">
                            <label for="img-up" class="img-edit">
                                <input name="image" type="file" id="img-up" hidden accept="image/*"
                                    @change='uploadImage' />
                                <span class="icon">
                                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                                </span>
                                <fa :icon="['fa-regular', 'fa-pen-to-square']" />
                            </label>
                            <img id="change-profile" :src="edit_avatar" alt="" />
                        </div> -->

                        <div class="row">
                            <div class="col-md-9 col-12 margin-auto">

                                <div class="mb-3 main-inp-cont">
                                    <h6 class="fontBold mainColor font14 font600">
                                        {{ $t('userName') }}
                                    </h6>
                                    <div class="relative-co">
                                        <input type="text" :placeholder="$t('fillUserName')" class="inp-spe-tele"
                                            name="name" v-model="name" />
                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'user']" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 main-inp-cont">
                                    <h6 class="fontBold mainColor font14 font600">
                                        {{ $t('boatNameAr') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>

                                    <div class="relative-co">
                                        <input type="text" :placeholder="$t('fillBoatName')" class="inp-spe-tele" name="name_ar" v-model="name_ar"/>
                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'sailboat']" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 main-inp-cont">
                                    <h6 class="fontBold mainColor font14 font600">
                                        {{ $t('boatName') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>
                                    
                                    <div class="relative-co">
                                        <input type="text" :placeholder="$t('pleasefillBoatNameEN')" class="inp-spe-tele" name="name_en" v-model="name_en" />
                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'sailboat']" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 main-inp-cont">
                                    <h6 class="fontBold mainColor font14 font600">
                                        {{ $t('boatNumber') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>
                                    <div class="relative-co">
                                        <input type="number" :placeholder="$t('fillBoatNumber')"
                                            class="inp-spe-tele" name="number" v-model="number" />
                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'list-ol']" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 main-inp-cont">
                                    <h6 class="font-bold">{{ $t('boatCategory') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>
                                    <div class="relative-co">
                                        <select name="category_id" id="" class="main-select" v-model="category_id">
                                            <option value="" selected hidden disabled>
                                                
                                                {{ $t('fillBoatCategory') }}
                                                <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                            </option>

                                            <option v-for="cat in categories" :key="cat.id" :value="cat.id"> {{ cat.name }} </option>
                                        </select>
                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'sailboat']" />
                                        </div>
                                        <div class="icon-float2">
                                            <font-awesome-icon :icon="['fas', 'chevron-down']" />
                                        </div>
                                    </div>
                                </div>


                                <div class="mb-3 main-inp-cont">
                                    <h6 class="fontBold mainColor font14 font600">
                                        {{ $t('locationOfBoat') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>
                                    <div class="relative-co">
                                        <div class="position-relative w-100">
                                            <input type="text" v-model="regionQuery" name="query"
                                                :placeholder="$t('cityPlace')" class="inp-spe-tele" @input="getCities()"
                                                @focus="showList">

                                            <div v-if="showList1"
                                                style="position:absolute;width:100%;height:200px;overflow-y:auto;top:50px;z-index:999">
                                                <ul class="list-group" style="z-index:9999"
                                                    v-if="filteredRegions.length > 0">
                                                    <li class="list-group-item" v-for="(item, index) in filteredRegions"
                                                        :key="item.id">
                                                        <span @click="setNewValueForRegion(item.name, item.id)"
                                                            style="cursor:pointer">
                                                            {{ index + 1 }}.{{ item.name }}
                                                        </span>
                                                    </li>
                                                </ul>
                                                <ul class="list-group" v-else>
                                                    <li class="list-group-item"> {{ $t('noCountry') }} </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'location-dot']" />
                                        </div>
                                        <div class="icon-float2">
                                            <font-awesome-icon :icon="['fas', 'chevron-down']" />
                                        </div>
                                    </div>
                                </div>



                                <div class="mb-3 main-inp-cont">
                                    <h6 class="font-bold"> {{ $t('locationOfBoatOnMap') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />

                                    </h6>
                                    <div class="relative-co">
                                        <input v-b-modal.modal-233 type="text" :value="address" name=""
                                            :placeholder="$t('chooseLocation')" class="inp-spe-tele"
                                            @focus="showMapDialog">
                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'location-dot']" />
                                        </div>


                                        <!-- GOOGLE MAP  -->
                                        <b-modal id="modal-233">
                                            <GMap ref="map" language="en" :center="locations" :zoom="10">
                                                <GMapMarker :clickable="true" :position="locations"
                                                    :options="{ draggable: true }" @mouseover="onMarkerDragEnd($event)">
                                                </GMapMarker>
                                            </GMap>
                                        </b-modal>

                                    </div>
                                </div>
                                <div class="mb-3 main-inp-cont">
                                    <h6 class="fontBold mainColor font14 font600">
                                        {{ $t('boatCapacity') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>
                                    <div class="relative-co">
                                        <input type="number" :placeholder="$t('selectBoatCapacity')"
                                            class="inp-spe-tele" name="capacity" v-model="capacity" />
                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'users']" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 main-inp-cont">
                                    <h6 class="font-bold"
                                    >{{ $t('boatDescriptionAr') }}
                                    <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>
                                    <div class="relative-co">
                                        <textarea name="desc_ar" v-model="desc_ar" id="" class="main-textarea"
                                            :placeholder="$t('explaindescripeBoatAr')" rows="3"></textarea>
                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'note-sticky']" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 main-inp-cont">
                                    <h6 class="font-bold"> {{ $t('boatDescriptionEn') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>
                                    <div class="relative-co">
                                        <textarea name="desc_en" v-model="desc_en" id="" class="main-textarea"
                                            :placeholder="$t('explaindescripeBoatEn')" rows="3"

                                            ></textarea>
                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'note-sticky']" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 main-inp-cont">
                                    <h6 class="font-bold"> {{ $t('boatTrack') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>
                                    <div class="relative-co">
                                        <select name="path_id" v-model="path_id" id="" class="main-select">
                                            <option value="" selected hidden disabled>
                                                {{ $t('selectBoatTrack') }}
                                            </option>
                                            <option v-for="path in paths" :key="path.id" :value="path.id"> {{ path.name }} </option>
                                        </select>
                                        <div class="icon-float">
                                            <font-awesome-icon :icon="['fas', 'sailboat']" />
                                        </div>
                                        <div class="icon-float2">
                                            <font-awesome-icon :icon="['fas', 'chevron-down']" />
                                        </div>
                                    </div>
                                </div>



                                <!-- <div class="mb-3 main-inp-cont">
                                    <h6 class="font-bold"> {{ $t('boatRaking') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>
                                    <div class="relative-co d-flex">
                                        <div class="px-3">
                                            <input type="radio" class="order_type" id="main" name="order_type" v-model="order_type" value="main">
                                            <label for="main"> {{ $t('mainBoat') }} </label>
                                        </div> 


                                        <div>
                                            <input type="radio" class="order_type" id="sub" name="order_type" v-model="order_type" value="sub">
                                            <label for="sub"> {{ $t('SubBoat') }} </label>
                                        </div> 
                                    </div>
                                </div> -->


                                <div class="photo-permition mb-3">
                                    <h6 class="font-bold"> {{ $t('boatProperty') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>

                                    <div class="flex-upload-imgs ">
                                        <label for="filesNext_input" class="upload-main position-relative">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                name="certificates[]"
                                                class="hiddenInput"
                                                id="imgUpload"
                                                @change="uploadAdImages($event.target)"
                                            />

                                            <font-awesome-icon :icon="['fas', 'cloud-arrow-down']" style="color:#111b5a;font-size:22px" />

                                            <div class="gray-col"> {{ $t('attachPhotos') }} </div>
                                        </label>

                                        <div class="img-upload-show mt-4" >

                                            <div class="d-flex" >
                                                <div class="hidden-img d-flex" style="flex-wrap:wrap">
                                                <div class="position-relative" v-for="(image, key) in adsImages" :key="key" >
                                                    <button class="remove-img text-white" type="button" @click="removeImage(image, key)">
                                                    &times;
                                                    </button>
                                                    <img class="preview img-thumbnail" :ref="'image'" /> 

                                                </div>

                                                </div>
                                            </div>

                                        </div>
                                        <!-- uploaded documents  -->
                                        <div class="img-upload-show mt-4" >

                                            <div class="d-flex" >
                                                <div class="hidden-img d-flex" style="flex-wrap:wrap">
                                                <div class="position-relative" v-for="imgUp,i in images" :key="imgUp.id" >
                                                    <button class="remove-img text-white" type="button" @click="removeImageuploaded(imgUp, imgUp.id, i)">
                                                    &times;
                                                    </button>
                                                    <img class="preview img-thumbnail" ref="uploadedDocuments" :src="imgUp.url" /> 

                                                </div>

                                                </div>
                                            </div>

                                        </div>

                                        <!-- already uploaded images السندات  -->
                                        <!-- <div
                                            class="uploadedImage position-relative mt-4"
                                            v-for="imgUp,i in images"
                                            :key="imgUp.id"
                                        >
                                        <input
                                          type="file"
                                          accept="image/*"
                                          @change="onFileChange($event , i)"
                                          name="certificates[]"
                                          :id="'imgUploaded' + i"
                                          class="hiddenInput img-edit-input"
                                        />
                                        <label
                                          :for="'imgUploaded' + i"
                                          class="edit-img"
                                        >
                                        
                                          <img
                                            :src="imgUp.url"
                                            alt=""
                                            class="edited-img preview img-thumbnail"
                                          />
                                        <font-awesome-icon :icon="['fas', 'pen-to-square']" class="editUpload" />
                                        </label>
                                        </div> -->

                                    </div>
                                </div>


                                    


                                <div class="photo-permition mb-3">
                                    <h6 class="font-bold"> {{ $t('boatPhotos') }}
                                        <font-awesome-icon :icon="['fas', 'asterisk']" class="astrik" />
                                    </h6>
                                    <div class="flex-upload-imgs ">
                                        <label for="filesNext2_input" class="upload-main position-relative">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                name="boatImages[]"
                                                class="hiddenInput"
                                                id="imgUploades1"
                                                @change="uploadAdImages2($event.target)"
                                            />

                                            <font-awesome-icon :icon="['fas', 'cloud-arrow-down']" style="color:#111b5a;font-size:22px" />

                                            <div class="gray-col"> {{ $t('attachPhotos') }} </div>
                                        </label>
                                        <div class="img-upload-show mt-4" >

                                            <div class="d-flex" >
                                                <div class="hidden-img d-flex" style="flex-wrap:wrap">
                                                <div class="position-relative" v-for="(image, key) in adsImages2" :key="key" >
                                                    <button class="remove-img text-white" type="button" @click="removeImage2(image, key)">
                                                    &times;
                                                    </button>
                                                    <img class="preview img-thumbnail" :ref="'image1'" /> 

                                                </div>

                                                </div>
                                            </div>

                                        </div>
                                        <!-- uploaded boats  -->
                                        <div class="img-upload-show mt-4" >

                                            <div class="d-flex" >
                                                <div class="hidden-img d-flex" style="flex-wrap:wrap">
                                                <div class="position-relative" v-for="imgUp,i in images2" :key="imgUp.id" >
                                                    <button class="remove-img text-white" type="button" @click="removeImageuploaded2(image, imgUp.id , i)">
                                                    &times;
                                                    </button>
                                                    <img class="preview img-thumbnail" ref="uploadedBoats" :src="imgUp.url" /> 

                                                </div>

                                                </div>
                                            </div>

                                        </div>
                                      
                                    </div>


                                    
                                </div>



                                <div class="mt-4">
                                    <button class="main-btn up mb-2" :disabled="disabled">
                                        {{ $t('saveChanges') }}
                                        <div class="spinner-border" role="status" v-if="disabled">
                                        </div>
                                    </button>


                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            src: require('@/assets/imgs/Group 70332.png'),
            bg: require('@/assets/imgs/Rectangle 30488.png'),
            person: require('@/assets/imgs/185644495_1667380803456791_1968050560740665054_n.jpg'),
            cities: [],
            regionQuery: '',
            showList1: false,
            city_id: '',
            dialog: false,
            locations:
            {
                lat: 0,
                lng: 0
            },
            address: '',
            edit_avatar: require('@/assets/imgs/Group 70332.png'),

            disabled: false,
            
            categories : [],
            paths : [] ,

            adsImages : [],
            adsImagesName : [],
            adsImages2 : [],
            adsImagesName2 : [],


            order_type : null,
            path_id : '',
            name_ar : '',
            name_en : '',
            desc_ar : '',
            desc_en : '',
            capacity :'',
            category_id : '',
            number : '',
            name : '',
            product : {},
            
            documents : [],
            images : [],
            images2 : [],
            changed_images_id : null,

            changed_images_ids : [],
            changed_images_id2 : null,

            changed_images_ids2 : [],

            disabled3 : false,
            boat_image_count : null,


        }
    },
    watch: {
        regionQuery() {
            if (this.regionQuery == '') {
                this.showList1 = false;
            }
        },

        order_type(){
            console.log(this.order_type)
        }
    },

      updated(){
         if(this.adsImages2.length > this.boat_image_count){
                this.disabled3 = true ;
              }else if(this.adsImages2.length < this.boat_image_count){
                  this.disabled3 = false
              }

    },

    computed: {
        filteredRegions() {
            if (!Array.isArray(this.cities)) {
                console.error("this.cities is not an array");
                return [];
            }
            return this.cities.filter(region => {
                return region.name.toLowerCase().includes(this.regionQuery.toLowerCase())
            })
        },
    },

    methods: {


        // get boat info 
        async getBoatInfo(){
            await this.$axios.$get(`/single-product?product_id=${this.$route.params.id}`)
            .then( (res)=>{
                this.product = res.data.product;
                this.images2 = res.data.product.images;
                console.log(this.images2);
                // this.changed_images_ids.slice(i , 1);
                this.images = res.data.product.documents ;

                // console.log(this.adsImages2)
                // console.log(this.adsImages)
                this.order_type = res.data.product.order_type;
                this.path_id = res.data.product.path_id;
                this.desc_en = res.data.product.desc_en;
                this.desc_ar = res.data.product.desc_ar;
                this.capacity = res.data.product.capacity;
                this.regionQuery = res.data.product.city;
                this.city_id = res.data.product.city_id;
                this.category_id = res.data.product.category_id;
                this.number = res.data.product.number;
                this.name_en = res.data.product.name_en;
                this.name_ar = res.data.product.name_ar;
                this.name = res.data.product.name;
                this.edit_avatar = res.data.product.image ;
                this.address = res.data.product.address ;
            } )
        },

                   // get boats length 
        async getBoatLength(){
            await this.$axios.$get('/general-data')
            .then( (res)=>{
                this.boat_image_count = res.data.boat_image_count
            } ) 
        },

        async register() {
            this.disabled = true;
            const fd = new FormData(this.$refs.regForm);

            fd.append('city_id', this.city_id);
            // fd.append('avatar', this.edit_avatar);
            fd.append('lat', this.locations.lat);
            fd.append('lng', this.locations.lng);
            fd.append('address', this.address);
            fd.append('product_id',this.$route.params.id)

            fd.append('boatImagesIds', (this.changed_images_ids2).toString())
   
            fd.append('certificatesIds', (this.changed_images_ids).toString())
       

            await this.$axios.$post('/update-product', fd , {
                headers:{
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }   
            })
                .then((res) => {
                    if (res.key == 'success') {
                        this.$swal('', `${res.msg}`, "success");
                        this.$emit('updateBoat')
                        setTimeout(() => {
                            // document.getElementById('modal-12').style.display = 'block';
                        }, 2000);
                    }
                    else {
                        this.$swal('', `${res.msg}`, "error");
                    }
                    this.disabled = false
                })
        },


        // image preview 
        uploadAdImages(file){


            // preview operation 
            let selectedImages = file.files ;

            for( let i = 0 ; i < selectedImages.length ; i++ ){
                this.adsImages.push( selectedImages[i] )
                this.adsImagesName.push(selectedImages[i].name);
            }
                 
              
              this.applyImage();


        },

        // remvoe image 
        removeImage(image, key){
            this.adsImages.splice(key, 1);
            this.applyImage();

        },
        // remvoe image 
        removeImageuploaded(image, key, i){
            this.images.splice(i, 1);
            this.$refs.uploadedDocuments.splice(i,1);

            console.log(this.$refs.uploadedDocuments)
            
            this.changed_images_id = key;
            console.log(this.changed_images_id)
            // changed images ids 
            this.changed_images_ids.push(key);
            // this.changed_images_ids.slice(key , 1);
            console.log(this.changed_images_ids)

            this.applyImage();


        },
        // remvoe image 
        removeImageuploaded2(image, key, i){
            this.images2.splice(i, 1);

            this.$refs.uploadedBoats.splice(i,1);

            this.changed_images_id2 = key;
            console.log(this.changed_images_id2)
            // changed images ids 
            this.changed_images_ids2.push(key);
            // this.changed_images_ids2.slice(key , 1);
            console.log(this.changed_images_ids2)

            this.applyImage();


        },


        applyImage() {
          for (let i = 0; i < this.adsImages.length; i++) {
            let reader = new FileReader();
            reader.onload = () => {
              this.$refs.image[i].src = reader.result;
            };
            reader.readAsDataURL(this.adsImages[i]);
          }
        },


        // image preview 
        uploadAdImages2(file){


            // preview operation 
            let selectedImages2 = file.files ;

            for( let i = 0 ; i < selectedImages2.length ; i++ ){
                this.adsImages2.push( selectedImages2[i] )
                this.adsImagesName2.push(selectedImages2[i].name);
            }

            if(this.adsImages2.length >= this.boat_image_count+1){
                this.disabled3 = true ;
                this.adsImages2 = []
            }
            
            else if(this.adsImages2.length < this.boat_image_count){
                this.disabled3 = false
            }
                 
              
              this.applyImage1();


        },

        // remvoe image 
        removeImage2(image, key){
            this.adsImages2.splice(key, 1);
            this.applyImage1();

        },


        applyImage1() {
          for (let i = 0; i < this.adsImages2.length; i++) {
            let reader = new FileReader();
            reader.onload = () => {
              this.$refs.image1[i].src = reader.result;
            };
            reader.readAsDataURL(this.adsImages2[i]);
          }
        },

        // get categories 
        async getCategories(){
            await this.$axios.$get('/categories')
            .then( (res)=>{
                this.categories = res.data.categories
            } )
        },
        // get paths 
        async getPaths(){
            await this.$axios.$get('/paths')
            .then( (res)=>{
                this.paths = res.data.paths ;
            } )
        },


        // uploadImage 
        uploadImage(e) {
            const file = e.target.files[0];
            this.edit_avatar = URL.createObjectURL(file);

        },
        // get current location  
        geolocation() {
            navigator.geolocation.getCurrentPosition((position) => {
                this.locations = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
            });
        },

        // get new value after dragged 
        onMarkerDragEnd(event) {
            // get new lat lang value 
            const newLat = event.event.latLng.lat()
            const newLng = event.event.latLng.lng()
            this.locations = {
                lat: newLat,
                lng: newLng
            }

            // get format_address 
            const latLng = event.event.latLng
            const geocoder = new window.google.maps.Geocoder()
            geocoder.geocode({ location: latLng }, (results, status) => {
                if (status === 'OK') {
                    this.address = results[0].formatted_address
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status)
                }
            })

        },

        // filter city 
        setNewValueForRegion(value1, id) {
            this.regionQuery = value1;
            this.city_id = id
            if (this.regionQuery == value1) {
                this.showList1 = false
            }
        },

        // get cities 
        async getCity() {

            await this.$axios.$get('/cities')
                .then((res) => {
                    this.cities = res.data.cities;
                })
        },


        async getCities() {
            this.showList1 = true
        },
        // show list of cities
        showList() {
            this.showList1 = true;
        },
        // show google map
        showMapDialog() {
            this.dialog = true;
        },

    },

    mounted() {
        this.getCity();
        this.geolocation();
        this.getCategories();
        this.getPaths();
        this.getBoatInfo();
            this.getBoatLength()


        // get random device_id 
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => localStorage.setItem('device_id', data.ip))
            .catch(error => console.error(error));

    }
}
</script>

<style>
.selected-option {
    display: flex;
    align-items: center;
    padding: 12px;
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 5px;
}

.selected-option img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

.options-container {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    cursor: pointer;
}

.option {
    display: flex;
    align-items: center;
    padding: 8px;
}

.option img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

.option:hover {
    background-color: #f5f5f5;
}

.country_select {
    position: absolute;
    width: 100px !important;
    left: 0;
    top: 0px;
    height: 51px;
}

.spinner-border {
    width: 1.5rem !important;
    height: 1.5rem !important;
    vertical-align: -0.5em !important;
}

.main-btn:disabled {
    opacity: .4;
    cursor: not-allowed;
}

.img-thumbnail{
    width:100px;
    height:100px
}
.remove-img{
    position: absolute;
    left: 2px;
    width: 18px;
    height: 18px;
    background: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hiddenInput{
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    opacity: 0;
}
.astrik{
        color: #df1d1d;
    font-size: 12px;
    margin: 0 5px;
}
.order_type{
    accent-color: #111b5a;
    width:17px;
    height:17px;
}
.editUpload{
    position: absolute;
    top: 10px;
    left: 10px;
    color: #111b5a ;
}
</style>