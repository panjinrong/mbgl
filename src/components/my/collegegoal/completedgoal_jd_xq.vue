<template>
    <div class="collegedetail-mbrj" >
    	<h3>目标日记</h3>
    	<div class="collegedetail-mbrj-msg ">
    		<div><p>昨天</p></div>
    		<div class="msg-xq flex">
    			<div><p>09:50</p></div>
    			<span>
        			<a></a>
    				<img src="./../../../assets/image/XQ-dot.png">
    			</span>
    		<div><p>王丽君更新计算机二级为“非常紧急wewwefefefgregreg”</p></div>
  	    </div>
  	    <div class="msg-xq flex">
    		<div><p>08:50</p></div>
    		<span>
    			<a></a>
    				<img src="./../../../assets/image/XQ-dot.png">
    		</span>
    		<div><p>王丽君更新15天听力目标为“非常紧急”</p></div>
        </div>
		<div class="msg-xq-ls msg-xq flex" @click="update()" v-show="!updatemsg">
			<div><p>06:50</p></div>
			<span>
    			<a></a>
				  <img src="./../../../assets/image/XQ-dot1.png">
			</span>
			<div><p>2条操作</p></div>
		</div>
        <transition name="slide-fade">
          <div v-show="updatemsg">
            <div class="msg-xq flex">
                <div><p>06:30</p></div>
                <span>
                			<a></a>
                  <img src="./../../../assets/image/XQ-dot.png">
                </span>
                <div><p>王丽君更新社团活动为“紧急”</p></div>
            </div>
            <div class="msg-xq flex">
                <div><p>06:25</p></div>
                <span>
                			<a></a>
                    <img src="./../../../assets/image/XQ-dot.png">
                </span>
                <div><p>王丽君更新英语口语目标为“普通”</p></div>
            </div>
            <div class="msg-xq-ls  msg-xq flex" @click="updatedown()">
                <div><p>06:25</p></div>
                <span>
                			<a></a>
                    <img src="./../../../assets/image/XQ-dot2.png">
                </span>
                <div><p>收起</p></div>
            </div>
          </div>
          </transition>
	    </div>
	</div>
</template>

<script>
export default {
	data() {
		return{
        	updatemsg:false,
		}
	},
	methods:{
	    update() {
	      this.updatemsg=true;
	    },
	    updatedown() {
	      this.updatemsg=false;
	    },
	}
}
</script>

<style>
.collegedetail-mbrj{
	background: white;
	margin-top: .4em;
	padding-left: .5em;
} 
.collegedetail-mbrj h3{
	font-size: 17px;
	color: #555555;
	border-bottom: 1px solid #eeeeee;
	line-height: 2.5em;
}
.collegedetail-mbrj-msg>div{
	line-height: 2.5em;  
}
.flex{
    display: flex;
}
.collegedetail-mbrj-msg>div span,.collegedetail-mbrj-msg>div p{
	display: inline-block;
}
.collegedetail-mbrj-msg>p{
  font-size: 14px;
  color: #555555;
  padding: .785em  0 .8em 0;
}
.collegedetail-mbrj-msg .msg-xq span{
	padding: 0 .15em;
}
.collegedetail-mbrj-msg .msg-xq span>img{
	width: .7em;
	padding: 0 .1em;
}
.collegedetail-mbrj-msg .msg-xq-ls span{
	padding:0;
}
.collegedetail-mbrj-msg .msg-xq-ls span>img{
	width: 1em;
}
</style>