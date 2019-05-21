<template>
    <div class="me_children_account">
        <div class="top_name">
            <div><i class="iconfont icon-fanhui" @click="comback"></i>
            </div><div>我的账户</div>
            <div><span>使用说明</span></div>
        </div>

        <div class="body_content">
            <div class="body_content_top_card">

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
    }
    
}
</script>
<style scoped>
.body_content_top_card{
    width: 80%;
    height: 2rem;
    background: linear-gradient(left top,#fdc70c,#feb911);
    border-radius: 0.006rem;
}
.body_content{
    width: 100%;
    display: flex;
    justify-content: center;
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
