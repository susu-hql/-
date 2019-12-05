<template>
    <div class="receiving">
        <div class="nav">
            <ul>
                <li>&lt;返回</li>
            </ul>
            <p @click="goback">订单详情</p>
        </div>
        <ul class="name">
            <li><router-link :to="'/orderStatus?orderId='+id">订单状态</router-link></li>
            <li><router-link :to="'/orderAmount2?orderId='+id">订单详情</router-link></li>
        </ul>
        <keep-alive include="orderAmount2,orderStatus">
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:""
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    },
    created(){
        var a = this.$route.query.orderId;
        this.id = a
        console.log(a)
    }
}
</script>

<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0
    }
    .name{
       display: flex;
       justify-content: space-around;
       border-bottom: 2px solid black;
       height: 100px;
       line-height: 100px;
    //    background: #63ADDE;
    }
    .name li a{
        color: black;
        &.router-link-exact-active {
          color: red;
        }
    }
    .nav{
        width: 100%;
        height: 80px;
        background: #63ADDE;
        font-size: 36px;
        color: white;
        line-height: 80px;
        text-align: center;

        p{
            transform: translateX(-32px);
        }
    }
    .nav ul li{
        float:left;
        list-style: none;
        margin-left: 10px;
    }
    .nav ul li a{
        color: white;
        text-decoration: none;
    }
    .nav ul li a:hover{
        cursor: pointer;
    }
</style>
