<template>
<div id="person">
	<div class="user">
		<img class="logo" src="static/images/user.png">
		<!-- <div class="name-level" > -->
		<span class="nickname">u_20170727_01</span>
			<!-- <img class="level" src="static/images/xin.png"> -->
			
		<!-- </div> -->
		<span class="u-set"><router-link to='/user'>&gt</router-link></span>
		<img class="setting" src="static/images/setting.png">
	</div>
	<ul class="u-content">
		<li class="u-score">
			<ul>
				<li>
					<p>0</p>
					<p>成就值</p>
				</li>
				<li>
					<p>0</p>
					<p>获赞</p>
				</li>
				<li>
					<p>0</p>
					<p>被采纳</p>
				</li>
				<li>
					<p>0</p>
					<p>关注</p>
				</li>
			</ul>
		</li>
		<li class="u-detail">
			<img src="static/images/message.png">
			<span class="comments">评论</span>
			<span class="more">&gt</span>	
		</li>
		<li class="u-detail">
			<img src="static/images/edit1.png">
			<span class="comments">发表帖子</span>
			<span class="more">&gt</span>	
		</li>
		<li class="u-detail">
			<img src="static/images/shoucang.png">
			<span class="comments">收藏帖子</span>
			<span class="more">&gt</span>	
		</li>
		<li class="u-detail">
			<img src="static/images/shoucang_1.png">
			<span class="comments">收藏话题</span>
			<span class="more">&gt</span>	
		</li>
		<li class="u-detail">
			<img src="static/images/sixin.png">
			<span class="comments">私信</span>
			<span class="more">&gt</span>	
		</li>
		<li class="u-detail">
			<img src="static/images/xiazai.png">
			<span class="comments">下载</span>
			<span class="more">&gt</span>	
		</li>
		
		
	</ul>
	<v-footer></v-footer>
</div>
</template>
<script>
	import footer from '../footer'
	export default{
		components:{
    		'v-footer':footer
    	}
	}
</script>
<style>
	body{
		background:rgba(238, 238, 238, 0.55);

	}
	/*#person{
		background: #eee;
	}*/
	#person .user{
		width: 108%;
		height: 2rem;
		text-align: center;
		line-height: 2rem;
		position: relative;
		background: rgba(38, 164, 231,0.55);
		margin-bottom: 0.1rem;
	}
	#person .logo{
		width: 1.5rem;
		float: left;
		margin-left: 0.4rem;
		margin-top: 0.1rem;

	}
	#person .nickname{
		position: absolute;
		font-size: 0.3rem;
		left: 2.1rem;
		/*display: block;*/
	}
	#person .u-set{
		font-size: 0.3rem;
		float: right;
		margin-right: 1rem;
	}
	#person .setting{
		width: 0.3rem;
		height: 0.3rem;
		position: absolute;
		top: 0.15rem;
		right: 0.9rem;
	}
		/*person结束*/
	#person .u-detail{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		border-bottom: 2px solid rgba(0,0,0,0.1);
	}
	#person .u-score{
		height: 1rem;	
		border-bottom: 3px solid rgba(0,0,0,0.1);
	}
	
	#person .u-score li{
		float: left;
		width: 25%;
	}
	#person .u-score li p{
		font-size: 0.25rem;
		text-align: center;
	}
	#person .u-detail img{
		width: 0.3rem;
		float: left;
		margin-right: 0.1rem;
		margin-left: 0.2rem;
		margin-top: 0.3rem;
	}
	#person .u-detail .comments{
		font-size: 0.2rem;
		line-height: 1rem;
		float: left;

	}
	#person .u-detail .more{
		float: right;
		font-size: 0.3rem;
		margin-right: 1rem;
	}

</style>
