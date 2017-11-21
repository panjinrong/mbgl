<template>
	<div class="ygkm-wrapper">
		<v-bt></v-bt>
		<div class="tjmb_title">
			<img src="./../../../assets/image/juxing.png">
			<h4>推荐目标</h4>
		</div>
		<div class="tjmb_list">
			<!-- <v-tjmn></v-tjmn> -->
		</div>
		 <div class="mbgc-tjmb-list">
          <ul>
              <li>
                  <h3>大学物理基础</h3>
                  <v-button></v-button>
                  <p>124人参加</p>
              </li>
              <!-- <li>
                  <h3>健身运动</h3>
                  <v-button></v-button>
                  <p>1243人参加</p>
              </li>
              <li>
                  <h3>社会公益</h3>
                  <v-button></v-button>
                  <p>1243人参加</p>
              </li>
              <li>
                  <h3>软件工程师</h3>
                  <v-button></v-button>
                  <p>1243人参加</p>
              </li>
              <li>
                  <h3>高数100天</h3>
                  <v-button></v-button>
                  <p>1243人参加</p>
              </li> -->
          </ul>
      </div>
	</div>
</template>
<script>
import bt from './lost_xq_bt'
import tjmn from './../../find/mbgc_tjmb'
import tjmb_button from './../../find/mbgc_tjmb_button'
export default {
	props: {
		km:{
			type:Number,
			default:1
		}
	},
	data(){
		return{
		}
	},
	methods:{
	
	},
	components:{
		'v-bt':bt,
		'v-tjmn':tjmn,
		'v-button':tjmb_button
	}
}
</script>
<style>	
.ygkm-wrapper{
	text-align: left;
	background: #f7f7f7;
	width: 100%;
}
.tjmb_title{
	margin-top: .59em;
	background:white;
	padding: .4em 0;
}
.tjmb_title img{
	display: inline-block;
	height: 1em;
}
.tjmb_title h4{
	display: inline-block;
	font-family: PingFang-SC-Bold;
	font-size: 17px;
	color: #333333;
}
.tjmb_list{
	background: white;
}

.mbgc-tjmb-wrapper{
  text-align: left;
  background: #f7f7f7;
  height: 100%;
}
 .mbgc-tjmb-list ul li{
  padding: .5em .75em .4em;
  border-bottom: 1px solid #eeeeee;
}
 .mbgc-tjmb-list ul li h3{
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #333333;
  line-height: 1.5em;
}
.mbgc-tjmb-list ul li p{
  font-size: 11px;
  color: #999999;
}
.mbgc-tjmb-list ul li span{
  display: inline-block;
  float: right;
  margin: -.84em .35em
}
 .mbgc-tjmb-list ul li span img{
  width: 4.1em;
}
</style>