import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default {
    state:{title:{},show:false},
    getters:{
        fun(state){
          return state.title
        }
    },
    actions:{},
    mutations:{get(state,params){
      state.title=params.data
    },
     change(state){
        state.show=!state.show
     }
}
}