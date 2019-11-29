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

<div class="footer">

<span><button :show="show"  @click="show = false" type="button">核对车辆信息</button></span>
<span><button type="button">联系客服</button></span>
</div>

<div class="zhezhao">
    <div class="zz-show">
        <div class="show-top"></div>
        <div class="show-main"></div>
    </div>
</div>
    </div>


    
   
</template>
<script>

export default {
    name:'getprice',
    data(){
        return {
            show: false,
            compalies:[
                {
                    id:1,
                    name:"平安保险1",
                    img:"shigu01.jpg",
                    price:"10万",
                    disPrice:"15万",
                    ischeck:0

                },
                 {
                    id:2,
                    name:"平安保险3",
                    img:"shigu01.jpg",
                    price:"10万",
                    disPrice:"15万",
                    ischeck:0

                },
                 {
                    id:3,
                    name:"平安保险2",
                    img:"shigu01.jpg",
                    price:"10万",
                    disPrice:"15万",
                    ischeck:0

                },
                 {
                    id:4,
                    name:"平安保险2",
                    img:"shigu01.jpg",
                    price:"10万",
                    disPrice:"15万",
                    ischeck:0

                }


            ]
        }
    },
     methods: {
    showPopup() {
      this.show = true;
    }
  }

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
.footer{
    width:100%;
    height:70px;
   border:1px solid red;
    position:fixed;
    bottom:0;
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
.zhezhao{
    width:100%;
    height:700px;
    position:fixed;
    top:0;
    left:0;
    background-color:rgba(14, 4, 4, 0.726);
}

</style>