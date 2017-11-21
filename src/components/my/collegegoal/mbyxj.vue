<template>
      <div id="mbyxj-wrapper" v-show="mbyxjShow">
          <div class="mbyxj-content">
            <div class="mbyxj-title">
              <button class="cancel"  @click="cancelHide()">取消</button>
              <span>优先级</span>
              <button class="complete" @click="completeHide()">完成</button>
            </div>
            <div class="mbyxj-jb"  >
              <ul ref="ul">
                <li data-id="1" @click="jjqkVal(3)">
                  <img src="./../../../assets/image/Priority1.png">
                  <span>非常紧急</span>
                  <a v-if="lx===3">
                    <img src="./../../../assets/image/Plus-Hook.png">
                </a>
                </li>
                <li data-id="2" @click="jjqkVal(2)">
                  <img src="./../../../assets/image/Priority2.png">
                  <span>紧急</span>
                  <a  v-if="lx===2">
                    <img src="./../../../assets/image/Plus-Hook.png">
                </a>
                </li>
                <li data-id="3" @click="jjqkVal(1)">
                  <img src="./../../../assets/image/Priority.png">
                  <span>普通</span>
                  <a  v-if="lx===1">
                    <img src="./../../../assets/image/Plus-Hook.png">
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div> 
</template>

<script>

export default {
	props:['gjdid'],
	data() {
		return {
			lx:'',
      		li:[],
			    mbyxjShow:false,
          content:'修改优先级'
		}
	},
	methods:{
		open() {
			this.mbyxjShow=true;
		},
		cancelHide() {
			this.mbyxjShow=false;
		},
		completeHide() {
			this.mbyxjShow=false;
			this.$http.get('http://192.168.0.101:8081/target/target_xgyxj?userid=11204050220&function_id=20150101&ticket=7A459E71400C19A4A813994B79BC4E41&gjdid='+this.gjdid+'&yxj='+this.lx).then(res=>{
	          console.log(res.data);
            })
      this.$http.get('http://192.168.0.56:8081/target/target_czjl?userid=11204050220&function_id=20150101&ticket=B110E55DEECA941AEFDCF9CE72C2789D&id=fa8dc10a4b6e4212ad308a5e5eb37496&type=2&content='+this.content).then(res=>{
          })
		},
	    jjqkVal:function(flag) {
	      this.$emit('getYxj',flag)
	      this.li.push(flag);
	      this.lx=eval("("+this.li+")")
	      if(this.li.length>1){
	        this.li.splice(0, 1); 
	      }
	    },
	},
	created() {
		// this.open();
		//console.log(this.mbyxjShow);
	}
}
</script>

<style>

#mbyxj-wrapper{
  width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  text-align: left;
    border-top: 1px solid #eeeeee;
    position: fixed;
    top: 0;
}
.mbyxj-content{
  width: 100%;
  background: #ffffff;  
  position: absolute;
    bottom: 0;
  padding: 0 .87em;
  box-sizing: border-box;
}
.mbyxj-content .mbyxj-title{
  text-align: center;
  font-family: PingFang-SC-Bold;
  height: 3.5em;
  line-height: 3.5em
}
.mbyxj-content .mbyxj-title span{
  font-size: 18px;
  color: #333333;
}
.mbyxj-content .mbyxj-title button{
  background: white;
  border:none;
  font-size: 14px;
  line-height: 3.5em;
}
.mbyxj-content .mbyxj-title button.cancel{
  color: #888888;
  float: left;
}
.mbyxj-content .mbyxj-title button.complete{
  color: #3da8f5;
  float: right;
}
.mbyxj-content .mbyxj-jb ul li{
  height: 2.5em;
  line-height: 2.5em;
  border-bottom: 1px solid #eeeeee;
}
.mbyxj-content .mbyxj-jb ul li span{
  font-size: 18px;
}
.mbyxj-content .mbyxj-jb ul li img{
  width: 1.3em;
  margin-right: .87em;
  margin-top: .5em;
  vertical-align: top;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(1) span{
  color: #ff7f6d;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(2) span{
  color: #ffc107;
}
.mbyxj-content .mbyxj-jb ul li:nth-child(3) span{
  color: #c5d2e1;
}
.mbyxj-content .mbyxj-jb ul li a{
  float: right;
}
.mbyxj-content .mbyxj-jb ul li a img{
  width: 1em;
  margin-top: .8em;
}
</style>