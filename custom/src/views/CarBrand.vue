<template>
<div class="carBrand">
  <div class="nav">
     <van-nav-bar
      title="品牌选择"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
  </div>
 
<div class="main">
    <ul class="brand-ul">
      <li v-for="(item,index) in alltypea" :key="index" class="brand-li">
      <a @click="getid" :title="item.brandId" class="brand-a" href="javascript:;">{{item.brandName}}</a>
      </li>
    </ul>

</div>
<div v-show="show" class="zhezhao">
  <div class="showzz">
<ul class="brand-ul">
     
      <li v-for="(item2,index2) in alltypeb" :key="index2" class="brand-li">
      <a @click="getxxid" :title="item2.brandId" class="brand-a" href="javascript:;">{{item2.seriesName}}</a>
      </li>
    </ul>
  </div>
</div>

<div v-show="shows" class="zhezhaos">
  <div class="showzzs" >
<ul class="brand-ul">
     
      <li v-for="(item3,index3) in alltypec" :key="index3" class="brand-li">
      <a  @click="gomore" :title="item3.seriesId" class="brand-a" href="javascript:;">{{item3.versionName}}</a>
      </li>
    </ul>
  </div>
</div>


</div>
</template>
<script>
export default {
    name:"carBrand",
    data(){
      return{
        show:false,
        shows:false,
        alltypea:[],
        alltypeb:[],
         alltypec:[],
        ids:1,
        idss:1
      }
    },
    methods:{
      getid:function(e){
        this.ids=e.target.title;
        console.log("111",this.ids);
         this.show=true;
        this.getalltypexl(this.ids);

      },
       getxxid:function(e){
        this.idss=e.target.title;
        console.log("系列id",this.idss);
        this.changeshows();
        this.getalltypebb();
       

      },
      gomore:function(){
         this.$router.replace("CarSelect");
      },

      changeshows:function(){
        this.show=false;
        this.shows=true;

      },
      getalltype:function(){//获取保险种类

      
        this.axios
        .get("/user/getAllCarBrand")
        .then(res=>{
             console.log("保险信息111",res.data.data);
             
                 
            if(res.data.state=="200"){
                this.alltypea=res.data.data;

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
     getalltypexl:function(){
         
        this.axios
        .post("/user/getSeriesByBrandId",{
          brandId:this.ids
        })
        .then(res=>{
             console.log("保险信息999",res.data.data);  
                 
            if(res.data.state=="200"){
                this.alltypeb=res.data.data;

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
  getalltypebb:function(){
         
        console.log("xl",this.idss);
        this.axios
        .post("/user/getVersionBySeriesId",{
          seriesId:this.idss
        })
        .then(res=>{
             console.log("系列",res.data.data);
               
                 
            if(res.data.state=="200"){
                this.alltypec=res.data.data;

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
        this.getalltypebb();
       
      
      
         
    }
    
}
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
@import "../assets/css/allstyle.less";
.brand-li{
  width:100%;
  height:30px;
  border-bottom:1px solid rgba(59, 56, 56, 0.534);
}
.brand-a{
  color:black;
  font-size: 14px;
}
.zhezhao{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: rgba(0, 0, 0, 0.61);
}
.zhezhaos{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: rgba(0, 0, 0, 0.61);
}
.showzz{
  width:80%;
  height:100%;
   position: fixed;
  top:0;
  right:0;
  background-color: white;
}
.showzzs{
  width:80%;
  height:100%;
   position: fixed;
  top:0;
  right:0;
  background-color: white;
}
</style>


