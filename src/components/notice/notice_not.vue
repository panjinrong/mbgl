<template>
  <div class="notice_not">
   <v-header v-on:openModal="openModal" v-on:showInput="showInput" :data="d" headimg="big" showhf="true"></v-header>
   <div class="notice_not_content">
     <!-- <div>{{data.plnr}}</div> -->
     <div class="notice_not_content_xq" v-on:click="toXq(data.mbxx.mbid,data.mbxx.mblx)">
       <img v-if="data.mbxx.pics && data.mbxx.pics.length>0" v-bind:src="data.mbxx.pics[0]">
       <a><span class="ft-color-blue">{{data.mbxx.mbuser}}:</span>{{data.mbxx.mbnr}}</a>
     </div>
     <div class="notice_not_content_xq1" v-if="data.plList.length>0">
       <div v-for="(item,index) in data.plList" :class="{showStus:index>2}">
         <a v-if="!item.a_be_answer"><span class="ft-color-blue">{{item.a_answer_name}}:</span>{{item.a_content}}</br></a>
         <a v-else-if="item.a_be_answer"><span class="ft-color-blue">{{item.a_answer_name}}</span>回复<span class="ft-color-blue">{{item.a_be_answer_name}}:</span>{{item.a_content}}</br></a>
       </div>
       <v-more v-if="data.plList.length>3"></v-more>
     </div>
   </div>
  </div>
  </template> 
<script>
import header from './notice_header'
import more from './getMore'
export default {
  name: 'notice_not',
  props:['data'],
  computed:{
    d:function(){
      var obj = {}
      obj.userid = this.data.huifuren.a_answer
      obj.a_id = this.data.huifuren.a_id
      obj.com_id = this.data.huifuren.com_id
      obj.username = this.data.huifuren.a_answer_name
      obj.s_time = this.data.huifuren.a_date
      obj.faceaddress = this.data.huifuren.faceaddress
      obj.s_id = this.data.mbxx.mbid
      obj.t_info = this.data.huifuren.a_content
      return obj
    }
  },
  data(){
    return{
      //设置的目标id
      mbid:"",
      //设置modal状态
      stus:""
    }
  },
 /* created:function(){
    var _this =this
    this.data.then(function(res){
      _this.d = res
    })
    console.log(_this.d);
    console.log();
  },*/
/*  computed:{
    getData:function(){
      var obj
      this.d.forEach(function(r,i){
          obj = r
      })
        console.log(obj);
      return obj
    },
  },*/
  methods:{
    //查看目标详情
    toXq:function(id,mblx){
      if(mblx == '2'){
        this.$router.push({path:'/notice_xq',query:{mbid:id,showBtns:true}});
      }else if(mblx == '1'){
        this.$router.push({path:'/collegegoal/collegegoaldetail-xq',query:{mbid:id}});
      }
    },
    //打开弹出框
    openModal:function(mbid){
     this.$emit('openModal',mbid);
    },
    //关闭弹出框
    closeModel:function(){
      this.$emit('closeModel');
    },
    //聚焦input输入框并弹出软键盘
    showInput:function(){
      this.$emit('showInput',{path:"/inform/reply?"})
    }
    },
  components:{'v-header':header,'v-more':more}
}
</script>
<style>
/*tool*/
.clearbt{
  clear: both;
}

.notice_not{
  padding: 1em .75em 1em .75em;
  /*margin-top: 1em;*/
  background: white;
 /*  border-top: 1px solid #ececec; */
 box-shadow: 0em .15em 0em 0em #e7e7e7;
  text-align: left;
}
.notice_not_head{
  height: 3em;
}
.notice_not_head_img{
  height:3em;
  width: 3em;
  float: left;
}
.notice_not_head_img img{
  width:100%;
  height: 100%;
  border-radius: .2em;
}
.notice_not_head_message{
  float: left;
  height:2.5em;
  margin-left: .5em;
  padding:.3em 0em .2em 0em;
  text-align: left;
}
.notice_not_btn{
  display: inline-block;
  height:2.5em;
  padding:.3em 0em .2em 0em;
  vertical-align: top;
  float: right;
}
.notice_not_btn > span{
  display: inline-block;
  border:1px solid #c1c1c1;
  background: #c1c1c1;
  border-radius: 50%;
  width:.2em;
  height: .2em;
  margin-right: .2em;
  vertical-align:text-top;
}
.notice_not_content{
 /*  margin-left:3.5em; */
  margin-top: 1em;
}
.notice_not_content_xq{
  height:2.25em;
  line-height: 2.25em;
  color:#333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.notice_not_content_xq > img{
  width: 2.25em;
  height:100%;
  vertical-align: middle;
}
.notice_not_content_xq,.notice_not_content_xq1{
   margin-top:.75em;
   background: #f5f5f5;
}
.notice_not_content_xq  a,.notice_not_content_xq1  a{
  font-size: .8125em;
}
.notice_not_content_xq1{
  padding-left:.5em;
  padding-bottom:.5em;
}
.showStus{
  display: none;
}
</style>
