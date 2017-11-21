 <template>
 <div id="personal-wrapper">
		<div class="personal-list">
			<ul>
	 			<li>
		 			<!-- <mt-cell-swipe :right="rightButtons">  -->
	 					<div class="desc">&nbsp;</div>
	 					<div class="img-personal"><img src="./../../../assets/image/xk.png"></div>
	 					<div class="msg-personal"> 
							<h3>社团活动</h3>
							<a>
								<img src="./../../../assets/tx.png">
								<img src="./../../../assets/image/photo1.jpg">
							</a>
							<p>04-10&nbsp;16:50截止</p>
							<p>
								<span><img src="./../../../assets/image/mb.png"></span><font>0/0</font>
								<span><img src="./../../../assets/image/naozhong.png"></span>
							</p>
		 				</div>
	 				<!--  </mt-cell-swipe> -->
	 			</li>
				<li>
	 				<!-- <mt-cell-swipe :right="rightButtons"> -->
	 					<div class="desc">&nbsp;</div>
	 					<div class="img-personal"><img src="./../../../assets/image/xk.png"></div>
	 					<div class="msg-personal"> 
							<h3>15天完成听力练习</h3>
							<a>
								<img src="./../../../assets/tx.png">
								<img src="./../../../assets/image/photo1.jpg">
								<img src="./../../../assets/image/photo1.jpg">
							</a>
							<p>03-26&nbsp;16:50截止</p>
							<p>
								<span><img src="./../../../assets/image/mb.png"></span><font>0/0</font>
								<span><img src="./../../../assets/image/naozhong.png"></span>
							</p>
	 					</div>
				 <!-- </mt-cell-swipe>  -->
				</li>
				<li>
				<!--  <mt-cell-swipe  :right="rightButtons">  -->
					<div class="desc" style="background:#c5d2e1">&nbsp;</div>
					<div class="img-personal"><img src="./../../../assets/image/xk.png"></div>
					<div class="msg-personal"> 
						<h3>每天半小时口语练习</h3>
						<a>
							<img src="./../../../assets/tx.png">
							<img src="./../../../assets/image/photo1.jpg">
							<img src="./../../../assets/tx.png">
						</a>
						<p>02-26&nbsp;16:50截止</p>
						<p>
							<span><img src="./../../../assets/image/mb.png"></span><font>0/0</font>
							<span><img src="./../../../assets/image/naozhong.png"></span>
						</p>
					</div>
					<!--  </mt-cell-swipe> -->
				</li>
			</ul>
		</div>
 </div>
</template>

<script>
export default {
	data() {
		return{
			jjqk:'非常紧急'
		}
	},
	created() {
		this.rightButtons = [
	        {  
	          content: '删除',  
	          style: { background: 'red', color: '#fff' },  
	          handler: () => this.$messagebox('删除')  
	        }  
		]
	},
	methods:{
		leftButtonHandler(evt) {  
       console.log(123);  
     } 
	},
}
</script>

<style>
#personal-wrapper{
	text-align: left;
	background: #f7f7f7;
   height: 100%;
}
.personal-list ul li{
	margin:.69em .75em 0;
	border-bottom: 1px solid #eeeeee;
	border-radius: 6px;
	background: white;
	/* overflow: hidden; */
}
.personal-list .desc{
	background: #ff6f7d;
	width: .425em;
	height: 4em;
	margin:0;
	top: 0;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	vertical-align: top
}
.personal-list ul li>div{
	display: inline-block;
	margin:.69em .625em;
}
.personal-list .img-personal{
	width:1.1em;
	height: 1.1em;
	vertical-align: top;
 /*   margin: -.2em 1em 0;  */
	  margin-right: -.2em; 
	 
}
.personal-list .img-personal img{
	width: 100%;
	height: 100%;
}
.personal-list .msg-personal h3{
	font-family: PingFang-SC-Bold;
	font-size: 15px;
	color: #555555;
}
.personal-list .msg-personal a {
	float: right;
	vertical-align: top;
	margin-top: -1.1em;
    margin-right: -5em; 
}
.personal-list .msg-personal a img{
	width: 1.1em;
	height: 1.1em;
	border-radius: 50%;
}
.personal-list .msg-personal p{
	display: inline-block;
	font-family: PingFang-sc-Regular;
	font-size: 11px;
	color: #999999;
}
.personal-list .msg-personal p span{
	display: inline-block;
	width: 1.1em;
	height: 1.1em;
	vertical-align: middle;
	margin-left: .67em;
}
.personal-list .msg-personal p font{
	font-family: PingFang-sc-Regular;
	font-size: 12px;
	color: #9e9e9e;
	vertical-align: middle;
	margin-left: .8em;
}
.personal-list .msg-personal p span img{
	width: 100%;
	height: 100%;
}


.mint-cell-title{
	display: none!important;
} 
.mint-cell-wrapper{
	padding:0!important; 
	background-image:none!important; 
}
.mint-cell-swipe-button {
   line-height: 60px!important;
   padding: 0 .5em;
}
</style> 


