<template>
    <div class="button-wrapper" >
    	<span @click="djImg(stateid)">
  			<img v-if="stateid==='1'" src="./../../../assets/image/Invitation-Y.png">
        <img v-else="stateid==='0'" src="./../../../assets/image/Invitation-N.png">
		  </span>
    </div> 
</template>

<script>

export default {
  props:['stateid'],
  data(){
  	return{
  		imgShow:false
  	}
  },
  methods:{
    	djImg(stateid){
          if(this.stateid==='0'){
            this.stateid='1';
          }else{
            this.stateid='1';
          }
      }
  },
  created(){
      // console.log(this.stateid);
  }
}
</script>

<style>
.button-wrapper{
	display: inline-block;
	float: right;
}
.button-wrapper span{
	float: right;
}
.button-wrapper span > img{
	width: 3.6em;
	height: 1.5em;
	vertical-align: top;
	margin-top: .25em
}
</style>