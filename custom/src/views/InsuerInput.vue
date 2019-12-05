<template>
    <div class="app">
        <van-nav-bar
      title="保险信息"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/insureHome')"
      class="header"
    />
       
        <div class="app-main">
        <ul>
        <li>
            <span class="left">关联车主卡：</span>
             <span class="right">
          
  <select class="select-style" name="carCard" v-model="select" @change="ShowCard">  
  <option v-for="(item2,index2) in allCard" :key="index2" :value ="item2.carNum">{{item2.carNum}}</option>  
   
  
</select> 
             </span>
        </li>
         <li>
            <span class="left" >车牌号码：</span>
            <span class="right"> <input name="carNum" type="text" v-model="getalllist.carNum"   placeholder="请输入车牌号"> </span>
         </li>
         <li>
           <span class="left">车架号：</span>
            <span class="right"> <input name="carCardNum" v-model="getalllist.carCardNum" type="text" placeholder="请输入车架号"> </span>
         </li>
        <li>
        <span class="left">发动机号：</span>
         <span class="right"> <input name="carEngineNum" type="text" v-model="getalllist.carCardNum" placeholder="请输入车架号"> </span>

        </li>
        <li>
            <span class="left">投保日期：</span>
               
             <span class="right"> 
                 <span class="time-l"><van-field  name="data"  v-model="timeValue" placeholder="选择日期" readonly /> </span> 
                  <span class="time-r"> <a @click="showPopFn()" href="javascript:;">></a></span> 
      
              </span>
        </li>

           <li>
            <span class="left">初登日期：</span>
               
             <span class="right"> 
                 <span class="time-l"><van-field name="carRegistTime" v-model="getalllist.carRegistTime"  placeholder=""/> </span> 
                  <span class="time-r"></span> 
           
             <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker v-model="currentDate" type="date" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()" />
    </van-popup>
      
              </span>
        </li>

        <li>
            <span class="left">品牌型号：</span>
            <span class="right"> <input name="carBrand" v-model="getalllist.carBrand" type="text" placeholder=""> </span>
        </li>
        <li>
            <span class="left" >车主手机号：</span>
            <span class="right"> <input name="tel"  v-model="getalllist.ownerTel" type="text" placeholder=""> </span>
        </li>
        <li>
            <span class="left">身份证号：</span>
            <span class="right"> <input v-model="idCard" name="idCard" type="text"> </span>
        </li>
        </ul>

     <van-button  class="btnkg" type="primary" is-Link to="/insuertype"  @click="senddata" >提交</van-button><!-- to="insuretype" -->



        </div>

<!-- <div v-show="isShow" class="zhezhao">

    is-link to=""
        <div class="zhezhao-show">
            <div class="zz-top">                
<span class="zz-top-right"><a href="javascript:;">完成</a></span>
<span class="zz-top-left"><a href="javascript:;" @click="changeShow" >取消</a></span>
</div>
            <div class="zz-main">
             <van-datetime-picker
  v-model="currentDate"
  type="datetime"
  :min-date="minDate"
  :max-date="maxDate"
/>



            </div>
        </div>
        </div>  -->

    </div>
</template>
<script>


export default {
    name:'insuerInput',
    data() {
    return {
      msg: '',
        currentDate: new Date(),
        changeDate: new Date(),
        show: false, // 用来显示弹出层
        timeValue:"",
        allCard:[],
        select:"",
        carnum:"",
        getalllist:"",
        idCard:""
     
    }


  },
   methods: {
       getallcard:function(){//获取保险种类
        this.axios
        .get("/user/findCarCardInfo.do")
        .then(res=>{
            console.log("保险信息",res.data.data);
            if(res.data.state=="200"){
                this.allCard=res.data.data;
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

    },
    ShowCard:function(){
        this.axios
        .post("/user/findCarCardSelected.do",{
            carNum:this.select
        })
        .then(res=>{
            console.log("保险信息",res.data.data);
            if(res.data.state=="200"){
              
                this.getalllist=res.data.data;
                 
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


    },

    senddata:function(){
        console.log({
            /* carCard:this.select,//车主卡 */
            carNum:this.getalllist.carNum,//车牌号
            carCardNum:this.getalllist.carCardNum,//车架号
            carRecognizeNum:this.getalllist.carCardNum,//发动机号
            date:this.timeValue,//投保日期  
            carRegistTime:this.getalllist.carRegistTime,//初登记日期
             carBrand:this.getalllist.carBrand,//品牌型号
             tel:this.getalllist.ownerTel,//车主手机号
            idCard:this.idCard//身份证号
        })
      this.axios
        .post("/user/addSubscribe.do",{
            /* carCard:this.select,//车主卡 */
            carNum:this.getalllist.carNum,//车牌号
           // carCardNum:this.getalllist.carCardNum,//车架号
            //carRecognizeNum:this.getalllist.carCardNum,//发动机号
            // date:this.timeValue,//投保日期  
           // carRegistTime:this.getalllist.carRegistTime,//初登记日期
           //  carBrand:this.getalllist.carBrand,//品牌型号
            // tel:this.getalllist.ownerTel,//车主手机号
           // idCard:this.idCard//身份证号
        })
        .then(res=>{
            console.log("保险信息11111",res.data.data);
            if(res.data.state=="200"){
           console.log(res.data.data);
                 
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

    },

   showPopFn() {
        this.show = true;
      },
      showPopup() {
        this.show = true;
      },
      changeFn() { // 值变化是触发
        this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
      },
      confirmFn() { // 确定按钮
        this.timeValue = this.timeFormat(this.currentDate);
        this.show = false;
      },
      cancelFn(){
        this.show = true;
      },
      timeFormat(time) { // 时间格式化 2019-09-08
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        return year + '年' + month + '月' + day + '日'
      }

    },
     
 mounted() {
      this.timeFormat(new Date());
    },
    created(){
        this.getallcard();  

    }
       
  
    }
  
    

</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.time-l,.time-r{
    display: block;
    float:left;

}
.time-l{
    width:165px;
    height:30px;
}
.time-r{
    width:40px;
    height:30px;
}
.time-r a{
    color:black;
    font-weight: bold;
    font-size: 14px;
}

.select-style{
    width:200px;
    height:30px;
    background-color: white;
}
.select-style option{
    width:200px;
    height:30px;
    background-color: white;
}

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
.zhezhao{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.596);
}
.zhezhao-show{
    width:100%;
   
    height:200px;
    position: fixed;
    bottom:0;
    left:0;
    background-color:rgba(34, 42, 42, 0.589);
}
.zz-top{
 border:1px solid rgb(100, 96, 96);
  width:100%;
 height:40px;
 background-color:white;
}
.zz-main{
  width:100%;
 height:150px;
}
.zz-top-right{
   width:20%;
 height:40px;
 display:block;
 float:right;
}
.zz-top-left{
   width:20%;
 height:40px;
 display:block;
 float:left;
}

</style>