<template>
  <div class="container2  ml-100">
    <div class="Mobname">
      <h2>SampleApp</h2>
    </div>

    <div class="row Baccolor">


      <div class="col-md-12 col-sm-12 ">
        <h3>Screen2</h3>
      </div>
    </div>

    <div class=" text-center">
      <h3><u>AVAILABLE APLLIANCES</u></h3>
    </div>
    <br />
    <div class="text-center">

     <div class="d-flex Deviceclass" v-for="element in devices">
       <ApplianceDetail :device="element" />

     </div>
    </div>
  </div>

</template>

<script>
  import ApplianceDetail from "@/components/ApplianceDetail";
 
export default {
    name: 'ApplianceHolder',
    components: { ApplianceDetail},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    },
    computed: {
      devices(){
       return  this.$store.getters.getDevices;
      }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .Mobname {
    background-color: #343a40;
    padding-bottom: 7px;
    width: 107%;
  }

  .Baccolor {
    background-color: rgb(158,152,152);
  }


  @media only screen and (min-width : 768px) and (max-width: 1605px) {

    .Mobname {
      display: none;
    }
  }

  @media only screen and (max-width:600px) {
    .Mobname {
      text-align: center;
      color: white;
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  .Deviceclass {
    float: left;
    align-content:center;
  }
</style>
