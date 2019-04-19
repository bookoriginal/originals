import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default {
    state:{
        phone: ''
    },
    getters:{
        changePhone(state){
          return state.phone
        }
    },
    actions:{},
    mutations:{
        getPhone(state,params){
            console.log(params)
            state.phone=params
        }
    }
}