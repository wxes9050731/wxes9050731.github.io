$(function(){
	var $list_scrollTop = 0

	$('#g-nav a').click(function(e){
		var $this = $(this)
		var $href = $this.attr('href')
		$('#g-nav a').removeClass('active')
		$this.addClass('active')
		$('.list-page').removeClass('active')
		$($href).addClass('active')
		// e.preventDefault()
		g_header.classList.remove('active')
		$('body,html').animate({scrollTop:0},100)
	})

	// $('.list-page a').click(function(e){
	// 	var $this = $(this)
	// 	var $href = $this.attr('href')
	// 	//msg_trigger('msg-detail',$href)

	// 	if($this.hasClass('out-links')){
	// 	}else{
	// 		$list_scrollTop = $('html,body').scrollTop()
	// 		$('.list-page').removeClass('active')
	// 		$('#list-detail').addClass('active')
	// 		$('#list-detail-img').attr('src','')
	// 		$('#list-detail-img').attr('src',$href)
	// 		$('body,html').animate({scrollTop:0},0)
	// 		e.preventDefault()
	// 	}
	// })

	// $('#list-detail-close').click(function(){
	// 	$('#g-nav a.active').click()
	// 	$('body,html').animate({scrollTop:$list_scrollTop},0)		
	// })

	$('.is-anchor').click(function(){
		var $target = $(this).attr('href')
		var $targetX = $($target).offset().top
		$('body,html').animate({scrollTop:$targetX},1000)
		return false
	})

	let urlHash = window.location.hash
	console.log(urlHash)
	const g_nav_a = document.querySelectorAll('#g-nav a')
	g_nav_a.forEach((e)=>{

		const href = e.getAttribute('href')
		if(href == urlHash){
			e.click()
			$('body,html').animate({scrollTop:0},0)
			return false
		}
	})


	//手機版選單開合
	//宣告g_header=文件選擇器('#命名')
	//mo_menu增加事件偵聽('點擊')
	//如果g_header元素包含class(指.active)、就移除class
	//否則就加上class
	const g_header = document.querySelector('#g-header')
	const mo_menu = document.querySelector('#mo_menu')
	mo_menu.addEventListener('click',()=>{
		if(g_header.classList.contains('active')){
			g_header.classList.remove('active')
		}else{
			g_header.classList.add('active')
		}
	})

})