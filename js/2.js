var num = 0;
			 var abtn = document.getElementsByTagName('a')
			 var aold = abtn[num];
				 aold.className ="java_first";
			 var aimg = document.getElementsByTagName('img');
			 var oldimg = aimg[num];
				 oldimg.className ="firstimg";
			 var timer;

			 for(var i=0;i<5;i++){
				 abtn[i].index = i;//ʹ�±��Ӧ
			 abtn[i].onclick = function(){
				  
				  
				  clearInterval(timer);
				  num = this.index;
				  run();
			};
		  };
		  function run(){
          aold.className = '';
          aold = abtn[num];//����aold
	      abtn[num].className ="java_first";
		  oldimg.className = '';
		  oldimg = aimg[num]; //����aimg
		  aimg[num].className = "firstimg";
		  
  };
			  timer = setInterval(function(){
				  num++;
				  if(num==5){
				  num=0;
				  };
				 run();
			  
			  },1000)
			  
			//���������ʾ���Ұ�ť
				$(".banner").hover(function(){
					$(".btn").show();
				},function(){
					$(".btn").hide();
				})
			//�����ť
				$(".left").click(function(){
				   clearInterval(timer);
				   num--;
					if(num<0){
						num=4;
				  };
				run();
			 });
			 //����Ұ�ť
				$(".right").click(function(){
					 clearInterval(timer);
					 num++;
					 if(num>4){
					 num=0;
				  };
				run();
			 });
			var kg = true;
		//�������ӿ����߹�  $ jquery����
		$("#gwc .can .canbut").click(function(){
			if(kg){
				//��
				$("#gwc").animate({right:0},500);
				kg = false;
			}else{
				//��
				$("#gwc").animate({right:"-285px"},500);
				kg = true;
			}
		});