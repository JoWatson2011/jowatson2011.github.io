// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  CoGithub,
  BiLinkedin,
  ViFileTypeDjango,
  ViFileTypeJsOfficial,
  ViFileTypePython,
  ViFileTypeRproj,
  ViFileTypePgsql,
  ViFileTypeReactjs,
  ViFileTypeHtml,
  ViFileTypeTailwind,
  ViFileTypeTypescriptOfficial,
  SiExpress,
  SiGnubash,
  CoSocketIo,
  BiArchiveFill,
  IoDocumentText,
  BiEnvelopeOpenFill,
  BiGlobe,
  RiArrowUpSLine,
  RiTestTubeLine,
  LaUniversitySolid,
  CoNextJs
} from 'oh-vue-icons/icons'
import './assets/tailwind.css'

addIcons(
  CoGithub,
  BiLinkedin,
  ViFileTypeDjango,
  ViFileTypeJsOfficial,
  ViFileTypePython,
  ViFileTypeRproj,
  ViFileTypePgsql,
  ViFileTypeReactjs,
  ViFileTypeHtml,
  ViFileTypeTailwind,
  ViFileTypeTypescriptOfficial,
  SiExpress,
  SiGnubash,
  CoSocketIo,
  BiArchiveFill,
  IoDocumentText,
  BiEnvelopeOpenFill,
  BiGlobe,
  RiArrowUpSLine,
  RiTestTubeLine,
  LaUniversitySolid,
  CoNextJs
)

const app = createApp(App)

app.use(router)
app.component('v-icon', OhVueIcon)

app.mount('#app')
