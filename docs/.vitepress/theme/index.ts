import DefaultTheme from 'vitepress/theme'
import './global.less' // global less
// import VueAmazingUI from 'vue-amazing-ui'
// import 'vue-amazing-ui/css'
import BizarreUI from '../../../dist/bizarre-ui'
import '../../../dist/style.css'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(BizarreUI)
  }
}
