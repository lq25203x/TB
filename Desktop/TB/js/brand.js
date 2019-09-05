var ul=document.getElementById("ul");
			var lft=document.getElementById("lft");
			var rht=document.getElementById("rht");
			var olis=document.querySelectorAll("#mj li")
			var masks=document.getElementById("mask")
			var timer=null;
			var i=0;
			autoPlay();
			masks.onmouseover=function(){
				clearInterval(timer);
				lft.style.display="block";
				rht.style.display="block";
			}
			masks.onmouseout=function(){
				autoPlay();
				lft.style.display="none";
				rht.style.display="none";
			}
			rht.onclick=function(){
				i++;
				if(i>=6){
					ul.style.left="0px";
					i=1;
				}
				movel(ul,"left",-520*i)
				pageCss();

			}
			lft.onclick=function(){
					i--;
					if(i<=-1){
						ul.style.left="-2600px";
						i=4;
					}
					movel(ul,"right",-520*i)
					pageCss();

				}
			

			// 页码事件
			for(var k=0;k<olis.length;k++){
				olis[k].index=k;
				olis[k].onclick=function(){
					if(this.index>i){
						movel(ul,"left",-520*this.index)
					}else{
					movel(ul,"right",-520*this.index)
				}
				i=this.index;	
				pageCss();
				
				}
			}
			//运动函数
			function movel(ele,dir,end){
				clearInterval(ele.timer);
				if(dir==="right"){
					ele.timer=setInterval(function(){
						ele.style.left=ul.offsetLeft+20+"px"
						if(ele.offsetLeft>=end){
							//停止定时器
							clearInterval(ele.timer);
							ele.style.left=end+"px";//强制回到对应位置
						}
					},10)
				}else{
					ele.timer=setInterval(function(){
						ele.style.left=ele.offsetLeft-20+"px"
						if(ele.offsetLeft<=end){
							//停止定时器
							clearInterval(ele.timer);
							ele.style.left=end+"px";//强制回到对应位置
						}
					},10)
				}
			}
			//页码变色
			function pageCss(){
				for(var t=0;t<olis.length;t++){
					olis[t].style.background="#fff";
				}
				olis[i===5?0:i].style.background="#ff5000"
			}
			//开启定时器
			function autoPlay(){
				timer=setInterval(function(){
					i++;
					if(i>=6){
						ul.style.left="0px";
						i=1;
					}
					movel(ul,"left",-520*i)
					pageCss();
				},3500)
			}
			var ulo=document.getElementById("ulo");
			var mask=document.getElementById("masks")
			var tm=document.getElementById("tm")
			var ob=document.getElementById("b");
			var lft_t=document.getElementById("lft_t");
			var rht_t=document.getElementById("rht_t");
			var olisi=document.querySelectorAll("#mj_j li")
			var timerr=null;
			var a=0;
			
			autoPlayY();
			mask.onmouseover=function(){
				clearInterval(timerr);
				lft_t.style.display="block";
				rht_t.style.display="block";
			}
			mask.onmouseout=function(){
				autoPlayY();
				lft_t.style.display="none";
				rht_t.style.display="none";
			}
			rht_t.onclick=function(){
				a++;
				if(a>=7){
					ulo.style.left="0px";
					a=1;
					ob.innerText=a-1;
					
				}
				console.log(ob.innerText)
				move(ulo,"left",-520*a)
				ob.innerText=Number(ob.innerText)+1	
				pageCssS();
			
			}
			lft_t.onclick=function(){
					a--;
					if(a<=-1){
						ulo.style.left="-3120px";
						a=5;
						ob.innerText=a+2;
					}
					console.log(ob.innerText)
					move(ulo,"right",-520*a)
					ob.innerText=Number(ob.innerText)-1
					if(a<=1){
							
					}
					pageCssS();
			
				}
			
				// 页码事件
			for(var b=0;b<olis.length;b++){
				olis[b].index=b;
				olis[b].onclick=function(){
					if(this.index>a){
						move(ulo,"left",-520*this.index)
					}else{
					move(ulo,"right",-520*this.index)
				}
				a=this.index;	
				pageCssS();
				}
			}
			function pageCssS(){
				for(var c=0;c<olisi.length;c++){
					olisi[c].style.background="#ff1648";
				}
				olisi[a===6?0:a].style.background="#000"		
			}
			function autoPlayY(){
				ob.innerText=1;
				timerr=setInterval(function(){
					a++;
					if(a>=7){
						ulo.style.left="0px";
						a=1;
						ob.innerText=a-1;
					}
					move(ulo,"left",-520*a)
						ob.innerText=Number(ob.innerText)+1	
					pageCssS();
				},3000)
			}
			
			function move(elt,dit,ent){
				clearInterval(timerr);
				if(dit==="right"){
					elt.timerr=setInterval(function(){
						elt.style.left=ulo.offsetLeft+20+"px"
						if(elt.offsetLeft>=ent){
							//停止定时器
							clearInterval(elt.timerr);
							elt.style.left=ent+"px";//强制回到对应位置
						}
					},10)
				}else{
					elt.timerr=setInterval(function(){
						elt.style.left=elt.offsetLeft-20+"px"
						if(elt.offsetLeft<=ent){
							//停止定时器
							clearInterval(elt.timerr);
							elt.style.left=ent+"px";//强制回到对应位置
						}
					},10)
				}
			}