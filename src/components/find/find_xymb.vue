<template>
  <div class="find-xymb-wrapper">
      <v-search></v-search>
      <v-list :data="data"></v-list>     
  </div>
</template>

<script>
import xymb_search from './xymb_search'
import find_xymb_list from './find_xymb_list'
export default {
  data() {
    return {
      data: '',
      //   pulldown: true
    }
  },
  created() {
  },
  mounted(){
     var _this = this;
           this.$http.get('http://192.168.0.56:8081/discovery/getSchoolTarget?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&page=1&pagesize=3').then(res=>{
            _this.data=res.data.content;
            console.log(_this.data);
        })
  },
  components:{
    'v-search':xymb_search,
    'v-list':find_xymb_list
  }
}
</script>

<style>
.find-xymb-wrapper{
  text-align: left;
	background: #f7f7f7;
  padding-bottom: .01em;
	height: 100%;
  /*overflow: hidden;*/
}
.find-xymb-wrapper .xymb-list ul li{
  background: white;
  margin: .875em .75em;
  border-radius: 5px;
  padding: .875em .625em
}
.find-xymb-wrapper .xymb-list ul li h3{
  display: inline-block;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #333333;
  margin-bottom: .425em; 
}
.find-xymb-wrapper .xymb-list ul li >span{
  display: inline-block;
  float: right;
  width: 3.6em;
  height: 1.4em;
}
.find-xymb-wrapper .xymb-list ul li span img{
  width: 3.6em;
  height: 1.4em;
}
.find-xymb-wrapper .xymb-list ul li> a>img{
  width: .8em;
  vertical-align: top;
  margin-top: .25em;
  margin-left: .1em;
}
.find-xymb-wrapper .xymb-list ul li a>span{
  display: inline-block;
  font-size: 11px;
  color: #999999;
}
.find-xymb-wrapper .xymb-list ul li p{
  font-size: 14px;
  color: #555555;
  line-height: 1.5em;
  text-indent: 1em;
}
.button-wrapper{
  display: inline-block;
  float: right;
}
.button-wrapper a{
  float: right;
}
.button-wrapper a > img{
  width: 3.6em;
  height: 1.5em;
  vertical-align: top;
   margin-top: -.25em; 
}
</style>

