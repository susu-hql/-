<template>
    <div class="order-amount">
        <div class="wrap">
            <div class="info">客户姓名：辗迟</div>
            <div class="info">客户电话：18412474512</div>
            <div class="info">接车时间：2019.11.28</div>
            <div class="info">车牌号码：川A85865</div>
            <div class="info">接车地址：地址地址地址地址地址地址地址地<span><img src="../assets/地图.png" alt="">地图</span></div>
            <div class="info">还车地址：地址地址地址地址地址地址地址地<span><img src="../assets/地图.png" alt="">地图</span></div>
            <div class="info">门店名称：店铺名字店铺名字店铺名字店铺名<span><img src="../assets/地图.png" alt="">地图</span></div> 
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .info{
        font-size: 30px;
        border-bottom: 1px solid black;
        height: 80px;
        line-height: 80px;
        text-align: left;
        padding-left: 30px;
    }
    .jiedan{
        width: 100%;
        height: 80px;
        line-height: 80px;
        font-size: 36px;
        border-top: 1px solid black;
        position: absolute;
        bottom: 0;
        text-align: center
    }
    .wrap{
        position: relative;
        min-height: 100%;
    }
    span{
        margin-left: 10px;
    }
    span img{
        vertical-align: middle;
    }
</style>
