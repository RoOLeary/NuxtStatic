import Vue from 'vue';
import moment from 'moment'

Vue.filter('formatPostDate', function(value) {
  if (value) {
    return moment(String(value)).format('dddd, MMMM Do YYYY, HH:MM:SS a')
  }
})