<template>
    <div>
        <div class="nav_top">
            <router-link to="classify" tag="span" class="iconfont icon-fanhui1 iconreturn">
                <!-- <span class="iconfont icon-fanhui1 iconreturn"></span> -->
            </router-link>
            <span>{{title}}</span>
            <span class="iconfont icon-sousuo iconsou"></span>
        </div>
        <div class="wrap">
            <div class="wrap-left">
                <div class="wrap-max">
                    <div v-for="(item,index) in left_list" :key="index" :class="colorTure==index?'active':''" @click="clickColor(index,item.sort_order)"><a>{{item.name}}</a></div>
                </div>
            </div>
            <div class="wrap-right">
                <div class="wrap-max">
                    <div class="header-img">
                        <img src="../image/bg.jpg">
                    </div>
                    <div class="content">
                        <div class="list" v-for="(item,index) in right_list" :key="index" @click="clickEnter(item)">
                            <div class="left-img">
                                <img :src="item.image">
                                <!-- <img src="../image/bg.jpg"> -->
                            </div>

                            <div class="right-text">
                                <p class="title">{{item.title}}</p>
                                <span class="txt">{{item.sell_point}}</span>
                                <div class="icon-tejia"></div>
                                <span class="money">￥{{item.price}}/<i>500g</i></span>
                                <span class="last">￥25.90</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>
<script>
export default {
    name:"classify_children",
    data(){
        return{
            title:'新鲜水果',
            colorTure:0,
            initialize:1
            
        }
    },
    created(){
        this.title=this.$route.params.item.name
    },
    mounted(){
        // console.log(this.$route.params.item)
        let obj={
            cat_id:this.$route.params.item.cat_id,
            sort_order:this.initialize
        }
         this.$store.dispatch('left_list',this.$route.params.item)

         this.$store.dispatch('right_list',obj)
         
    },
    computed:{
        left_list(){
            return this.$store.getters.left_list
        },
        right_list(){
            return this.$store.getters.right_list
        }

    },
    methods:{
        clickColor(index,sort_order){
            // console.log(id)
            var obj={
                cat_id:this.$route.params.item.cat_id,
                sort_order:sort_order
            }
            console.log(obj)
            this.colorTure=index
            this.$store.dispatch('clickColor',obj)
        },
        clickEnter(item){
            // console.log(item)
            this.$router.push({name:'particulars',params:{item}})
        }
    }
    
}
</script>
<style scoped>
i{
    font-style: normal
}
body{
    width: 100%;
    height: 100%;
}
ul{
    list-style: none
}
.nav_top{
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    /* display:flex;
    justify-content: center; */
    line-height: 50px;
    font-weight: bold;
    font-size: 18px;
}
.nav_top span{
    display: inline-block;
}
.nav_top span:nth-child(2){
    float: left;
    margin-left: 114px
}
.iconreturn{
    float: left;
    font-size: 27px;
    color: #1675ef
}
.iconsou{
    float: right;
    font-size: 27px;
    color: #1675ef
}
.wrap{
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.wrap-left{
    width: 25%;
    height: 617px;
    overflow: auto;
    float: left;
}
.wrap-max{
    width: 100%;
    min-height: 617px;
}
.wrap-left .wrap-max>div{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
}
.wrap-max div a{
    font-size: 15px;
    text-decoration: none;
    color: #989898
}
.wrap-max .active{
    background: white;
    color: #333;
}
.wrap-right{
    box-sizing: border-box;
    background: white;
    height: 617px;
    width: 75%;
    float: right;
    padding: 9px 10px;
    overflow: auto
}
.header-img img{
    width: 100%;
    height: 104px;
}

.content{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.list{
    overflow: hidden;
    margin-top: 5px;
    margin-bottom: 5px
}

.left-img{
    float: left;
    width: 105px;
    height: 100px;
}
.left-img img{
    padding: 15px 10px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}
.right-text{
    float: right;
    border-bottom: 1px solid #e5e5e5;
    height: 100px;
}
.title{
    margin-bottom: 0;
    margin-top: 0;
    font-size: 14px;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
}
.txt{
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #666;
    font-size: 12px;
    width: 155px;
    /* margin-bottom: 5px */
}
.icon-tejia{
    width: 32px;
    height: 17px;
    /* border: 1px solid #e5dfe1; */
    color: #e4a1aa;
    font-size: 14px;
    text-align: center;
    line-height: 17px;
    border-radius:4px;
    font-weight: bold;
    /* margin-bottom: 3px */
}
.money{
    color: #ba7d60;
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 5px
}
.money i{
    font-size: 12px;
    color: #b1b1b1;
}
.last{
    text-decoration: line-through;
    color: #b1b1b1;
    font-size: 13px
}
</style>