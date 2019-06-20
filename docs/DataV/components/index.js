import devcmp from './devcmp/index'

// border box
import borderBox1 from './borderBox1/index'
import borderBox2 from './borderBox2/index'
import borderBox3 from './borderBox3/index'
import borderBox4 from './borderBox4/index'
import borderBox5 from './borderBox5/index'
import borderBox6 from './borderBox6/index'
import borderBox7 from './borderBox7/index'

// decoration
import decoration1 from './decoration1/index'
import decoration2 from './decoration2/index'
import decoration3 from './decoration3/index'
import decoration4 from './decoration4/index'
import decoration5 from './decoration5/index'
import decoration6 from './decoration6/index'
import decoration7 from './decoration7/index'

// charts
import charts from './charts/index.vue'

// special chart
import waterLevelPond from './waterLevelPond/index.vue'
import percentPond from './percentPond/index.vue'
import flylineChart from './flylineChart'

// other

import loading from './loading/index.vue'

import capsuleChart from './capsuleChart/index.vue'
import arcRingChart from './arcRingChart/index.vue'

import numberShow from './numberShow/index.vue'
import percentArc from './percentArc/index.vue'
import scrollBoard from './scrollBoard/index.vue'

import fullScreenContainer from './fullScreenContainer'

export default function (Vue) {
  Vue.component('devcmp', devcmp)

  // border box
  Vue.component('dvBorderBox1', borderBox1)
  Vue.component('dvBorderBox2', borderBox2)
  Vue.component('dvBorderBox3', borderBox3)
  Vue.component('dvBorderBox4', borderBox4)
  Vue.component('dvBorderBox5', borderBox5)
  Vue.component('dvBorderBox6', borderBox6)
  Vue.component('dvBorderBox7', borderBox7)

  // decoration
  Vue.component('dvDecoration1', decoration1)
  Vue.component('dvDecoration2', decoration2)
  Vue.component('dvDecoration3', decoration3)
  Vue.component('dvDecoration4', decoration4)
  Vue.component('dvDecoration5', decoration5)
  Vue.component('dvDecoration6', decoration6)
  Vue.component('dvDecoration7', decoration7)

  // charts
  Vue.component('dvCharts', charts)

  // special chart
  Vue.component('dvWaterLevelPond', waterLevelPond)
  Vue.component('dvPercentPond', percentPond)
  Vue.component('dvFlylineChart', flylineChart)

  // other

  Vue.component('loading', loading)

  Vue.component('capsuleChart', capsuleChart)
  Vue.component('arcRingChart', arcRingChart)

  Vue.component('numberShow', numberShow)
  Vue.component('percentArc', percentArc)
  Vue.component('scrollBoard', scrollBoard)

  Vue.component('fullScreenContainer', fullScreenContainer)
}
