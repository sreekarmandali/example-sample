<template>
  
    <div class="row">
      <div class="col-sm-12"></div>
      <div class="col-sm-12">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <a class="navbar-brand" href="#">Viruals</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="nav-link" href="#/detail">Users </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/hello">User Appliances</a>
              </li>

              
            </ul>

          </div>


        </nav>
      </div>

    </div>

  


  
</template>
<script>
  export default {
    name:"headerhead",
    data() {
      return {
        greeting: 'Hello'
      }
    }
  }



</script>
<style>
  @media only screen and (min-width : 768px) and (max-width: 1605px) {



  }


  @media only screen and (max-width:600px) {




    nav {
      height: 95%;
      width: 66%;
    }

    .navbar-brand {
      display: none;
    }
  }
</style>
