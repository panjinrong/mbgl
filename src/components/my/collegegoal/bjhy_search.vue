<template>
  <div class="mbgc-search-wrapper">
      <div class="mbgc-search" v-if="search">
          <input type="text" name="search" placeholder="搜索" @click="searchShow()">
      </div>
      <div class="mbgc-searchs" v-else>
          <input type="text" name="search" placeholder="搜索" v-model="searchtext" >
          <span v-show="searchtext.length>0" @click="deletetext()"><img src="./../../../assets/image/qk.png"></span>
          <button @click="searchHide()">取消</button>
          <v-bjList :data="data"></v-bjList>
    </div>
      </div>
  </div>

</template>

<script>
import bjList from './search_list'
import bus from '../../eventBus'
export default {
  data() {
    return {
      search:true,
      searchtext:'',
      data:'',
    }
  },
  computed:{
    
  },
  watch:{
    searchtext:{
      handler:function(curVal,oldVal){
          this.searchtext=curVal;
          if(curVal!=''){
            this.$emit("Search",curVal);
            this.getSchoolTarget();
          }
        }
    },
    deep:true
  },
  methods:{
      searchShow() {
        this.search = false;
        this.$emit('listHide',false);
        // bus.$emit("setSearch",this.search);
      },
      searchHide() {
        this.search = true;
        this.$emit('listHide',true);
      },
      deletetext(){
        this.searchtext='';
      },
      getSchoolTarget() {
          var _this = this;       
             this.$http.get('http://192.168.0.101:8081/target/target_wdhylbss?userid=20141029&function_id=20150101&ticket=05A4DAC8D4FE71E7C22ACB3C47832420&id=fa8dc10a4b6e4212ad308a5e5eb37496111&username='+_this.searchtext).then(res=>{
            _this.data=res.data.content;
          })
      },
  },
  components:{
    // 'v-xymb':find_xymb_list,
    // 'v-mbgc':find_mbgc_zrxq,
    'v-bjList':bjList
  }
}
</script>

<style>
.mbgc-search-wrapper{
  padding:0 .75em;
}
.mbgc-search-wrapper .mbgc-search{
  margin-bottom: .75em;
}
.mbgc-search-wrapper .mbgc-search input{
  width: 100%;
  padding: .6em 0 .3em;
  border:1px solid #eeeeee;
  border-radius: 5px;
  margin-top: .8em;
  text-align: center;
  background: url(./../../../assets/image/icons.png) no-repeat 43% center;
  background-size: 1em 1em;
  background-color: white;
  /*box-shadow: 0 0 5px rgba(0,0,0,0.3) inset;*/
 /* margin-left: 1em;*/
}
 .mbgc-search-wrapper .mbgc-searchs{
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 min-height: 100%; 
 background: #f7f7f7; 
 /*padding-left: 1em;*/
 z-index: 9;
}
.mbgc-search-wrapper .mbgc-searchs input{
  width: 82%;
  padding: .6em 2em .3em;
  border:1px solid #eeeeee;
  border-radius: 5px;
  margin-top: .8em;
  background: url(./../../../assets/image/icons.png) no-repeat .6em center;
  background-size: 1em 1em;
  background-color: white;
  margin-left: .85em; 
  box-sizing: border-box;
}
.mbgc-searchs >span{
  display: inline-block;
  margin-left: -2em;
  margin-right: 1em;
  vertical-align: top;
  margin-top: .95em;
}
.mbgc-searchs >span >img{
  width: .8em;
  height: .8em;
}
.mbgc-search-wrapper .mbgc-searchs button{
  font-size: 16px;
  color: #555555;
  background:rgba(0,0,0,0);
  border:none;
  vertical-align: middle;
}
.searchs-xq>p{
  padding: 0 1.05em
}
.searchs-xq ul li{
  padding: .3em 1.05em;
  border-bottom: 1px solid #eeeeee;
  background: white;
}
.searchs-xq ul li>img{
  width: 2em;
  height: 2em;
  vertical-align: top;
  border-radius: 6px;
}
.searchs-xq ul li p{
  display: inline-block;
  font-size: 16px;
  color: #333333;
  margin-top:.5em;
}
</style>

