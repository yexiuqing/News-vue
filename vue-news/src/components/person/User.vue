<template>
	<div id="information">
		<div class="nav">
			<span onclick="history.go(-1)">&lt</span>
			<span>使用学号登录</span>
			<span class='reg'><router-link to="/reg">注册</router-link></span>
		</div>
		<ul class="login">
			<li class="login-list">
				<img src="static/images/user.png" alt="">
				<p class="logo">头像</p>
			</li>
			<li class="login-list">
				<input type="text" name="userName" placeholder="学号/邮/密码">
			</li>
			<li class="login-list">
				<input type="password" name="userPass" placeholder="密码">
			</li>
			<li class="login-list login-button">
				登录
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
	body{

		background: #fff;
	}
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
		/*margin-right: 20px;*/
	}
	#information .nav .reg{
		margin-right: .2rem;
		float: right;
	}
	#information .nav .reg a{
		color: #fff;

	}

	#information img{
		width: 2rem;
		/*height: 30px;*/
		/*float: right;*/
		display: block;
		margin-top: .5rem;
		margin-left: 2.3rem;
		margin-bottom: .2rem;

	}
	#information .login-list .logo{
		margin-left: 0.3rem;
		text-align: center;

	}
	#information .login-list input{
		width: 5rem;
		height: .6rem;
		/*background: rgba(0,0,0,0.1);*/
		border:0;
		border-bottom: 2px solid rgba(0,0,0,0.1);
		border-radius: 5px;
		margin-left: .65rem;
		margin-top: .3rem;
		outline: none;

	}
	#information .login-button{
		background: #9ec09f;
		width: 5rem;
		height: .7rem;
		margin-left: .65rem;
		margin-top: .3rem;
		text-align: center;
		line-height: .7rem;
		border-radius: 5px;
	}
</style>
