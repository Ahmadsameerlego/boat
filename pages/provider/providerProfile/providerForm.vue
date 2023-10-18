<template>
  <b-card no-body>
    <div class="flex-bet all-qestion m-1" role="tab" v-b-toggle.accordion-1>
      <div class="flex-qet-me">
        <div class="icon-faq color-main">
          <font-awesome-icon :icon="['fas', 'user']" />
        </div>
        <div class="full-q"> {{ $t('personalTitle') }} </div>
      </div>
      <div class="dafeult-faq-icon">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
    </div>

    <b-collapse
      id="accordion-1"
      visible
      accordion="my-accordion"
      role="tabpanel"
    >
      <div class="parent-profile">
        <form ref="regForm" @submit.prevent="update">
          <div class="col-md-10 col-12 margin-auto">
            <div class="img-regester-cont mb-4 mt-3">
              <label for="img-up" class="img-edit">
                <input
                  name="avatar"
                  type="file"
                  id="img-up"
                  hidden
                  accept="image/*"
                  @change="uploadImage"
                />
                <font-awesome-icon :icon="['fas', 'pen-to-square']" />
              </label>
              <img id="change-profile" :src="edit_avatar" alt="" />
            </div>
            <div class="row">
              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600">
                    {{ $t('userName') }}
                  </h6>
                  <div class="relative-co">
                    <input
                      type="text"
                      :placeholder="$t('fillUserName')"
                      class="inp-spe-tele"
                      name="name"
                      v-model="name"
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'user']" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600"> {{ $t('profilePhone') }} </h6>
                  <div class="relative-co">
                    <input
                      type="number"
                      id="telephone"
                      :placeholder="$t('fillPhoneNumber')"
                      class="inp-spe-tele"
                      name="phone"
                      ref="phoneNum"
                      @input="changed()"
                      v-model="phone"
                    />
                    <div class="icon-float">
                      <font-awesome-icon
                        :icon="['fas', 'mobile-screen-button']"
                      />
                    </div>
                    <!-- custom select box  -->
                    <div class="country_select">
                      <div class="selected-option" @click="toggleDropdown">
                        <img :src="defaultImage" alt="Option Image" />
                        <span>{{ country_key }}</span>
                      </div>
                      <div class="options-container" v-if="dropdownVisible">
                        <div
                          v-for="option in countries"
                          :key="option.id"
                          class="option"
                          @click="selectOption(option)"
                        >
                          <img :src="option.flag" alt="Option Image" />
                          <span>{{ option.calling_code }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600">
                    {{ $t('emailProfile') }}
                  </h6>
                  <div class="relative-co">
                    <input
                      type="text"
                      :placeholder="$t('emailPlace')"
                      class="inp-spe-tele"
                      name="email"
                      v-model="email"
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'envelope']" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('City') }} </h6>
                  <div class="relative-co">
                    <div class="position-relative w-100">
                      <input
                        type="text"
                        v-model="regionQuery"
                        name="query"
                        :placeholder="$t('cityPlace')"
                        class="inp-spe-tele"
                        @input="getCities()"
                        @focus="showList"
                      />

                      <div
                        v-if="showList1"
                        style="
                          position: absolute;
                          width: 100%;
                          height: 200px;
                          overflow-y: auto;
                          top: 50px;
                          z-index: 999;
                        "
                      >
                        <ul
                          class="list-group"
                          style="z-index: 9999"
                          v-if="filteredRegions.length > 0"
                        >
                          <li
                            class="list-group-item"
                            v-for="(item, index) in filteredRegions"
                            :key="item.id"
                          >
                            <span
                              @click="setNewValueForRegion(item.name, item.id)"
                              style="cursor: pointer"
                            >
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
              </div>
              <div class="col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('chooseLocation') }}   </h6>
                  <div class="relative-co">
                    <input
                      v-b-modal.modal-44
                      type="text"
                      :value="address"
                      name=""
                      :placeholder="$t('chooseLocation')"
                      class="inp-spe-tele"
                      @input="showMapDialog"
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'location-dot']" />
                    </div>

                    <!-- GOOGLE MAP  -->
                    <b-modal id="modal-44">
                      <GMap
                        ref="map"
                        language="en"
                        :center="locations"
                        :zoom="10"
                      >
                        <GMapMarker
                          :clickable="true"
                          :position="locations"
                          :options="{ draggable: true }"
                          @mouseover="onMarkerDragEnd($event)"
                        >
                        </GMapMarker>
                      </GMap>
                    </b-modal>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600"> {{ $t('profBankName') }} </h6>
                  <div class="relative-co">
                    <input
                      type="text"
                      :placeholder="$t('bankName')"
                      class="inp-spe-tele"
                      name="bank_name"
                      v-model="bank_name"
                    />
                    <div class="icon-float">
                      <font-awesome-icon :icon="['fas', 'money-bills']" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600">
                    {{ $t('profBankNumber') }}
                  </h6>
                  <div class="relative-co">
                    <input
                      type="number"
                      :placeholder="$t('bankNumber')"
                      class="inp-spe-tele"
                      name="bank_acc_number"
                      v-model="bank_acc_number"
                    />
                    <div class="icon-float">
                      <font-awesome-icon
                        :icon="['fas', 'money-check-dollar']"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="fontBold mainColor font14 font600"> {{ $t('ibanNumber') }} </h6>
                  <div class="relative-co">
                    <input
                      type="text"
                      :placeholder="$t('ibanPlace')"
                      class="inp-spe-tele"
                      name="bank_iban_number"
                      v-model="bank_iban_number"
                    />
                    <div class="icon-float">
                      <font-awesome-icon
                        :icon="['fas', 'money-check-dollar']"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mb-3">
                <div class="mb-3 main-inp-cont">
                  <h6 class="font-bold"> {{ $t('nation') }} </h6>
                  <div class="relative-co">
                    <select
                      name="nationality_id"
                      id=""
                      class="main-select"
                    >
                      <option :value="nationality_id" selected hidden disabled>
                        {{ nationality }}
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
              </div>

              <b-modal v-if="changed_phone" id="modal-2">
                <div class="container">
                  <div class="p-0">
                    <form @submit.prevent="sendOtp">
                      <div class="login-box mt-3">
                        <div class="login-img text-center mt-2">
                          <img :src="src" alt="" />
                        </div>
                        <div class="title-login text-center mt-3">
                          {{ $t('activationCode') }}
                        </div>
                        <div class ="under-title mb-3 text-center mt-2">
                          {{ $t('sendingActivationCode') }}
                        </div>
                        <div class="row">
                          <div class="col-12 margin-auto">
                            <div class="code-container">
                              <v-otp-input
                                length="6"
                                ref="otp"
                                v-modal="otpInput"
                                name="otpInput"
                              ></v-otp-input>
                            </div>

                            <div class="dont-have">
                              {{ $t('didNotReceiveCode') }}
                              <button
                                type="button"
                                class="resent-btn"
                                @click.prevent="resendCode"
                              >
                                {{ $t('resendCode') }}
                              </button>
                            </div>
                            <div class="mt-4">
                              <button
                                class="main-btn up mb-2"
                                id="formsub"
                                :disabled="disabled"
                              >
                                {{ $t('certain') }}
                                <div
                                  class="spinner-border"
                                  role="status"
                                  v-if="disabled"
                                ></div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </b-modal>
              <div class="flex-groupme w-100">
                <button
                  type="submit"
                  v-b-modal.modal-2
                  class="btn-main up lg"
                  :disabled="disabled"
                >
                  {{ $t('saveChanges') }}
                  <div
                    class="spinner-border"
                    role="status"
                    v-if="disabled"
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      src: require("@/assets/imgs/Rectangle 30488.png"),
      bg: require("@/assets/imgs/Rectangle 30488.png"),
      person: require("@/assets/imgs/185644495_1667380803456791_1968050560740665054_n.jpg"),
      cities: [],

      showList1: false,
      city_id: "",
      dialog: false,

      locations: {
        lat: 0,
        lng: 0,
      },
      currentLocation: {},
      address: "",

      country_key: "00966",
      countries: [],
      dropdownVisible: false,
      defaultImage: "https://backend.bookaboat.app/assets/uploads/flags/96198928-39e5-4349-a8b1-35a036882ac2.png",
      device_type: "android",
      disabled: false,
      phone: "",
      email: "",
      name: "",
      regionQuery: "",
      edit_avatar: require("@/assets/imgs/Group 70332.png"),
      changed_phone: false,
      otpInput: null,
      oldPhone: "",
      fullname: "",
      nationality_id: null,
      bank_iban_number: null,
      bank_acc_number: "",
      bank_name: "",
      nationalities : [],
      nationality : ""
    };
  },

  watch: {
    regionQuery() {
      if (this.regionQuery == "") {
        this.showList1 = false;
      }
    },
  },

  computed: {
    filteredRegions() {
      if (!Array.isArray(this.cities)) {
        console.error("this.cities is not an array");
        return [];
      }
      return this.cities.filter((region) => {
        return region.name
          .toLowerCase()
          .includes(this.regionQuery.toLowerCase());
      });
    },
  },

  methods: {
    // get country key 
        async getNations() {
            await this.$axios.$get('/nationalities')
                .then((res) => {
                    this.nationalities = res.data.nationalities
                })
        },
    // update profile
    changed() {
      this.changed_phone = true;
      console.log("spe changed");
    },
    async getData() {
      await this.$axios
        .$get("/profile/show", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          // console.log(res.data.user.lat);
          // console.log(res.data.user.long);
          this.name = res.data.user.name;
          this.phone = res.data.user.phone;
          this.email = res.data.user.email;
          this.regionQuery = res.data.user.city;
          this.city_id = res.data.user.city_id;
          this.edit_avatar = res.data.user.avatar;
          this.country_key = res.data.user.country_key;
          this.address = res.data.user.address;
          this.locations = {
            lat: parseFloat(res.data.user.lat),
            lng: parseFloat(res.data.user.long),
          };
          this.bank_name = res.data.user.bank_name;
          this.bank_acc_number = res.data.user.bank_acc_number;
          this.nationality_id = res.data.user.nationality_id;
          this.nationality = res.data.user.nationality;
          this.bank_iban_number = res.data.user.bank_iban_number;
          // console.log(`iban ${this.bank_iban_number}`)
          this.phoneChanged = this.phone;
        });
    },
    async update() {
      this.disabled = true;
      const fd = new FormData(this.$refs.regForm);

      fd.append("phone", this.phone);
      fd.append("name", this.name);
      fd.append("country_key", this.country_key);
      fd.append("email", this.email);
      fd.append("address", this.address);
      fd.append("bank_name", this.bank_name);
      fd.append("bank_acc_number", this.bank_acc_number);
      // fd.append("nationality_id", this.nationality_id);
      fd.append("bank_iban_number", this.bank_iban_number);
      fd.append("lat", this.locations.lat);
      fd.append("long", this.locations.lng);
      fd.append("city_id", this.city_id);

      // if(this.edit_avatar){
      //   fd.append("avatar", this.edit_avatar);
      // }
      await this.$axios
        .$post("/profile/update", fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.key == "success") {
            // location.reload();
            // localStorage.setItem("token", res.data.token);
            let user = JSON.stringify(res.data.user);
            localStorage.setItem("user", user);
            localStorage.setItem("phone", this.phone);

            if (this.changed_phone == "true") {
              this.changed_phone = true;
            } else if (this.changed_phone == "false") {
              this.$nextTick(() => {
                this.changed_phone = false;
              });
            }
            if(!this.changed_phone){
              this.$swal("", `${res.msg}`, "success");
            }
            
          } else {
            this.$swal("", `${res.msg}`, "error");
          }
          this.disabled = false;
        });
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
      const newLat = event.event.latLng.lat();
      const newLng = event.event.latLng.lng();
      this.locations = {
        lat: newLat,
        lng: newLng,
      };

      // get format_address
      const latLng = event.event.latLng;
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK") {
          this.address = results[0].formatted_address;
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    },

    // uploadImage
    uploadImage(e) {
      const file = e.target.files[0];
      this.edit_avatar = URL.createObjectURL(file);
    },

    // filter city
    setNewValueForRegion(value1, id) {
      this.regionQuery = value1;
      this.city_id = id;
      if (this.regionQuery == value1) {
        this.showList1 = false;
      }
    },

    // get cities
    async getCity() {
      await this.$axios.$get("/cities").then((res) => {
        this.cities = res.data.cities;
      });
    },

    // get country key
    async getCounrtyKey() {
      await this.$axios.$get("countries").then((res) => {
        this.countries = res.data.countries;
      });
    },
    async getCities() {
      this.showList1 = true;
    },
    // show list of cities
    showList() {
      this.showList1 = true;
    },
    // show google map
    showMapDialog() {
      this.dialog = true;
    },

    // toggle country select
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    // choose option and close dropdown
    selectOption(option) {
      this.country_key = option.calling_code;
      this.defaultImage = option.flag;
      this.dropdownVisible = !this.dropdownVisible;
    },

    // toggle country select
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    // choose option and close dropdown
    selectOption(option) {
      this.country_key = option.calling_code;
      this.defaultImage = option.flag;
      this.dropdownVisible = !this.dropdownVisible;
    },
    // send otp
    async sendOtp() {
      this.disabled = true;
      const fd = new FormData();

      // convert otp to number
      let otpString = JSON.stringify(this.$refs.otp.otp.join(""));
      let otpsNumber = JSON.parse(otpString);

      fd.append("code", otpsNumber);

      await this.$axios
        .$post("/profile/changed-phone-activation", fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.key == "success") {
            this.getData();
            this.$swal("", `${res.msg}`, "success");

            // remove modal
            this.changed_phone = false;
          } else {
            this.$swal("", `${res.msg}`, "error");
          }
          this.disabled = false;
        });
    },

    // resend code
    async resendCode() {
      const fd = new FormData();
      fd.append("phone", localStorage.getItem("phone"));
      await this.$axios.$post("/code/resend", fd).then((res) => {
        if (res.key == "success") {
          this.getData();
          this.$swal("", `${res.msg}`, "success");
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
      });
    },
  },

  // beforeMount(){
  //   this.getData();
  // },

  mounted() {
    this.getCity();
    this.getCounrtyKey();
    this.getData();
    this.geolocation()
    this.getNations()
  },
};
</script>




<style>
.modal-footer {
  display: none;
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
.country_select{
    position: absolute;
    width: 100px !important;
    left: 0;
    top: 0;
    height: 51px;
}

</style>