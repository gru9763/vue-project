<template>
  <section class="ui column centered grid">
    <div class="column">
      <form class="ui segment large form">
        <div class="ui message red" v-show="errorMessage">
          {{ errorMessage }}
        </div>
        <div class="ui segment">
          <div class="field">
            <div class="ui right icon input large" :class="{loading:spinner}">
              <input type="text" v-model="address" placeholder="Enter your address" />
              <i class="dot circle link icon" @click="locatorButtonPressed"></i>
            </div>
          </div>
          <button class="ui button" @click.prevent="submitAddress">Go</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      address: '',
      errorMessage: "",
      apiKey : "AIzaSyDp5sCI29zfhO3moYZzjix6WsYHpypDx-o",

      spinner : false,
    };
  },
  methods: {

    locatorButtonPressed(){
      this.spinner = true;
      console.log(" locator button pressed ");
      if(navigator.geolocation){
        console.log("browser support geolocation ");
        navigator.geolocation.getCurrentPosition(position => { 
          console.log(position.coords.latitude);
          console.log(position.coords.latitude);
          this.getAddressFrom(position.coords.latitude,position.coords.longitude)
         },
        error => {
          this.spinner = false;
          console.log(error.message);
          this.errorMessage = error.message;
          })
      }else{
        this.spinner = false;
        console.log("browser does not support geolocation ");
        this.errorMessage ="browser does not support geolocation"
      }
    },

    getAddressFrom(lat,long){
      axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key="+`${this.apiKey}`)
      .then(response => { 
        console.log(response);
        if(response.data.error_message){
          this.spinner = false;
          console.log(response.data.error_message);
          this.errorMessage = response.data.error_message;
        }else{
          this.spinner = false;
          console.log(response.data.results[0].formatted_address);
          this.address = response.data.results[0].formatted_address;
        }
      })
      .catch(error => {
        this.spinner = false;
        console.log(error.message);
        this.errorMessage= error.message;
      })

    },

    submitAddress() {
      if (!this.address) {
        this.errorMessage = 'Please enter a valid address.';
        return;
      }
      this.errorMessage = null;
      console.log('Address submitted:', this.address);
    },
  },
};
</script>


<style scoped>
.ui.button,
.circle.icon{
  background-color: #ff5a5f;
  color: white;
}
</style> 

