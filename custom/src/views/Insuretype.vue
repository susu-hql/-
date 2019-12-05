<template>
    <div class="insuretype">
        <div class="nav">
        <van-nav-bar
      title="选择险种"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
        </div>
            
     <ul>
         <li > 
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
      <li > 
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


       
<li  class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">第三者责任险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<select class="in-select-style"> 
  <option >111</option>
  <option >111</option>  

</select>

               </span>
           </p>
             
        </li>
    <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">司机责任险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<input type="radio" > 

               </span>
           </p>
             
        </li>
    <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">乘客责任险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<select class="in-select-style"> 
  <option >111</option>
  <option >111</option>  

</select>

               </span>
           </p>
             
        </li>
     <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">玻璃单独破损险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<select class="in-select-style"> 
  <option >111</option>
  <option >111</option>  

</select>

               </span>
           </p>
             
        </li>
    <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">机动车被盗险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<input type="radio" > 

               </span>
           </p>
             
        </li> 

   <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">自然损失险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<input type="radio" > 

               </span>
           </p>
             
        </li> 
     <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">车身划痕险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<select class="in-select-style"> 
  <option >111</option>
  <option >111</option>  

</select>

               </span>
           </p>
             
        </li>   

     <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">发动机特别损失险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
车辆损失险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<input type="radio" > 

               </span>
           </p>
             
        </li> 

     <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">不计免陪险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
不计免陪险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<input type="radio" > 

               </span>
           </p>
             
        </li>                           
            <li class="adds"> 
           <p class="p-titles new-titles">
               <span class="bt">无法找到责任险</span>
              
               </p>
           <p class="p-contents">
           <span class="span-aligns">
不计免陪险

适合2年内新手、5年内新手、经常开车、常去异地的
车主</span> 
<span class="lx">
    
<input type="radio" > 

               </span>
           </p>
             
        </li>      

     </ul>
   
    <div class="footers">
         <button type="submit" @click="gogetprice()" class="getprice">获取报价</button>
        </div>    
    
    </div>
</template>
<script>
export default {
    name:'insuretype',
     data(){
      return{
       show:false,   
    
      
      }
    },
     methods:{
      toshow:function () {
        this.show = !this.show;
      },
      gogetprice:function(){
          this.$router.replace("getprice");
      },
      getalltype:function(){//获取保险种类
        this.axios
        .get("user/add")
        .then(res=>{
            console.log("保险信息",res.data);
            if(res.data.state=="200"){
                this.alltype=res.data;

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
        this.getalltype();

    }
 
}
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.footers{
    width:100%;
    height:40px;
    position: fixed;
    bottom:0;
    background-color: white;
}
.nav{position:fixed;
width:100%;
height:46px;
top:0;
left:0;

}
ul{
width:100%;
height:auto;
overflow: hidden;
margin-top:50px;
}
li{ 

    width:100%;
    height:auto;  
}


p{  padding-left:0;
    margin:0;
    padding:0;
     text-align:left;
    width:100%;
    font-size:14px;
    padding-left:20px;
    
}
.bxbtn{
    width:50px;
    height:30px;
    font-size:10px;
    line-height: 20px;
    color:white;
    background-color: #63ADDE;
    border:0;
    
}
.toubao{
    width:50px;
    height:10px;
    font-size:10px;
    line-height: 10px;
    color:white;
    background-color: #63ADDE;
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
    margin-right:30px;
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
    margin-top:6px;
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
   background-color: #63ADDE;
   border-right:4px solid #63ADDE;
}
.van-ellipsis{
    color:white;
    width:60px;
    font-size:9px;
}

</style>