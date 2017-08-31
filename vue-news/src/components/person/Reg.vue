<template>
	<div id="reg">
		<div class="nav">
			<span onclick="history.go(-1)">&lt</span>
			<span class='register'>注册</span>
		</div>
		<ul class="infor">
			<li class="info-list">
				<img src="static/images/user.png" alt="">
				<p class="logo">上传头像</p>
			</li>
			<li class="info-list">
				<input type="text" name="userName" placeholder="邮箱/手机号" v-model="tel">
			</li>
			<li class="info-list">
				<input type="password" name="userPass" placeholder="密码" v-model="pass">
			</li>
			<li class="info-list">
				<input type="password" name="userPass" placeholder="确认密码" v-model="repass">
			</li>
			<li class="info-list reg-button" @click="check">
				注册
			</li>
			<li class="info-list reset-button">
				重置
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
import Axios from "axios";
	export default{
		data(){
			 return {
            tel:"",
            pass:"",
            repass:""

       }
		},
		methods:{
			check:function () {
		      // var name=this.name;
		      var tel=this.tel;
		      var pass=this.pass;
		      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		      var regex = /^[a-zA-Z0-9]{6,20}$/;

		        this.insert_user();
		      	this.$router.push("/user");
		    },
		    insert_user:function () {
		      var tel=this.tel;
		      var pass=this.pass;
		      Axios.get('http://127.0.0.1:3000/insert_user',{
		        params:{
		          tel:tel,
		          pass:pass
		        }
		      }).then((res)=>{
		        console.log(res.data);
		      }).catch((error)=>{
		          console.log(error);

		      });
		    },
		}


	}
</script>
<style type="text/css">
	body{
		background: #fff;
	}
	#reg{
		font-size: 0.3rem;
	}
	#reg .nav{
		background: rgba(0,0,0,0.7);
		height: 1rem;
		width: 100%;
		color: #fff;
		line-height: 1rem;
	}
	#reg .nav span{
		margin-left: 20px;
		/*margin-right: 20px;*/
	}
	#reg .info-list img{
		width: 2rem;
		/*height: 30px;*/
		/*float: right;*/
		display: block;
		margin-top: .5rem;
		margin-left: 2.3rem;
		margin-bottom: .2rem;

	}
	#reg .info-list .logo{
		margin-left: 0.3rem;
		text-align: center;

	}
	#reg .info-list input{
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
	#reg .reg-button{
		background: #9ec09f;
		width: 5rem;
		height: .7rem;
		margin-left: .65rem;
		margin-top: .3rem;
		text-align: center;
		line-height: .7rem;
		border-radius: 5px;
	}
	#reg .reset-button{
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
