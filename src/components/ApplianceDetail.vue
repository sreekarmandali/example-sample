<template>
  
  <div class="container  hello">
    
    <img :src="require('@/assets/'+device.image)"   :alt="device.name" height="300" width="300"/>
    <br />
    <span><h4>Name:{{device.name}}</h4></span> 
    <span><h4>Price:{{device.price}}</h4></span>
   
  </div>


</template>
<script>

  export default {
    name: "ApplianceDetail",
    data() {
      return {
        
      }
    },
    props: {
      device: Object,
      key: Number
    },
    methods: {
      

    }
  }

</script>
<style scoped>
  .hello {
    border-style: solid;
    border-color: #e0e0d1;
  }

</style>
