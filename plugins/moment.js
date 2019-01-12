import Vue from 'vue';
import moment from 'moment'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('dddd, MMMM Do YYYY, HH:MM:SS a')
  }
})