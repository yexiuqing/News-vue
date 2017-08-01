<template>
	<div id="edit">
		<div class="express">
			<input type="text" name="title"  placeholder="文章标题">
			<textarea class="artical" placeholder="文章内容"></textarea>
			<div class="button" >发表</div>
		</div>
		<v-footer></v-footer>
		
	</div>
</template>
<script type="text/javascript">
	import footer from '../footer'
	export default{
		components:{
    		'v-footer':footer
    	}
	}
</script>
<style type="text/css">
	#edit .express{
		text-align: center;
		background: url(../../../static/images/bg1.jpg) no-repeat ;
		/*background-size: 100%;*/
		background-size: contain;

	}
	#edit .express input{
		outline: none;
		height: .6rem;
		width: 80%;
		border: 1px solid #eee;
		border-radius: 5px;
		margin: 4rem 0 0 0;
		float: left;
		font-size: .3rem;
	}
	#edit .express .artical{
		height: 4rem;
		width: 99%;
		border: 2px solid #eee;
		/*margin-top: 3rem;*/
		/*margin:0.2rem 0 0 0;*/
		padding: .1%;
		outline: none;
		font-size: .3rem;
	}
	#edit .express .button{
		width:1rem;
		height: .7;
		font-size: .3rem;
		border: 1px solid #9ec09f;
		background: #9ec09f;
		text-align: center;
		line-height: .6rem;
		margin-left: 4.95rem;
		margin-top: .1rem;
		border-radius: 5px;
	}
</style>
