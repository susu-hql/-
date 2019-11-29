<template>
  <div class="inindex" >
 <div class="in-mian">
     <p class="title">预约估损</p>
     <p class="title2">服务流程</p>
     
     <ul>
        <li>(1)出险后，客户向保险公司理赔部门报案;</li> 
       <li>(2)内勤接报案后，要求客户将出险情况立即填写《业务出险登记表》(电话、传真等报案由内勤代填);</li>
       <li>(3)内勤根据客户提供的保险凭证或保险单号立即查阅保单副本并抄单以及复印保单、保单副本和附表。</li>
       <li>(4)确认保险标的在保险有效期限内或出险前特约交费，要求客户填写《出险立案查询表》，予以立案(如电话、传真等报案，由检验人员负责要求客户填写)，并按报案顺序编写立案号;</li>
       <li>(5)发放索赔单证。经立案后向被保险人发放有关索赔单证，并告知索赔手续和方法(电话、传真等报案，由检验人员负责);
</li>
       <li>(6)通知检验人员，报告损失情况及出险地点。</li>
       <li>(7)检验人员在接保险公司内勤通知后1个工作日内完成现场查勘和检验工作(受损标的在外地的检验，可委托当地保险公司在3个工作日内完成)</li>
     </ul>
     <p class="title2">服务保障</p>
 <ul>
        <li>(1)出险后，客户向保险公司理赔部门报案;</li> 
       <li>(2)内勤接报案后，要求客户将出险情况立即填写《业务出险登记表》(电话、传真等报案由内勤代填);</li>
       <li>(3)内勤根据客户提供的保险凭证或保险单号立即查阅保单副本并抄单以及复印保单、保单副本和附表。</li>
       <li>(4)确认保险标的在保险有效期限内或出险前特约交费，要求客户填写《出险立案查询表》，予以立案(如电话、传真等报案，由检验人员负责要求客户填写)，并按报案顺序编写立案号;</li>
       <li>(5)发放索赔单证。经立案后向被保险人发放有关索赔单证，并告知索赔手续和方法(电话、传真等报案，由检验人员负责);
</li>
       <li>(6)通知检验人员，报告损失情况及出险地点。</li>
       <li>(7)检验人员在接保险公司内勤通知后1个工作日内完成现场查勘和检验工作(受损标的在外地的检验，可委托当地保险公司在3个工作日内完成)</li>
     </ul>
     </div>     
<div class="app-bottom">
 <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" type="primary" to="index">立即预约</van-button>
        </div>
  </div>


</template>
<script>
export default {
    name:'inindex'
}
</script>
<style scoped>
.inindex{
    width:100%;
    height:1050px;
    position: relative;
}
.app-bottom{
    width:100%;
    height:40px;
    position:absolute;
    bottom:0;
}
.in-mian{
    width:100%;
    height:90%;
   
}
P{line-height: 10px;}
.title{
    font-size: 40px;
}
.title2{
    width:90%;
    margin-left:30px;
    font-size:30px;
    text-align: left;
}
li{ width:90%;
    margin-left:30px;
    text-decoration: none;
    font-size: 12px;
    text-align: left;
}

</style>