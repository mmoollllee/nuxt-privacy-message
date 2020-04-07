// store/index.js
import cookieModule from './modules/cookies'
// get the options out using lodash templates
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// extract the namespace var
const { namespace } = options
// create the plugin
export default ({ store }, inject) => {
  // register the module using namespace as the name.
  // cookie module takes the options object and returns an object that is a
  // vuex store defenition
  store.registerModule(namespace, cookieModule(options), {
    preserveState: Boolean(store.state[namespace]) // if the store module already exists, preserve it
  })
}
