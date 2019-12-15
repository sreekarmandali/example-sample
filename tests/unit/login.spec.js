
import { shallowMount } from '@vue/test-utils';
import login from '@/components/login.vue';
import sinon from 'sinon';
import Router from 'vue-router';



describe('login  page', () => {
  let wrapper;
  let componentInstance;
  let mockRouter;
 beforeEach(() => {
    mockRouter = {
      push: sinon.spy()
    };
    wrapper = shallowMount(login, {
      mocks: {
        $router: mockRouter
      }, data() {
        return { name: 'sreekar', password: 'sreekar' }
      },

  });
  componentInstance = wrapper.vm;
  });
  it('navigates to the home page', () => {
    componentInstance.loginSubmit();
    sinon.assert.calledWith(mockRouter.push, { name: 'detail' });
  });
});


