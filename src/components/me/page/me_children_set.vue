<template>
<div class="me_children_set">
    <div class="top_title">
        <i class="iconfont icon-fanhui" @click="comback_to"></i>
        设置
    </div>

    <div class="body_option">
        <div v-for="(item,index) in set_list" :key="index" @click="set_botton(index)">
            <div>
                <i class="iconfont " :class="item.icon"></i>
                {{item.test}}
            </div>
            <i class="iconfont icon-jiantou"></i>
        </div>
    </div>

    <div class="logout_botton">
        <div @click="logout_botton">退出当前账号</div>
    </div>



</div>
    
</template>
<script>
export default {
    name:"me_children_set",
    data(){
        return{
            set_list:[
                {id:1,icon:'icon-yinhangqiazhifuzhangdanfukuanjinqianchucunqia',test:'支付设置'},{id:2,icon:'icon-dizhi',test:'收货地址'},
                {id:3,icon:'icon-wujiaoxing',test:'评价鳄鱼'},{id:4,icon:'icon-lajitong',test:'清除缓存'},
                {id:5,icon:'icon-wo',test:'关于我们'},{id:6,icon:'icon-lingdang',test:'开启通知'},{id:7,icon:'icon-gongwenbao',test:'企业采购'}
            ]

        }
    },
    methods:{
        comback_to(){
            this.$router.push({name:"me"})
        },
        logout_botton(){
            alert(1)
        },
        set_botton(index){
            alert(index)
        }
    }
    
}
</script>
<style scoped>
.logout_botton div{
    width: 90%;
    height: 0.45rem;
    background: #ff8709;
    border-radius: 0.06rem;
    color: #fff;
    font-size: 0.2rem;
    display: flex;
    justify-content: center;align-items: center;
}
.logout_botton{
    margin-top: 0.1rem;
    width: 100%;
    display: flex;
    justify-content: center;
}
.body_option>div>div{
     display: flex;
     align-items: center;
}
.body_option>div i:nth-child(1){
    color: #23a3ff;
}
.body_option>div i{
    font-size: 0.3rem
}
.body_option>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 0.5rem;
    font-size: 0.2rem;
    border-bottom: 0.005rem solid #e5e5e5;
    padding: 0 0.2rem;
    box-sizing: border-box;
    color: #949494;

}
.body_option{
    background: #fff;
}
.top_title i{
    position: absolute;
    top: 0.14rem;
    left: 0.2rem;
    font-size: 0.22rem
}
.top_title{
    position: relative;
    padding:0 0.15rem ;
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 0.2rem;
    background: #fff;
    box-sizing: border-box;
    font-family: SimHei;
    margin-bottom: 0.1rem;
}

</style>


