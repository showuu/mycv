function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function") 
		window.onload = func;
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

function moveElement(elementID, final_x, final_y, interval) {
	if(!document.getElementById) 
		return false;
	if(!document.getElementById(elementID)) 
		return false;

	var elem = document.getElementById(elementID);
	if(elem.movement) {
		clearTimeout(elem.movement);
	}

	if(!elem.style.left) 
		elem.style.left = "0px";
	if(!elem.style.top) 
		elem.style.top = "0px";

	var xpos = parseInt(elem.style.left);
  	var ypos = parseInt(elem.style.top);

  	if (xpos == final_x && ypos == final_y) 
  		return true;
  	if (xpos < final_x) {
    	var dist = Math.ceil((final_x - xpos)/10);
    	xpos += dist;
  	}
  	if (xpos > final_x) {
    	var dist = Math.ceil((xpos - final_x)/10);
    	xpos -= dist;
  	}
  	if (ypos < final_y) {
    	var dist = Math.ceil((final_y - ypos)/10);
    	ypos += dist;
  	}
  	if (ypos > final_y) {
    	var dist = Math.ceil((ypos - final_y)/10);
    	ypos -= dist;
  	}
  	elem.style.left = xpos + "px";
  	elem.style.top = ypos + "px";

  	var repeat = "moveElement('" 
  		+ elementID 
  		+ "'," 
  		+ final_x 
  		+ "," 
  		+ final_y 
  		+ "," 
  		+ interval 
  		+ ")";
  	elem.movement = setTimeout(repeat, interval);
} 

function prepareSlideshow() {
  	if (!document.getElementsByTagName) 
      return false;
    if (!document.getElementById) 
      return false;
    if (!document.getElementById("nav")) 
      return false;

  	var nav = document.getElementById("nav");
  	var slideshow = document.createElement("div");
  	slideshow.setAttribute("id", "slideshow");

  	var preview = document.createElement("img");
  	preview.setAttribute("src", "images/slideshow.gif");
  	preview.setAttribute("alt", "a glimpse of what I have learnt");
  	preview.setAttribute("id", "preview");
  	slideshow.appendChild(preview);
  	
    var details = document.createElement("div");
    details.setAttribute("id", "details");

  	var detailList = document.createElement("ul");
    var item_1= document.createElement("li");
    var item_2 = document.createElement("li");
    var item_3 = document.createElement("li");
    var item_1_text = document.createTextNode("熟练掌握HTML语言，了解HTML发展历史");
    var item_2_text = document.createTextNode("能够书写符合W3C标准的XHTML页面和语义化的代码");
    var item_3_text = document.createTextNode("了解HTML5新标签语义并对canvas画图有简单学习和实践");

    item_1.appendChild(item_1_text);
    item_2.appendChild(item_2_text);
    item_3.appendChild(item_3_text);
    detailList.appendChild(item_1);
    detailList.appendChild(item_2);
    detailList.appendChild(item_3);
    details.appendChild(detailList);

  	insertAfter(slideshow, nav);
  	insertAfter(details, slideshow);

  	var lists = nav.getElementsByTagName("li");

  	for (var i = 0; i < lists.length; i++) {
      lists[i].onmouseover = function() {
        var listvalue = this.innerHTML;
 			  if (listvalue == "HTML") {
      			moveElement("preview", 0, 0, 5); 
            item_1.innerHTML = "熟练掌握HTML语言，了解HTML发展历史";
            item_2.innerHTML = "能够书写符合W3C标准的XHTML页面和语义化的代码";
            item_3.innerHTML = "了解HTML5新标签语义并对canvas画图有简单学习和实践";
 			}
 			
  		  if (listvalue == "CSS") {
      			moveElement("preview", -150, 0, 5);
            item_1.innerHTML = "熟悉DIV+CSS布局和盒子模型";
            item_2.innerHTML = "能够运用CSS选择器和伪类技术编写样式文件";
            item_3.innerHTML = "对CSS3新增属性和设计效果有简单了解";
  		}
	
  		if (listvalue == "AngularJS") {
  			moveElement("preview", -300, 0, 5);
        item_1.innerHTML = "掌握AngularJS指令、表达式、控制器、过滤器等基本语法规则";
        item_2.innerHTML = "理解MVC设计模式、数据双向绑定、依赖注入等基础概念";
        item_3.innerHTML = "熟悉AngularJS框架构建CRUD应用，有过简单的实际小项目";
  		}

  		if (listvalue == "Bootstrap") {
				moveElement("preview", -450, 0, 5);
        item_1.innerHTML = "掌握网格布局及容器布局系统";
        item_2.innerHTML = "熟悉Bootstrap前端框架内置布局组件及插件的应用";
        item_3.innerHTML = "理解Bootstrap对于响应式网站设计的意义";
  		}

  		if (listvalue == "JavaScript") {
  			moveElement("preview", -600, 0, 5);
        item_1.innerHTML = "掌握JavaScript语言，能够运用DOM、AJAX技术进行脚本编写";
        item_2.innerHTML = "熟练使用浏览器开发者工具对代码进行调试、纠错和优化";
        item_3.innerHTML = "理解并掌握模块化、面向对象的设计思想";
  		}

  		if(listvalue == "jQuery") {
  			moveElement("preview", -750, 0, 5);
        item_1.innerHTML = "熟悉jQuery基本语法规则";
        item_2.innerHTML = "了解jQuery中事件触发与DOM操作在原生JS中语法的相应实现";
        item_3.innerHTML = "能够用jQuery库结合相关技术进行开发";
  		}
}
  }
}

addLoadEvent(prepareSlideshow);	
