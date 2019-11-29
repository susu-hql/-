<template>
    <div class="insuretype">
     <ul>
         <li> 
           <p class="p-titles">
               <span class="bt">交强险</span>
               <span class="lx">
                     <input type="radio" checked="checked" >
               </span>
               </p>
           <p class="p-content">
           <span class="span-align">国家规定必须缴纳</span>
           </p>
             
        </li>
        <li> 
           <p class="p-titles">
               <span class="bt">车船险</span>
               <span class="lx">
                     <input type="radio" checked="checked" >
               </span>
               </p>
           <p class="p-content">
           <span class="span-align">国家规定必须缴纳</span>
           </p>
             
        </li>
         <li> 
           <p class="p-titles">
               <span class="bt">商业险</span>
        
               </p>
        </li>
<li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">车辆损失险</span>
               <span class="lx">
                   <input type="radio" > 
               </span>
               </p>
           <p class="p-content">
           <span class="span-align">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span>
           </p>
             
        </li>


       
<li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">第三者责任险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<van-dropdown-menu class="toubao">
  <van-dropdown-item   v-model="value1" :options="option1" />
</van-dropdown-menu>

               </span>
           </p>
             
        </li>
    <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">第三者责任险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<van-dropdown-menu class="toubao">
  <van-dropdown-item   v-model="value1" :options="option1" />
</van-dropdown-menu>

               </span>
           </p>
             
        </li>
    <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">第三者责任险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<van-dropdown-menu class="toubao">
  <van-dropdown-item   v-model="value1" :options="option1" />
</van-dropdown-menu>

               </span>
           </p>
             
        </li>
     <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">第三者责任险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<van-dropdown-menu class="toubao">
  <van-dropdown-item   v-model="value1" :options="option1" />
</van-dropdown-menu>

               </span>
           </p>
             
        </li>
    <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">第三者责任险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<van-dropdown-menu class="toubao">
  <van-dropdown-item   v-model="value1" :options="option1" />
</van-dropdown-menu>

               </span>
           </p>
             
        </li>               
              

     </ul>
   
        
     <button type="submit" class="getprice">获取报价</button>
    </div>
</template>
<script>
export default {

    /*  types:[
            {titles:"交强险1",
              explain:"wewqeeewedxweqce" },
             {titles:"交强险2",
              explain:"wewqeeewedxweqce" },
            {titles:"交强险3",
              explain:"wewqeeewedxweqce" },
             {titles:"交强险4",
              explain:"wewqeeewedxweqce" },
             {titles:"交强险5",
              explain:"wewqeeewedxweqce" },
            {titles:"交强险6",
              explain:"wewqeeewedxweqce" }], */
    name:'insuretype',
     data(){
      return{
       show:false,   
      value1: 0,
      option1: [
        { text: '不投保', value: 0 },
        { text: '两万', value: 1 },
        { text: '三万', value: 2 }
      ]
     
           
        
      }
    },
     methods:{
      toshow:function () {
        this.show = !this.show;
      }
    }
 
}
</script>
<style>
ul{
width:100%;
height:auto;
}
li{ 

    width:100%;
    height:auto;  
}


p{  margin:0;
    padding:0;
     text-align:left;
    width:100%;
    font-size:14px;
    padding-left:20px;
    
}
.bxbtn{
    width:50px;
    height:20px;
    font-size:10px;
    line-height: 20px;
    color:white;
    background-color: aqua;
    border:0;
    
}
.toubao{
    width:50px;
    height:10px;
    font-size:10px;
    line-height: 10px;
    color:white;
    background-color: aqua;
    border:0;
    margin-top:-10px;
    
}

.p-content{
    width: 100%;
    height:auto;
    line-height:28px;    
}
.p-contents{
    width: 100%;
    height:60px;
    line-height:28px;    
}
.ps-conten{
    width: 100%;
    height:54px;
}
.p-titles{
    width:100%;
    line-height: 38px;
    height:30px;
    border-bottom: 1px solid rgb(141, 137, 137);
    border-top: 1px solid rgb(141, 137, 137);
    background-color:rgba(248, 240, 240, 0.459);
}
.last{
    border-bottom: 1px solid rgb(141, 137, 137);  
}

.bts{display:block;
    float:left;
}
.lx{
    float:right;
    margin-right:20px;
}
.getprice{
    width:100px;
    height:30px;
    background-color: #63ADDE;
    color:white;
    font-size: 16px; 
    border-radius: 10px;
    border:0;
    box-shadow:0 0 3px rgb(70, 67, 67);
}
.span-align{
    margin-left:-10px;
    font-size:10px;
    display:block;
  
}
.span-aligns{
    width: 80%;
    float:left;
    margin-left:-10px;
    font-size:10px;
    display:block;
    height:60px;
}
.ps-span-align{
    margin-left:0px;
    font-size:10px;
}
.ps-titles{
    width:100%;
    line-height: 38px;
    height:30px;
    border-bottom: 1px solid rgba(238, 232, 232, 0.972);
}
.addbord{
    border-bottom: 1px solid rgb(134, 131, 131);
}
.sp-left{
    float:left;
    display:left;
    width:300px;
     height:auto;
  
}

.new-titles{
    background-color: white;
}
.van-dropdown-menu{
    height:10px;
    margin-top:10px;
}
.van-dropdown-menu__title{
    height:20px;
   color:white;
   background-color: aqua;
   border-right:4px solid aqua;
}
.van-ellipsis{
    color:white;
    width:60px;
    font-size:9px;
}

</style>