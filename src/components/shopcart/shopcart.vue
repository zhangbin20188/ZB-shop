<template>
    <div class="shopcart">
       <div class="header">
           <span>购物车</span>
           <span @click="delShop">删除</span>
       </div>
       <div class="content-list">
           <div class="list-box" v-for="(item,index) in shopcartList" :key="index">
               <div class="list-checkbox">
                    <input :id="'shopCart_id'+ index" class="chat-button-location-radio-input color-input-red" type="checkbox" name="color-input-red" v-model="checkboxitem" :value="item"/>
                    <label  :for="'shopCart_id' + index"></label>
               </div>
               <div class="list-right">
                   <div class="list-img">
                       <img :src="item.pic_path">
                   </div>

                   <div class="list-text">
                       <p class="list-text-title">{{item.title}}</p>
                       <div class="time"><span>最快今日到达</span></div>
                       <div class="standard">
                           <span>规格：<i>{{item.norm}}</i></span>
                       </div>
                       <div class="bottom">
                           <div class="bottom-left">
                                <span>￥{{item.price}}</span><span>/kg</span>
                           </div>
                           <div class="bottom-right">
                               <div class="sub" @click="subShop(index)">-</div>
                               <input type="text" :value="item.num" class="text-inp" ref="changeNum">
                               <div class="add" @click="addShop(index)">+</div>
                           </div>
                        </div>
                   </div>
               </div>
           </div>

       </div>

       <div class="checkAll">
            <div class="checkAll-left">
                <div>
                    <input id="color-input-all" class="chat-button-location-radio-input" type="checkbox" name="color-input-red" :checked='selectAll'  @click="allPick"/>
                    <label  for="color-input-all"></label >
                    {{all}}
                </div>
                <div class="checkAll-txt"><span>全选</span></div>
            </div>

            <div class="checkAll-right">
                <div class="left-text">
                    <span>合计：<strong>￥<i>{{total}}</i></strong> (免运费)</span>
                </div>

                <div class="right-btn" @click="joinPages" ref="closeMoney" :class="'active'?activeTure:!activeTure">
                    结算(<i>{{checkboxitem.length}}</i>)
                </div>
                {{changeColor}}
            </div>
       </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:"shopcart",
    data(){
        return {
            id:1,
            selectAll:false,
            checkboxitem:[],
            activeTure:false
        }
    },
    mounted(){
        this.$store.dispatch('joinShop',this.id)
    },
    methods:{
        allPick(){   
            if(this.selectAll){
                this.selectAll=false
                this.checkboxitem = []
                console.log(1)
            }else{
                this.selectAll=true
                this.checkboxitem = this.shopcartList
                console.log(this.checkboxitem)
            }
        },
        addShop(index){
            // console.log(index)
            this.$store.getters.shopcartList[index].num++
        },
        subShop(index){
            if (this.$store.getters.shopcartList[index].num <= 0) {
                this.$store.getters.shopcartList[index].num = 0
            }else{
                this.$store.getters.shopcartList[index].num--
            }
        },
        joinPages(){
            if(this.checkboxitem.length>0){
                var id = this.checkboxitem[0].cartid
                this.activeTure = true
                this.$router.push({name:'pages',params:{id}})
                // this.$store.dispatch('joinPages',this.checkboxitem) 
            }else{
                this.activeTure = false
            }
        },
        delShop(){
            var cartid=this.checkboxitem[0].cartid
            this.shopcartList.splice(0,1)
            this.reload(cartid)
        },
        reload(cartid){
            //  console.log(id)
            axios.get('/DeleteCart?cartid='+cartid+'')
 
              //then获取成功；response成功后的返回值（对象）
 
            .then(response=>{
        
                console.log(response);
        
            })
        },
    },
    computed:{
        all(){
            if(this.checkboxitem.length==0){
                this.selectAll=false
                // this.$refs.closeMoney.style.color =' rgba(255, 255, 255, 0.5)'
            }else if(this.checkboxitem.length==this.shopcartList.length){
                this.selectAll=true
                // this.$refs.closeMoney.style.color = "white"
            }else{
                this.selectAll=false
                // this.$refs.closeMoney.style.color = "rgba(255, 255, 255, 0.5)"
            }
        },
        changeColor(){
            var _this=this
            if(this.checkboxitem.length>0){
                // console.log(this.$refs.closeMoney)
                this.$refs.closeMoney.style.color =' white'
            }else {
                // console.log(_this.$refs.closeMoney)
            }
        },
        total(){
            var sum=0
            for(var i=0;i<this.checkboxitem.length;i++){
                sum+=parseFloat(this.checkboxitem[i].num)*parseFloat(this.checkboxitem[i].price)
            }
            return sum
        },
        shopcartList(){
            return this.$store.getters.shopcartList
        },
       
    }
    
}
</script>
<style scoped>
    i{
        font-style: normal
    }
    p{
        margin: 0
    }
    .shopcart{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .header{
        line-height: 50px;
        width: 100%;
        height: 50px;
        text-align: center;
        display: flex;
        background: #0ac7fe;
        color: #b3ffff
    }
    .header span:nth-child(1){
        width: 80%;
        text-align: center;
        font-size: 20px;
        text-indent: 80px
    }
    .header span:nth-child(2){
        width: 20%;
        text-align: center ;
    }
    .content-list{
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
        padding-bottom: 121px;
    }
    .list-box{
        width: 100%;
        /* height: 100px; */
        padding: 10px 10px;
        box-sizing: border-box;
        display: flex;
        overflow: hidden;
    }
    .list-checkbox{
        width: 10%;
        line-height: 2;
        align-items: center
    }
/*当input框为选中状态时，lable标签的样式，其中在css选择时，“：”表示当前input框的值，即checked；
      该部分主要对显示的“对号”的大限居中方式，显示颜色进行了设置*/
    /*input框中颜色更改*/
    .color-input-red +label{
        display: block;
        width: 23px;
        height: 23px;
        cursor: pointer;
        background: white;
        border-radius:50%; 
        border: 1px solid #dedad7
    }
    .color-input-red:checked +label::before{
        display: block;
        content: "\2714";
        text-align: center;
        line-height: 23px; 
        width: 23px;
        height: 23px;
        font-size: 16px;
        border-radius:50%;  
        color: white;
        background: #17a5ff
    }
    input[type=checkbox]{
        visibility: hidden;
    }
    .list-right{
        flex: 1;
        height: 120px;
        display: flex;
    }
    .list-img{
        width: 100px;
        height: 90px;
    }
    .list-img img{
        width: 100%;
        height: 100%;
    }
    .list-text{
       flex: 1;
       border-bottom: 1px solid #e5e5e5;
       margin-bottom: -10px;
    }
    .list-text-title{
        width: 219.5px;
        font-size: 15px;
        text-indent: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .time{
        text-indent: 10px;
        margin-top: 20px;
        font-size: 12px;
        margin-bottom: 5px;
    }
    .time span{
        border: 1px solid #a1c7ca;
        color: #73aeb2;
        background: #f9fbfa;
        font-weight: bold;
        letter-spacing: 2px;
    }
    .standard{
        text-indent: 10px;
        font-size: 15px;
        color: #94908d;
        margin-bottom: 5px;
    }
    .bottom{
        display: flex;
        text-indent: 7px;
    }
    .bottom>div{
        flex: 1
    }
    .bottom-left span:nth-child(1){
        font-size: 15px;
        color: #ee3c54;
        font-weight: bold
    }
    .bottom-left span:nth-child(2){
        font-size: 13px;
        color: #ada9a6;
    }
    .bottom-right{
        display: flex;
        border: 1px solid #e0e0e0;
        margin-left: 10px
    }
    .bottom-right>div{
        width: 25px;
        height: 23px;
        align-items: center
    }
    .bottom-right>div:nth-child(2){
        width: 50px;
    }
    .text-inp{
        outline:none;
        width: 50px;
        height: 21px;
        border: none;
        line-height: 21px;
        text-align: center;
        font-size: 14px
    }
    .sub{
        line-height: 20px;
        background: #f4f4f4;
        border-right: 1px solid #e0e0e0;
    }
    .add{
        line-height: 20px;
        background: #f4f4f4;
        border-left: 1px solid #e0e0e0;
    }
    .checkAll{
        width: 100%;
        height: 60px;
        position: fixed;
        bottom:61px;
        left: 0; 
        display: flex;
        background: white
    }
    .checkAll-left{
        width: 20%;
        display: flex;
        padding-left: 10px
    }
    .checkAll-left>div{
        flex: 1px;
    }
    .checkAll-txt{
        line-height: 65px;
    }
    #color-input-all +label{
        display: block;
        width: 23px;
        height: 23px;
        cursor: pointer;
        background: white;
        border-radius:50%; 
        border: 1px solid #dedad7
    }
        #color-input-all:checked +label::before{
        display: block;
        content: "\2714";
        text-align: center;
        line-height: 23px;
        width: 23px;
        height: 23px;
        font-size: 16px;
        border-radius:50%;  
        color: white;
        background: #17a5ff
    }
    .checkAll-right{
        display: flex;
        width: 80%;
        align-items: center
    }
    .left-text{
        width: 60%;
    }
    .left-text span{
        font-size: 13px;
        color: #9a9a9a;
    }
    .left-text span strong{
        font-size: 16px;
        font-weight: bold;
        color: #f36059;
    }
    .right-btn{
        width: 40%;
        text-align: center;
        background: #0ac7fe;
        height: 60px;
        line-height: 60px;
        color: rgba(255, 255, 255, 0.5);
        /* color: white; */
        font-size: 18px;
        /* pointer-events: none;  */
    }
    .active{
        pointer-events: none; 
    }
</style>