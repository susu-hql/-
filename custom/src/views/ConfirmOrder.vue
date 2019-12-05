<template>
    <div class="ConfirmOrder">
        <van-nav-bar
      title="订单确认"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
        <div class="imgs">
           <img src="../assets/imgs/baoxian.jpg"> 
        </div>
        <div class="mian">
            <div class="main-top">
                <div class="one">
                    <p class="con-title">维修信息</p>
                    <p class="con-name">维修门店:四川省成都市温江区浩旺路21号</p>
                    <p class="con-adress">门店地址：成都温江中达丰田汽车销售服务有限公司</p>
                     <p class="con-title">维修部位及金额</p>
                </div>
                <div  class="two">
                   
                    <p v-for="(item,index) in bwtype" :key="index" class="bwxx">
                        <span class="bwleft">{{item.partName}}</span>
                        <span class="bwright">金额:<span class="price-red">{{item.insurancePrice}}</span></span>
                        <!-- <span style="color:blue;" >zong:{{ sum + item.insurancePrice}}</span> -->
                    </p>
                   
                   <!-- <div v-for="(item,index) in bwtype" :key="index"> -->
                        <p class="con-hj"></p>
                   <!-- </div> -->
                </div>

            </div>
            <div class="mian-main">
                <p class="con-pstyle">
                    <span>维修方式</span>
                    <span><input type="radio" name="xc">自费修车</span>
                     <span><input type="radio" name="xc">保险修车</span>
                </p>
                 <p class="con-pstyle">
                    <span>上门接车</span>
                    <span><input  @click="changeShow"  type="radio" name="jc" value="yes">是</span>
                     <span><input type="radio" name="jc" value="no">否</span>
                </p>
                <p class="hjs">
                    <span class="hj-L">合计：<span class="price-red">120</span></span>
                    <span class="hj-r"><a href="javascript:;" @click="gopage">确认预约</a></span>
                </p>
                
            </div>
        </div>
 
<div v-show="isShow" class="zhezhao">
    <div class="zz-show">
        <div class="show-top"><span><a id="close" @click="changeShow" href="javascript:;">x</a></span></div>
        
        <div class="show-main">
            <ul class="mtul">
                <li> 
                <span>接车时间：</span>
                <span><input type="text" placeholder="请选择接车时间"></span>
                </li>
                 <li> 
                <span>接车地址：</span>
                <span><input type="text" placeholder=""></span>
                </li> 
                 <li> 
                <span>还车时间：</span>
                <span><input type="text" placeholder=""></span>
                </li>
                 <li> 
                <span>关联车主卡：</span>
              <select class="selectstyle">
                  <option>11</option>
                  <option>22</option>
                  
              </select>
                </li> 
                 <li> 
                <span>车牌号：</span>
                <span><input type="text" placeholder=""></span>
                </li> 
                 <li> 
                <span>车主姓名：</span>
                <span><input type="text" placeholder=""></span>
                </li>
                 <li> 
                <span>联系电话号码：</span>
                <span><input type="text" placeholder=""></span>
                </li>  


            </ul>
          <p class="end">
              <input type="radio" checked="checked">
              <span>我已经阅读并同意</span>《<a href="javascript:;">使用条约和使用政策</a>》
              </p>

           <button class="qd-btn" @click="changeShows" type="submit">提交</button>
        </div>
    </div>
</div>


<div class="zhezao-payShow" v-show="shows">
<div class="payShow">
    <div class="pay-top">
        <span class="pay-price">
            将收取200的预约金，其余金额到店支付
        </span>
    </div>
    <div class="pay-main">
        <button class="qr" type="reset" @click="goplay()">确认</button>
        <button @click="changeShows"   class="qx" type="reset">取消</button>
    </div>
</div>

</div>

    </div>
</template>
<script>

export default {
    name:"ConfirmOrder",
    jc:"",
    data(){
        return{
            isShow:false,
            shows:false,
          value1: 0,
          bwtype:[],
          dptype:{},
            sum: 0,
            dps:"",
            bw:[],
            xiid:"",
            hu:''
       
        }
    },
     
      methods: {
        //   sum(arr){
        //       console.log(arr);
        //       console.log(this.sum);
        //   },
          gopage(){
              this.$router.replace("allsafe");
          },
          getalldata(){
               this.xiid=this.$store.state.xlId;
            
             console.log("xlid",this.xiid);
           
               this.bw=this.$store.state.getbwid;
                 console.log("部位id",this.bw);
            this.dps=this.$store.state.partId;
                 console.log("店铺id",this.dps);

                this.hu = this.bw.join(',');
                console.log("12123234",this.hu);

            
           
          },
    changeShow() {
     this.isShow = !this.isShow;
    },
    changeShows(){
     this.shows = !this.shows;   
    },
    goplay(){
        this.$router.replace("pay");
    },

    getall:function(){
        this. getalldata();
        console.log("jhhkj",this.hu);
         

       console.log()
        this.axios
      
        .post("/user/getQuotePrice",{
            /*  versionId:this.xiid,
              partIdList:this.hu,
              shopId:this.dps */
        versionId:this.xiid,
        partIdList:this.hu,
        shopId:2



        })
        .then(res=>{
            console.log("系列1",this.xiid);
            console.log("系列2",this.hu);
            console.log("系列3",this.dps);
              console.log("1231224657",res.data.data);
            console.log("保险信息1",res.data.data.shop);
            console.log("保险信息2",res.data.data.quote);
            if(res.data.state=="200"){
                this.bwtype=res.data.data.quote;
                this.dptype=res.data.data.shop;
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


     getdp:function(){
        this.axios
        .post("/user/serviceShop/findAllNoBy")
        .then(res=>{
            console.log("4s店铺",res.data.data);
            
            if(res.data.state=="200"){
                this.dptype=res.data.data;
            //    return this.dptype;
            }else{
                this.$message({
                message:'请求出错',
                type:'error'
                });
            }
        })
        // .then( res => {
        //      this.sum(1);
        // })
        .catch(err=>{
            console.log(err);
        })

    }

  },
   created(){
        this.getall();
        this.getdp();
        this.getalldata();
       

    }


    
}
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.qr{
    background-color: #63ADDE;
}
.qx{
   background-color: #63ADDE;  
}
.pay-main{
    margin-top:-20px;
}
.selectstyle{
    width:180px;
    height:30px;
  
    margin-left:-70px;
    margin-top:10px;
}
.pay-main button{
    color:white;
    width:60px;
    height:25px;
    margin:0px 20px;
    font-size: 14px;
    border:0;

}
.pay-price{
    display: block;
    font-size: 18px;
    width:230px;
    text-align: left;
    margin:20px auto;
}
.payShow{
    width:250px;
    height:180px;
    background-color: white;
    margin:auto;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    border-radius: 10px;
}
.pay-top{
    width:100%;
    height:70%;

}
.pay-mid{
    width:100%;
    height:30%;

}
.zhezao-payShow{
    width:100%;
    height:100%;
    background-color:rgba(43, 40, 40, 0.548);
    position: fixed;
    top:0;
    left:0;
}

#close{
    color:black;
}
.qd-btn{
    width:100px;
    height:40px;
    font-size:12px;
    margin-top:30px;
}
.van-dropdown-menu{
    height:20px;
    width:100px;
}
.van-dropdown-menu__title{
    background-color: black;
    width:100px;

}
input[type=text]{
 width:250px;
 height:20px;
 border:0;
 
}
.con-hj{
    width:33%;
    height:20px;
    float:right;
}
.two{
    width:80%;
    height:auto;
   
}
.bwxx{
    width:90%;
    height:20px;
    
}
.price-red{
    color:red;
}
.bwleft{
    float:left;
    
}
.bwright{
    float:right;
    
}
p{  width:90%;
    margin-top:7px;
    font-size:16px;
    padding-left:5px;
}
.con-title{
    font-size:18px;
    font-weight: bold;
    text-align: left;
    padding:0;
     padding-left:5px;
}
.con-name{
    font-size:14px;
    text-align: left;
    padding-top:6px;
    margin:0;
     padding-left:5px;
}
.con-adress{
     font-size:14px;
    text-align: left;
     padding-top:6px;
    margin:0;
     padding-left:5px;
}
.con-title{
    margin:0;

}
.con-hj{
    margin:0;
}
.imgs{
    width:100%;
    height:280px;
    background-color:rgba(146, 133, 133, 0.61);
}
.imgs img{
    width:95%;
    height:250px;
    padding-top:10px; 
}
.mian-main{
    width:100%;
    height:100px;
    border-top:2px solid rgba(78, 76, 76, 0.493);
    position: fixed;
    bottom:0;

}
.hjs{
   width:100%;
    height:30px;
    border-top:1px solid rgb(41, 40, 40);
    position: fixed;  
    bottom:0;
}
.hj-L{
    float:left;
    width:50%;
    height:100%;
    border-right: 1px solid black;
    text-align: center;
    line-height: 30px;
}
.hj-r{
    float:right;
    width:49%;
    height:100%;
    text-align: center;
     line-height: 30px;
}
.hj-r a{
    color:black;
}

.con-pstyle span{
    width:33%;
    height:100%;
    float:left;
    display: block;
    margin-top:0;
    font-size: 14px;
    
}
.zhezhao{
    width:100%;
    height:700px;
    position:fixed;
    top:0;
    left:0;
    background-color:rgba(14, 4, 4, 0.726);
}
.zz-show{
    top:0;
    bottom:0;
    left:0;
    right:0;
    position:absolute;
    margin:auto;
     width:95%;
    height:90%;
    background-color:white;

}
.show-top{
    display: block;
    float:right;
    width:40px;
    height:20px;
}
.show-main{
    width:100%;
    height:80%;
    
    margin-top:40px;

    
}
.mtul{
    width:100%;
    height:90%;
    
}
.mtul li{
    width:100%;
    height:60px;
    border-bottom:1px solid rgb(97, 91, 91);
    font-size: 14px;
}
.mtul li span{
    display:block;
    float:left;
    line-height: 44px;
}
.end{
    font-size: 12px;
}
</style>