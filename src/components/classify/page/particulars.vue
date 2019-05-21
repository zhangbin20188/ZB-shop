<template>
    <div class="particulars">
            <div class="header-img">
                <img :src="particulars.image">
                <i class="iconfont icon-fanhui1 return" @click="clickReturn"></i>
                <i class="iconfont  icon-gouwuche shoppcart" @click="joinShop">
                    <div class="num">1</div>
                </i>
            </div>

        <div class="content">
            <div class="header-text">
                <div>
                    <h4>{{particulars.title}}</h4>
                    <i class="iconfont icon-fenxiang share"></i>
                </div>
                <p class="text">快递反馈的反馈的发票代开发票叩叩趴放得让他认识她让他让他热水开佛打开佛控股控股</p>
                <span class="money">￥{{particulars.price}}<i>/{{particulars.norm}}</i></span>
            </div>

            <div class="xd-box">
                <i class="iconfont icon-xiadan iconxiadan"></i>
                <span>现在下单，最快今日送达（免运费）</span>
            </div>

            <div class="xd-box shop">
                <div class="xd-first">换购</div>
                <p>现在下单，最快今日送达（免运费是吗）</p>
                <i class="iconfont icon-xiangyou1 iconyou"></i>
            </div>

            <div class="xd-box select">
                <p>已选择：<span>称重</span></p>
                <i class="iconfont icon-xiangyou1 iconyou"></i>
            </div>

            <div class="details">
                <div class="title"><span class="dot right"><span class="left-dot">·</span><span>·</span></span>详情 · <span class="detail">DETAIL</span><span class="dot left"><span class="left-dot">·</span><span>·</span></span></div>
                <div class="details-wrap" v-html="particulars.item_desc">
                    <!-- <div class="details-list"><span class="place">产地</span><span class="state">泰国</span></div>
                    <div class="details-list"><span class="place">净含量</span><span class="state">1kg</span></div>
                    <div class="details-list"><span class="place">存储条件</span><span class="state">冷藏</span></div> -->
                </div>
            </div>
        </div>

        <!-- <div class="bg-img">
                <img src="">
        </div> -->

        <div class="btn" @click="joinShoppcart">加入购物车</div>
    </div>
</template>

<script>
export default {
    name:'particulars',
    data(){
        return {
            id:1
        }
    },
    methods:{
        clickReturn(){
            this.$router.push({name:'classify_children'})
        },
        joinShoppcart(){
            this.$store.dispatch('joinShoppcart',this.$store.getters.particulars.id)
        },
        joinShop(){
            this.$router.push({name:'shopcart'})
        }
    },
    mounted(){
        // console.log(this.$route.params.item.id)
        this.$store.dispatch('particulars',this.$route.params.item.id)
    },
    computed:{
        particulars(){
            return this.$store.getters.particulars
        }
    }
}
</script>

<style scoped>
    i{
        font-style: normal
    }
    .particulars{
        width: 100%;
        height: 100%;
        background: white
    }
    .header-img{
        width: 100%;
        height: 400px;
        position: relative;
    }
    .header-img img{
        width: 100%;
        height: 100%
    }
    .header-img i{
        position: absolute;
    }
    .return{
        width: 36px;
        height: 36px;
        line-height: 36px;
        display: block;
        top: 10px;
        left: 10px;
        color: white;
        background: #b2b2b2;
        border-radius:50%;
        text-align: center;
        font-size: 23px;
    }
    .shoppcart{
        width: 36px;
        height: 36px;
        line-height: 36px;
        display: block;
        top: 10px;
        right: 10px;
        color: white;
        background: #b2b2b2;
        border-radius:50%;
        text-align: center;
        font-size: 25px;
        position: relative
    }
    .num{
        width: 23px;
        height: 23px;
        background: #ff2c2c;
        color: white;
        text-align: center;
        line-height: 23px;
        border-radius:50%;
        position: absolute;
        top: -5px;
        left: 19px;
        font-size: 13px;
    }
    .content{
        width: 100%;
        height: 100%;
        background: white;
        padding: 10px 15px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .header-text div>h4{
        float: left;
        margin-top: 2px;
        margin-bottom: 0
    }
    .header-text>div{
        overflow: hidden;
    }
    .share{
        font-size: 23px;
        display: block;
        float: right;
        color: #999999;
    }
    .text{
        font-size: 14px;
        width: 227px;
        color: #bdbdbd;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        /* 注意省略号样式只有输入文字才会生效 */
        }
    .money{
        font-size: 17px;
        color: #fe4544;
        font-weight: bold;
    } 
    .money i{
        font-size: 14px;
        color: #999999;
        font-weight: normal
    }
    .xd-box{
        margin-top: 20px;
        background: #fafafa;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding: 15px 50px;
        font-size: 15px;
        border-radius:10px;
        position: relative;
    } 
    .iconxiadan{
        font-size: 25px;
        position: absolute;
        top: 14px;
        left: 16px;
    }
    .xd-first{
        width: 30px;
        height: 15px;
        border: 1px solid #fcaa90;
        border-radius:5px;
        text-align: center;
        color: #f74607;
        font-weight: bold ;
        font-size: 12px;
        line-height: 15px;
        position: absolute;
        top: 17px;
        left: 12px
    }
    .shop{
        background: #fff0f0;
        margin-top: 10px;
    }
    .shop p{
        width: 245px;
        margin-top: 0;
        margin-bottom: 0;
        overflow: hidden;    
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .iconyou{
        position: absolute;
        top: 19px;
        right: 13px;
        font-size: 11px;
        color: #b3afaf;
    }
    .select{
        padding: 15px 13px;
        background: #fafafa;
        margin-top: 10px;
    }
    .select p{
        margin-top: 0;
        margin-bottom: 0;
    }
    .details{
        overflow: hidden;
        margin-top: 15px; 
        font-size: 14px ;
        /* padding-bottom: 40px; */
    }
    .title{
        text-align: center;
        margin-bottom: 15px
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
    .details-wrap{
        width: 500px;
        height: 500px;
        padding: 0 13px;
        box-sizing: border-box;
        background: #fafafa;
        overflow: hidden;
    }
    .details-wrap img{
        width: 500px;
        height: 100px;
    }
    .place{
        width: 56px;
        margin-right: 10px;
        color: #cccccc;
    }
    .details-list{
        border-bottom: 1px solid #eeeeee;
    }
    .details-list span{
        display: inline-block;
        margin-bottom: 15px;
        margin-top: 15px;
    }
    .details-list:last-child{
        border-bottom: none
    }
    /* .bg-img{
        width: 100%;
        background: red;
        height: 400px;
    } */
    .btn{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        color: white;
        background: #09afff;
        text-align: center;
        line-height: 50px;
        font-size: 17px
    }
</style>
