<template>
	<div id="se
		<div class="nav">
			<span onclick="history.go(-1)">&lt</span>
			<span>设置</span>
		</div>
		<ul class="set">
			<li class="sets">
				<span class="left">修改手机号码</span>
				<span class="right">&nbsp;&nbsp;&nbsp;&gt</span>
			</li>
			<li class="sets">
				<span class="left">修改邮箱</span>

				<span class="right">&nbsp;&nbsp;&nbsp;&gt</span>
			</li>
			<li class="sets">

				<span class="left">社交账号绑定</span>
				<span class="right">&nbsp;&nbsp;&nbsp;&gt</span>
			</li>
			<li class="sets">
				<span class="left">开启推送</span>
				<div class="right">
					<div class="tangle">
						<div class="circle"></div>
					</div>
				&nbsp;&nbsp;&nbsp;</div>
			</li>
			<li class="sets">
				<span class="left">夜间模式</span>
				<div class="right">
					<div class="tangle">
						<div class="circle"></div>
					</div>
				&nbsp;&nbsp;&nbsp;</div>
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
	#setting{
		font-size: 0.3rem;
	}
	#setting .nav{
		background: rgba(0,0,0,0.7);
		height: 1rem;
		width: 100%;
		color: #fff;
		line-height: 1rem;
	}
	#setting .nav span{
		margin-left: 20px;
		margin-right: 20px;
	}
	#setting .sets{
		height: 1rem;
		line-height: 1rem;
		border-bottom: 2px solid rgba(0,0,0,0.1);
	}
	#setting img{
		width: 0.5rem;
		/*height: 30px;*/
		float: right;
		/*display: inline-block;*/
		margin-top: 0.2rem;
		margin-right: 0.5rem;
	}
	#setting .sets .left{
		margin-left: 0.3rem;

	}
	#setting .sets .right{
		margin-right: 0.5rem;
		float: right;

	}
</style>
