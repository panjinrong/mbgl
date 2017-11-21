<template>
  <div class="plinput">
    <input type="text" @blur="changeRouterStus" name="" placeholder="请输入新消息" v-model="replyContent.content">
    <a class="btnsub" @click.stop="submitPl" ><img v-bind:src="subImg" @click.stop="submitPl"></a>
  </div>
</template>
<script>
import {mapGetters,mapState} from 'vuex'
import axios from 'axios'
export default {
  name: 'plinput',
  data(){
  	return{
      data:"",
      subImg:"../../static/notice/smile.png",
      replyContent:{
        userid:"",
        function_id:"",
        ticket:"",
        buserid:"",
        sid:"",
        cid:"",
        content:""
      }
  	}
  },
  props:['subUrl'],
  components:{},
  // vuex 方法
  computed: {
    ...mapGetters([
      'getReplyObj'
    ]),
    ...mapState([
      'ReplyObj'
    ])
  },
  created(){
  
  },
  methods:{
    submitPl:function(e){
      var _this = this;
      this.showInput();
      if(sessionStorage.getItem("userinfo")){
        var userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
        //session用户内信息
        this.replyContent.userid = userinfo.userid;
        this.replyContent.function_id = userinfo.function_id;
        this.replyContent.ticket = userinfo.ticket;
        //参数信息
        this.replyContent.buserid = this.ReplyObj.userid
        this.replyContent.sid = this.ReplyObj.s_id
        this.replyContent.cid = this.ReplyObj.com_id
        axios({
          methods:'post',
          url:this.subUrl,
          params: this.replyContent
          }).then(function(res){
          if(res.data.code == "40001"){
            alert("回复成功");
            _this.$emit('refresh')
          }else{
            alert("操作异常");
          }
        })
      }else{
        alert("您的身份信息过期请从进！！！");
        axios.get('http://www.close.com');
      }
    },
    trigger:function(){
      document.getElementsByClassName("plinput")[0].getElementsByTagName('input')[0].focus();
      // document.body.scrollTop = document.body.scrollHeight;
    },
    triggerout:function(){
      document.getElementsByClassName("plinput")[0].getElementsByTagName('input')[0].blur();
    },
    changeRouterStus:function(){
      this.$emit('changeRouterStus')
    },
    showInput:function(){
      this.$emit('showInput')
    }
  }
}
</script>

<style>
.plinput{
  position: fixed;
  font-size: .875rem;
  width: 100%;
  bottom: 0;
  height: 3.5em;
  line-height: 3.5em;
  background: #f2f2f4;
  z-index:997;
}
.plinput input{
  display: inline-block;
  border: 0;
  height: 2.5em;
  outline:none;
  width: calc(82% - 1.5em);
  margin-left: .75em;
  vertical-align: middle;
  /*float: left;*/
}
.btnsub{
  display: inline-block;
  height: 2.5em;
  line-height: 2.5em;
  width: calc(18% - 2em);
  margin-left: .1em;
  vertical-align: middle;
  /*float: left;*/
}
.btnsub > img{
  display: inline-block;
  width: 1.8em;
  height: 1.8em;
  margin-bottom: .1em;
  vertical-align: middle;
}
</style>
