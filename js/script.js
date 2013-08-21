var ctr=0;
		$(document).ready(function(){
		
			setInterval(function(){
			ctr-=150;
			if(ctr < - 680)
				ctr = 0;
				$("#holder").css('backgroundPosition', ctr+'px 0px');
			}, 200);
		});