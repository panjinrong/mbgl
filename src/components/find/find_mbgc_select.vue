<template>
  <div class="mbgc-cptm-select" @click="selected()">
      <span v-if="selected"  >
          <img src="./../../assets/image/yxz.png">
      </span>
      <span v-else="">
          <img src="./../../assets/image/wxz.png">
      </span>
</div>
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum:0,
      selected:false,
     }
  },
  methods:{
    selected:function(index){
        this.selected=!this.selected;
        console.log(this.selected);
    },
  }
}
</script>

<style>
.mbgc-cptm-select{
  display: inline-block;
}
.mbgc-cptm-list .mbgc-cptm-title p span{
  color:#55b2f5;
}
.mbgc-cptm-list .mbgc-cptm-tm{
  text-align: left;
  padding-bottom: 6.15em;
}
.mbgc-cptm-list .mbgc-cptm-tm h3{
  font-size: 17px;
  color: #555555; 
  margin:.8em 0 .5em .7em;
}
.mbgc-cptm-list .mbgc-cptm-tm p{
  font-size: 15px;
  color: #999999; 
  margin-left: 2.5em;
  line-height: 2.2em;
}
.mbgc-cptm-list .mbgc-cptm-tm p span{
  display: inline-block;
  margin-right: .5em;
}
.mbgc-cptm-list .mbgc-cptm-tm p span img{
  width: 1em;
}
.mbgc-cptm-wrapper .mbgc-cptm-button,.mbgc-cptm-wrapper .mbgc-cptm-buttons{
  margin-top: .88em;
  font-size: 0;
}
.mbgc-cptm-wrapper .mbgc-cptm-button button{
  width: 90%;
  padding: .5em 0;
  font-size: 18px;
  color: white;
  background: #55b2f5;
  border:none;
  border-radius: 5px;
  margin-top: 1em;
}
.mbgc-cptm-wrapper .mbgc-cptm-buttons button{
  width: 90%;
  padding: .5em 0;
  font-size: 18px;
  color: white;
  background: #E5E5E5;
  border:none;
  border-radius: 5px;

}
/* .mbgc-cptm-wrapper .mbgc-cptm-buttons button{
  width: calc(90%/2);
  padding: .5em 0;
  font-size: 18px;
  border:none;
} */
/* .mbgc-cptm-wrapper .mbgc-cptm-buttons button:nth-child(1){
  background: #E5E5E5;
  color: #999999;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.mbgc-cptm-wrapper .mbgc-cptm-buttons button:nth-child(2){
  background: #55b2f5;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
} */
.mbgc-cptm-wrapper .mbgc-cptm-diagle{
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.mbgc-cptm-diagle .mbgc-cptm-main{
  width: 80%;
  background: white;
  margin: 10em auto;
  border-radius: 5px;
}
.mbgc-cptm-diagle .mbgc-cptm-main img{
  height: 4em;
  margin: 2em 0 0;
}
.mbgc-cptm-diagle .mbgc-cptm-main p{
  font-size: 14px;
  color: #333333;
  margin:1.35em 0;
}
.mbgc-cptm-diagle .mbgc-cptm-main button{
  width: 100%;
  color: white;
  padding: 1em 0;
  background: #55b2f5;
  margin-top: .1em;
  border:none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>

