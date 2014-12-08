'use strict';

(function () {
	var param = window.location.search;
	var startPoint = param.indexOf('?n=');
	var endPoint = param.indexOf('?', startPoint + 1);
	console.log(param, startPoint)
	var imgNumber = (endPoint = -1 ? param.substr(startPoint).substr(3) : param.substr(startPoint, endPoint).substr(3));
	$('#slideImg').attr('src', '/img/slideshow/' + imgNumber + '.jpg');
})()