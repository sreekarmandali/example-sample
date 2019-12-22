import mutations from '@/store/mutuations.js';
import actions from '@/store/actions.js';
import chai from 'chai';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import sinonChai from "sinon-chai";
let mock = new MockAdapter(axios);
chai.use(sinonChai);
import sinon from 'sinon';

var assert = chai.assert;
describe('SET USER MUTUATION', () => {
  const state = {
    users: []
  }
  it('calls store action "moduleActionClick" when button is clicked', () => {
    const users = [{ "name": "sreekar" }, { "location": "locations" }]
    mutations.SET_USERS(state, users)
    assert(state.users, users, "both r equal");

  })

})



describe("actions", () => {
  beforeEach(function () {
    mock.reset();
  });

  it("should process payload and commits mutation for successful GET for load user action", done => {
   let users= [{ "name": "sreekar", "location": "hyderabad", "itemcount": "3", "bill": "32000", "id": 1, "appliances": "Television,Mobiles" }, { "name": "espancio", "location": "france", "itemcount": "3", "bill": "64000", "id": 2, "appliances": "Television,Mobiles,Refridgerator" }, { "name": "TOorento", "location": "Dulhousie", "itemcount": "3", "bill": "34000", "id": 3, "appliances": "Television,Mobiles,Refridgerator" }, { "name": "mahesh", "location": "dellak", "itemcount": "2", "bill": "34000", "id": 3, "appliances": "Television,Mobile,Refridgerator" }]
    mock.onGet("http://localhost:8000/users").reply(200, users);
    let commit = (type, payload) => {
      assert(type, 'SET_USERS', "both r equal");
      assert(payload, users, "both r equal");
    };
    
    actions.loadUsers({ commit });
    done();
   
  });
  it("should process payload and dispatch loadUsers for successful Post for add user action", done => {
    let payload = { "name": "sreekar", "location": "hyderabad", "itemcount": "3", "bill": "32000", "id": 1, "appliances": "Television,Mobiles" };
    mock.onPost("http://localhost:8000/users/addUser/", payload).reply(200, 1);
    let dispatch = (type) => {
      assert(type, 'loadUsers', "both r equal");
      
    };

    actions.addUsers({ dispatch }, payload);
    done();

  });
  it("should process payload and commits mutation for successful POST for delete user action", done => {
    let payload = { "name": "sreekar", "location": "hyderabad", "itemcount": "3", "bill": "32000", "id": 1, "appliances": "Television,Mobiles" };
    mock.onPost("http://localhost:8000/users/delete/", payload).reply(200, 1);
    let dispatch = (type) => {
      assert(type, 'loadUsers', "both r equal");

    };

    actions.addUsers({ dispatch }, payload);
    done();

  });
  
  
});
