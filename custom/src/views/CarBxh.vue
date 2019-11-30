<template>
  <div class="carBxh">
<div class="top">
   <span>奥迪</span>
    </div>  
<div class="main">
    <ul>
        <li v-for="(item,index) in carbrands" :key="index" >
           <span><img :src="require('../assets/imgs/'+item.img)"></span> 
           <span>{{item.name}}（{{item.model}}）</span>
        </li>
    </ul>
    </div>   
      </div>  
</template>
<script>
export default {
    name:"carBxh",
    data(){
        return{
            carbrands:[
             {id:1,
             name:"奥迪",
             model:"A3",
             img:"shigu01.jpg"
             },
               {id:2,
             name:"奥迪1",
             model:"A3",
             img:"shigu01.jpg"
             },
               {id:3,
             name:"奥迪2",
             model:"A3",
             img:"shigu01.jpg"
             },
            ]

        }
    }

}
</script>
<style scoped>
ul{
    margin-top:45px;
    
}
ul li{
    margin-top:10px;
    width:100%;
    height:50px;
   
    border-bottom:1px solid rgb(102, 97, 97);
}
ul li span img{
width:40px;
height:40px;
border:1px solid black;
}
ul li span{
font-size: 18px;
line-height: 36px;
display:block;
float:left;
margin-left:20px;
}
.carBxh{
    width:100%;
    height:40px;
    background-color: rgba(177, 165, 165, 0.267);
}
.top{
width:100%;
height:10%;
text-align: left;
}
.top span{
    font-size:16px;
    margin-left:20px;
}
.main{
width:100%;
height:90%;
}
</style>
