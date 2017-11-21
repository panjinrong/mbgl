<template>
  <div id="collegedetail-dt-wrapper">
		<v-notice></v-notice>
	</div> 
</template>

<script>
import notice from './../../notice/notice_xq'
export default {
	components:{
		'v-notice':notice
	}
}
</script>

<style>
#collegedetail-dt-wrapper{
	text-align: left;
	/* background: #f7f7f7; */
    border-top: 1px solid #eeeeee;
}
</style>