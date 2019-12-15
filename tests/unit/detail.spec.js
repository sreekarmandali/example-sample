
import { shallowMount, createLocalVue } from "@vue/test-utils"
import detail from "@/components/detail.vue"
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store({
  state: {
    users: [{ "name": 'sreekar', "location": 'hyderabad', "itemcount": '2', "bill": '10000' }, { "name": 'srinivas', "location": 'Mumbai', "itemcount": "2", "bill": "20000" },
    { "name": 'maggie', "location": 'delhi', "itemcount": '2', "bill": "30000" }]
    
  }
})


describe('detail check', () => {
  it("renders a username using computed mounting options", () => {
    const wrapper = shallowMount(detail, { store, localVue })
    const users = wrapper.findAll(".someName");
    expect(users).toHaveLength(2);
  })
 
  
});



