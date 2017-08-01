<template>
<div id="program">
	<v-header></v-header>
	<div class='wrapper'>
		<ul class="content">
			<li v-for="elem in programData"><router-link :to='{name:"newlist", params:{contentId: elem.id}}'>
				<h2>{{elem.id}}.&nbsp{{elem.title}}</h2>
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

				programData:[]
				
			}
		},
		mounted(){
			Axios.get('static/program.json').then((res)=>{
				this.programData=res.data.programData;
				console.log(res.data.programData);
			});
		}
	}
</script>
<style>
	/*body{
		background: #eee;
	}*/
	#program{
		margin-top: 0.6rem;
		margin-bottom:0.8rem;
		/*text-align: center;*/
		background: #eee;
		height: 100%
	}
	.wrapper{
		/*width: 85%;*/
		margin-left: .4rem;
		margin-right: .4rem;

	}
	.content span{
		margin-right: 3px;
	}
	.content h2{
		max-height: 0.9rem;
    font-size: 0.33rem;
    overflow: hidden;
    /*font-size: 0.3rem;*/
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
