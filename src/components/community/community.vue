<template>
    <div class="wrap">
        <div class="details">
            <div class="title"><span class="dot right"><span class="left-dot">·</span><span>·</span></span>热门活动 · <span class="detail">HOT TOPIC</span><span class="dot left"><span class="left-dot">·</span><span>·</span></span></div>
        </div>
        <div class="wrap-content">
            <div class="content-list" v-for="(item,index) in hotArray" :key="index" @click="joinHot(item)">
                <span><i class="iconfont icon-fuli iconfuli"></i></span>
                <span>{{item.title}}</span>
                <div class="bg-img">
                    <img :src="item.imges">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:"community",
    data(){
        return {
            hotArray:[]
        }
    },
    created(){
        this.reload()
    },
    methods:{
        reload(){
            axios.get('/ActivityList')
 
              //then获取成功；response成功后的返回值（对象）
 
            .then(response=>{
        
                // console.log(response);
        
                this.hotArray=response.data;
        
            })
        },
        joinHot(item){
            console.log(item)
            this.$router.push({name:'hot_children',params:{item}})
        }
    }
    
}
</script>
<style scoped>
    i{
        font-style: normal;
    }
    .wrap{
        width: 100%;
        height: 100%;
        padding-bottom: 62px
    }
    .details{
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        font-size: 14px ;
        text-align: center
    }
    .dot{
        font-size: 16px;
        color: #dddddd;
        font-weight: bold
    }
    .detail{
        color: #09afff
    }
    .right{
        margin-right: 10px
    }
    .left{
        margin-left: 10px
    }
    .left-dot{
        margin-right: -4px
    }
    .content-list{
        padding: 10px 15px;
        box-sizing: border-box
    }
    .wrap-content{
        width: 100%;
        height: 100%;
    }
    .content-list{
        width: 90%;
        background: white;
        margin: 0 auto;
        border-radius:7px; 
        margin-bottom: 10px;
    }
    .content-list:last-child {
        margin-bottom: 0
    }
    .iconfuli{
        font-size: 18px;
        color: #09afff
    }
    .content-list span:last-child{
        font-weight: bold
    }
    .bg-img{
        width: 100%;
        height: 150px;
        border-radius:7px;
        margin-top: 10px; 
    }
    .bg-img img{
        width: 100%;
        height: 100%;
        border-radius:7px; 
    }
</style>