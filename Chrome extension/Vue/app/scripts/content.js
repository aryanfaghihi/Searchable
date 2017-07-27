var div = document.createElement("div");
div.id = 'searchbox'
document.getElementsByClassName("home-header")[0].appendChild(div);

import Vue from 'vue';
import Searchbox from '../component/searchbox.vue';
import KeenUI from 'keen-ui';

Vue.use(KeenUI);

var app=new Vue({
  el:'#searchbox',
  data:{
    name:'Search now'
  },
  components: {},
  render: h =>h(Searchbox)
})