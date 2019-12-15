<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card  border">
        <div class="card-header">
          <h1>Login</h1>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" class="form-control" v-model="name" placeholder="user@tcs.com">
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input type="text" class="form-control" v-model="password"  placeholder="A123@">
            </div>
            <button type="submit" class="btn btn-primary" @click="loginSubmit()">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>
<script lang="js">
  export default {
    name: "login",
    data(){
      return {
        name: "",
        password:""
      }
    },
    methods:{
      loginSubmit:function() {
        if (this.name == 'sreekar' && this.password== "sreekar") {

          this.$router.push({ name: 'detail' })

        }
      }

    }
    }
  
</script>
<style>
  .container {
    height: 100%;
    align-content: center;
  }

  .card {
    height: 370px;
    width: 400px;
    background-color: #BFC9CA;
    margin-top: auto;
    margin-bottom: auto;
    border-style: solid;
    border-color: #33B5FF;
  }
  @media only screen and (min-width : 768px) and (max-width: 1605px) {
    .card {
      margin-top: 113px !important;
    }
  }

  @media only screen and (max-width:600px) {
    .card {
      margin-top: 20px !important;
    }
  } 
</style>
