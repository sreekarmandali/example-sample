<template>
  <div id="app">
    <div class="headercontent">
      <TheHeading v-if="$router.currentRoute.path!='/'"></TheHeading>
    </div>
    <div class="samplecontent">
      <router-view />
    </div>
  </div>
</template>

<script>
  import TheHeading from '@/components/TheHeading'
  export default {
    name: 'App',
    components: { TheHeading }
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
