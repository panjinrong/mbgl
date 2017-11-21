<template>
  <div id="find-header-wrapper">
    <div class="find-title">
      <!-- <img src="./../../assets/image/Marquee-N.png"> -->
      <h3>{{data[0].mc}}</h3>
    </div>
    <div class="find-input">
      <div class="find-input-img">
        <img src="./../../assets/image/Remarks.png">
      </div>
      <div class="find-input-nr" @click="bzShow()">
        <p>{{data[0].bz}}</p>
      </div>
    </div>
    <div class="find-mbgs" @click="zmbShow(data[0].id)">
      <div class="find-mbgs-img">
        <img src="./../../assets/image/Target.png">
      </div>
      <div class="find-mbgs-wc">
        <p>{{data[0].count_zmb}}个子目标</p>
      </div>
      <div class="next">
        <img src="./../../assets/image/next.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  data() {
    return {}
  },
  methods:{
    zmbShow:function(id){
       var _this = this;
           this.$http.get('http://192.168.0.101:8081/target/target_zmblb?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&id='+id).then(res=>{
            _this.zmbList=res.data.content;
            console.log(_this.zmbList);
      this.$router.push({path:'./find_xymb_zmb',query:{zmbList:JSON.stringify(this.zmbList),gjdid:id,mblx:this.mblx}});
        })
      // this.$router.push('./find_xymb_zmb');
    },
    bzShow:function(){
      this.$router.push('/collegegoal/collegegoal_bz');
    }
  },
  created(){
    console.log(this.data)
  }
}
</script>

<style>
#find-header-wrapper{
  text-align: left;
  background: #f7f7f7;
}
.find-title,.find-input,.find-mbgs{
  padding:.7em 0;
  background: white;
  border-bottom: 1px solid #eeeeee;
}
.find-title img{
  width: 1.1em;
  height: 1.1em;
  margin: 0 .67em;
  vertical-align: top;
  margin-top: .1em;
}
.find-title h3{
  display: inline-block;
  font-family: PingFang-SC-Bold;
  font-size: 18px;
  color: #333333;
  padding-left: .8em;
}
.find-input>div,.find-mbgs>div{
  display: inline-block;
}
.find-input .find-input-img{
  vertical-align: top;
  margin-top: .3em;
}
.find-input .find-input-img img,.find-mbgs .find-mbgs-img img{
  width: 1.1em;
  height: 1.1em;
  margin: 0 .67em;
  float: left;
}
.find-input .find-input-nr{
  width: 80%;
}
.find-mbgs .find-mbgs-img img{
  height: .9em;
}
.find-mbgs .find-mbgs-wc p{
  background: #3da8f5;
  color: #ffffff;
  font-size: 13px;
  border-radius: 17px;
  padding: .1em .5em;
}
.find-mbgs .next{
  float: right;
}
.find-mbgs .next img{
  width: .5em;
  height: .8em;
  margin-right: .67em;
}
</style>