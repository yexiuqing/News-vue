<template>
	<div id="information">
		<div class="nav">
			<span onclick="history.go(-1)">&lt</span>
			<span>完善信息</span>
		</div>
		<ul class="modify">
			<li class="modifies">
				<span class="left">头像</span>
				<img src="static/images/user.png" alt="">
			</li>
			<li class="modifies">
				<span class="left">昵称</span>
				<span class="right">黑龙江大学&nbsp;&nbsp;&nbsp;></span>
			</li>
			<li class="modifies">
				<span class="left">学院</span>
				<span class="right">软件学院&nbsp;&nbsp;&nbsp;></span>
			</li>
			<li class="modifies">
				<span class="left">专业</span>
				<span class="right">软件工程&nbsp;&nbsp;&nbsp;></span>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
import $ from 'jquery'
export default {
	data() {
	    return {
	      // movieList:[],
	      // show:false
	    }
	  },
	// method:function goBack(){ 
 //    	window.history.go(-1); 
	// }
}
	 
</script>
<style type="text/css">
	#information{
		font-size: 0.3rem;
	}
	#information .nav{
		background: rgba(0,0,0,0.7);
		height: 1rem;
		width: 100%;
		color: #fff;
		line-height: 1rem;
	}
	#information .nav span{
		margin-left: 20px;
		margin-right: 20px;
	}
	#information .modifies{
		height: 1rem;
		line-height: 1rem;
		border-bottom: 2px solid rgba(0,0,0,0.1);
	}
	#information img{
		width: 0.5rem;
		/*height: 30px;*/
		float: right;
		/*display: inline-block;*/
		margin-top: 0.2rem;
		margin-right: 0.5rem;
	}
	#information .modifies .left{
		margin-left: 0.3rem;

	}
	#information .modifies .right{
		margin-right: 0.5rem;
		float: right;
	
	}
</style>