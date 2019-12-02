<template>
    <div class="CarSelect">
           <van-nav-bar
      title="选择维修部位"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
       <div class="top">
           <ul>
               <li v-for="(item,index) in bws" :key="index">
                  <img class="bwimgs" :src="require('../assets/imgs/'+item.img)">
               </li>
                
           </ul>
        </div> 
       <div class="main">
           <div class="nav"><span>选择维修4s店</span></div>
           <div class="group">
               <div class="items" v-for="(item,index) in dps" :key="index">
                   <div class="items-left">
                       <img :src="require('../assets/imgs/'+item.img)">
                   </div>
                   <div class="items-mid">
                       <div calss="mid-top">
                        <p>{{item.name}}</p>
                       <p class="adress">地址：{{item.addres}}</p>
                       </div>
                       <div class="mid-main">
                        <p><span class="mid-l">
                            服务客户数：{{item.person}}
                            </span><span class="mid-r">
                                自费价：<s>{{item.zf}}</s>
                                </span></p>
                      <p><span class="mid-l">
                          服务星：<van-rate v-model="values" />
                          </span><span class="mid-r">
                              保险价：<span class="bx">{{item.bx}}</span>
                              </span></p>

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
      bws:[
          {id:1,
           state:0,
           img:"shigu01.jpg",
          },
           {id:2,
           state:0,
           img:"shigu01.jpg"
          },
           {id:3,
           state:0,
           img:"shigu01.jpg"
          },
           {id:4,
           state:0,
           img:"shigu01.jpg"
          },
          {id:5,
           state:0,
           img:"shigu01.jpg"
          }

      ],
      dps:[
          {
              id:1,
              name:"北京正的运城汽车贸易服务有限公司",
              addres:"成都市高新区惺惺惜惺惺嘻嘻嘻详细嘻嘻嘻",
             person:500,
            zf:5000,
            bx:4000,
            values: 3,
            status:0,
            img:"shigu01.jpg"

          },
           {
              id:1,
              name:"北京正的运城汽车贸易服务有限公司",
              addres:"成都市高新区惺惺惜惺惺嘻嘻嘻详细嘻嘻嘻",
             person:500,
            zf:5000,
            bx:4000,
            values: 3,
            status:0,
            img:"shigu01.jpg"

          }
      ]
    }
  },
  methods:{
      showMore(){
          this.$router.replace("/moreStore")
      }
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
.adress{
    width:260px;
    font-size: 10px;
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
