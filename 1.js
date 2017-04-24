window.onload = function(){
	var video = document.querySelector('video');
	var play = document.querySelector('.play');
	//console.log(play);
	var i = document.querySelectorAll('i');
	var span = document.querySelectorAll('span');
	var ball = document.querySelector('.ball');
	//console.log(ball);
	var progress = document.querySelector('.progress');
	var line = document.querySelector('.line');
	var box = document.querySelector('.video');
	console.log(line);

	play.onclick = function(){
		//alert('ddd');
		if(!video.paused){
			video.pause();
			i[0].classList.remove('icon-bofang');
			i[0].classList.add('icon-zanting');
		}else{
			i[0].classList.remove('icon-zanting');
			i[0].classList.add('icon-bofang');
			video.play();
		}
	}
	video.ontimeupdate = function(){
		span[0].innerHTML = formatTime(video.currentTime);
		span[1].innerHTML = formatTime(video.duration);
		var bi = video.currentTime/video.duration;
		var ball_left = (line.offsetWidth-ball.offsetWidth)*bi;
		ball.style.left = ball_left + 'px';
		progress.style.width = ball_left + 'px';
		}
	
	function formatTime(time){
		var min = Math.floor(time/60);
		if(min<10){
			min = '0' + min;
		}
		var sec = Math.floor(time%60);
		if(sec<10){
			sec = '0' + sec;
		}
		return min + ':' + sec;
	}
	
	ball.onmousedown = function(e){
		e=event || window.event;
		var mouse_start_x = e.pageX;
		var start_x = this.offsetLeft;
		document.onmousemove = function(e){
			e = event = window.event;
			var mouse_end_x = e.pageX;
			var ball_left = start_x + mouse_end_x - mouse_start_x;
			var ball_left_max = line.offsetWidth - ball.offsetWidth;
			if(ball_left>ball_left_max){
				ball_left = ball_left_max;
			}
			console.log(ball_left);
			progress.style.width = ball_left + 'px';
			ball.style.left = ball_left + 'px';
			var bili = ball_left/(line.offsetWidth-ball.offsetWidth);
			video.currentTime = video.duration*bili
		}

	}
	document.onmouseup = function(){
		document.onmousemove = null;
	}


	var colume = document.querySelector('.colume');
	//console.log(colume);
	i[1].onclick = function(){
		if(!video.muted){
			video.muted = true;
			this.classList.remove('icon-yinliang3');
			this.classList.add('icon-jingyin');
			colume_ball.style.left = 0 + 'px';
			colume_line.style.width = 0 + 'px';
		}else{
			video.muted = false;
			this.classList.remove('icon-jingyin');
			this.classList.add('icon-yinliang3');
			colume_ball.style.left = colume_innerbox.offsetWidth - colume_ball.offsetWidth-2 + 'px';
			colume_line.style.width = colume_innerbox.offsetWidth-2 + 'px';
		}
	}

	var colume_innerbox = document.querySelector('.colume_innerbox');
	var colume_ball = document.querySelector('.colume_ball');
	var colume_line = document.querySelector('.colume_line');
	colume_ball.onmousedown = function(e){
		e = event || window.event;
		var mouse_start_x = e.pageX;
		var colume_ball_startx = colume_ball.offsetLeft;
		console.log(colume_ball_startx);
		document.onmousemove = function(e){
			var mouse_end_x = e.pageX;
			var mouse_x = mouse_end_x - mouse_start_x;
			//console.log(mouse_x);
			var colume_ball_x = colume_ball_startx + mouse_x;
			var colume_x_max = colume_innerbox.offsetWidth - colume_ball.offsetWidth-2;
			//console.log(colume_innerbox.offsetWidth);
			//console.log(colume_ball.offsetWidth);
			//console.log(colume_x_max);
			if(colume_ball_x>colume_x_max){
				colume_ball_x = colume_x_max;
			}
			if(colume_ball_x<0){
				colume_ball_x = 0;
				i[1].classList.remove('icon-yinliang3');
				i[1].classList.add('icon-jingyin');
			}
			if(colume_ball_x>0){
				i[1].classList.remove('icon-jingyin');
				i[1].classList.add('icon-yinliang3');
			}
			colume_ball.style.left = colume_ball_x + 'px';
			colume_line.style.width = colume_ball_x-1 + 'px';
			var colume_bili = colume_ball_x/colume_innerbox.offsetWidth;
			console.log(colume_ball_x);
			console.log(colume_innerbox.offsetWidth);
			console.log(colume_bili);
			video.volume = colume_bili;
		}
	}
	document.onmouseup = function(){
		document.onmousemove = null;
	}

//全屏操作
i[2].onclick = function(){
	//alert('dfdf');
	if(fullscreen()){
		exitFullscreen();
	}else{
		requestFullscreen(video);
	}
}
function requestFullscreen(ele){
	if(ele.requestFullscreen){
		ele.requestFullscreen();
	}else if(ele.webkitRequestFullscreen){
		ele.webkitRequestFullscreen();
	}else if(mozRequestFullscreen){
		ele.mozRequestFullscreen();
	}else if(ele.msRequestFullscreen){
		ele.msRequestFullscreen();
	}
}
function exitFullscreen(){
	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitFullscreen();
	}else if(document.mozExitFullscreen){
		document.mozExitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}
}
//判断是否全屏
function fullscreen(){
	return document.fullscreen ||
	document.webkitFullscreen || 
	document.mozFullscreen || 
	false;
}





}