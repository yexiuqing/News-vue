<template>
	<div id="edit">
		<div class="express">
			<input type="text" name="">
			<div class="button">发表</div>
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
	}
	#edit .express input{
		height: 3rem;
		width: 100%;
		border: 2px solid #eee;
		/*margin-top: 3rem;*/
		margin:4.1rem 0 0 0;
		padding: 10px;
	}
	#edit .express .button{
		width:1rem;
		height: .7;
		font-size: .3rem;
		border: 1px solid #000;
		background: #eee;
		text-align: center;
		line-height: .6rem;
		margin-left: 4.95rem;
		margin-top: .3rem;
	}
</style>
