div1.onmousedown=function(e){
		var e=e||event;
		var _x=e.clientX-div1.offsetLeft;
		var _y=e.clientY-div1.offsetTop;
		document.onmousemove=function(e){
			var e=e||event;
			var x=e.clientX-_x;
			var y=e.clientY-_y;
			if(x>=J_box.offsetWidth-div1.offsetWidth){
				x=J_box.offsetWidth-div1.offsetWidth;
			}
			if(x<=0){
				x=0;
			}
			if(y>=J_box.offsetHeight-div1.offsetHeight){
				y=J_box.offsetHeight-div1.offsetHeight;
			}
			if(y<=0){
				y=0;
			}
			div1.style.left=x+'px';
			div1.style.top=y+'px';
			
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}	
	}

J_box.onmouseover=function(){
    spanOne.style.display='inline-block';
    spanOne.style.marginLeft='-80px';
}
J_box.onmouseout=function () {
    spanOne.style.display='none';
}
box.onmouseover=function(){
    spanTwo.style.display='inline-block';
    spanTwo.style.marginLeft='-60px';
}
box.onmouseout=function () {
    spanTwo.style.display='none';
}
container.onmouseover=function(){
    spanThree.style.display='inline-block';
    spanThree.style.marginLeft='-50px';
}
container.onmouseout=function () {
    spanThree.style.display='none';
}
	$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 200) {
            $('.hdkt').hide();
        } else {
            $('.hdkt').show();
        }
    })
    $('.hdkt').click(function(){
        $('body,html').animate({scrollTop:0},function(){
            return;
        })
    });
    $('.nav li a').click(function () {
        $('.nav li a').css('color','#fff');
        $(this).css('color','#fed136');
    })
})
$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() <600) {
            $('#qwer div').css('background','#fff');
        } else {
            $('#qwer div').css('background','black');
        }
    })
});

$(function() {
    $('#mobilenav ul li').click(function () {
       $(this).css('color','red').siblings().css('color','#fff')
    })
})
$(function(){
  var current = 0,interval=null;
  var interval = setInterval(increment,18);
  function increment(){
    current++;
    if(current == 100) { current = 0; }
    $('#counter').html(current+'%'); 
  };
  setTimeout(function() {
    clearInterval(interval);
    $('.wraper').remove();
    $('#cds').css({'display':'block'});
    $('.content').css({'height':'auto'});
  }, 1980);
});


  var  numss='';
    for(var i = 0;i < 10;i++){
        for(var j = 0;j<10;j++){
            numss=numss+'<div id="qwe" style="' +
                'left:'+i*20+'px;' +
                'top:'+j*20+'px;' +
                'background-position-y:'+j*-20+'px;' +
                'background-position-x:'+i*-20+'px;">' +
                '</div>';
        }
    };
    box.innerHTML=numss;
    for(var a = 0;a <qwe.length;a++){
        qwe[a].onmouseover = function(e){
            var ev=e || event;
            this.style.transform='scale(1)'
            this.style.opacity = 1;
        }
    }
    
  dd();
  function dd(){
      var divCon=document.querySelector('#container');
    divCon.onmousedown=function (e) {
        var ev= e || event;
        var divX=ev.clientX;
        var divY=ev.clientY;
        var adiv=document.createElement('div');
        adiv.style.left=divX-this.offsetLeft+'px';
        adiv.style.top=divY-this.offsetTop+'px';
        divCon.appendChild(adiv);
        var DivLef=divX-this.offsetLeft;
        var DivTop=divY-this.offsetTop;
        document.onmousemove=function (e) {
            var ev = e || event;
            var newle=ev.clientX;
            var newht=ev.clientY;
            var newdivX = ev.clientX - divX;
            var newdivY = ev.clientY - divY;
            adiv.style.border='1px dashed #ccc';
            adiv.style.height=newdivY+'px';
            adiv.style.width=newdivX+'px';
            if(newdivX<0){
                if(newdivX<-DivLef){
                    newdivX=-DivLef;
                }
                adiv.style.left=divX-divCon.offsetLeft+newdivX+'px';
                adiv.style.width=-newdivX+'px';
            }
            if(newdivY<0){
                if(newdivY<=-DivTop){
                    newdivY=-DivTop;
                }
                adiv.style.top=divY-divCon.offsetTop+newdivY+'px';
                adiv.style.height=-newdivY+'px';
            }
            if(200-(adiv.offsetLeft+adiv.offsetWidth)<=0){
                adiv.style.width=200-adiv.offsetLeft-2+'px';
            }
            if(newle>divCon.offsetWidth+divCon.offsetLeft){
                adiv.style.width=(divCon.offsetWidth-adiv.offsetLeft-4)+'px';
            }
            if(200-(adiv.offsetTop+adiv.offsetHeight)<=0){
                adiv.style.height=200-adiv.offsetTop-2+'px';
            }
            if(newht>divCon.offsetHeight+divCon.offsetTop){
                adiv.style.height=(divCon.offsetHeight-adiv.offsetTop-4)+'px';
            }
        };
        document.onmouseup=function (e) {
            adiv.style.border='1px solid #ccc';
            adiv.style.background='rgb('+parseInt(Math.random()*256)+
                ','+parseInt(Math.random()*256)+
                ','+parseInt(Math.random()*256)+')';
            adiv.style.transition='0.5s';
            document.onmousemove=document.onmouseup=null;
        }
        return false
    }
  }


   function aa(){
     var divss=document.querySelector('#container')
    var allDiv = divss.children;

    var deg = 0;
    var AllNum=0;
    divss.onclick=function () {
        divss.innerHTML='';
        for(var i=0;i<=4;i++){
            var AllDiv=document.createElement('div');
            AllDiv.style.left =i*20+'px';
            AllDiv.style.top=70+'px';
            AllDiv.innerHTML=i;
            divss.appendChild(AllDiv);
            divss.children[i].style.background='rgb('+parseInt(Math.random()*256)+'' +
                ','+parseInt(Math.random()*256)+'' +
                ','+parseInt(Math.random()*256)+')';

            if(AllNum<4) {
                if(AllNum==0){
                    if(i%2==0){
                        AllDiv.style.top='90px';
                    }
                    if(i==2){
                        AllDiv.style.top='50px';
                    }
                }else if(AllNum==1){
                    if(i==0){
                        AllDiv.style.top='50px';
                    }
                    if(i==2){
                        AllDiv.style.top='90px';
                    }
                    if(i==3){
                        AllDiv.style.top='110px';
                        AllDiv.style.left=20+'px';
                    }
                    if(i==4){
                        AllDiv.style.top='130px';
                        AllDiv.style.left ='0px';
                    }
                }else if(AllNum==2){

                    if(i%2==0){
                        AllDiv.style.top='50px';
                    }
                    if(i==2){
                        AllDiv.style.top='90px';
                    }
                }
                else if(AllNum==3){

                    if(i==0){
                        AllDiv.style.top='50px';
                        AllDiv.style.left ='40px';
                    }
                    if(i==2){
                        AllDiv.style.top='90px';
                        AllDiv.style.left ='0px';
                    }
                    if(i==3){
                        AllDiv.style.top='110px';
                        AllDiv.style.left =20+'px';
                    }
                    if(i==4){
                        AllDiv.style.top='130px';
                        AllDiv.style.left ='40px';

                    }
                }
            }else{
                AllNum=0;
                if(AllNum==0){
                    if(i%2==0){
                        AllDiv.style.top='90px';
                    }
                    if(i==2){
                        AllDiv.style.top='50px';
                    }
                }
            }
        }
        AllNum++;

    }
   }
     aa();

