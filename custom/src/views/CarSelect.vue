<template>
    <div class="CarSelect">
          <div class="nav">
               <van-nav-bar
      title="选择维修部位"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
          </div>
       <div class="mains">
           <div class="top">
           <ul>
               <li @click="getBwId" v-for="(item,index) in allbw" :key="index">
                  <img :id="item.partId" :alt="item.partName" class="bwimgs" :src="require('../assets/imgs/shigu01.jpg')">
               </li>
                
           </ul>
        </div> 
       <div class="main">
           <div class="nav"><span>选择维修4s店</span></div>
           <div class="group">
               <div class="items" @click="getShopid" v-for="(item2,index2) in allshop" :key="index2">
                   <div class="items-left">
                       <img :src="require('../assets/imgs/shigu01.jpg')">
                   </div>
                   <div class="items-mid">
                       <div calss="mid-top">
                        <p class="top-name">{{item2.shopName}}</p>
                       <p class="top-adress">地址：{{item2.shopAddress}}</p>
                       </div>
                       <div class="mid-main">
                        <p><span class="mid-l">
                            服务客户数：{{item2.serviceNumber}}
                            </span><span class="mid-r">
                                自费价：<s>{{item2.selfPayPrice}}</s>
                                </span></p>
                      <p><span class="mid-l">
                          服务星：<van-rate v-model="values" />
                          </span><span class="mid-r">
                              保险价：<span class="bx">{{item2.insurancePrice}}</span>
                              </span></p>

                       </div>
                     
                   </div>
                  
               </div>
           </div>
       </div>
       </div>
       <div class="footer"><a href="javascript:;" @click="showMore">显示更多</a></div>
    </div>
</template>
<script>

export default {
    name:"CarSelect",
    data() {
    return {
         values: 3,
         allshop:[],
         allbw:[],
         partId:"",
         partName:""
     
     
    }
  },
  methods:{
      getBwId(e){
       /*    this.ids=e.target.title; */
      
        this.partId=e.target.id;
        this.partName=e.target.alt;
      console.log("部位partId", this.partId);
        console.log("部位partName", this.partName);
 
      },
      getShopid(e){
          console.log("店铺id",e.target);

      },
      showMore(){
          this.$router.replace("/moreStore")
      },
 showbw:function(){

 this.axios.get("/user/getAllPart")
        .then(res=>{
             console.log("保险信息0990129301",res.data.data);
                 
            if(res.data.state=="200"){
                this.allbw=res.data.data;
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
showbwdp:function(){

 this.axios.post("/back/serviceShop/findAllNoBy")
        .then(res=>{
             console.log("4s店铺",res.data.data);
                 
            if(res.data.state=="200"){
         this.allshop=res.data.data;
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


  },
   created(){
        this.showbw();
        this.showbwdp();
      
         
    }
}
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.nav{
    width:100%;}
   
.mains{
    height:500px;
    overflow: hidden;
   
}
.footer{
    width:100%;
    height:50px;
    position: fixed;
    bottom:0;
}
.top-name{
    font-size:10px;
    text-align: left;
    margin:0;
    padding:0;
}
.bwimgs{width:80px;
height:60px;}
.footer{
    width:100%;
    height:30px;
    position: fixed;
    background-color: rgba(216, 203, 203, 0.116);
    
}
.footer a{
    font-size: 10px;
    color:black;
   

}

s{
    color:rgb(63, 58, 58);
}
.van-icon-star{
    width:5px;
    height:5px;
    font-size:9px;
}
.mid-l{
    font-size:8px;
    display:block;
    float: left;
    height:16px;
    width:180px;
    text-align: left;
    
}
.mid-r{
    font-size:8px;
    display:block;
    width:100px;
    height:16px;
    float: right; 
}
p{
    padding:0;
    margin:0;
}
.mid-top{
    width:100%;
    height:50%;

}
.mid-main{
   width:100%;
    height:50%;
    margin:0;
    padding:0;

    
}
.nav span{
  font-size: 14px;
}
.items{
    width:100%;
    height:90px;
    margin-top:5px;
    border-bottom:1px solid #63ADDE;
}
.top-adress{
    width:260px;
    font-size: 10px;
     margin:0;
    padding:0;
    text-align: left;
}
.items-left{
    width:80px;
    height:100%;
    float:left;
    border-right:4px solid white;
 
}
.bx{
    color:red;
}
.items-left img{
    width:80px;
    height:90px;
    
}
.items-mid{
    width:280px;
    height:100%;
    float:left;
 
}

.nav{
background-color:#63ADDE;
color:white;
}
.top{
    width:100%;
    height:180px;
}
.top ul li{
    width:80px;
    height:60px;
    margin:10px 5px;
    float:left;
}
.main{
    width:100%;
    height:450px;

}
</style>
