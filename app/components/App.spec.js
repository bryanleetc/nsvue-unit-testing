import { shallowMount } from '@vue/test-utils';
import App from './App';

describe('App.vue', () => {
  it('mounts and renders', () => {
    const wrapper = shallowMount(App);

    expect(wrapper.html()).toBeTruthy();
  });
});