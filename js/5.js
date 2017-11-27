var num = 0;
			 var abtn = document.getElementsByTagName('a')
			 var aold = abtn[num];
				 aold.className ="java_first";
			 var aimg = document.getElementsByTagName('img');
			 var oldimg = aimg[num];
				 oldimg.className ="firstimg";
			 var timer;

			 for(var i=0;i<5;i++){
				 abtn[i].index = i;//使下标对应
			 abtn[i].onclick = function(){
				  
				  
				  clearInterval(timer);
				  num = this.index;
				  run();
			};
		  };
		  function run(){
          aold.className = '';
          aold = abtn[num];//更新aold
	      abtn[num].className ="java_first";
		  oldimg.className = '';
		  oldimg = aimg[num]; //更新aimg
		  aimg[num].className = "firstimg";
		  
  };
			  timer = setInterval(function(){
				  num++;
				  if(num==5){
				  num=0;
				  };
				 run();
			  
			  },1000)
			  
			//鼠标移入显示左右按钮
				$(".banner").hover(function(){
					$(".btn").show();
				},function(){
					$(".btn").hide();
				})
			//点击左按钮
				$(".left").click(function(){
				   clearInterval(timer);
				   num--;
					if(num<0){
						num=4;
				  };
				run();
			 });
			 //点击右按钮
				$(".right").click(function(){
					 clearInterval(timer);
					 num++;
					 if(num>4){
					 num=0;
				  };
				run();
			 });
			var kg = true;
		//友情链接开或者关  $ jquery函数
		$("#gwc .can .canbut").click(function(){
			if(kg){
				//开
				$("#gwc").animate({right:0},500);
				kg = false;
			}else{
				//关
				$("#gwc").animate({right:"-285px"},500);
				kg = true;
			}
		});