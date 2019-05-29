<template>
    <div class="wrap">
        <div class="wra-hed">
            <div><i class="iconfont icon-fanhui1 return" @click="returnShopcart"></i></div>
            <div><span class="confirm">确认订单</span></div>
        </div>

        <div class="wra-center">
            <div><i class="iconfont icon-dizhi1 icongis"></i></div>
            <div>
                <span>华南理工大学(五山校区)叫姐姐</span>
                <p><span>哈哈</span><span>1333133252451</span></p>
            </div>
            <div><i class="iconfont icon-xiangyou1 iconXiang"></i></div>
        </div>

        <div class="content-list">

            <div class="wra-time">
                <div class="time-head">
                    <div><i class="iconfont icon-time1 iconTime"></i></div>
                    <div><span>送达时间</span></div>
                    <div><span>选择送达时间</span></div>
                    <div><i class="iconfont icon-xiangyou1 iconRight"></i></div>
                </div>

                <div class="list-right">
                    <div class="list-img">
                        <img :src="this.confirmList.pic_path">
                    </div>

                    <div class="list-text">
                        <p class="list-text-title">{{this.confirmList.title}}</p>
                        <div class="standard">
                            <!-- <span>规格：<i>750ml</i></span> -->
                            <span>{{this.confirmList.norm}}</span>
                        </div>
                        <div class="standard">
                            <span>单价:<i>￥<span>{{this.confirmList.price}}</span>/瓶</i></span>
                        </div>
                        <div class="standard">
                            <span>数量:<i>{{this.confirmList.num}}</i>瓶</span>
                        </div>
                    </div>
                </div>

                <div class="confirmTotal">
                    <p><span class="total">小计：</span><span>￥<i>{{this.confirmList.price}}</i></span></p>
                </div>
            </div>
  
        </div>

        <div class="wra-bottom">
            <div>发票</div>
            <div>不开发票<i class="iconfont icon-xiangyou1"></i></div>
        </div>

        <div class="fixed-bottom">
            <div><span class="totalBottom"><span>合计：</span><span class="money">￥<i>328.00</i></span></span></div>
            <div>提交订单</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'pages',
    data(){
        return {
            confirmList:[]
        }
    },
    created(){
        this.reload()
    },
    methods:{
        returnShopcart(){
            this.$router.push({name:'shopcart'})
        },
        reload(){
            axios.get('/ConfirmOrdes?cartid='+this.$route.params.id+'')
 
              //then获取成功；response成功后的返回值（对象）
 
            .then(response=>{
                this.confirmList = response.data.data.hmCart
                console.log(this.confirmList);
        
            })
        }
    },
    computed:{
        joinPages(){
            return this.$store.getters.joinPages
        }
    }
}
</script>

<style scoped>
    i{
        font-style: normal
    }
    .wrap{
        width: 100%;
        height: 100%;
    }
    .wra-hed{
        display: flex;
        height: 50px;
        align-items: center;
        background: white;
        border-bottom: 1px solid #dddddd
    }
    .wra-hed>div:first-child{
        width: 15%;
        text-align: center;
    }
    .wra-hed>div:last-child{
        width: 85%;
        font-size: 18px;
        text-indent: 100px;
    }
    .return{
        font-size: 22px;
    }
    .wra-center{
        display: flex;
        padding: 10px 10px;
        background: white
    }
    .wra-center>div:first-child{
        flex: 5%;
    }
    .wra-center>div:nth-child(2){
        flex: 80%;
    }
    .wra-center>div:last-child{
        flex: 5%;
        text-align: center
    }
    .wra-center>div:nth-child(2)>span{
        font-weight: bold
    }
    .wra-center>div:nth-child(2) p{
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 15px;
    }
    .wra-center>div:nth-child(2) p span:last-child{
        margin-left: 10px;
    }
    .icongis,.iconXiang{
        font-size: 19px;
        color: #999
    }
    .wra-time{
        margin-top: 10px;
        padding: 10px 10px;
        background: white
    }
    .time-head{
        display: flex;
    }
    .time-head>div:first-child{
        width: 5%;
    }
    .time-head>div:nth-child(2){
        width: 45%;
        text-indent: 10px;
        font-size: 15px;
    }
    .time-head>div:nth-child(3){
        width: 45%;
        text-align: center;
        font-size: 15px;
        color: #64c4dc;
        font-weight: bold;
        text-indent: 30px;
    }
    .time-head>div:last-child{
        width: 5%;
        margin-right: 5px;
    }
    .iconTime{
        color: #999;
        font-weight: bold
    }
    .iconRight{
        font-size: 15px;
        color: #999
    }
    .list-right{
        margin-top: 15px;
        width: 100%;
        display: flex;
        background: #fafafa;
        border-radius:7px; 
    }
    .list-img{
        margin-top: 15px;
        margin-left: 10px;
        width: 85px;
        height: 85px;
        border-radius:5px; 
    }
    .list-img img{
        width: 100%;
        height: 100%;
        border-radius:5px; 
    }
    .list-text{
       flex: 1;
       margin-left: 10px;
       padding-bottom: 15px;
       
    }
    .list-text-title{
        font-size: 16px;
        font-weight: bold;
        display: -webkit-box; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical; 
        overflow: hidden;
        margin-bottom: 10px;
    }
    .standard{
        font-size: 15px;
        color: #94908d;
    }
    .confirmTotal{
        width: 100%;
        text-align: right;
        height: 21px;
    }
    .confirmTotal p span:last-child{
        font-size: 15px;
        color: #dc766a;
    }
    .confirmTotal p span:last-child i{
        font-size: 18px;
        font-weight: bold;
    }
    .total{
        font-size: 15px;
        color: #a9a9a9;
    }
    .wra-bottom{
        margin-top: 10px;
        padding: 10px 10px;
        background: white;
        display: flex
    }
    .wra-bottom>div{
        flex: 1
    }
    .wra-bottom>div:first-child{
        font-size: 15px;
        color: #999;
    }
    .wra-bottom>div:last-child{
        text-align: right
    }
    .wra-bottom>div:last-child i{
        font-size: 15px;
        color: #999;
        margin-left: 15px;
    }
    .fixed-bottom{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        align-items: center;
        background: white;
        display: flex
    }
    .totalBottom{
        margin-right: 20px;
    }
    .fixed-bottom>div:first-child{
        width: 65%;
        text-align: right
    }
    .fixed-bottom>div:first-child span{
        font-size: 15px;
        color: #999;
    }
    .fixed-bottom>div:last-child{
        width: 35%;
        height: 60px;
        line-height: 60px;
        background: #0ab1ff;
        text-align: center;
        color: white;
        font-size: 17px;
    }
    .fixed-bottom>div:first-child .money{
        color: #df5052;
        font-weight: bold
    }
    .fixed-bottom>div:first-child .money i{
        font-size:18px;
    }
</style>
