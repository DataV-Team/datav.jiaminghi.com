import auxiliary from '../auxiliary/index'

import dataV from '../DataV/index'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(auxiliary)
  Vue.use(dataV)
}
