<template>
    <div class="carBxl">
        <div class="top">
   <span>奥迪</span>
    </div>  
<div class="main">
    <ul>
        <li v-for="(item,index) in carxls" :key="index" >
         <span>{{item.name}}</span>
        </li>
    </ul>
    </div> 
    </div>
</template>
<script>
export default {
    name:"carBxl",
    data(){
        return{
            carxls:[
        {id:1,
        name:"2系列",
        },
        {id:2,
        name:"3系列"},
        {id:3,
        name:"4系列"},
        {id:4,
        name:"5系列"},
         {id:5,
        name:"6系列"}
        
        
        ]

        }

        
    }
}
</script>
<style scoped>
ul{
    margin-top:10px;
    
}
ul li{
    margin-top:5px;
    width:100%;
    height:30px;
    border-bottom:1px solid rgb(102, 97, 97);
}

ul li span{
font-size: 16px;
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
height:25%;
text-align: left;
background-color: rgba(177, 165, 165, 0.267);
}
.top span{
    font-size:20px;
    margin-left:20px;
}
.main{
width:100%;
height:90%;
}
</style>