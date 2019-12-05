<template>
    <div class="receiving">
        <ul>
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
    created(){
        var a = this.$route.query.orderId;
        this.id = a
        console.log(a)
    }
}
</script>

<style lang="less" scoped>
    ul{
       display: flex;
       justify-content: space-around;
       border-bottom: 2px solid black;
       height: 100px;
       line-height: 100px;
       background: #63ADDE;
    }
    ul li a{
        color: lightgray;
        &.router-link-exact-active {
          color: white;
        }
    }
</style>
