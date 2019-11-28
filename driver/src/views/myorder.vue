<template>
    <div class="order">
        <div class="nav">
            <ul>
                <li @click="goback">&lt;返回</li>
            </ul>

            <p>全部订单</p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.replace('/login')
        }
    }
}
</script>

<style lang='less' scoped>
    *{
        margin: 0;
        padding: 0
    }
    .nav{
        width: 100%;
        height: 60px;
        background: #63ADDE;
        font-size: 18px;
        color: white;
        line-height: 60px;
        text-align: center;

        p{
            transform: translateX(-12px);
        }
    }
    ul li{
        float:left;
        list-style: none;
        margin-left: 10px
    }
    ul li a{
        color: white;
        text-decoration: none;
    }
    ul li a:hover{
        cursor: pointer;
    }
</style>