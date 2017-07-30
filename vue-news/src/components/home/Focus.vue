<template>
<div id="focus">
	<v-header></v-header>
	<div class='wrapper'>
		<ul class="content">
			<li v-for="elem in firstData"><router-link :to='{name:"newlist", params:{contentId: elem.id}}'>
				<h2>{{elem.title}}</h2>
				<p>{{elem.detail}}</p>
			</router-link></li>
		</ul>
	</div>
	<v-footer></v-footer>
</div>
</template>
<script>
	import Axios from 'axios'
	import header from './Header'
	import footer from '../Footer' 

	export default{
		components:{
    	'v-header':header,
    	'v-footer':footer

  		},
		data(){
			return{

				firstData:[],
				styles:[{background:"url('static/1.jpg') no-repeat center / 100% 100%"},{background:"url('static/2.jpg') no-repeat center / 100% 100%"},{
					background:"url('static/3.jpg') no-repeat center / 100% 100%"},{background:"url('static/4.jpg') no-repeat center / 100% 100%"}]
			}
		},
		mounted(){
			Axios.get('static/first.json').then((res)=>{
				this.firstData=res.data.indexData;
				console.log(res.data.indexData);
			});
		}
	}
</script>
<style>
	#focus{
		margin-top: 0.6rem;
		margin-bottom:0.8rem;
		/*text-align: center;*/
		background: #eee;
	}
	.wrapper{
		/*width: 85%;*/
		margin-left: .4rem;
		margin-right: .4rem;

	}
	.content h2{
		max-height: 0.9rem;
    font-size: 0.33rem;
    overflow: hidden;
    color: #666;
	}
	.content p{
		max-height: 1.8rem;
    margin-top: 0.05rem;
    overflow: hidden;
    font-size: 0.1rem;
	}
	.content li{
		/*margin-bottom: 10px;*/
		padding: 0.2rem 0;
		border-bottom: 1px dashed #ccc;
		color: #494d4d;

	}
	.carousel{
		margin-bottom: 0.2rem;

	}
	.carousel ul{
		overflow: hidden;
		/*height: 1.75rem;*/
		width: 25.6rem
	}
	.carousel-content li{
		height: 4.5rem;
		width: 6.4rem;
		float: left;
	}
	.content a{
		color: rgba(0,0,0,0.9);
	}
</style>
