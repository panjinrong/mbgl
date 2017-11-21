<template>
    <div class="button-wrapper" >
    	<a v-if="sfjr==='1'"  @click="djImg(sfjr,id)">
			<img src="./../../assets/image/yjion.png">
		</a>
		<a v-else="sfjr===''" v-show="!imgShow" @click="djImg(sfjr,id)">
			<img src="./../../assets/image/ljion.png">
		</a>
    <a v-show="imgShow" @click="djImg(sfjr,id)">
      <img src="./../../assets/image/yjion.png">
    </a>
    </div> 
</template>

<script>

export default {
  props:['sfjr','id'],
  data(){
  	return{
  		imgShow:false,
  	}
  },
  created(){
    // console.log('button:'+this.sfjr);
  },
  methods:{
  	djImg(sfjr,id){
  		if(sfjr===''){
        this.sfjr==='1';
        this.imgShow=true;
        var _this=this;
        this.$http.get('http://192.168.0.56:8081/discovery/joinTargetSquare?userid=1500681&ticket=99A80D4F2AE64C56B1E6265063BF50F4&function_id=20150101&id='+id).then(res=>{
        //   _this.data=res.data.content.zr;
        // console.log( _this.data);
        })
      }else{
        this.sfjr==='1'
      }
      console.log('button:'+this.sfjr)
      console.log(id);
      
  	}
  },
}
</script>

<style>
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