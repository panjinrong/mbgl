<template>
  <div class="getMore" @click="showAll($event)">
    <a><span>......</span></a>
    </br>
    <a class="more">查看更多回复</a>
  </div>
</template>

<script>
export default {
  name: 'getMore',
  data(){
  	return{
      doms:[]
  	}
  },
  methods:{
    showAll:function(e){
      var dom = e.currentTarget;
      var _this = this;
      //获取所有兄弟节点
      var nowdoms = dom.parentNode.childNodes;
      if(_this.doms<3){
         //获取点击源dom
         for(var i =0;i<nowdoms.length;i++){
          if(nowdoms[i] && nowdoms[i].className == "showStus"){
            _this.doms.push(nowdoms[i]);
            nowdoms[i].className = "";
          }else if(nowdoms[i] && nowdoms[i].className == "getMore"){
            nowdoms[i].getElementsByClassName('more')[0].innerText = "收起";
          }
         }
      }else{
        _this.doms = []
        for(var i =0;i<nowdoms.length;i++){
          if(nowdoms[i]&& i>2){
            if(nowdoms[i].className == "getMore"){
              nowdoms[i].getElementsByClassName('more')[0].innerText = "查看更多回复";
            }else{
              nowdoms[i].className += "showStus";
            }
          }
        }
      }
     
      // for(var i = 0; i<dom.parentNode.childNodes.length;i++){
      //   dom.parentNode.childNodes[i].
      // }
      // dom.parentNode.childNodes.getElementsByClassName('showStus');
    }
  }
}
</script>

<style>
#notice{
  background: #f7f7f7;
	margin-bottom: 3.0625em;
}
.mt1{
  margin-top: 1em;
}
</style>
