			var aside=document.getElementById("aside");
			var sech=document.getElementById("sech");
			var f1=document.getElementById("f1");
			var f2=document.getElementById("f2");
			var f3=document.getElementById("f3");
			var f4=document.getElementById("f4");
			var f5=document.getElementById("f5");
			var f6=document.getElementById("f6");
			var oa=document.getElementsByClassName("oa");
			window.onscroll=function(){
				var a=document.documentElement.scrollTop;
					if(a>596){
						f6.style.display="block"
						sech.style.display="block"
						aside.style.top=50+"px";
						for(var i=0;i<oa.length;i++){
							oa[i].index=i;
							oa[i].style.background="none";
								oa[i].onmouseover=function(){
									for(var k=0;k<oa.length;k++){
										oa[k].style.background="none"
										oa[k].style.color=""
										oa[0].style.color="#ff5500"
									}
									this.style.background="#ff5500";
									oa[this.index].style.color="#fff";
									
								}
							
						}
						if(a>=1176&&a<2198){
							f1.style.background="#ff5001";
							f1.style.color="#fff";
							f1.style.border="#ff5001";
							f6.style.display="block"
						}else{f1.style.color="#FF5001";}
						if(a>=2198&&a<3046){
							f2.style.background="#ff5001";
							f2.style.color="#fff";
							f2.style.border="#ff5001";
							f6.style.display="block"
						}else{	f2.style.color="#ff3a5f";}
						if(a>=3046&&a<3824){
							f3.style.background="#ff5001";
							f3.style.color="#fff";
							f3.style.border="#ff5001";
							f6.style.display="block"
						}else{	f3.style.color="#28abff";}
						if(a>=3824&&a<5050){
							f4.style.background="#ff5001";
							f4.style.border="#ff5001";
							f4.style.color="#fff";
							f6.style.display="block"
						}else{f4.style.color="#31ba98";}
						if(a>=5050){
							f5.style.background="#ff5001";
							f5.style.color="#fff";
							f6.style.display="block"
						}else{f5.style.color="#ff2712";}
					}else{
						aside.style.top=470+"px";
						f6.style.display="none"
						sech.style.display="none"
					}		
				}
			
				var timer=null;
					f1.onclick=function(){
						scrollMove(1176)
					}
					f2.onclick=function(){
						scrollMove(2198)
					}
					f3.onclick=function(){
						scrollMove(3046)
					}
					f4.onclick=function(){
						scrollMove(3824)
					}
					f5.onclick=function(){
						scrollMove(5050)
					}
					f6.onclick=function(){
						scrollMove(0)
					}
				function scrollMove(end){
					clearInterval(timer);
					//到达的位置与滚动轴所在位置比较
					// document.documentElement.scrollTop;
					if(document.documentElement.scrollTop>end){
						timer=setInterval(function(){
							document.documentElement.scrollTop-=20;
							if(document.documentElement.scrollTop<=end){
								clearInterval(timer);
								document.documentElement.scrollTop=end
							}
						},10)
						
					}else{
						timer=setInterval(function(){
							document.documentElement.scrollTop+=20;
							if(document.documentElement.scrollTop>=end){
								clearInterval(timer);
								document.documentElement.scrollTop=end
							}
						},10)
						
					}
				}
