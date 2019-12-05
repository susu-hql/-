<template>
    <div class="moreStore">
        <div class="nav">
            <van-nav-bar
      title="所有4s店铺"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
          </div>
  <div class="group" >
               <div @click="getShopid" class="items" v-for="(item,index) in allshop" :key="index">
                   <div class="items-left">
                       <img :alt="item.shopId" :src="require('../assets/imgs/shigu01.jpg')">
                   </div>
                   <div class="items-mid">
                       <div calss="mid-top">
                        <p class="more-name">{{item.servicshopName}}</p>
                       <p class="more-adress">地址：{{item.address}}</p>
                       </div>
                       <div class="mid-main">
                        <p><span class="mid-l">
                            服务客户数：{{item.serviceNumber}}
                            </span><span class="mid-r">
                                
                                </span></p>
                      <p><span class="mid-l">
                          服务星：<van-rate v-model="values" />
                          </span><span class="mid-r">
                             
                              </span></p>

                       </div>
                     
                   </div>
                  
               </div>
           </div> 
 <div class="group">
               <div @click="getShopid" class="items" v-for="(item,index) in allshop" :key="index">
                   <div class="items-left">
                       <img :alt="item.shopId" :src="require('../assets/imgs/shigu01.jpg')">
                   </div>
                   <div class="items-mid">
                       <div calss="mid-top">
                        <p class="more-name">{{item.servicshopName}}</p>
                       <p class="more-adress">地址：{{item.address}}</p>
                       </div>
                       <div class="mid-main">
                        <p><span class="mid-l">
                            服务客户数：{{item.state}}
                            </span><span class="mid-r">
                                
                                </span></p>
                      <p><span class="mid-l">
                          服务星：<van-rate v-model="values" />
                          </span><span class="mid-r">
                             
                              </span></p>

                       </div>
                     
                   </div>
                  
               </div>
           </div>


    </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
    name:"moreStore",
    data(){
        return{
            values:3,
            allshop:[],
            shopIds:""
    
        }
    },
    methods:{
        ...mapMutations(["getdpid"]),
        getShopid(e){
         this.dpid=e.target.alt;
          console.log("店铺id",this.dpid);
           this.getdpid(this.dpid);
            this.$router.replace("ConfirmOrder");  
      },
showbwdp:function(){

 this.axios.post("/user/serviceShop/findAllNoBy")
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
           this.showbwdp();

    }
     

    
}
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
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
p{
    padding:0;
    margin:0;
}
.more-name{
    font-size: 12px;
    text-align: left;
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
}
.mid-top{
    width:100%;
    height:50%;

}
.mid-main{
   width:100%;
    height:50%;
    
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
.more-adress{
    width:260px;
    font-size: 10px;
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
