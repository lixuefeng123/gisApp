<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>校园雕塑信息查询首页</title>
	<link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css">
	<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css">
	<link rel="stylesheet" type="text/css" href="easyui/demo/demo.css">
	<script type="text/javascript" src="easyui/jquery.min.js"></script>
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript">
	   //----------地图元树相关功能 开始-------------
	   function collapseAll(){
			$('#tt').tree('collapseAll');
		}
		function expandAll(){
			$('#tt').tree('expandAll');
		}
		//快速定位
		function expandTo(){
			var node = $('#tt').tree('find',113);
			$('#tt').tree('expandTo', node.target).tree('select', node.target);
		}
		//得到所有已选地图元素
		/* function getSelected(){
            var nodes = $('#tt').tree('getChecked');
            var s = '';
            for(var i=0; i<nodes.length; i++){
                if (s != '') s += ',';
                s += nodes[i].text;
            }
            alert(s);
		} */
		function getSelected(){
			var htmcodes="<table border='0'>";
            var nodes = $('#tt').tree('getChecked');
            hide();
            $('#yuansu').html("");
            $.getJSON("jsondata/sample.geojson",function(data){ 
     	 	 // alert(data.features[1].geometry.coordinates);
     	 	 for(var i=0; i<nodes.length; i++){
     	 	 	$(data.features).each(function(index){
     	 	 		if(data.features[index].properties.name==nodes[i].text){//名字相同
     	 	 			document.getElementById('mapFrame').contentWindow.markers[index].show();
     	 	 			htmcodes+=
     	 	 			  "<tr>"+
     	 	 			    "<td><h4 style='margin:0 0 5px 0;padding:0.2em 0'>"+data.features[index].properties.name+"</h4></td>"+
     	 	 			    "<td><img style='float:right;margin:4px' src="+data.features[index].properties.url+" width='90' height='160'/></td>"+
     	 	 			    "<td><p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+data.features[index].properties.content+"</p></td>"+
     	 	 			  "</tr>";
     	 	 		}
     	 	 	});
     	 	 }
     	 	 htmcodes+="</table>";
     	 	 $('#yuansu').html(htmcodes);

     	  });
            // alert(data.features[2].geometry.type);
		}
		
		 function show(){
		next.window.showOver();
		}
		function hide(){
			next.window.hideOver();
		}
		
		
		//----treeData-----地图元树相关功能 结束-------------
     $(document).ready(function () {
     	$("#mapFrame").attr("src", "baidu.jsp");
     	//加载元素树数据
     	 $.getJSON("jsondata/tree_data2.json",function(treeData){    	  
     	   $.getJSON("jsondata/sample.geojson",function(data){ 
     	 	 $(data.features).each(function(index) {
     	 	 	if(data.features[index].geometry.type=="Point"){
     	 	 	   var children = {
					  "id":data.features[index].properties.id,
			          "text":data.features[index].properties.name
					};
					treeData[0].children[0].children.push(children);			
     	 	 	}
     	 	 	$("#tt").tree({data: treeData});
     	 	 });
     	  });
     	  });
     	
     	
     });
     
      function hideDataTab()
	 {
		 $('#centerLayout').layout('collapse','south');
	 }
     function showdongshan()
     {	
     	hide();
     	$(window.parent.document).contents().find("#mapFrame")[0].contentWindow.dshowOver();
     }
     function showxishan()
     {
     	hide();
     	$(window.parent.document).contents().find("#mapFrame")[0].contentWindow.xshowOver();
     }
     function hide()
     {
     	$(window.parent.document).contents().find("#mapFrame")[0].contentWindow.hideOver();
     }
      function lujing()
     {
     	$(window.parent.document).contents().find("#mapFrame")[0].contentWindow.lujing();
     }
     function xianshi()
     {
     	$(window.parent.document).contents().find("#mapFrame")[0].contentWindow.xianshi();
     }
     function clearfgw(){
     	//alert("index调用clearfgw");
     	$(window.parent.document).contents().find("#mapFrame")[0].contentWindow.clearMap();
     	//alert("index调用了baidu内clearMap");
     }
     function getSelectedValue() 
	{ 
   		 var point = document.getElementById("zd"); 
   		 var selected = point.options[point.selectedIndex].innerText; 
   		 return selected;
	} 
	function getqSelectedValue() 
	{ 
   		 var point = document.getElementById("qd"); 
   		 var qselected = point.options[point.selectedIndex].innerText; 
   		 return qselected;
	}
	</script>
</head>
<body class="easyui-layout">
	<div data-options="region:'north',border:false" style="height:60px;background:#B3DFDA;padding:10px">
           	<h1><p align="center">校园雕塑位置及浏览路径信息查询</h1> 
    </div>
    <div data-options="region:'south',border:false" style="height:20px;background:#dcf095;padding:0px;">
                           <table><tr><td id="currentLatLng"></td></tr></table> 
    </div>
	<div data-options="region:'west',split:true" style="width:230px">
	 <div id="funTab" class="easyui-tabs" data-options="fit:true,border:false,plain:true">
	 	<div id="zb1" title="东山西山" style="padding:3px">
			<p>
			<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-point',size:'large',iconAlign:'top'" onclick="showdongshan()">显示东山雕塑</a>
			<p>
			<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-point',size:'large',iconAlign:'top'" onclick="showxishan()">显示西山雕塑</a>
			<p>
			<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-point',size:'large',iconAlign:'top'" onclick="hide()">隐藏所有雕塑</a>
			<p>
			<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-clear',size:'large',iconAlign:'top'" onclick="clearfgw()">清除所有覆盖</a>
	 	</div>
	 	<div id="zb2" title="单个雕塑" style="padding:3px">
			<a href="#" class="easyui-linkbutton" onclick="collapseAll()">收起</a>
			<a href="#" class="easyui-linkbutton" onclick="expandAll()">展开</a>
			<a href="#" class="easyui-linkbutton" onclick="getSelected()">显示</a>
	 		<ul id="tt" class="easyui-tree" data-options="method:'get',animate:true,checkbox:true"></ul>
	 	</div>
	 	<div id="zb3" title="游览路径" style="padding:3px">
			<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search',size:'large',iconAlign:'top'" onclick="lujing()">查询雕塑浏览路径</a>
			<div id="qpoint">
			<p>请输入起点
				<select name="point" id="qd">  
				<option value="0">——请选择——</option> 
				<option value="1">哥伦布塑像</option>  
				<option value="2">爱因斯坦</option>  
				<option value="3">牛顿雕像</option>  
				<option value="4">爱迪生雕像</option>  
				<option value="5">张衡</option>  
				<option value="6">郑和</option>  
				<option value="7">柏拉图</option>  
				<option value="8">马克思雕像</option>  
				<option value="8">毕昇</option>  
				</select> 
			</div>
			<div id="zpoint">
			<p>请输入终点
				<select name="point" id="zd">  
				<option value="0">——请选择——</option> 
				<option value="1">哥伦布塑像</option>  
				<option value="2">爱因斯坦</option>  
				<option value="3">牛顿雕像</option>  
				<option value="4">爱迪生雕像</option>  
				<option value="5">张衡</option>  
				<option value="6">郑和</option>  
				<option value="7">柏拉图</option>  
				<option value="8">马克思雕像</option>  
				<option value="8">毕昇</option>  
				</select> 
			</div>
			<img alt="" src="">
	 	</div>
	 	</div>
	</div>
	
	<div data-options="region:'center'">
	     <div id="centerLayout" class="easyui-layout" data-options="fit:true">
			 <div data-options="region:'center',border:true,title:'地图'">
			      <iframe id="mapFrame" name="next" scrolling="no" frameborder="0"  src="baidu.jsp" style="width:100%;height:100%;"></iframe>
			 </div>
			 
	         <div data-options="region:'south',split:true,border:true" style="height:200px">
	         	 <div id="dataTab" class="easyui-tabs" data-options="fit:true,border:false,plain:true,tools:'#tab-tools'">
	         	     <div id="yuansu" title="元素数据" style="padding:3px"></div>
	         	     <div id="daohang" title="导航数据" style="padding:3px" onclick="xianshi()"></div>
	         	</div>
	         </div>
	    </div>
	 </div>
	
	   <div id="tab-tools">
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-remove'" onclick="hideDataTab()"></a>
		</div>
</body>
</html>