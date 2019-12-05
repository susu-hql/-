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
            
     <ul @change="tj">
         <li> 
           <p class="p-titles">
               <span class="bt">交强险</span>
               <span class="lx">
                     <input name="20191128001" title="交强险"  value="0" v-model="inputA" type="radio" checked="checked" >
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
                     <input title="车船险" name="20191128002"  value="0" v-model="inputB" type="radio" checked="checked" >
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
                   <input title="车辆损失险" name="20191128003"  value="0" v-model="inputCa" type="radio" > 
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
    
<select name="20191128004" title="第三者责任险"   v-model="inputCb" class="in-select-style"> 
    <option>不投保</option>
  <option   v-for="(item1,index1) in alltypea" :key="index1" >{{item1.coveragePrice}}</option>

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
    
<input name="20191128005" title="司机责任险"   value="0" type="radio" v-model="inputCc" > 

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
    
<select title="乘客责任险"  name="20191128006" v-model="inputCd" class="in-select-style">
    <option>不投保</option>
  <option   v-for="(item2,index2) in alltypeb" :key="index2" >{{item2.coveragePrice}}</option>

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
    
<select name="20191128007" title="玻璃单独破损险" v-model="inputCe" class="in-select-style"> 
    <option>不投保</option>
   <option   v-for="(item3,index3) in alltypec" :key="index3" >{{item3.coveragePrice}}</option>

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
    
<input name="20191128008" title="机动车被盗险"  value="0" v-model="inputCf" type="radio" > 

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
    
<input name="20191128009" title="自然损失险"  value="0" v-model="inputCg" type="radio" > 

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
    
<select name="201911280010" title="车身划痕险"   v-model="inputCh" class="in-select-style"> 
   <option>不投保</option>
  <option  v-for="(item4,index4) in alltyped" :key="index4" >{{item4.coveragePrice}}</option> 

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
    
<input name="11" title="发动机特别损失险"  value="0" v-model="inputCi" type="radio" > 

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
    
<input name="12" title="不计免陪险"  value="0" v-model="inputCj" type="radio" > 

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
    
<input name="13" title="无法找到责任险"  value="0" v-model="inputCk" type="radio" > 

               </span>
           </p>
             
        </li>      

     </ul>
   
    <div class="footers">
         <van-button is-Link to="/getprice" type="submit"  @click="sendtype()" class="getprice">获取报价</van-button>
        </div>    
    
    </div>
</template>
<script>
export default {
    name:'insuretype',
     data(){
      return{
       show:false, 
       inputCk:"",  
       inputCa:"",
       inputCb:"",
        inputCc:"",
         inputCd:"",
          inputCe:"",
           inputCf:"",
            inputCg:"",
             inputCh:"",
             inputCi:"",
             inputCj:"",
             inputA:"",
             inputB:"",
             alltypea:[],
             alltypeb:[],
             alltypec:[],
             alltyped:[],
             bl:"",
             b4:"",
             arr:[],
             arr2:[],
             arrobject:{}

    
      }
    },
     methods:{
       tj:function(e){
              
            this.bl=e.target.value;
            this.b2=e.target.name;
            this.b3=e.target.title;

             console.log("value",this.bl);
            console.log("name",this.b2);
            console.log("1111",this.b3);
            console.log("444",this.b4);
            this.addarr(this.b3);
            console.log("xxxxx",this.arr)
            
       
       },  
       

       addarr:function(a){
          
           this.arr.push(a);
             console.log("arr", this.arr);
       },
      toshow:function () {
        this.show = !this.show;
      },
      gogetprice:function(){
          this.$router.replace("getprice");
      },
     sendtype:function(){

 this.axios.post("/user/addInfo.do",{
            ref:["20191128001-0","20191128002-0"]//车牌号
        })
        .then(res=>{
             console.log("1111",res.data.data);
                 
            if(res.data.state=="200"){
               console.log("9-0-q-qw0-1");
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



      getalltype:function(){//获取保险种类

      
        this.axios
        .get("user/insuranceList.do")
        .then(res=>{
             console.log("保险信息111",res.data.data);
            console.log("保险信息1",res.data.data[2].insuranceList[1].coverageList);
           console.log("保险信息2",res.data.data[2].insuranceList[3].coverageList);
          console.log("保险信息3",res.data.data[2].insuranceList[4].coverageList);
        console.log("保险信息4",res.data.data[2].insuranceList[7].coverageList);
                 
            if(res.data.state=="200"){
                this.alltypea=res.data.data[2].insuranceList[1].coverageList;
                 this.alltypeb=res.data.data[2].insuranceList[3].coverageList;
                  this.alltypec=res.data.data[2].insuranceList[4].coverageList;
                   this.alltyped=res.data.data[2].insuranceList[7].coverageList;
                  

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
.in-select-style{
    width:50px;
}
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