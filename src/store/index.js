import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from '@/router/index';
Vue.use(Vuex)

var state={
    img_list:[],
    left_list:[],
    right_list:[], //默认第一条数据
    particularsList:{},
}
var getters={
    img_list(){
        return state.img_list 
    },
    left_list(){
        return state.left_list
    },
    right_list(){
        return state.right_list
    },
    particulars(){
        return state.particularsList
    }
}
var actions={
    img_list_incident(ctx){
        axios.get('/ShowCatList')
        .then((res)=>{
                // console.log(res.data)
                ctx.commit('img_list_incident',res.data)
        })  
    },
    left_list(ctx,item){
        var params= new URLSearchParams();
        params.append("parent_id",item.id)
        axios.post('/ShowLeftItemList',params)
        .then((res)=>{
            ctx.commit("left_list",res.data)
        })
    },
    right_list(ctx,item){
        var params= new URLSearchParams();
        params.append('id',item.id)
        params.append('sort_order',item.sort_order)
        axios.post('/ShowRightItemList',params)
        .then((res)=>{
            ctx.commit("right_list",res.data)
        })
    },
    clickColor(ctx,obj){
        var params= new URLSearchParams();
        params.append('id',obj.id)
        params.append('sort_order',obj.sort_order)
        axios.post('/ShowRightItemList',params)
        .then((res)=>{
            ctx.commit("clickColor",res.data)
        })
    },
    particulars(ctx,id){
        var params = new URLSearchParams();
        params.append('id',id)
        axios.post('/ShowItemDetails',params)
        .then((res)=>{
            ctx.commit("particulars",res.data)
        })
    }

}
var mutations={
    img_list_incident(state,res){
        state.img_list=res
        // console.log(state.img_list)
    },
    left_list(state,data){
        // console.log(data)
        state.left_list=data

    },
    right_list(state,data){
        // console.log(data)
        state.right_list=data

    },
    clickColor(state,data){
        // console.log(data)
        state.right_list=data
    },
    particulars(state,data){
        // console.log(data)
        state.particularsList = data
        console.log(state.particularsList)
    }

}
export default new Vuex.Store({
	state,
	getters,
	actions,
    mutations,
    axios,
    router
	
})