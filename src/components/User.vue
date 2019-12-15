<template>
  <div>
    <div class="container  hello" v-for="element in userInfo">

      <img :src="require('@/assets/'+element+'.jpeg')" :alt="element" height="75" width="75" />
      <br />
      <span><h4>{{element}}</h4></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "userInfo",
    data() {
      return {} 
    },
    props: {
      userInfo: Array,
      name:String
    },
    computed: {
      

    }
  }
  


</script>
<style></style>
