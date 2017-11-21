<template>
  <div id="notice_pl_nr">
<!--    <div class="notice_pl_nr">
      <v-header v-for="item in data" :showsz="false" headimg="small" :data="item"></v-header>
   </div> -->
   <div class="notice_pl_nr" v-for="item in d">
      <v-header :showsz="false" headimg="small" :data="item"></v-header>
      <div  class="notice_pl_nr_list">
        <div v-for="item1 in item.hfList">
          <a class="name">{{item1.a_answer_name}}</a><span>回复</span><a class="name">{{item1.a_be_answer_name}}</a>:
          <a>{{item1.a_content}}</a></br>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import header from './notice_header'
export default {
  name: 'notice_pl_nr',
  data(){
  	return{
      // data:[{name:'张玲',time:'今天 8:50',describe:'厉害的张黎明同学，希望可以和你一起学习。'},
      //   {name:'周佳涵',time:'今天 8:55',describe:'加油很看好你这份精神哦。有机会一起探讨。。'
      //   ,reply:[
      //   {name:'张黎明',replypeoed:'周佳涵',time:'今天 9:10',describe:'可以啊，我也正在寻找志同道合的人。。'},
      //   {name:'周佳涵',replypeoed:'张黎明',time:'今天 9:10',describe:'那就这样说好了，图书管见，电话联系'}]}
      //   ]
  	}
  },
  props:['data'],
  computed:{
    d:function(){
      var arr = [];
      this.data.forEach(function(r,i){
        var obj = {}
        obj.username = r.a_answer_name
        obj.s_time = r.a_date
        obj.faceaddress = r.faceaddress
        obj.t_info = r.a_content
        obj.hfList = r.hfList
        arr.push(obj)
      });
      return arr
    }
  },
  components:{'v-header':header}
}
</script>
<style>
/*tool*/
.clearbt{
  clear: both;
}
.notice_pl_nr{
  text-align: left;
  padding:.5em .75em; 
  border-bottom: 1px solid #ececec;
  padding-bottom: .5625em;
}
.notice_pl_nr_list{
  margin:.75em 0em 0em 0em;
  padding-left:.5em;
  background: #f7f7f7;
  color:#4c4c4c;
}
.notice_pl_nr_list a.name{
  color:#42acfa;
}
.notice_pl_nr_list  span,.notice_pl_nr_list  a{
  font-size: .75em;
}
</style>
