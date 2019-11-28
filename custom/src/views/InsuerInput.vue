<template>
    <div class="app">
       
        <div class="app-main">
        <ul>
        <li>
            <span>关联车主卡：</span>
            <span class="carCard">
    <van-dropdown-menu>
  <van-dropdown-item v-model="values" :options="options" />
</van-dropdown-menu>
            </span>
        </li>
         <li>
            <span>车牌号码：</span>
            <span> 
                <van-cell-group>
          <van-field  placeholder="请输入车牌号" />
              </van-cell-group>
</span>
         </li>
         <li>
           <span>车架号：</span>
            <span>
                  <van-cell-group>
          <van-field  placeholder="请输入车架号号" />
              </van-cell-group>
            </span>
         </li>
        <li>
        <span>发动机号：</span>
            <span>
                <van-cell-group>
          <van-field  placeholder="请输入发动机号" />
              </van-cell-group> 
            </span>

        </li>
        <li>
            <span>初登日期：</span>
            <span>
            </span>
        </li>
        <li>
            <span>品牌型号：</span>
            <span>
              
            </span>
        </li>
        <li>
            <span>车主手机号：</span>
            <span>
            <van-cell-group>
          <van-field  placeholder="请输入车主手机号" />
              </van-cell-group>
            </span>
        </li>
        <li>
            <span>身份证号：</span>
            <span> 
       <van-cell-group>
          <van-field  placeholder="请输入身份证号" />
              </van-cell-group>
            </span>
        </li>
        </ul>

     <van-button class="btnkg" type="primary" to="index">提交</van-button>



        </div>
    </div>
</template>
<script>
export default {
    name:'insuerInput',
    data() {
    return {
     
      values: '1',
      options: [
        { text: '是', value: '1' },
        { text: '否', value: '0' },
      ]
     
    }


  },
   methods: {
       
   
    }
  
    
}
</script>
<style scoped>

ul{
    width:100%;
    height:500px;
   
}
li{
    list-style: none;
    height: 50px;
    width:80%;
    margin-left:30px;
    border-bottom:1px solid rgb(129, 125, 125);
    
}
.btnkg{
    background: #63ADDE;
    text-align: center;
    line-height: 34px;
    border:0;
   
}
span{
    font-size: 14px;
    float:left;
    line-height: 50px;

}
.carCard{
    display: block;
    float:right;
    margin-right:20px;
}
</style>