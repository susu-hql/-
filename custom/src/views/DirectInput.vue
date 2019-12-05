<template>

    <div class="directHome">
        <div class="nav">
               <van-nav-bar
      title="订单信息"
      left-arrow
      left-text="返回"
      
      flxed
      @click-left="$router.push('/home')"
      class="header"
    />
        </div>
        <div class="main">
         
            <ul>
        <li>
            <span>事故类型：</span>
            <span class="right">
                 <select class="select-style"   v-model="sgtype">
                <option>单车事故</option>
                 <option>双事故</option>
                  <option>多车事故</option>
            </select>
            
            </span>
           
                      
        </li>
         <li>
            <span class="left" >接车地址：</span>
            <span class="right"> <input type="text" > </span>
         </li>
         <li>
           <span class="left">还车地址：</span>
            <span class="right"> <input type="text" > </span>
         </li>
        <li>
        <span class="left">接车时间：</span>
         <span class="right"> <input type="text" > </span>

        </li>
        <li>
            <span class="left">关联车主卡：</span>
             <span class="right"> 
            <select class="select-style">  
  <option value ="1">Volvo</option>  
  <option value ="2">Saab</option>  
  <option value="3">Opel</option>  
  <option value="4">Audi</option>  
</select>   </span>
        </li>
        <li>
            <span class="left">车牌号码：</span>
            <span class="right"> <input type="text" placeholder="请输入车架号"> </span>
        </li>
        <li>
            <span class="left" >车主姓名：</span>
            <span class="right"> <input type="text"  placeholder="请输入车主手机号"> </span>
        </li>
        <li>
            <span class="left">联系电话：</span>
            <span class="right"> <input type="text" > </span>
        </li>
        <li>
            <span class="left">备注：</span>
            <span class="right"> <input  type="textarea" placeholder=""> </span>
        </li>
        </ul>
        <div class="d-xy">
       <p class="d-end">
              <span><input type="radio" checked="checked"></span>
              <span>我已经阅读并同意《<a href="javascript:;">使用条约和使用政策</a>》
              </span></p>

        </div>
       
        </div>

    <div class="footer">
      <p class="d-hjs">
                    <span class="d-hj-L">合计：<span class="price-red">120</span></span>
                    <span class="d-hj-r"><a href="javascript:;">确认预约</a></span>
                </p>
    </div>
      <div v-show="isShow" class="zhezhao">
        <div class="zhezhao-show">
            <div class="zz-top">                
<span class="zz-top-right"><a href="javascript:;">完成</a></span>
<span class="zz-top-left"><a href="javascript:;" @click="changeShow" >取消</a></span>
</div>
            <div class="zz-main">
              <van-picker  v-model="sgtypess" :default-index="2" :columns="columns" @change="changeShow" />



            </div>
        </div>
        </div> 



    </div>
    
</template>

<script>  
import { Toast } from 'vant';
export default {
    name:'insureInput',
    data(){
        return {
       isShow:false,     
      columns: ['双车事故', '单车事故', '多车事故'],
      sgtype:"",
      sgtypess:""
    }
 
    },
    methods:{
       showPopup() {
      this.show = true;
    },
     changeShow() {
     this.isShow = !this.isShow;
     
    },
       onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    }
   
    }


}
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
@import "../assets/css/allstyle.less";
.ipt-left{
    border:1px solid red;
    width:100px;
    height:20px;
}
.d-sglx{
    background-color: white;
    width:180px;
    height:40px;
    border:1px;
    color:rgb(51, 48, 48);
}
    select option{
        width:80px;
        
    }
.select-style{
    width:200px;
    height:30px;
    background-color: white;
}
input[type=textarea]{
    width:240px;
    height:30px;
    border:0;
}
.dir-a{
    color:black;
    font-weight: bold;
    font-size: 20px;
}
.d-end{
    font-size: 12px;
}
.d-xy{
    width:320px;
    height:40px;
    margin:0 auto;
}
.footer{
    background-color:white;
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


.d-hjs{
   width:100%;
    height:30px;
    border-top:1px solid rgb(41, 40, 40);
    position: fixed;  
    bottom:0;
}
.d-hj-L{
    display:block;
    float:left;
    width:50%;
    height:100%;
    border-right: 1px solid black;
    text-align: right;
    line-height: 30px;
    
}
.d-hj-r{
    float:right;
    width:49%;
    height:100%;
    text-align: center;
     line-height: 30px;
}
.d-hj-r a{
    color:black;
}
p{
margin:0;
padding:0;
}
.price-red{
    display: block;
    color:red;
    float:right;
    width:100px;
   
    text-align: left;
    line-height: 30px;
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
    background-color:white;
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

#mySelect{
    width:100px;
}
.van-picker-column{
    margin-top:-30px;}
</style>