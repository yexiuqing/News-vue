<template>
	<div id="header">
		<!-- <router-link to = '/first'> -->
			<ul class='list'>
				<li class="active" @click='addClass'><router-link to = '/header/first'>首页</router-link></li>
				<li @click='addClass'><router-link to = '/header/focus'>关注</router-link></li>
				<li @click='addClass'><router-link to = '/header/program'>栏目</router-link></li>
			</ul>
		<!-- </router-link> -->
		<router-view></router-view>
	</div>
</template>
<script>
	import $ from 'jquery'
	export default {
	data() {
	    return {
	      // movieList:[],
	      // show:false
	    }
	  },
	  mounted:function() {
	  	var $list=$('.list li');
	  	$list.on('click',function(){
	    		$(this).addClass('active').siblings().removeClass('active');

	  	})
	  }
	}
</script>
<style>
*{
		padding: 0;
		margin: 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	
	#header{
		background: #eee;
		width: 100%; 
    	position: fixed;
    	top: 0;
    	left: 0;

	}
	#header .list{
		/*width:4.38rem;*/
		height: 0.6rem;
		margin: 0 auto;
		display: flex;
	}
	#header .list li{
		/*width: 1.46rem;*/
		height: 0.6rem;
		line-height: 0.6rem;
		font-size: 0.3rem;
		float: left;
		flex: 1;
		text-align: center;
		

	}
	#header .list li a{
		color: #9ec09f;
	}
	#header .list .active{
	    height: .5rem;
	    border-bottom: .1rem solid #5477b2;
	    /*color: #9ec09f;*/
	}
</style>
