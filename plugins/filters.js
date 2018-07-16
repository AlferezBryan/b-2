import Vue from 'vue'
import Moment from 'moment'

const fn = v => process.env.API_URL + '/storage' + v
Vue.filter('apimage', fn)
Vue.mixin({
  methods: {
    apimage: fn
  }
})

Vue.filter('formatDate', v => Moment(String(v)).format('YYYY/MM/DD hh:mm'))
