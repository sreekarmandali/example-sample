<template>
  <div id="app">
    <div class="Headercontent">
      <TheHeading v-if="$router.currentRoute.path!='/'"></TheHeading>
    </div>
    <div class="Samplecontent">
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

    .Headercontent {
      z-index: 10;
      position: absolute;
    }
   
    .Sampleontent {
      z-index: -3;
      position: absolute;
    }
  }

</style>
