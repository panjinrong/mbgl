<template>
  	<div class="vue-upload-img-multiple">
	     <!--  <form>
          <input type="text" value="" v-model="name" placeholder="请输入用户名">
          <input type="text" value="" v-model="age" placeholder="请输入年龄">
          <input type="file" runat="server" accept="image/*" capture="camera" style="width:100%" @change="getFile($event)">
          <button @click="submitForm($event)">提交</button>
        </form> -->
            <div class="updataText">
        <p style="white-space:pre-line;font-size:12px;">{{msg}}&nbsp;</p> 
        <textarea v-model="msg" placeholder="分享你的目标与心得吧..." type="text"></textarea>
      </div>
      <div class="updataImg">
          <ul>
            <li v-for="(image,$index) in images">
              <div>
                <img :src="image"/>
                <span href="#" style="position: absolute;" @click='delImage($index)'>
                 <img src="./../../../assets/image/yx-bf-logo2.png">
               </span> 
              </div>
            </li>
            <!-- <li class="add-img" v-if="images.length<3">
            <form>
              <div class="add-img-button">
                  <input id="File2" runat="server" type="file" accept="image/*" capture="camera" style="width:100%"   @change="onFileChange" ref="avatarInput"/>
                  <img src="./../../../assets/image/ZMB-Plus.png">
              </div>
            </form>
            </li> -->
          </ul>
      </div>
      <div>
        <div class="selImg" >
            <div>
                <img src="./../../../assets/image/Camera.png">
            </div>
            <p>照片</p>
            <form>
                <input id="File2" runat="server" type="file" accept="image/*" capture="camera" style="width:100%"   @change="onFileChange" />
            </form>
        </div>
      </div>
        <button  class="update-button" @click="submitForm($event)">发表</button>
  	</div>
 </template>
 
 <script>
 export default {
  name: 'Upload',
  data: function () {
    return {
      images: [],
      image:'',
      msg:'',
      camerashow:true,
      vals:'',
       name: '',
          age: '',
          file: ''
    }
  },
   watch: {
      images: 'showcamera',
    },
   methods: {
	    showcamera() {
		    if(this.images.length>0){
		        this.camerashow=false;
		    }else{
		       this.camerashow=true;
		    }
	    },
	    // test () {
	    //     var vm = this
	    //     console.log(vm.message)
	    // },
	    onFileChange (e) {
	        var files = e.target.files || e.dataTransfer.files
          this.file = e.target.files[0] || e.dataTransfer.files[0]
	        if (!files.length) return
	        this.createImage(files)
          this.submitForm(e)
	    },
	    createImage (file) {
	        var vm = this
	        var reader = null
	        var leng = file.length
	        for (var i = 0; i < leng; i++) {
		        reader = new window.FileReader()
		        reader.readAsDataURL(file[i])
		        reader.onload = function (e) {
		        vm.images.push(e.target.result)
	        }
	      }
	    },
	    removeImage: function (e) {
	        this.images = []
	    },
	    delImage: function (index) {
	        this.images.splice(index,1);
	        if(this.images.length===1){
	       		this.camerashow=true;
	        }
	    },

      // getFile(event) {
      //   this.file = event.target.files[0];
      //   if (!this.file.length) return
      //     this.createImage(file)
      //   console.log(this.file);
      // },
      submitForm(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('file', this.file);
        console.log(formData);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        // if(this.images.length!==0){
            this.$http.post('http://192.168.0.101:8081/target/target_fbdt?userid=11204050220&ticket=B110E55DEECA941AEFDCF9CE72C2789D&function_id=987654321&content='+this.msg, formData, config).then(function (res) {
              // if (res.status === 2000) {
              //   /*这里做处理*/
              // }
            })
        // }
      }
      
 	}
 }
 </script>
 
 <style>
 h1, h2 {
  font-weight: normal;
 }
 ul {
  list-style-type: none;
  padding: 0;
 }
 li {
  display: inline-block;
 }
 .vue-upload-img-multiple {
   border: none !important;
   padding: 1em;
 }
 .updataImg{
   text-align: left;
   margin-top: 2.5em;
 }
 .updataImg ul li{
   display: inline-block !important;
   box-sizing: border-box;
   width: calc(100%/3);
   padding: .1rem;
   font-size: 0;
   /*border:1px solid red;*/
 }
 .updataImg ul li>div{
   width: 100%; 
   height: 0px;
   padding-bottom: 100%;
   overflow: hidden;
   margin: 0;
   position: relative;
 }
.updataImg ul li>div>img{
   height: 100%;
   width: 100%;
  }
 .updataImg ul li img{
   position: absolute;
   height: 100%;
   width: 100%;
 }
 .updataImg ul li>div span{
   display: block;
   width: .9rem;
   height: .9rem;
   background: rgba(0, 0, 0, 0.5);
   right: 0;
   border-radius: 50%;
 }
 .updataText{
   position: relative;
 }
 textarea{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%; 
   height: 100%;  
   resize: none;
   border: none; 
 } 
 pre{
   display:block;
   visibility:hidden; 
 } 
 .selImg{
   width: 30%;
   background: #f7f7f7;
   position: relative;
   padding: 1em 0;
   margin-top: 2.5em;
 }
 .selImg>div img{
   width: 3em;
 }
 .selImg p{
   font-size: 14px;
   color: #999999;
 }
 .selImg input{
   position: absolute;
   top: 0;
   left: 0;
   height: 7em;
   width: 100%;
   opacity: 0;
 }
  .add-img {
   box-sizing: border-box;
   /*padding: .1rem 0 0 !important;*/
   margin-left: -.5rem;
   font-size: 0;
  }
 .add-img >div{
   background: #f7f7f7;
   width: 100%;
   height: 100%; 
   box-sizing: border-box;
   position: relative;
 }
  .add-img-button img{
   width: 40% !important;
   height: 40% !important;
   border:none !important;
   top: 28%;
   left: 28%;
  }
 .add-img input{
   position: absolute;
   height: 100%;
   width: 100%;
   z-index: 9;
   opacity: 0;
 }
 .update-button{
   font-size: 14px;
   background: #52acfa;
   color: white;
   padding: .4em 1em;
   border:none;
   border-radius: .3em;
   float:right;
   margin-top: 1.5em;
 }
 </style>