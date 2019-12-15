<template>
  <div id="app">
    <div class="headercontent">
      <heading v-if="$router.currentRoute.path!='/'"></heading>
    </div>
    <div class="samplecontent">
      <router-view />
    </div>
  </div>
</template>

<script>
import heading from '@/components/header'
  export default {
    name: 'App',
    components: { heading }
}
</script>

<style>
  @media only screen and (max-width:600px) {

    .headercontent {
      z-index: 10;
      position: absolute;
    }
   
    .sampleconatent {
      z-index: -3;
      position: absolute;
    }
  }

</style>
