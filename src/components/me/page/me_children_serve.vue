<template>
<div class="me_children_serve">
    <div class="top_name">
        <div><i class="iconfont icon-fanhui" @click="comback"></i>
            </div><div>服务包/电子券</div>
            <div></div>
        </div>
        <p><i class="iconfont icon-youhuiquan"></i>电子券</p>
        <div class="body_content">
            <div>
                +验证电子券
            </div>

        </div>




</div>

</template>
<script>
export default {
    name:'me_children_serve',
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
.body_content div{
    width: 90%;
    height: 0.5rem;
    border: #09afff solid 0.005rem;
    border-radius: 0.12rem;display: flex;
    justify-content: center;
    align-items: center;
    color: #09afff;
    font-size: 0.18rem;
}
.body_content{
    width: 100%;
    display: flex;
    justify-content: center;
}
.me_children_serve p i{
    color: #09afff;
    margin-right: 0.05rem;
}
.me_children_serve p{
    box-sizing: border-box;
    padding-left: 0.2rem;
}
.top_name div:nth-child(1) i{
    font-size: 0.28rem;
}
.top_name div:nth-child(2){
    flex: 4;
    display: flex;
    justify-content: center;
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
