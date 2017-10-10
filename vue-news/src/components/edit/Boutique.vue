<template>
	<div id="boutique">
		<div class="nav">
			<ul>
				<li>电影</li>
				<li>音乐</li>
				<li>书籍</li>
				<li>图片</li>
			</ul>
		</div>
		<div class="content">
			

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
	#boutique{
		height: .8rem;
		border-bottom: 2px solid #9ec09f;
	}
	#boutique .nav li{
		width: 25%;
		font-size: 0.3rem;
		float: left;
		text-align: center;
		line-height: .8rem;
		color: #9ec09f;
		font-weight: bold;
	}
</style>
