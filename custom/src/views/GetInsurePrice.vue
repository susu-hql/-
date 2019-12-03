<template>
    <div class="getprices">
        <div class="top">
         <p>已选3种险种</p>
         <ul>
             <li>司机险</li>
             <li>司xxx机险</li>
             <li>司xxxss机险</li>
              <li>司机险</li>
             <li>司xxx机险</li>
             <li>司xxxss机险</li>
         </ul>
        </div>
        <div class="bottom">
         <ul>
             <li>
 <van-card
  price="2.00"
  desc="描述信息"  
  origin-price="10.00"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>

  <div slot="footer">
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>

     
    </li>
         </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'getprice',

}
</script>
<style scoped>
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
    border:1px solid rgb(56, 54, 54);
}
.van-button{
    bottom:30px;
  
}
.van-card__desc{
margin-top:30px;
}
.van-card__price{
    margin-top:-90px;
    
}

.img{
    display:block;
    float:left;
    margin-left:-200px;
    margin-top:5px;
}



</style>