import Vue from 'vue'
import Vuex from 'vuex'
import book from './book/book'
import user from './user'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
      book,
      user
  }
})
export default store
