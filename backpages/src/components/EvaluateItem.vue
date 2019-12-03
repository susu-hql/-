<template>
  <!-- <div class="userItem"> -->
    <tr>
      <td class="userid">{{info.userid}}</td>
      <td class="username">{{info.name}}</td>
      <td class="username">张三丰</td>
      <td class="tel">12547895442</td>
      <td class="carNum">
        <el-rate
          v-model="info.start"
          disabled
          show-score
          text-color="#ff9900">
        </el-rate>
      </td>
      <td >
        <p class="desc">{{info.desc}}</p>
        </td>
      <td class="lTime">2019-09-1-27</td>
      <td class='operate'>  
          <el-button type="success" icon="el-icon-view" circle @click='look(info.userid)' title="查看详情" ></el-button>
         <el-button type="danger" icon="el-icon-delete" circle @click='del(info.userid)' title="删除"></el-button>
      </td>
    </tr>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'EvaluateItem',
  data (){
    return {
    }
  },
  props:['info'],
  methods:{
    look:function(i){
      location.assign('/lookEvaluate?userid='+i);
      console.log('查看');
    },
    del:function(i){
      console.log('删除'+i);
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
          //  =============== 删除 ===============
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
  },
  mounted(){

  },
  created(){
    
  }
}
</script>


<style scoped lang="less">

   .operate{
        min-width: 210px;
    }
    tr{
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      td{
        padding:10px 10px;
        border-bottom: 1px solid rgb(187, 181, 181);
      }
      .desc{
        // border:1px solid red;
        width: 150px;
        overflow: hidden;
        white-space: nowrap;  //强制文本在一行内显示
        text-overflow: ellipsis; //当对象内文本溢出时显示省略标记
      }
    }
</style>
