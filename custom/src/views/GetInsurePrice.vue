<template>
    <div class="getprices">
        <div class="nav">
             <van-nav-bar
      title="获取报价"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/Insuretype')"
      class="header"
    />
        </div>
          
    <div class="main">
 <div class="top">
         <p>已选3种险种</p>
         <ul>
             
             <li >{{btext}}</li>
             
         </ul>
        </div>

           
        <div class="bottom">
         <ul>
             <li v-for="(item,index) in compalies" :key="index" >
 <van-card
  :price="(item.price)"
 
  :desc="(item.name)"  
  :origin-price="(item.disPrice)"
  :thumb="require('../assets/imgs/'+item.img) "
>
</van-card>
 
    </li>
         </ul>
        </div>



     

    </div>
    <div class="footer">

<span><button class="footerbtn"  @click="changeShow" type="button">核对车辆信息</button></span>
<span><van-button class="footerbtns" is-Link to="/pay" type="button">去支付</van-button></span>
</div>
       
  <div v-show="isShow" class="zhezhao">
    <div class="zz-show">
        <div class="show-top"><span><a id="close" @click="changeShow" href="javascript:;">x</a></span></div>
        <div class="show-main">
            <ul class="mtul">
                <li> 
            <p>车牌号：</p>
            <p><input type="text" v-model="a1"></p>
                </li>
                   <li> 
            <p>车架号：</p>
            <p><input type="text" v-model="a2"></p>
                </li>
                 <li>
            <p>发动机号：</p>
            <p><input type="text" v-model="a3"></p>
                </li>
                <li> 
            <p>车牌型号：</p>
            <p><input type="text" v-model="a4"></p>
                </li>
              <li> 
            <p>初登日期：</p>
            <p><input type="text" v-model="a5"></p>
                </li>   
                <li> 
            <p>身份证号：</p>
            <p><input type="text" v-model="a6"></p>
                </li>  
            </ul>
           <van-button is-Link to="/pay" class="qd-btn" type="submit">确定</van-button>
        </div>
    </div>
</div> 



    </div>


    
   
</template>
<script>

export default {
    name:'getprice',
    data(){
        return {
            isShow: false,
            btext: '1111',
            page:1,
            limit:3,
            compalies:[
                {
                    id:1,
                    name:"平安保险",
                    img:"shigu01.jpg",
                    price:"10万",
                    disPrice:"15万",
                    ischeck:0

                },
                 {
                    id:2,
                    name:"太平洋保险",
                    img:"shigu01.jpg",
                    price:"10万",
                    disPrice:"15万",
                    ischeck:0

                },
                 {
                    id:3,
                    name:"人寿保险",
                    img:"shigu01.jpg",
                    price:"19万",
                    disPrice:"15万",
                    ischeck:0

                },
                 {
                    id:4,
                    name:"中国安邦",
                    img:"shigu01.jpg",
                    price:"10万",
                    disPrice:"18万",
                    ischeck:0

                },
                 {
                    id:5,
                    name:"新华保险",
                    img:"shigu01.jpg",
                    price:"10万",
                    disPrice:"15万",
                    ischeck:0

                },
                 {
                    id:6,
                    name:"泰康保险公司",
                    img:"shigu01.jpg",
                    price:"23万",
                    disPrice:"20万",
                    ischeck:0

                },
              
                


            ]
        }
    },

     methods: {
         getdata:function(){
             const b=sessionStorage.getItem('a');
             console.log("111",b);
         },
   
    changeShow() {
     this.isShow = !this.isShow;
    },
    getall:function(){//获取保险种类
        this.axios
       
        .post("/user/addInfo.do",{
            infos:["20191128001-0","20191128002-0","20191128004-5w"]
        })
        .then(res=>{
            console.log("保险信息1",res.data.data);
            if(res.data.state=="200"){
                this.alltype=res.data.data;

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
        this.getall();

    }

  }

</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.footer{
    width:100%;
    height:70px;
    position:fixed;
    bottom:0;
    background-color:white;
  
}
.footer span{
    display:block;
}
.footer span button{
width:100px;
height:25px;
border-radius:4px;
font-size: 12px;
border:0;
background-color:#63ADDE;
color:white;


}
.nav{
    width:100%;
    height:47px;
    position: fixed;
    top:0;
    left:0;
}
.main{
    padding-top:30px;
    width:100%;
    height:auto;
    overflow: hidden;
}
van-nav-bar{
    top:0;
    left:0;
}

#close{
    color:black;
}
.mtul{
    margin-top:30px;
    width:100%;
    height:auto;
    font-size:16px;
    
}
.qd-btn{
    width:140px;
    height:30px;
    margin-top:60px;
    border-radius: 5px;
    font-size:14px;
    background-color: #63ADDE;
    color:white;
    line-height:30px;
}
.mtul li p input{
    width:90%;
    height:25px;
    border:1px solid black;
}
.mtul li{
    height:60px;
}
.getprices{width:100%}
.top{
    
    margin:0 auto;
    width:80%;
    height:80px;
   
}
.top ul{ margin-top:9px; 
    margin-left:10px;
    width:90%;
    height:auto;
}
.top ul li{font-size: 14px;
padding-right:3px;
width:auto;
height:20px;
border-right:1px solid rgb(41, 38, 38);
    display: block;
    float:left;
    margin:4px 2px;
}
.bottom{
    width:100%;
    height:auto;
    overflow: hidden;
    margin:0 auto;
    border-top:1px solid rgb(150, 145, 145);
}
.bottom ul{
     width:100%;
    height:auto;
}
.bottom ul li{
    width:100%;
    height:100px;
   
}
.van-button{
    bottom:30px;
  
}
.van-card__desc{
margin-top:30px;
}
.van-card__price{
    margin-top:-90px;
    font-size:16px;
    margin-left:70px;
    
}
.van-card__origin-price{
      font-size:16px;
}
.van-card__desc{
    font-size:12px;
}
.van-card__bottom{
    width:180px;
    margin-left:70px;
    margin-top:-20px;
}

.img{
    display:block;
    float:left;
    margin-left:-200px;
    margin-top:5px;
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
     width:90%;
    height:80%;
    background-color:white;

}
.show-top{
    width:100%;
    height:10%;
    
}
.show-top{
    display: block;
    float:right;
    width:40px;
    height:20px;
}
.show-main{
    width:90%;
    height:80%;
    
}
.footerbtn{
    margin-top:9px;
  
}
.footerbtns{
    margin-top:35px;
    line-height: 20px;
  
}
</style>