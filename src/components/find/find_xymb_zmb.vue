<template>
  <div class="college-zmb-wrapper" >
    <ul>
      <li @click="zmbXqShow()">
        <p>15天完成听力练习</p>
      </li>
      <li>
        <p>每天半小时口语练习</p>
      </li>
      <li v-for="(list,index) in data" @click="zmbXqShow(list.id)" >
        <p>{{list.mc}}</p>
       <!--  <span>
        <img :src="list.faceaddress">
        </span> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:JSON.parse(this.zmbList)
    }
  },
  methods:{
    zmbXqShow:function(index){
      this.$router.push('./collegegoal_zmb_xq');
    }
  }
}
</script>

<style>
.college-zmb-wrapper{
  text-align: left;
  background: #f7f7f7;
  min-height: 100%;
  width: 100%;
  position: absolute;
}
.college-zmb-wrapper ul li{
  margin: .8em .8em 0;
  line-height: 3.5em;
  border-radius: 8px;
  background: white;
  padding: 0 .7em;
}
/*.college-zmb-wrapper ul li>img{
  width: 1em;
  height: 1em;
  vertical-align: top;
  margin-top: 1.25em;
}*/
.college-zmb-wrapper ul li p{
  display: inline-block;
  font-family: PingFang-SC-Bold;
  font-size: 15px;
  color: #555555;
  border-bottom:1px solid #eeeeee;
}
/*.college-zmb-wrapper ul li span{
  float: right;
}
.college-zmb-wrapper ul li span>img{
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  vertical-align: top;
  margin-top: 1em;
}*/
</style>