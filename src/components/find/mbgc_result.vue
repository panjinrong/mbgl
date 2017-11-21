<template>
  <div class="zycp-result-wrapper">
      <div class="zycp-result-jg">
          <h3>{{data.result_describe}}</h3>
          <p>{{data.result_character}}</p>
      </div>
      <div class="mbtj"><span></span><p>推荐目标</p><span></span></div>
      <v-mntj :data="mbtj"></v-mntj>
  </div>
</template>

<script>
// import hlldt from './find_zycp_ldt'
import mntj from './find_xymb_list'
export default {
  data() {
    return {
      data:'',
      answer:this.$route.query.answer,
      mbtj:'',
    }
  },
  created() {
    // console.log(this.$router.query.answer);
  },
  mounted(){
     var _this = this;
     console.log(_this.answer);
           this.$http.get('http://192.168.0.56:8081/discovery/getResult?userid=11204050220&ticket=7A459E71400C19A4A813994B79BC4E41&function_id=20150101&answer=ISTJ').then(res=>{
            _this.data=res.data.content;
            _this.mbtj=res.data.content.tjmb;
            console.log(_this.data);
        })
  },
  methods:{
    
  },
  components:{
    'v-mntj':mntj,

  }
}
</script>
<style>
.zycp-result-wrapper{
	background: #f7f7f7;
	height: 100%;
}
.zycp-result-title{
  background: white;
}
.zycp-result-title h3{
  text-align: left;
  padding: 1.1em .86em .5em;
}
.zycp-result-title h3>span{
  color: #55b2f5;
}
.zycp-result-title img{
  height: 12em;
}
.zycp-result-wrapper .zycp-result-jg{
  text-align: left;
  background: white;
  padding: 0 .86em
}
.zycp-result-wrapper .zycp-result-jg h3{
  font-family: PingFang-SC-Bold;
  font-size: 14px;
  color: #333333;
  line-height: 3em;
}
.zycp-result-wrapper .zycp-result-jg p{
  font-size: 14px;
  color: #555555;
  text-indent: 2em;
  padding: 0 0 2em;
}
.mbtj{
  margin: .5em 0;
}
.mbtj p{
  display: inline-block;
  margin: 0 2em;
}
.mbtj span{
  display: inline-block;
  width: 2.6em;
  border-bottom: 4px solid #e2e2e2;
  margin-top: .6em;
  vertical-align: top;
}

</style>

