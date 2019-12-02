<template>
    <div class="app">
        <van-nav-bar
      title="保险信息"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
       
        <div class="app-main">
        <ul>
        <li>
            <span>关联车主卡：</span>
            <span class="carCard">
    <van-dropdown-menu>
  <van-dropdown-item v-model="values" :options="options" />
</van-dropdown-menu>
            </span>
        </li>
         <li>
            <span class="left" >车牌号码：</span>
            <span class="right"> <input type="text" v-model="CarCard" placeholder="请输入车牌号"> </span>
         </li>
         <li>
           <span class="left">车架号：</span>
            <span class="right"> <input type="text" placeholder="请输入车架号"> </span>
         </li>
        <li>
        <span class="left">发动机号：</span>
         <span class="right"> <input type="text" placeholder="请输入车架号"> </span>

        </li>
        <li>
            <span class="left">初登日期：</span>
             <span class="right"> <input v-model="data" type="text" placeholder="请输入车架号"> </span>
        </li>
        <li>
            <span class="left">品牌型号：</span>
            <span class="right"> <input type="text" placeholder="请输入车架号"> </span>
        </li>
        <li>
            <span class="left" >车主手机号：</span>
            <span class="right"> <input type="text" v-model="userPhone" placeholder="请输入车主手机号"> </span>
        </li>
        <li>
            <span class="left">身份证号：</span>
            <span class="right"> <input type="text" v-model="userIdcard" placeholder="请输入车主身份证号："> </span>
        </li>
        </ul>

     <van-button @click="putlist()" class="btnkg" type="primary"  >提交</van-button><!-- to="insuretype" -->



        </div>
    </div>
</template>
<script>
export default {
    name:'insuerInput',
    data() {
    return {
     CarCard:"",//川AK516K
      userIdcard:"",//51151522151548
    userPhone:"",//11111111111
    data:"",//2019.9.2
    /*  carBrand:"",
     carEngineNum:"",
     carNum:"",
     carRegistTime:"",
     carRegistTime:"",
     carStyle:"",
      cardId:"",
   commercialInsuranceDate:"", */

     values: '1',
      options: [
        { text: '是', value: '1' },
        { text: '否', value: '0' },
      ]
     
    }


  },
   methods: {
       putlist:function(){//获取保险种类
        this.axios
        .post("/user/addSubscribe.do",
        {  CarCard:this.CarCard,
           data:this.data,
           /* carEngineNum:this.carEngineNum,
           carNum:this.carNum,
           carRegistTime:this.carRegistTime,
           carStyle:this.carStyle,
           cardId:this.cardId,
           commercialInsuranceDate:this.commercialInsuranceDate,
            carBrand:this.carBrand, */
         /*   day:this.createTime.date,
           hours:this.createTime.date,
           minutes:this.createTime.minutes,
           month:this.createTime.month */
           userIdcard :this.userIdcard,
           userPhone :this.userPhone  })
        .then(res=>{
            console.log("保险信息",res.data);
            if(res.data.state=="200"){
                console.log(res.data);
            }else{
                this.$message({
                message:'请求出错',
                type:'error'
                });
            }
        })
        .catch(err=>{
            console.log(err);
        })

    }

    },
    created(){
      
            
                        
              
    }  
 
       
  
    }
  
    

</script>
<style lang="less" scoped>
@import "../assets/css/base.less";

.left{
    width:auto;
    height:50px;
  
    float:left;
}
.right{
    width:210px;
    height:50px;
   
    float:left;
}

input[type=text]{
    width:170px;
    height:24px;
    border:0;
}

ul{
    width:100%;
    height:500px;
   
}
li{
    list-style: none;
    height: 50px;
    width:80%;
    margin-left:30px;
    border-bottom:1px solid rgb(129, 125, 125);
    
}
.btnkg{
    background: #63ADDE;
    text-align: center;
    line-height: 34px;
    border:0;
    margin-top:-30px;

    width:150px;
    height:40px;
    font-size: 14px;
    color:white;

   
}
.van-button__text{
    line-height:10px;
    padding-left:50px;
}
span{
    font-size: 14px;
    float:left;
    line-height: 50px;

}
.carCard{
    margin-top:10px;
    height:30px;
    display: block;
    float:right;
    margin-right:20px;

}
</style>