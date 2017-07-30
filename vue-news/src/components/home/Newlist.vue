<template>
	<div id="newContent">
		<div class="header">
			<span class="back" onclick="history.go(-1)">&lt</span>
		</div>
		<div class="content" v-for="elem in newsList">
			<h3>{{elem.title}}</h3>
			<img :src="elem.src">
			<p>{{elem.content}}</p>
		</div>
	</div>
</template>
<script>
	import Axios from 'axios'
	export default{
		data(){
			return {
				newsList:[]
			}
		},
		mounted(){

			// console.log(this.$route.path.length-1);
			 // alert(this.$route.path);
			 // console.log(this.$route.params.contentId);

			Axios.get('static/first.json').then((res)=>{
		        this.newsData = res.data.indexData;
		        for(var i=1;i<=(this.newsData).length;i++){
		        	if(i==this.$route.params.contentId){
		        		console.log(i);
	        		    var obj = {};
			            obj.title = this.newsData[i-1].title;
			            obj.src=this.newsData[i-1].src;
			            obj.content = this.newsData[i-1].detail;
			            this.newsList.push(obj);
			            console.log(obj);
		        	}
		          
		        }
	    	});
		}
	}
</script>
<style>
	#newContent .header{
		height: 1rem;
		width: 100%;
		background: rgba(0,0,0,0.6);
	}
	#newContent .back{
		font-size:0.3em;
		color: #fff;
		float: left;
		margin-left: 0.2rem;
		line-height: 1rem;
	}
	#newContent .content{
		font-size: 0.3rem;
		padding-left: 0.15rem;
		padding-right: 0.15rem;
	}
	#newContent .content h3{
		margin-top: 0.1rem;
		/*height: 1rem;*/
		padding-bottom: 0.1rem;
		text-align: center;
		border-bottom: 2px dotted rgba(0,0,0,0.1);
	}
	#newContent .content  p{
		font-size: 0.3rem;
		/*max-height: screen.height;*/
		max-height: 15rem;
	}
	#newContent .content img{
		width: 100%;
	}
</style>