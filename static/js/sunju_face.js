window.onload = function(){var imgs = document.getElementsByTagName("img"),imgs_len = imgs.length;for (var i = 0;i < imgs_len;i++){var src = imgs[i].src.split("##SJ##");if(typeof(src[1]) == "string"){if(src[1]){imgs[i].src = src[0];imgs[i].className = imgs[i].className ? imgs[i].className + " sunju_face":"sunju_face";var imgcopy = imgs[i].cloneNode(true);var w1 = imgs[i].width,w0 = w1 * 7 / 4,w2 = w1 * 3 / 8;var parent = document.createElement("div");parent.className = "sunju_facemall_main";parent.setAttribute("style","width:"+ w1 + "px;height:"+ w1 + "px");parent.appendChild(imgcopy);var img = document.createElement("img");img.className = "sunju_facemall";img.src = src[1];img.setAttribute("style","display:block;width:" + w0 + "px;height:" + w0 + "px;left:-" + w2 + "px;top:-" + w2 + "px;");parent.appendChild(img);imgs[i].parentNode.replaceChild(parent,imgs[i]);}}else if(imgs[i].className == "sunju_facemall"){var pp = imgs[i].parentNode,w1 = pp.firstChild.width,w0 = w1 * 7 / 4,w2 = w1 * 3 / 8;pp.setAttribute("style","width:"+ w1 + "px;height:"+ w1 + "px");imgs[i].setAttribute("style","display:block;width:" + w0 + "px;height:" + w0 + "px;left:-" + w2 + "px;top:-" + w2 + "px;");pp.firstChild.className = pp.firstChild.className ? pp.firstChild.className + " sunju_face":"sunju_face";}}};
