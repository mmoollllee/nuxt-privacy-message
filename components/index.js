import Vue from 'vue'
import component from './lib/cookieMessage.vue'
// get options passed from module.js
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
  Vue.component(component, {
    extends: components[component],
    // add a _cookieMessageOptions prop to gain access to the options in the component
    props: {
      _cookieMessageOptions: {
        type: Object,
        default: () => ({ ...options })
      }
    }
  })
