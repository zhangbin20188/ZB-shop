<template>
    <div class="wrap">
        <div class="wrap-header">
            <div @click="returnHot"><i class="iconfont icon-fanhui1"></i></div>
            <div class="wrap-text"><i>活动详情</i></div>
            <div><i class="iconfont icon-fenxiang1 iconfen"></i></div>
        </div>
        <div class="wrap-content">
            <div>
                <div class="bg-img">
                    <img :src="this.hotArray.imges">
                    </div>
                    <div class="text">
                    <p class="title">{{this.hotArray.title}}</p>
                    <!-- <p>日琰荔枝三百颗,不辞长岭南人！</p>
                    <p>日琰荔枝三百颗,不辞长岭南人！日琰荔枝三百颗,不辞长岭南人！</p>
                    <p>日琰荔枝三百颗,不辞长岭南人！日琰荔枝三百颗,不辞长岭南人！</p>
                    <p>日琰荔枝三百颗,不辞长岭南人！日琰荔枝三百颗,不辞长岭南人！</p>
                    <p class="way-title">报名方式：</p>
                    <p class="way-text">打开社会飒飒飒飒会计数据卡卡激活手机号</p> -->
                    <p v-html="this.hotArray.details"></p>
                </div>
            </div>

            <div class="buttom-img">
                <div class="bg-left-img">
                    <img src="../../classify/image/bg.jpg">
                </div>
                <div class="bg-right-text">
                    <p>火山妃子笑荔枝 500g</p>
                    <p class="money"><span>￥12.90</span><span>/盒</span></p>
                </div>
            </div>

            <div class="right-txt">
                <span>往期抢鲜试吃</span>
                <span><i class="iconfont icon-xiangyou1"></i></span>
            </div>
        </div>

        <div class="hotTime">
            <div class="hotTime-list">
                <div><i class="iconfont icon-time1"></i></div>
                <div>
                    <p class="hot-time">活动时间</p>
                    <p class="hot-title">收到赠品卷的盒粉请尽快到门店领取哟</p>
                    <p class="apply-time">报名时间</p>
                    <p class="apply-title">05月20日 10：:00-05月23日 23:59</p>
                </div>
            </div>

            <div class="hotTime-list">
                <div><i class="iconfont icon-dizhi1 icondizhi"></i></div>
                <div>
                    <p class="hot-time">活动地点</p>
                    
                </div>
            </div>

            <div class="hotTime-list">
                <div><i class="iconfont icon-renshutongji iconpeople"></i></div>
                <div>
                    <p class="hot-time">报名人数</p>
                    <p class="hot-title">380/2000人</p>
                </div>
            </div>

            <div class="hotTime-list">
                <div><i class="iconfont icon-huodong iconhuodong"></i></div>
                <div>
                    <p class="hot-time">活动费用</p>
                    <p class="hot-title">免费</p>
                </div>
            </div>

        </div>

        <div class="footbar">
            <div class="nav-footbar">
                <span>申请报名</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'hot_children',
    data(){
        return {
            hotArray:[],
        }
    },
    created(){
        this.reload()
    },
    methods:{
        returnHot(){
            this.$router.push({name:'community'})
        },
        reload(){
            // console.log(this.$route.params.item.id)
            var params= new URLSearchParams();
            params.append("id",this.$route.params.item.id) //id
            axios.post('/getActivityByID',params)
              //then获取成功；response成功后的返回值（对象）
 
            .then(response=>{

        
                this.hotArray=response.data;
                console.log(this.hotArray)
            })
        },
    }
}
</script>

<style scoped>
    .wrap{
        width: 100%;
        height: 100%;
    }
    i{
        font-style: normal
    }
    .wrap-header{
        background: white;
        padding: 10px 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e5e5ee
    }
    .wrap-header div:first-child{
        width: 10%;
    }
    .wrap-header div:first-child i{
        font-size: 27px;
    }
    .wrap-header div:last-child{
        width: 10%;
    }
    .wrap-header div:last-child i{
        font-size: 27px;
    }
    .wrap-text{
        width: 80%;
        text-align: center;
        font-size: 18px;
    }
    .wrap-content{
        background: white;
        width: 100%;
        height: 100%;
        padding: 0 15px;
        box-sizing: border-box;
    }
    .bg-img{
        padding-top:13px; 
        width: 100%;
        height: 150px;
        border-radius:7px;
    }
    .bg-img img{
        width: 100%;
        height: 100%;
        border-radius:7px; 
    }
    .title{
        font-size: 18px;
    }
    .hotTime{
        width: 100%;
        background: white;
        margin-top: 11px;
        padding: 15px 15px;
        box-sizing: border-box;
        padding-bottom: 59px;
    }
    .hotTime-list{
        display: flex;
        margin-bottom: 15px;
    }
    .hotTime-list div:first-child{
        width: 5%;
        font-weight: bold
    }
    .hotTime-list div:last-child{
        width: 95%;
        background: red；
    }
    .hotTime-list div:last-child p{
        margin-top: 0;
        margin-bottom: 5px;
        margin-left: 8px;

    }
    .hot-time,.apply-time{
        font-weight: bold;
        font-size: 15px;
    }
    .hot-title,.apply-title{
        font-size: 14px;
        color: #acacac;
    }
    .icondizhi{
        font-size: 22px;
        margin-left: -4px;
    }
    .iconpeople{
        font-size: 22px;
        margin-left: -4px;
    }
    .iconhuodong{
        font-size: 22px;
        margin-left: -4px;
    }
    .way-title,.way-text{
        margin-bottom: 0;
        margin-top: 0
    }
    .buttom-img{
        width: 100%;
        /* height: 100px; */
        padding: 10px 10px;
        box-sizing: border-box;
        background: #f5f5f5;
        display: flex;
        overflow: hidden;
        margin-bottom: 10px;
        margin-top: 15px;
    }
    .buttom-img div:first-child{
        width: 25%;
        height: 80px;
    }
    .buttom-img div:last-child{
        width: 70%
    }
    .bg-left-img{
        background: white;
        height: 50px;
        border-radius:5px; 
    }
    .bg-left-img img{
        width: 100%;
        height: 100%;
        border-radius:5px; 
    }
    .bg-right-text p{
        margin: 0;
        padding-left: 10px;
    }
    .bg-right-text p:first-child{
        margin-bottom: 40px;
    }
    .money span:first-child{
        color: #fe4544;
        font-weight: bold
    }
    .money span:last-child{
        color: #dfdfdf;
        font-weight: bold
    }
    .right-txt{
        width: 100%;
        padding: 10px 5px;
        box-sizing: border-box;
        text-align: right
    }
    .right-txt span{
        color: #999999;
    }
    .footbar{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: white;
        overflow: hidden;
        padding: 7px 0;
        box-sizing: border-box;
    }
    .nav-footbar{
        width: 94%;
        margin: 0 auto;
        border-radius:20px;
        background: red;
        height: 40px; 
        text-align: center;
        line-height: 40px;
        color: white;
        font-size: 18px;
        background: #09b6ff;
    }
</style>

