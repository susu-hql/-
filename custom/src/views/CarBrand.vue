<template>
<div class="carBrand">
  <van-nav-bar
      title="品牌选择"
      left-text="返回"
      left-arrow
      flxed
      @click-left="$router.push('/mylist')"
      class="header"
    />
<div class="main">
    <van-index-bar>
  <van-index-anchor index="A">A</van-index-anchor>
  <van-cell  title="奥迪" />
  
  <van-index-anchor index="B" />
  <van-cell  title="奔驰" />
  <van-cell title="宝马" />
  <van-cell title="别客" />
   <van-cell title="保时捷" />
   <van-cell title="本田" />

<van-index-anchor index="C" />
  <van-cell title="长城" />
  <van-cell title="昌河" />
  

  <van-index-anchor index="D" />
  <van-cell title="东风" />
  <van-cell title="东南" />
 

  <van-index-anchor index="F" />
  <van-cell title="丰田" />
  
<van-index-anchor index="G" />
  <van-cell title="马自达" />
   <van-index-anchor index="X" />
  <van-cell title="雪铁龙" />
   <van-index-anchor index="L" />
  <van-cell title="陆风" />
  <van-cell title="零跑" />
  <van-index-anchor index="M" />
  <van-cell title="明迹" />
  <van-cell title="零跑" />
  <van-index-anchor index="Z" />
  <van-cell title="中华" />
  <van-cell title="中欧" />
</van-index-bar>

</div>
</div>
</template>
<script>
export default {
    name:"carBrand"
    
}
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
</style>


