<template>
  <div id="notice_xq_head" v-bind:class="[{notice_xq_head_small:headimg=='small'}]">
    <div class="notice_xq_head">
        <a class="notice_not_head_img"><img v-bind:src="data.faceaddress"></a>
        <a class="notice_not_head_message">
          <div><span class="ft-bold">{{data.username}}</span></div>
          <div><span class="ft-12 ft-color-gray">{{data.s_time}}</span></div>
        </a>
        <a v-if="showsz" class="notice_not_btn" @click="tosz(data.s_id)"><span></span><span></span><span></span></a>
        <a v-if="showhf" class="notice_not_hf" @click.stop="reply">回复</a>
        <div class="clearbt"></div>
    </div>
    <a class="notice_describe" @click.stop="reply">{{data.t_info}}</a>
  </div>
</template>

<script>
import store from '../../vuex/store'
import axios from 'axios'
export default {
  name: 'notice',
  data(){
    return{
      // data:""
      stus:""
    }
  },
  props:['showsz','headimg','data','showhf'],
  created() {

  },

  methods:{
    // vuex 方法
    // tosz:function(mbid){
    //   this.stus = 1
    //   store.dispatch('set_modalStus', this.stus);
    // }
    tosz:function(mbid){
      store.dispatch('set_ReplyObj', this.data);
      this.$emit('openModal',mbid);
    },
    reply:function(){ 
        //vuex存储要回复的对象
        console.log(this.data)
         store.dispatch('set_ReplyObj', this.data);
         this.$emit('showInput');
    }
  }
}
</script>

<style>

.notice_xq_head{
  /* margin-top: 1.25em!important; */
  height: 3em;
  line-height: 3em;
  color: #333333;
}
.notice_xq_head_small{
  font-size: .8em;
}
.notice_not_head_img{
  height:3em;
  width: 3em;
  float: left;
}
.notice_not_head_img_small{
  height:2em;
  width: 2em;
  float: left;
}
.notice_not_head_img > img,.notice_not_head_img_small > img{
  width:100%;
  height: 100%;
  border-radius: .2em;

}
.notice_not_head_message{
  display: inline-block;
  float: left;
  height:2.5em;
  line-height: 1;
  margin-left: .5em;
  padding:.3em 0em .2em 0em;
  text-align: left;
  vertical-align: middle;
}
.notice_not_head_message>div{
  height: 1.25em;
  line-height: 1.25em;
}
.notice_describe{
  display: block;
  font-size: 0.875em;
  margin-top: .75em;
  text-align: left;
/*  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;*/
}
.notice_not_hf{
  display: inline-block;
  color:#483D8B;
  font-size: .75em;
  line-height: 1;
  float: right;
}
.notice_not_btn{
  display: inline-block;
  height:2.5em;
  padding:0em 0em .2em 0em;
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
</style>
