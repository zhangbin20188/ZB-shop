<template>
    <div class="me">
        <div class="top_img">
            <div class="top_opsion">
                <router-link tag="i" class="iconfont icon-shezhi" to="/me_children_set"></router-link>
                <router-link tag="i" class="iconfont icon-kefu" to="/"></router-link>
            </div>
            <div class="top_img_info">
                <div class="top_img_info_items">
                    <div class="top_img_info_img">
                        <img src="./image/head_portrait.jpg">
                    </div>
                    <div class="top_img_info_contents">
                        <p>{{your_name}}</p>
                        <p>
                            <i class="iconfont icon-saoyisao"></i>
                            <i class="iconfont icon-ico"></i>
                        </p>

                    </div>
                    <div class="top_img_info_contents_items">
                        <router-link tag="div" to="/me_children_ticket">
                            <span>2</span>
                            <p>优惠券/赠品卷</p>
                        </router-link>
                        <router-link tag="div" to="/me_children_account">
                            <span>100.00</span>
                            <p>我的账户</p>
                        </router-link>
                        <router-link tag="div" to="/me_children_serve">
                            <span>0</span>
                            <p>服务包/电子卷</p>
                        </router-link>
                    </div>
                </div>

                
            </div>
            <div class="top_img_infos"></div>

        </div>
        <div class="body_contents">
                <div class="body_contents_title">
                    <p>订单详情</p>
                    <p>查看更多订单<i class="iconfont icon-jiantou"></i></p>
                </div>
                <div class="body_contents_items">
                    <div>
                        <div class="num_float" v-if="kuang">
                           {{kuang}}
                        </div>
                        <i class="iconfont icon-daifukuan"></i>
                        <p>待付款</p>
                    </div>
                    <div>
                        <div class="num_float" v-if="fa_huo">
                            {{fa_huo}}
                        </div>
                        <i class="iconfont icon-daifahuo"></i>
                        <p>待发货</p>
                    </div>
                    <div>
                        <div class="num_float" v-if="shou_huo">
                            {{shou_huo}}
                        </div>
                        <i class="iconfont icon-che2"></i>
                        <p>待收货</p>
                    </div>
                    <div>
                        <div class="num_float" v-if="ping">
                           {{ping}}
                        </div>
                        <i class="iconfont icon-daipingjia"></i>
                        <p>待评价</p>
                    </div>
                </div>
                <div class="body_contents_new_items">
                    <div>最新订单</div>
                    <div>
                        <div class="body_contents_new_items_img">
                            <img src="./image/head_portrait.jpg" >
                        </div>
                        <div class="body_contents_new_items_info">
                                <p>待付款  </p>
                                <p>15分钟后订单关闭</p>
                        </div>
                    </div>
                </div>
        </div>

        <div class="body_contents_info">
            <div>
                <img src="./image/head_portrait.jpg">
                <div>
                    <p>鳄鱼小镇</p>
                    <p>0元免费换</p>
                </div>
            </div>
            <div>
                <img src="./image/head_portrait.jpg">
                <div>
                    <p>新人签到</p>
                    <p>砸彩蛋 抽好礼</p>
                </div>
            </div>

        </div>
        <div class="body_contents_instrument">
            <div class="body_contents_title ddddd">
                    <p>常用工具</p>
            </div>
            <div class="body_contents_instrument_info">
                <div v-for="(item,index) in cang_list" :key="index">
                    <i class="iconfont" :class="item.icons"></i>
                    <div>{{item.title}}</div>
                    <div>{{item.test}}</div>
                </div>
                


            </div>
        </div>
        <div class="body_contents_instrument_push_title">
            ———&nbsp;&nbsp; <span>我常买•<a>FAVORITE</a></span> &nbsp;&nbsp; ———
        </div>
        <div class="body_contents_instrument_push">
            <div v-for="(item,index) in shop_llist" :key="index"> 
                <img :src="item.image" >
                <p>{{item.title}}</p>
                <div>
                    <p>￥{{item.price}}</p>
                    <p><span class="iconfont icon-gouwuche"></span></p>
                </div>
            </div>
        </div>

        <div class="bottom"></div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"me",
    data(){
        return{
            your_name:'小仙女',
            kuang:2,
            fa_huo:95,
            shou_huo:1,
            ping:'',
            cang_list:[
                {id:1,icons:'icon-haoyou',title:'邀请有礼',test:'各自得5元'},
                {id:2,icons:'icon-q07',title:'鳄鱼门店',test:''},
                {id:3,icons:'icon-xiaozhen',title:'鳄鱼小镇',test:'0元换好货'},
                {id:4,icons:'icon-qingcai',title:'买菜券',test:'充值送好礼'},
                {id:5,icons:'icon-iconfontquan',title:'兑换优惠券',test:''},
                {id:6,icons:'icon-liwu',title:'新人奖',test:'连签赢大奖'},
                {id:7,icons:'icon-fapiaocuti',title:'开发票',test:''},
                {id:8,icons:'icon-kefu1',title:'鳄鱼小丽',test:'有问题找小丽'}
            ],
            shop_llist:[]

        }
    },
    created(){
        axios.get('/HmItemPush').then((res)=>{
                // console.log(res.data)
                this.shop_llist=res.data

        })
    }
    
}
</script>
<style scoped>
.body_contents_instrument_push>div>div>p:nth-child(2) span{
    font-size: 0.27rem;
    color: #00c5ff;
}
.body_contents_instrument_push>div>div>p:nth-child(1){
    color: #c6535a;

}
.body_contents_instrument_push>div>div>p{
    margin: 0.05rem 0;
    font-size: 0.2rem;
}
.body_contents_instrument_push>div>div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.05rem;
}
.body_contents_instrument_push>div p{
    font-size: 0.14rem;
}
.body_contents_instrument_push>div img{
    width: 1.5rem;
    height: 1.5rem;
}
.body_contents_instrument_push>div>p:nth-child(3){
    font-size: 0.14rem;
    color: #bcb9b9;
}
.body_contents_instrument_push>div>p{
    width: 100%;
    margin: 0.025rem;
    overflow: hidden;/*内容超出后隐藏*/
    text-overflow: ellipsis;/* 超出内容显示为省略号*/
    white-space: nowrap;/*文本不进行换行*/
}
.body_contents_instrument_push>div{
    width: 48%;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding: 0.1rem 0.025rem;
}
.body_contents_instrument_push{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
.body_contents_instrument_push_title span a{
    color: #85bcbc;
}
.body_contents_instrument_push_title span{
    font-weight: bold;
}
.body_contents_instrument_push_title{
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:  0.05rem 0;
}
.body_contents_instrument_info>div div:nth-child(2){
    color: #bcb9b9;
    font-size: 0.14rem;
    margin: 0;
}
.body_contents_instrument_info>div div:nth-child(3){
    color: #ff493f;
    width: 100%;
    height: 0.05rem;
    font-size: 0.1rem;
}
.body_contents_instrument_info>div div{
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.1rem;
}
.body_contents_instrument_info>div i{
    font-size: 0.28rem;
    color: #00c5ff;
}
.body_contents_instrument_info>div{
    flex: 23%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding: 0.1rem;
    box-sizing: border-box;

}
.body_contents_instrument_info{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
}
.body_contents_instrument .ddddd p{
    display: flex;
    align-items: center;
    padding:0 0.1rem ;
    box-sizing: border-box;
}
.body_contents_instrument{
    width: 100%;
    background: #fff;
    margin-top: 0.1rem;
}
.body_contents_items>div{
    position: relative;
    margin-top: 0.1rem;
}
.num_float{
    position: absolute;
    left: 0.55rem;
    top: -0.1rem;
    width: 0.18rem;
    height: 0.18rem;
    border: #00c5ff solid 0.02rem;
    border-radius: 50%;
    color: #00c5ff;
    font-size: 0.12rem;

}
.body_contents_info>div:nth-child(1){
    border-right:0.02rem solid #f0f0f0;
}
.body_contents_info>div img{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;

}
.body_contents_info>div>div p:nth-child(1){
    font-weight: bold;
    font-size: 0.14rem
}
.body_contents_info>div>div p:nth-child(2){
    color: #c6bac5;
    font-size: 0.12rem
}
.body_contents_info>div>div p{
    margin: 0;
    padding-left: 0.1rem; 
}
.body_contents_info>div{
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 0.1rem;
}
.body_contents_info{
    margin-top: 0.1rem;
    width: 100%;
    background: #fff;
    display: flex;
    padding:0.15rem 0.2rem; ;
    box-sizing: border-box;

}


.body_contents_new_items_info p:nth-child(2){
    color: #c6bac5;
}
.body_contents_new_items_info p:nth-child(1){
    font-size: 0.16rem;
    color: #00caff;
}
.body_contents_new_items_info p{
    width: 100%;
    margin: 0;
}
.body_contents_new_items_info{
    margin-left: 0.05rem;
    display: flex;
    flex-flow: row wrap;
}
.body_contents_new_items_img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.body_contents_new_items_img{
    width:0.5rem;
    height:100%;
}
.body_contents_new_items>div:nth-child(2){
    /* flex: 7; */
    padding:0 0.1rem;
    box-sizing: border-box;
}
.body_contents_new_items>div:nth-child(1){
    /* flex: 3; */
    border-right: 0.02rem solid #f0f0f0;
    padding:0 0.1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    font-weight: bold;

}
.body_contents_new_items div{
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.14rem;
}
.body_contents_new_items{
    height: 1rem;
    padding: 0.25rem 0;
    box-sizing: border-box;
    display: flex;
}
.body_contents_items div p{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.05rem 0;
    color: #c6bac5;
    font-size: 0.145rem;
}
.body_contents_items div i{
    font-size: 0.28rem;
    color: #00caff;
}
.body_contents_items div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
}
.body_contents_items{
    border-bottom: 0.01rem solid  #f6f6f7;
    display: flex;
    padding: 0.1rem 0;
    box-sizing: border-box;
}
.body_contents_title p:nth-child(1){
    font-weight: bold;
}
.body_contents_title p:nth-child(2){
    font-weight: bold;
    color: #c6bac5;
}
.body_contents_title p:nth-child(2) i{
    font-size: 0.18rem;
}
.body_contents_title{
    width: 100%;
    height: 0.4rem;
    border-bottom: 0.01rem solid #f6f6f7;
    display: flex;
    justify-content: space-between;
    font-size: 0.14rem;
}
.body_contents{
    width: 100%;
    padding:0 0.1rem;
    box-sizing: border-box;
    background: #fff;
}
.top_img_info_contents_items div span{
    font-weight:bold; 
    font-size: 0.16rem;
    text-align: center;
}
.top_img_info_contents_items div p{
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    font-size: 0.14rem;
    color: #c6bac5;
}
.top_img_info_contents_items div{
    flex: 1;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.top_img_info_contents_items{
    width: 100%;
    height: 0.65rem;
    margin-top: 0.1rem;
    display: flex;
}
.top_img_info_contents p i{
    font-size: 0.24rem;
    /* font-weight: bold; */
}
.top_img_info_contents p{
    margin: 0;
    color: #00e3ff;
    font-size: 0.18rem;
    /* font-weight: bold; */
}
.top_img_info_contents{
    width: 79%;
    height: 0.5rem;
    margin-left: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:0.05rem;
    box-sizing: border-box; 
}
.top_img_info_items{
    width: 100%;
    height: 0.7rem;
    /* background: red; */
}
.top_img_info_img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.top_img_info_img{
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: red;
    position: absolute;
    top: -0.1rem;
}
.top_img_info{
    width: 94%;
    height: 1.25rem;
    background: #fff;
    margin: 0 auto;
    border-radius:0.06rem 0.06rem 0 0;
    position: relative;
    padding:0 0.1rem ;
    box-sizing: border-box;
}
.top_img_infos{
    width: 94%;
    height: 0.08rem;
    background: #01e6ff;
    margin: 0 auto;
    border-radius:0 0 0.06rem 0.06rem;
}

.top_opsion i{
    font-size: 0.25rem;
}
.top_opsion{
    padding: 0.1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 0.1rem;
}
.top_img{
    width: 100%;
    height: 1.3rem;
    background: linear-gradient(top left,#01e6ff,#00c5ff);
    margin-bottom: 0.7rem;

}
.bottom{
    width: 100%;
    height: 0.6rem;
}
</style>