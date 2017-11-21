<template>
  <div id="noticeModal" v-if="stus" @click.stop="closeModel">
    <ul class="noticeModal-btns" :class="{hasFooter:footer}">
      <!-- <li @click.stop=""><span>屏蔽</span></li>
      <li class="noticeModal-btns-del" @click.stop="delhf"><span>删除</span></li> -->
      <li class="" @click.stop="reply"><span>评论</span></li>
      <li @click.stop="closeModel"><span>取消</span></li>
    </ul>
  </div>
</template>

<script>
import photoswipe from 'photoswipe'
import axios from 'axios'
import {mapGetters,mapState} from 'vuex'
// import {mapGetters,mapState} from 'vuex'
// import store from '../../vuex/store'
var PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default.min')
export default {
  name: 'noticeModal',
  data(){
    return {
      delData:{
        sid:"",
        cid:"",
        aid:"",
        userid:"",
        ticket:"",
        function_id:""
      }
    }
  },
  //vuex 方法
  computed: {
    ...mapGetters([
      'getReplyObj'
    ]),
    ...mapState([
      'ReplyObj'
    ])
  },
  props:['stus','footer'],
  created(){

  },
  methods:{
    //关闭model
    closeModel:function(){
      this.$emit('closeModel')
    },
    //回复
    reply:function(){
      this.$emit('closeModel')
      this.$emit('showInput')
    },
    //删除回复
    delhf:function(){
      //vuex存储的信息
      this.delData.sid = this.ReplyObj.s_id;
      this.delData.cid = this.ReplyObj.com_id;
      this.delData.aid = this.ReplyObj.a_id;
      //session存储的信息
      if(sessionStorage.getItem('userinfo')){
        var userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
        this.delData.userid = userinfo.userid;
        this.delData.ticket = userinfo.ticket;
        this.delData.function_id = userinfo.function_id;
        axios({
          methods:'post',
          url:'/api/inform/delComment',
          params:this.delData
        }).then(function(res){
          alert("操作成功");
        });
      }else{
        alert("您的身份信息过期请从进！！！");
        axios.get('http://www.close.com');
      }
    }
  },
  // mounted(){
  //    var stus = !this.getModalStus;
  //    var stage = Number(localStorage.modalStus);
  //   if(!this.getModalStus){
  //     store.dispatch('set_modalStus', stage);
  //   }
  // }
}
</script>

<style>
#noticeModal{
  position: absolute;
  color:black;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  top: 0;
  z-index: 999;
}
.noticeModal-btns{
  position: fixed;
  background: #f7f7f7;
  bottom: 0;
  text-align: center;
}
#noticeModal ul.noticeModal-btns{
  width: 100%;
}
#noticeModal ul.noticeModal-btns li{
  padding:.8em;
  background: white;
  border:1px solid #fbfbfb;
}
.noticeModal-btns-del{
  margin-bottom: .8em;
  box-shadow: 0 .15em 0 0em #9c9c9c;
}
.noticeModal-btns li >span{
  font-size: 18px;
}
.hasFooter{
  /*margin-bottom: 3.15em;*/
}
</style>
