<template>
  <div id="footer">
  	<ul class="footer-menu">
  		<li class='home'><router-link to='/header'>
  			<img src="static/images/news.png">	
  			<p class='nav-new'>校内新闻</p>
  		</router-link></li>
  		<li class='edit'><router-link to='/edit'>
  			<img src="static/images/edit.png">
  			<p class='nav-new'>我的发表</p>
  		</router-link></li>
  		<li class='personal'><router-link to='/person'>
  			<img src="static/images/personal-center.png">
  			<p class='nav-new'>个人</p>
  		</router-link></li>
  	</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	#footer{
		height:1.2rem;
		width: 100%;
		background: #fff;
		position: fixed;
		bottom:0px;
		left: 0px;
		line-height: 0.8rem; 
		border-top: 2px solid #9ec09f;
	}
	/**/
	#footer .footer-menu li{
		float: left;
		width: 33%;
		height: .8rem;
		line-height: 0.8rem;
		text-align: center;
		margin-top: -0.1rem;

	}
	#footer .footer-menu li img{
		width: .5rem;
		height: .5rem;

	}
	#footer .nav-new{
		font-size:0.1rem;
		margin-bottom: 0.2rem;
		/*position: absolute;*/
		margin-top: -0.1rem;
		color:rgba(0,0,0,0.8);

	}
</style>
