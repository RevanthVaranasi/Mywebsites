var createdTime=0,clickedTime=0,reactionTime=0;
				
				
				var min=0,max=5000;
			function getRandomColor() 
			{
				var letters = '0123456789ABCDEF';
				var color = '#';
				for (var i = 0; i < 6; i++) {
								color += letters[Math.floor(Math.random() * 16)];
							}
				return color;
			}
			function getRandomShape(number)
			{
				//document.getElementById("box").style.height=Math.random()*350;
				//document.getElementById("box").style.width=Math.random()*500;
				
			}
			function makeBox()
				{		var randomTime;
						setTimeout(function(){
						randomTime=Math.random()*5000;
						createdTime=Date.now();
						//document.getElementById("box").style.height=getRandomShape(randomTime);
						if(Math.random()>0.5)
							{
						document.getElementById("box").style.borderRadius="1000px";
							}
				else
						{
						document.getElementById("box").style.borderRadius=0;
						}
						var top=Math.random();
						top=top*400;
						var left=Math.random();
						left=left*200;
						document.getElementById("box").style.top=top+"px";
						document.getElementById("box").style.left=left+"px";
						
						document.getElementById("box").style.backgroundColor=getRandomColor();
						document.getElementById("box").style.display="block";
						},Math.floor(Math.random() * (max - min)) + min);
				}
				document.getElementById("box").onclick=function(){
						clickedTime=Date.now();
						reactionTime=(clickedTime-createdTime)/1000;
						this.style.display="none";
						document.getElementById("time").innerHTML=reactionTime;
						makeBox();
				}
						makeBox();