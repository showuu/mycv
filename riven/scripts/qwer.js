function showPic(whichpic) {
	if(!document.getElementById("placeholder"))
		return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);

	if(!document.getElementById("description"))
		return false;
	if(whichpic.getAttribute("title"))
		var text = whichpic.getAttribute("title");
	else
		var text = "";

	var description = document.getElementById("description");
	if(description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue = text;
	}
	return false;
}

function preparePlaceholder() {
	if(!document.createElement)
		return false;
	if(!document.createTextNode)
		return false;
	if(!document.getElementById)
		return false;
	if(!document.getElementById("qwergallery"))
		return false;

	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.gif");
	placeholder.setAttribute("alt", "hero's qwergallery");
	
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("请点击技能图片查看详细介绍");
	description.appendChild(desctext);
	var gallery = document.getElementById("qwergallery");
	insertAfter(description, gallery);
	insertAfter(placeholder, description);
}

function prepareGallery() {
	if(!document.getElementById)
		return false;
	if(!document.getElementsByTagName)
		return false;
	if(!document.getElementById("qwergallery"))
		return false;
	var gallery = document.getElementById("qwergallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this);
		}
	}
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);