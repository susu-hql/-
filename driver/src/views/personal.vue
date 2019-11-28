<template>
    <div class="box">
        <div class="nav">
            <ul>
                <li @click="goback">&lt;返回</li>
            </ul>
            <p>个人中心</p>
        </div>
        <hr>
        <div class="change" @click="changephone">
            <img src="../assets/修改 密码.png" alt="">
            修改密码
        </div>
        <div class="exit" @click="quit">退出账号</div>
    </div>
</template>

<script>
export default {
    methods:{
        changephone(){
            this.$router.push('/changephone')
        },
        quit(){
            this.$router.replace('/login')
        },
        goback(){
            this.$router.replace('/login')
        }
    }
}
</script>

<style lang="less" scoped>
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
    hr{
        height: 10px;
        color: #d7d7d7;
        background: #d7d7d7;
    }
    .change{
        width: 100%;
        font-size: 20px;
        height: 80px;
        line-height: 80px;
        text-align: left;
        border-bottom: 1px solid rgba(121, 121, 121, 1);
        margin-bottom: 100px
    }
    .change img{
        vertical-align: middle;
        margin-left: 10px;
    }
    .exit{
        border-bottom: 1px solid rgba(121, 121, 121, 1);
        height: 80px;
        line-height: 80px;
        font-size: 20px;
        border-top: 1px solid rgba(121, 121, 121, 1);
    }
</style>
