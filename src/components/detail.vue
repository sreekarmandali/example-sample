<template>
  <div class="container2" >
    <div class="mobname">
      <h2>SampleApp</h2>
    </div>
    
      <div class=" row baccolor">


        <div class="col-md-12 col-sm-12">
          <h3>Screen1</h3>
        </div>
      </div>
   
      <div class=" text-center">
          <h3><mark>USER DETAILS</mark></h3>
      </div>
     
      <div class=" text-center">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Location</th>
                <th>No of Items</th>
                <th>Bill</th>
                <th>Actions</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="(element,index) in users">
                <td>{{index+1}}</td>
                <td class="someName">{{element.name}}</td>
                <td>{{element.location}}</td>
                <td>{{element.itemcount}}</td>
                <td>{{element.bill }}</td>

                <td>
                  <b-button class="btn btn-md  btn-default border" @click="modalShow = !modalShow; userInfo=element">
                    <i class="fa fa-pencil"></i>
                  </b-button><b-button class="btn btn-default border" @click="showMsgBoxOne(index)">
                    <i class="fa fa-trash"></i>
                  </b-button>
                </td>
              </tr>
              <tr>
                <td>{{users.length+1}}</td>
                <td><input type="text" v-model="name" placeholder="name"></td>
                <td><input type="text" v-model="location" placeholder="location"></td>
                <td><input type="text" v-model="itemcount" placeholder="nitems"></td>
                <td><input type="text" v-model="bill" placeholder="bill"></td>
                <td>
                  <button class="btn btn-default border" @click="addUser()">
                    <i class="fa fa-plus"></i>
                  </button>
                </td>


              </tr>
            </tbody>
          </table>
          <b-modal :title="'Items bought by '+userInfo.name" v-model="modalShow"><userInfo :userInfo="getUserInfo[userInfo.name]" :name="userInfo.name"></userInfo></b-modal>
          

        </div>
      </div>
    </div>
  

</template>
<script lang="js">
  import UserInfo from "@/components/User"; 
  export default {
    name: "detail",
    components: { UserInfo},
    data() {
      return {
        name: '',
        location: '',
        itemcount : '',
        bill:'',
        modalShow: false,
        userInfo: {}

      }
    },
    methods: {
      addUser() {
        this.$store.commit('addUser', { "name": this.name, "location": this.location, "itemcount": this.itemcount, "bill": this.bill });
        this.name = '';
        this.location = '';
          this.itemcount = '';
          this.bill = '';
      },

      showMsgBoxOne(index2) {
        this.boxOne = '';
        this.$bvModal.msgBoxConfirm('Are you sure?')
          .then(value => {
            this.boxOne = value
            if (value) {
              this.$store.commit('deleteUser',index2);


            }
          })
          .catch(err => {
            // An error occurred
          })
      },

    },
    computed :{
      users: function () {
       return  this.$store.getters.getUsers;
      },
      getUserInfo() {
        return this.$store.getters.getUserInfo;
      }

    }
    
    }

</script>
<style>
  
  .mobname {
     background-color:#343a40;
    padding-bottom:7px;
    width:107%;
  }
  .baccolor {
    background-color:rgb(158,152,152);
  }
  

  @media only screen and (min-width : 768px) and (max-width: 1605px) {

    .mobname {
      display:none;
    }
  }

  @media only screen and (max-width:600px) {
    .mobname {
      text-align:center;
      color:white;
      margin-top:auto;
      margin-bottom:auto;
    }
    
  }

  .modal-backdrop {
    background-color: rgb(0,0,0,0.1) !important;
  }
</style>
