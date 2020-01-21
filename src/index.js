import Modal from './components/Modal'

const components = {
  Modal
}

const install = function (Vue) {
  if (Vue._w_vue_installed) {
    return
  }
  Vue._w_vue_installed = true

  Object.keys(components).forEach((key) => {
    Vue.component(`w${key}`, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const VuePlugin = {
  install,
  ...components
}

export default VuePlugin
