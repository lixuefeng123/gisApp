$().ready(function() {
	//--------------------------------- 百度地图加载开始---------------------
	// 添加图文信息窗口
	var sContent_kongzi =
	"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>孔子</h4>" + 
	"<img style='float:right;margin:4px' id='kongzi' src='images/kongzi.jpg' width='90' height='160' title='孔子'/>" + 
	"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>孔子（前551-前479）孔子，春秋末期思想家，政治家，教育" +
	"家，儒家学派创始者。相传先后有底子三千人，其中著名的有七十余人。所著《论语》一书集中阐述了儒家思想的核心内涵—仁。一声大部分时间都是从事教育。被后世尊为至圣，" +
	"万世师表。曾修《诗》、《书》。定《礼》、《乐》，序《周易》，作《春秋》。山东省济宁市人民政府捐建2009年6月</p>" + 
	"</div>";
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(121.538, 38.876);
	var point_kongzi = new BMap.Point(121.534218, 38.875372);
	var marker_kongzi = new BMap.Marker(point_kongzi);
	var infoWindow_kongzi = new BMap.InfoWindow(sContent_kongzi);  // 创建信息窗口对象
	map.centerAndZoom(point, 16);
	map.addOverlay(marker_kongzi);
	//map.addControl(new BMap.MapTypeControl());   //添加地图类型控件         可以自定义控件

	map.setCurrentCity("大连");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	//--------------------------------地图工具配置 开始--------------------------
	marker_kongzi.addEventListener("click", function(){          
	   this.openInfoWindow(infoWindow_kongzi);
	   //图片加载完毕重绘infowindow
	   document.getElementById('kongzi').onload = function (){
		   infoWindow_kongzi.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
		   $('#yuansu',parent.document).html(infoWindow_kongzi.getContent()); 
	   }
	  
	});
	
	var sContent_zhangheng =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>张衡</h4>" + 
		"<img style='float:right;margin:4px' id='zhangheng' src='images/zhangheng.jpg' width='90' height='160' title='张衡'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>张衡（78-139）东汉科学家，" +
		"文学家。浑天说的代表人物之一，正确的解释了月食的成因。在数学、地理、绘画和文学等方面也表现出了非凡的才能和广博的学识。连云港地区校友会捐建" +
		"2009年6月</p>" + 
		"</div>";
	var point_zhangheng = new BMap.Point(121.533378, 38.873009);
	var marker_zhangheng = new BMap.Marker(point_zhangheng);
	var infoWindow_zhangheng = new BMap.InfoWindow(sContent_zhangheng);  // 创建信息窗口对象
	map.addOverlay(marker_zhangheng);
	marker_zhangheng.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_zhangheng);
		   //图片加载完毕重绘infowindow
		   document.getElementById('zhangheng').onload = function (){
			   infoWindow_zhangheng.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_zhangheng.getContent()); 
		   }
		  
		});
	
	var sContent_ajmd =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>阿基米德</h4>" + 
		"<img style='float:right;margin:4px' id='ajmd' src='images/ajmd.jpg' width='90' height='160' title='阿基米德'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>阿基米德（前287-前212）阿基米德，古希腊学者，发现" +
		"杠杆定律和阿基米德定律。著有《沙的计算》、《论球体和圆柱体》、《圆的度量》等数学和物理著作。江西地区校友会捐建2009年6月</p>" + 
		"</div>";
	var point_ajmd = new BMap.Point(121.53928, 38.879725);
	var marker_ajmd = new BMap.Marker(point_ajmd);
	var infoWindow_ajmd = new BMap.InfoWindow(sContent_ajmd);  // 创建信息窗口对象
	map.addOverlay(marker_ajmd);
	marker_ajmd.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_ajmd);
		   //图片加载完毕重绘infowindow
		   document.getElementById('ajmd').onload = function (){
			   infoWindow_ajmd.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_ajmd.getContent()); 
		   }
		  
		});
	
	var sContent_mks =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>马克思</h4>" + 
		"<img style='float:right;margin:4px' id='mks' src='images/mks.jpg' width='90' height='160' title='马克思'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>马克思（1818-1883）卡尔·马克思，马克思主义的创始人，无产阶级革" +
		"命导师。他和恩格斯共同创立的马克思主义学说是知道全世界劳动人民为实现社会主义和共产主义伟大理想和进行斗争的理论武器和行动指南。山东省交通厅捐建2009年6月</p>" + 
		"</div>";
	var point_mks = new BMap.Point(121.539613, 38.879177);
	var marker_mks = new BMap.Marker(point_mks);
	var infoWindow_mks = new BMap.InfoWindow(sContent_mks);  // 创建信息窗口对象
	map.addOverlay(marker_mks);
	marker_mks.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_mks);
		   //图片加载完毕重绘infowindow
		   document.getElementById('mks').onload = function (){
			   infoWindow_mks.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_mks.getContent()); 
		   }
		  
		});
	
	var sContent_blt =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>柏拉图</h4>" + 
		"<img style='float:right;margin:4px' id='blt' src='images/blt.jpg' width='90' height='160' title='柏拉图'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>柏拉图（前427-前347）柏拉图，古希腊哲学家。柏拉图派的创始" +
		"人。苏格拉底的底子，亚里士多德的老师。理性的训导是柏拉图教学思想的重要特色。《理想国》和《法律篇》较集中反映了他的教育说。交通94中队捐建2009年6月</p>" + 
		"</div>";
	var point_blt = new BMap.Point(121.540277, 38.874778);
	var marker_blt = new BMap.Marker(point_blt);
	var infoWindow_blt = new BMap.InfoWindow(sContent_blt);  // 创建信息窗口对象
	map.addOverlay(marker_blt);
	marker_blt.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_blt);
		   //图片加载完毕重绘infowindow
		   document.getElementById('blt').onload = function (){
			   infoWindow_blt.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_blt.getContent()); 
		   }
		  
		});
	
	var sContent_ads =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>爱迪生</h4>" + 
		"<img style='float:right;margin:4px' id='ads' src='images/ads.jpg' width='90' height='160' title='爱迪生'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>爱迪生（1847-1931）爱迪生，美国发明家和企业家。发明自动收" +
		"报机、留声机，实验改进了白炽灯和电话。在电影技术、矿业、建筑、化工、等方面也有不少著名的发明。一生共获一千多项发明专利。上海地区校友会捐建2009年6月</p>" + 
		"</div>";
	var point_ads = new BMap.Point(121.533908, 38.873037);
	var marker_ads = new BMap.Marker(point_ads);
	var infoWindow_ads = new BMap.InfoWindow(sContent_ads);  // 创建信息窗口对象
	map.addOverlay(marker_ads);
	marker_ads.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_ads);
		   //图片加载完毕重绘infowindow
		   document.getElementById('ads').onload = function (){
			   infoWindow_ads.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_ads.getContent()); 
		   }
		  
		});
	
	var sContent_zh =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>郑和</h4>" + 
		"<img style='float:right;margin:4px' id='zh' src='images/zh.jpg' width='90' height='160' title='郑和'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>郑和（1374-1433）郑和，航海家，先后率领船队其次出国。" +
		"最远到达红海海口和非洲东海岸，遍访三十多个国家和地区，为中外航海史上的壮举。天津地区校友会捐建2009年6月</p>" + 
		"</div>";
	var point_zh = new BMap.Point(121.540304, 38.875228);
	var marker_zh = new BMap.Marker(point_zh);
	var infoWindow_zh = new BMap.InfoWindow(sContent_zh);  // 创建信息窗口对象
	map.addOverlay(marker_zh);
	marker_zh.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_zh);
		   //图片加载完毕重绘infowindow
		   document.getElementById('zh').onload = function (){
			   infoWindow_zh.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_zh.getContent()); 
		   }
		  
		});
	
	var sContent_ayst =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>爱因斯坦</h4>" + 
		"<img style='float:right;margin:4px' id='ayst' src='images/ayst.jpg' width='90' height='160' title='爱因斯坦'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>爱因斯坦（1879-1956）阿尔伯特·爱因斯坦。物理学家。" +
		"生于德国。建立了狭义相对论，并在这基础上推广为广义相对论。因理论物理学方面的贡献，特别是发现光电效应定律，获1919年诺贝尔物理学奖。上海地区校友会捐建2009年6月</p>" + 
		"</div>";
	var point_ayst = new BMap.Point(121.532395, 38.873188);
	var marker_ayst = new BMap.Marker(point_ayst);
	var infoWindow_ayst = new BMap.InfoWindow(sContent_ayst);  // 创建信息窗口对象
	map.addOverlay(marker_ayst);
	marker_ayst.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_ayst);
		   //图片加载完毕重绘infowindow
		   document.getElementById('ayst').onload = function (){
			   infoWindow_ayst.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_ayst.getContent()); 
		   }
		  
		});
	
	var sContent_jlfr =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>居里夫人</h4>" + 
		"<img style='float:right;margin:4px' id='jlfr' src='images/jlfr.jpg' width='90' height='160' title='居里夫人'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>玛丽·居里（1867-1934）玛丽·居里，法国物理学家、化学家。研" +
		"究放射性现象，发现镭和钋两种放射性元素。1903年获得诺贝尔奖物理学奖及1911获得诺贝尔奖化学奖。</p>" + 
		"</div>";
	var point_jlfr = new BMap.Point(121.533899, 38.872566);
	var marker_jlfr = new BMap.Marker(point_jlfr);
	var infoWindow_jlfr = new BMap.InfoWindow(sContent_jlfr);  // 创建信息窗口对象
	map.addOverlay(marker_jlfr);
	marker_jlfr.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_jlfr);
		   //图片加载完毕重绘infowindow
		   document.getElementById('jlfr').onload = function (){
			   infoWindow_jlfr.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_jlfr.getContent()); 
		   }
		  
		});
	
	var sContent_nd =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>牛顿</h4>" + 
		"<img style='float:right;margin:4px' id='nd' src='images/nd.jpg' width='90' height='160' title='牛顿'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>牛顿（1643-1727）爱萨瓦·牛顿，英国物理学家、数学家与天文学" +
		"家。牛顿运动定律的建立者以及万有引力定律的发现者。秦始皇地区校友会捐建2009年6月</p>" + 
		"</div>";
	var point_nd = new BMap.Point(121.533306, 38.873261);
	var marker_nd = new BMap.Marker(point_nd);
	var infoWindow_nd = new BMap.InfoWindow(sContent_nd);  // 创建信息窗口对象
	map.addOverlay(marker_nd);
	marker_nd.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_nd);
		   //图片加载完毕重绘infowindow
		   document.getElementById('nd').onload = function (){
			   infoWindow_nd.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_nd.getContent()); 
		   }
		  
		});
	
	var sContent_glb =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>哥伦布</h4>" + 
		"<img style='float:right;margin:4px' id='glb' src='images/glb.jpg' width='90' height='160' title='哥伦布'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>哥伦布（1451-1506）哥伦布，意大利航海家。" +
		"相信地圆说，认为从欧洲西航可到达东方的印度和中国。先后四次出海远航证明了大地球形说的正确性。</p>" + 
		"</div>";
	var point_glb = new BMap.Point(121.538211, 38.876435);
	var marker_glb = new BMap.Marker(point_glb);
	var infoWindow_glb = new BMap.InfoWindow(sContent_glb);  // 创建信息窗口对象
	map.addOverlay(marker_glb);
	marker_glb.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_glb);
		   //图片加载完毕重绘infowindow
		   document.getElementById('glb').onload = function (){
			   infoWindow_glb.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_glb.getContent()); 
		   }
		  
		});
	
	var sContent_mzl =
		"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>麦哲伦</h4>" + 
		"<img style='float:right;margin:4px' id='mzl' src='images/mzl.jpg' width='90' height='160' title='麦哲伦'/>" + 
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>麦哲伦（1480-1521）麦哲伦，葡萄牙航海家，" +
		"先后为葡萄牙和西班牙作航海探险，从西班牙出发，绕过南美洲。发现麦哲伦海峡，然后横渡太平洋，完成第一次环绕地球的航行。江苏地区校友会捐建2009年6月</p>" + 
		"</div>";
	var point_mzl = new BMap.Point(121.5422, 38.876895);
	var marker_mzl = new BMap.Marker(point_mzl);
	var infoWindow_mzl = new BMap.InfoWindow(sContent_mzl);  // 创建信息窗口对象
	map.addOverlay(marker_mzl);
	marker_mzl.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow_mzl);
		   //图片加载完毕重绘infowindow
		   document.getElementById('mzl').onload = function (){
			   infoWindow_mzl.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   $('#yuansu',parent.document).html(infoWindow_mzl.getContent()); 
		   }
		  
		});
	hideOver();
	
	function showOver(){
		marker_kongzi.show(); 
		marker_zhangheng.show(); 
		marker_ajmd.show(); 
		marker_mks.show(); 
		marker_blt.show(); 
		marker_ads.show(); 
		marker_zh.show(); 
		marker_ayst.show(); 
		marker_jlfr.show();
		marker_nd.show(); 
		marker_glb.show(); 
		marker_mzl.show(); 
	}
	
	function hideOver(){
		marker_kongzi.hide(); 
		marker_zhangheng.hide(); 
		marker_ajmd.hide(); 
		marker_mks.hide(); 
		marker_blt.hide(); 
		marker_ads.hide(); 
		marker_zh.hide(); 
		marker_ayst.hide(); 
		marker_jlfr.hide();
		marker_nd.hide(); 
		marker_glb.hide(); 
		marker_mzl.hide(); 
	}
    /*var overlaycomplete = function(e){     //e为句柄 
				if (e.drawingMode == BMAP_DRAWING_MARKER) {
					strPoints ="经度："+ e.overlay.getPosition().lng + "；纬度："+e.overlay.getPosition().lat;
					$('#lng').html(e.overlay.getPosition().lng);      //可以添加一些控件
					$('#lat').html(e.overlay.getPosition().lat); 
					$('#dlgPoint').dialog('open');   	
				}
			};*/
			
   /* var styleOptions = {
        strokeColor:"red",    //边线颜色。
        fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
    }*/
    //实例化鼠标绘制工具
   /* var drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: true, //是否开启绘制模式
        enableDrawingTool: true, //是否显示工具栏
        drawingToolOptions: {
            offset: new BMap.Size(5, 5), //偏离值
        },
        circleOptions: styleOptions, //圆的样式
        polylineOptions: styleOptions, //线的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
    }); */ 
	 //添加鼠标绘制工具监听事件，用于获取绘制结果
   /* drawingManager.addEventListener('overlaycomplete', overlaycomplete);
    $('#dlgPoint').dialog('close');
    
    function clearMap() {
		for(var i = 0; i < overlays.length; i++){
            map.removeOverlay(overlays[i]);
        }
    
        overlays.length = 0   ;
    }*/
	
	//--------------------------------地图右键菜单 开始-------------------
/* 	var menu = new BMap.ContextMenu();
	var txtMenuItem = [
		{
			text:'放大',
			callback:function(){map.zoomIn();}
		},
		{
			text:'缩小',
			callback:function(){map.zoomOut();}
		}
	];
	for(var i=0; i < txtMenuItem.length; i++){
		menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
	}
	map.addContextMenu(menu); */
	
	//------------显示当前经纬度 开始----------------
	map.addEventListener("mousemove", function(e) {
        $('#currentLatLng',parent.document).html("鼠标当前位置:"+e.point.lng+";"+ e.point.lat); 
    });
});

