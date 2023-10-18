<template>
    <section>
        <div class="img-background">
            <img :src="bg" alt="" />
        </div>
        <div class="login">
            <div class="container">
                <div class="col-md-6 col-12 margin-auto p-0">
                    <!-- form  -->
                    <form ref="regForm" @submit.prevent="register">
                        <div class="login-box mt-3">
                            <div class="login-img text-center mt-2">
                                <img :src="src" alt="" />
                            </div>
                            <div class="title-login text-center mt-3">{{ $t('newAccount') }} </div>
                            <div class="under-title mb-3 text-center mt-2">
                               {{ $t('fillDataNewLogin') }}
                            </div>

                            <div class="img-regester-cont mb-3 mt-3">
                                <label for="img-up" class="img-edit">
                                    <input name="avatar" type="file" id="img-up" hidden accept="image/*"
                                        @change='uploadImage' />
                                    <span class="icon">
                                        <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                                    </span>
                                    <!-- <fa :icon="['fa-regular', 'fa-pen-to-square']" /> -->
                                </label>
                                <img id="change-profile" :src="edit_avatar" alt="" />
                            </div>
                            <div class="row">
                                <div class="col-md-9 col-12 margin-auto">

                                    <div class="mb-3 main-inp-cont">
                                        <h6 class="fontBold mainColor font14 font600">
                                            {{ $t('userName') }}
                                        </h6>
                                        <div class="relative-co">
                                            <input 
                                            type="text"
                                             :placeholder="$t('fillUserName')"
                                              class="inp-spe-tele"
                                                name="fullname" v-model="fullname" />
                                            <div class="icon-float">
                                                <font-awesome-icon :icon="['fas', 'user']" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-3 main-inp-cont">
                                        <h6 class="fontBold mainColor font14 font600">
                                          {{ $t('phoneNumber') }}
                                        </h6>
                                        <div class="relative-co">
                                            <input type="number" id="telephone"
                                            :placeholder="$t('fillPhoneNumber')"
                                                class="inp-spe-tele" name="phone" v-model="phone" />
                                            <div class="icon-float">
                                                <font-awesome-icon :icon="['fas', 'mobile-screen-button']" />
                                            </div>
                                            <!-- custom select box  -->
                                            <div class=" country_select">
                                                <div class="selected-option" @click="toggleDropdown">
                                                    <img :src="defaultImage" alt="Option Image">
                                                    <span>{{ country_key }}</span>
                                                </div>
                                                <div class="options-container" v-if="dropdownVisible">
                                                    <div v-for="option in countries" :key="option.id" class="option"
                                                        @click="selectOption(option)">
                                                        <img :src="option.flag" alt="Option Image">
                                                        <span>{{ option.calling_code }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-3 main-inp-cont">
                                        <h6 class="fontBold mainColor font14 font600">
                                            {{ $t('email') }} 
                                        </h6>
                                        <div class="relative-co">
                                            <input type="text" :placeholder="$t('fillEmail')"
                                                class="inp-spe-tele" name="email" v-model="email" />
                                            <div class="icon-float">
                                                <font-awesome-icon :icon="['fas', 'envelope']" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-3 main-inp-cont">
                                        <h6 class="fontBold mainColor font14 font600">
                                            {{ $t('country_name') }}
                                        </h6>
                                        <div class="relative-co">
                                            <div class="position-relative w-100">
                                                <input type="text" v-model="regionQuery2" name="query"
                                                    :placeholder="$t('country_place')"
                                                     class="inp-spe-tele" 
                                                     @input="getCountries()"
                                                  @focus="showList2">

                                                <div v-if="showList3"
                                                    style="position:absolute;width:100%;height:200px;overflow-y:auto;top:50px;z-index:999">
                                                    <ul class="list-group" style="z-index:9999"
                                                        v-if="filteredCountries.length > 0">
                                                        <li class="list-group-item" v-for="(item, index) in filteredCountries"
                                                            :key="item.id">
                                                            <span @click="setNewValueForRegion2(item.name, item.id)"
                                                                style="cursor:pointer">
                                                                {{ index + 1 }}.{{ item.name }}
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <ul class="list-group" v-else>
                                                        <li class="list-group-item"> {{ $t('no_country') }}  </li>
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
                                        <h6 class="fontBold mainColor font14 font600">
                                            {{ $t('country') }} 
                                        </h6>
                                        <div class="relative-co">
                                            <div class="position-relative w-100">
                                                <input type="text" v-model="regionQuery" name="query"
                                                    :placeholder="$t('searchCountries')"
                                                     class="inp-spe-tele" @input="getCities()"
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
                                                        <li class="list-group-item"> {{ $t('noCountry') }}  </li>
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
                                        <h6 class="font-bold"> {{ $t('chooseLocation') }} </h6>
                                        <div class="relative-co">
                                            <input v-b-modal.modal-1 type="text" :value="address" name=""
                                                :placeholder="$t('chooseLocation')"
                                                 class="inp-spe-tele"
                                                @focus="showMapDialog">
                                            <div class="icon-float">
                                                <font-awesome-icon :icon="['fas', 'location-dot']" />
                                            </div>


                                            <!-- GOOGLE MAP  -->
                                            <b-modal id="modal-1">
                                                <GMap ref="map" language="en" :center="locations" :zoom="10">
                                                    <GMapMarker :clickable="true" :position="locations"
                                                        :options="{ draggable: true }" @mouseover="onMarkerDragEnd($event)">
                                                    </GMapMarker>
                                                </GMap>
                                            </b-modal>

                                        </div>
                                    </div>
                                    <!--new for provider-->
                                    <div class="mb-3 main-inp-cont">
                                        <h6 class="fontBold mainColor font14 font600"> {{ $t('profBankName') }} </h6>
                                        <div class="relative-co">
                                            <input 
                                            type="text"
                                             :placeholder="$t('bankName')"
                                             class="inp-spe-tele"  name="bank_name" v-model="bank_name"/>
                                            <div class="icon-float">
                                                <font-awesome-icon :icon="['fas', 'money-bills']" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 main-inp-cont">
                                        <h6 class="fontBold mainColor font14 font600">
                                            {{ $t('bankNumber') }}
                                        </h6>
                                        <div class="relative-co">
                                            <input 
                                            type="number"
                                             :placeholder="$t('bankNumber')"
                                            class="inp-spe-tele" name="bank_acc_number" v-model="bank_acc_number" />
                                            <div class="icon-float">
                                                <font-awesome-icon :icon="['fas', 'money-check-dollar']" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="mb-3 main-inp-cont">
                                        <h6 class="fontBold mainColor font14 font600">
                                            {{ $t('ibanNumber') }}
                                        </h6>
                                        <div class="relative-co">
                                            <input type="text" :placeholder="$t('ibanPlace')"
                                                class="inp-spe-tele" name="bank_iban_number" ref="ibanNumb" v-model="bank_iban_number"/>
                                            <div class="icon-float">
                                                <font-awesome-icon :icon="['fas', 'money-check-dollar']" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- <div class="mb-3 main-inp-cont">
                                        <h6 class="fontBold mainColor font14 font600">
                                            {{ $t('ibanFile') }}
                                        </h6>
                                        <div class="relative-co">
                                            <input type="text" :placeholder="$t('ibanPlace')"
                                                class="inp-spe-tele" name="" ref="ibanNumb" />
                                            <div class="icon-float">
                                                <font-awesome-icon :icon="['fas', 'money-check-dollar']" />
                                            </div>
                                            <input type="file" class="hiddenFile" name="iban_file" @change="uploadIBAN">
                                        </div>
                                    </div> -->

                                    <div class="mb-3 main-inp-cont">
                                        <h6 class="font-bold"> {{ $t('nation') }} </h6>
                                        <div class="relative-co">
                                            <select name="nationality_id" id="" class="main-select form-select">
                                                <option value="" selected hidden disabled>
                                                    {{ $t('nationPlace') }}
                                                </option>
                                                <option :value="nation.id" v-for="nation in nationalities" :key="nation.id"> {{ nation.name }} </option>

                                            </select>
                                            <div class="icon-float">
                                                <font-awesome-icon :icon="['fas', 'earth-americas']" />
                                            </div>
                                            <div class="icon-float2">
                                                <font-awesome-icon :icon="['fas', 'chevron-down']" />
                                            </div>
                                        </div>
                                    </div>


                                    <div class="mb-3 main-inp-cont">
                                        <h6 class="font-bold"> {{ $t('gender') }} </h6>
                                        <div class="relative-co">
                                            <select name="gender"  id="" class="main-select form-select">
                                                <option value="" selected hidden disabled>
                                                    {{ $t('chooseType') }}
                                                </option>
                                                <option value="male"> {{ $t('male') }} </option>
                                                <option value="female"> {{ $t('female') }} </option>

                                            </select>
                                            <div class="icon-float">
                                                <font-awesome-icon :icon="['fas', 'venus-mars']" />
                                            </div>
                                            <div class="icon-float2">
                                                <font-awesome-icon :icon="['fas', 'chevron-down']" />
                                            </div>
                                        </div>
                                    </div>


                                    <div class="mb-3 main-inp-cont">
                                        <h6 class="fontBold mainColor font14 font600">
                                            {{ $t('birthday') }}
                                        </h6>
                                        <div class="relative-co">
                                            <input 
                                            type="date"
                                            :placeholder="$t('chooseBirth')"
                                            class="inp-spe-tele" name="birthdate" style="padding-right: 8px;padding-left: 10px;" />
                                           
                                        </div>
                                    </div>


                                    <div class="flex-bet">
                                        <label for="agree" class="agree-label"> {{ $t('TermsAndConditions') }} </label>
                                        <input type="checkbox" id="agree" v-model="termsCondition" class="agree-me">
                                    </div>

                                    <div class="mt-4">
                                        <button class="main-btn up mb-2" :disabled="disabled2">
                                            {{ $t('certain') }}
                                            <div class="spinner-border" role="status" v-if="disabled">
                                            </div>
                                        </button>


                                    </div>
                                </div>
                            </div>

                            <div class="dont-have">
                                {{ $t('haveAccount') }} <nuxt-link to="/providerLogin"> {{ $t('logIn') }} </nuxt-link>
                            </div>

                            <div class="forget-login mb-4">
                                <nuxt-link to="/provider/HomePage" class="decore-me font14 color-main"> {{ $t('visitorLogin') }} </nuxt-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            src: require('@/assets/imgs/Group 70332.png'),
            bg: require('@/assets/imgs/Rectangle 30488.png'),
            person: require('@/assets/imgs/185644495_1667380803456791_1968050560740665054_n.jpg'),
            cities: [],
            regionQuery: '',
            regionQuery2: '',
            showList1: false,
            showList3: false,
            city_id: '',
            dialog: false,
            locations:
            {
                lat: 0,
                lng: 0
            },
            currentLocation: {},
            address: '',
            edit_avatar: require('@/assets/imgs/Group 70332.png'),

            country_key: '00966',
            countries: [],
            countriesNames : [],
            dropdownVisible: false,
            defaultImage: 'https://backend.bookaboat.app/assets/uploads/flags/96198928-39e5-4349-a8b1-35a036882ac2.png',
            device_type: 'android',
            disabled: false,
            disabled2: true,
            phone: '',
            email: '',
            fullname: '',
            nationality_id : null,
            bank_iban_number : '',
            bank_acc_number : '',
            termsCondition : false , 
            bank_name : '',
            country_id : '',
            nationalities : []
        }
    },

    watch: {
        regionQuery() {
            if (this.regionQuery == '') {
                this.showList1 = false;
            }
        },
        termsCondition(){
            if( this.termsCondition == true ){
                this.disabled2 = false
            }else{
                this.disabled2 = true
            }
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

        filteredCountries() {
            if (!Array.isArray(this.countriesNames)) {
                console.error("this.cities is not an array");
                return [];
            }
            return this.countriesNames.filter(region => {
                return region.name.toLowerCase().includes(this.regionQuery2.toLowerCase())
            })
        },
    },

    methods: {
        // upload iban 
        uploadIBAN(e){
            this.$refs.ibanNumb.value = e.target.files[0].name
        },

        async register() {
            this.disabled = true;
            this.disabled2 = true;
            const fd = new FormData(this.$refs.regForm);

            fd.append('city_id', this.city_id);
            fd.append('country_id', this.country_id);
            // fd.append('avatar', this.edit_avatar);
            fd.append('lat', this.locations.lat);
            fd.append('long', this.locations.lng);
            fd.append('address', this.address);
            fd.append('device_type', this.device_type);
            fd.append('device_id', localStorage.getItem('device_id'));
            fd.append('country_key', this.country_key);

            await this.$axios.$post('/delegate_join_request', fd)
                .then((res) => {
                    if (res.key == 'success') {
                        this.$swal('', `تم تسجيل حسابك بنجاح`, "success");
                        localStorage.setItem('token', res.data.token);
                        let user = JSON.stringify(res.data.user)
                        localStorage.setItem('user', user);
                        localStorage.setItem('phone', this.phone);

                        setTimeout(() => {
                            this.$router.push('/providerRegisterComplete');
                        }, 2000);
                    }
                    else {
                        this.$swal('', `${res.msg}`, "error");
                    }
                    this.disabled = false
                    this.disabled2 = false
                })
        },

        // uploadImage 
        uploadImage(e) {
            const file = e.target.files[0];
            this.edit_avatar = URL.createObjectURL(file);


            // const file = e.target.files[0];
            // this.edit_avatar = URL.createObjectURL(file);
            // const image = e.target.files[0];
            // if(image){
            //     const reader = new FileReader();
            //     reader.readAsDataURL(image);
            //     reader.onload = e =>{
            //         this.edit_avatar = e.target.result;
            //     };
            // }

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
        setNewValueForRegion2(value1, id) {
            this.regionQuery2 = value1;
            this.country_id = id
            if (this.regionQuery2 == value1) {
                this.showList3 = false
            }
            this.getCity()
        },
        // get cities 
        async getCity() {

            await this.$axios.$get(`/cities?country_id=${this.country_id}`)
                .then((res) => {
                    this.cities = res.data.cities;
                })
        },

        // get country key 
        async getCounrtyKey() {
            await this.$axios.$get('countries')
                .then((res) => {
                    this.countries = res.data.countries
                    this.countriesNames = res.data.countries
                })
        },

        // get country key 
        async getNations() {
            await this.$axios.$get('/nationalities')
                .then((res) => {
                    this.nationalities = res.data.nationalities
                })
        },
        async getCities() {
            this.showList1 = true
        },

        async getCountries() {
            this.showList3 = true
        },
        // show list of cities
        showList() {
            this.showList1 = true;
        },
        showList2() {
            this.showList3 = true;
        },
        // show google map
        showMapDialog() {
            this.dialog = true;
        },

        // toggle country select 
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible
        },
        // choose option and close dropdown 
        selectOption(option) {
            this.country_key = option.calling_code
            this.defaultImage = option.flag
            this.dropdownVisible = !this.dropdownVisible
        },

        // toggle country select 
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible
        },
        // choose option and close dropdown 
        selectOption(option) {
            this.country_key = option.calling_code
            this.defaultImage = option.flag
            this.dropdownVisible = !this.dropdownVisible
        },
    },

    mounted() {
        // this.getCity();
        this.geolocation();
        this.getCounrtyKey();
        this.getNations()

        // get random device_id 
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => localStorage.setItem('device_id', data.ip))
            .catch(error => console.error(error));

    }
}
</script>

<style>
.hiddenFile{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    opacity: 0;
}
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
</style>