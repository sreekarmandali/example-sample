
import { shallowMount, createLocalVue } from "@vue/test-utils"
import detail from "@/components/DetailUser.vue"


import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)
describe('to check if ADD User Action is triggered', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      addUsers:jest.fn(),
      loadUsers: jest.fn(),
      deleteUsers: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('dispatches "addUser" when add button is clicked', () => {
    const wrapper = shallowMount(detail, { store, localVue })
    const addButton = wrapper.find('#addButton')
    
    addButton.trigger('click')
    expect(actions.addUsers).toHaveBeenCalled()
  })

  
})



