var time=null
var keyL=null
var keyR=null
var keyT=null
var keyB=null
$(document).on("keydown",function(ev){
	clearInterval(time)
	var feiSpeedX=0
	var feiSpeedY=0
	console.log(ev.keyCode)
	//飞机向左
	if (ev.keyCode==37) {
		clearInterval(keyL)
		keyL=setInterval(function(){
			if ($(".feiji").position().left<=10) {
				$(".feiji").css("left",0)
			}else{
				feiSpeedX=-10
				$(".feiji").stop(true,true).animate({
					"left":$(".feiji").position().left+feiSpeedX
				})
			}
		},10)
		$(document).on("keyup",function(ev){
			if (ev.keyCode==37) {
				clearInterval(keyL)
			}
		})
	}
	//飞机向右
	if (ev.keyCode==39) {
		clearInterval(keyR)
		keyR=setInterval(function(){
		if ($(".feiji").position().left+$(".feiji").outerWidth()>=$(".wrapper").outerWidth()-15) {
			$(".feiji").css("left",$(".feiji").position().left)
		}else{
			feiSpeedX=10
			$(".feiji").stop(true,true).animate({
				"left":$(".feiji").position().left+feiSpeedX
			})
		}
		},10)
		$(document).on("keyup",function(ev){
			if (ev.keyCode==39) {
				clearInterval(keyR)
			}
		})
	}
	//飞机向上
	if (ev.keyCode==38) {
		clearInterval(keyT)
		keyT=setInterval(function(){
		if ($(".feiji").position().top<=($(".wrapper").outerHeight())/2/3) {
			
			$(".feiji").css("top",$(".feiji").position().top)
		}else{
			feiSpeedY=-10
			$(".feiji").stop(true,true).animate({
				"top":$(".feiji").position().top+feiSpeedY
			})
		}
		},10)
		$(document).on("keyup",function(ev){
			if (ev.keyCode==38) {
				clearInterval(keyT)
			}
		})
	}
	//飞机向下
	if (ev.keyCode==40) {
		clearInterval(keyB)
		keyB=setInterval(function(){
		if ($(".feiji").position().top+$(".feiji").outerHeight()>=($(".wrapper").outerHeight())-10) {
			$(".feiji").css("top",$(".feiji").position().top)
		}else{
			feiSpeedY=10
			$(".feiji").stop(true,true).animate({
				"top":$(".feiji").position().top+feiSpeedY
			})
		}
		},10)
		$(document).on("keyup",function(ev){
			if (ev.keyCode==40) {
				clearInterval(keyB)
			}
		})
	}
	//发射炮弹
	var paodan="<img src='dapao.png' class='paodan'>"
	if (ev.keyCode==32) {
		$(".wrapper").append(paodan)
		$(".paodan").css({
			"left":$(".feiji").position().left+$(".feiji").outerWidth()/2-50,
			"top":$(".feiji").position().top
		}).animate({
			"top":-550
		})
			
		//碰撞检测
		console.log($(".diji").length)
		var zha="<img src='zha1.png' class='zha'>"
		time=setInterval(function(){
	$(".diji").each(function(i,ele){
			if($(".paodan")&&$(".paodan").position().top&&$(ele)){
			if ($(".paodan").position().top<=$(ele).position().top+$(ele).outerHeight()&&$(".paodan").position().left>=$(ele).position().left&&$(".paodan").position().left<=$(ele).position().left+$(ele).outerWidth()) {
//				console.log(ele)
				$(".wrapper").append(zha)
				$(".zha").css({
					"left":$(ele).position().left,
					"top":$(ele).position().top
				})
				$(ele).remove()
				$(".paodan").remove()
				setTimeout(function(){
					$(".zha").remove()
				},500)
			}	
			}
			
	})
		},10)
		//清空炮弹
		if ($(".paodan").length>50) {
			console.log($(".paodan").length)
			$(".paodan:lt(10)").remove()
		}
	}
	
})
var jiNum=["xiaolan.png","xiaohong.png","xiaohei.png"]
//敌机来袭
var timer=null
setInterval(function(){
	var random=parseInt(Math.random()*(80-1+1)-1)
	var jiji=parseInt(Math.random()*(3))
	var diji="<img src='"+jiNum[jiji]+"' class='diji'>"
	$(".wrapper").append(diji)
	$(".diji").animate({
		"opacity":1,
//		"width":200
	},500)
	$(".diji").each(function(i,ele){
		timer=setInterval(function(){
			var random1=parseInt(Math.random()*(80-1+1)-1)
			$(ele).animate({
			"left":random1+"%",
			"top":0
			}).animate({
			"top":100+"%"
		},3000)
		setTimeout(function(){
			$(ele).remove()
		},3000)
		},1000)
		setTimeout(function(){
			clearInterval(timer)
		},1000)
	})
},4000)
