<template>
    <div class="me_children_account">
        <div class="top_name">
            <div><i class="iconfont icon-fanhui" @click="comback"></i>
            </div><div>我的账户</div>
            <div><span>使用说明</span></div>
        </div>

        <div class="body_content">
            <div class="body_content_top_card">
                <div>
                    <p>绑卡/消费明细<i class="iconfont icon-jiantou"></i></p>
                    <p>总余额(元)</p>
                    <div>
                        <p>10.00</p>
                        <div>去绑卡<i class="iconfont icon-jiantou"></i></div>
                    </div>
                </div>
            </div>

            <div class="recharge">
                <div>充值</div>
                <div>提现</div>

            </div>

        </div>

        
    </div>
</template>
<script>
export default {
    name:'me_children_account',
    data(){
        return{

        }
    },
    methods:{
        comback(){
            this.$router.push({name:'me'})
        }
    }
    
}
</script>
<style scoped>
.recharge div:nth-child(1){
    background: #20ba6c;
    color: #e9e9e9;
}
.recharge div:nth-child(2){
    background: #e9e9e9;
    color: #b9b9b9;
}
.recharge div{
    width: 1.1rem;
    border-radius: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.2rem;
    padding:0.05rem 0.1rem ;
    box-sizing: border-box;
}
.recharge{
    width: 60%;
    display: flex;
    justify-content: space-between;
}
.body_content_top_card>div>div>div i{
    font-size: 0.2rem;
}
.body_content_top_card>div>div>div{
    padding: 0.01rem 0.03rem;
    background: #fff;
    color: #feb911;
    border-radius: 0.12rem;
    font-size: 0.12rem;
    display: flex;
    justify-content: center;
    align-items: center;

}
.body_content_top_card>div>div>p{
    margin: 0;
    font-size: 0.4rem;
}
.body_content_top_card>div>div{
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;
}
.body_content_top_card>div>p:nth-child(2){
margin: 0;
color: #fff;
font-size: 0.14rem;
}
.body_content_top_card>div>p:nth-child(1) i{
    font-size: 0.2rem;
}
.body_content_top_card>div>p:nth-child(1){
margin: 0;
font-size: 0.14rem;
display: flex;
justify-content: flex-end;
color: #fff;
}
.body_content_top_card{
    width: 80%;
    height: 1.2rem;
    background: linear-gradient(left top,#fdc70c,#feb911);
    border-radius: 0.12rem;
    padding:  0.15rem 0.15rem;
    box-sizing: border-box;
    margin: 0.2rem 0;
}
.body_content{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.top_name div:nth-child(3){
    font-size: 0.16rem;
    justify-content: flex-end;
    color: #6ccfff;
}
.top_name div:nth-child(1) i{
    font-size: 0.28rem;
}
.top_name div{
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.2rem;
    font-family: SimHei;

}
.top_name{
    width: 100%;
    height: 0.5rem;
    background: #fff;
    display: flex;
    padding:0 0.1rem ;
    box-sizing: border-box;
}

</style>
