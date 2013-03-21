var win = Titanium.UI.currentWindow;
// -------------------------------------------------------------------------------------------------------------

var vwJoia1 = Ti.UI.createView({
	backgroundImage : 'joias/01.jpeg'
});

var vwJoia2 = Ti.UI.createView({
	backgroundImage : 'joias/02.jpeg'
});

var vwJoia3 = Ti.UI.createView({
	backgroundImage : 'joias/03.jpeg'
});

var vwJoia4 = Ti.UI.createView({
	backgroundImage : 'joias/04.jpeg'
});

var vwJoia5 = Ti.UI.createView({
	backgroundImage : 'joias/05.jpeg'
	// width : '200%',
	// left : 0
});

var vwJoia6 = Ti.UI.createView({
	backgroundImage : 'joias/06.jpeg',
	// width : '200%',
	// right : 0
});

var vwJoia7 = Ti.UI.createView({
	backgroundImage : 'joias/07.jpeg'
});

var vwJoia8 = Ti.UI.createView({
	backgroundImage : 'joias/08.jpeg'
});

var vwJoia9 = Ti.UI.createView({
	backgroundImage : 'joias/09.jpeg'
});

var vwJoia10 = Ti.UI.createView({
	backgroundImage : 'joias/10.jpeg'
});

var vwJoia11 = Ti.UI.createView({
	backgroundImage : 'joias/11.jpeg'
});

var vwJoia12 = Ti.UI.createView({
	backgroundImage : 'joias/12.jpeg'
});

var vwJoia13 = Ti.UI.createView({
	backgroundImage : 'joias/13.jpeg'
});

var vwJoia14 = Ti.UI.createView({
	backgroundImage : 'joias/14.jpeg'
});

// var vwJoia15 = Ti.UI.createView({
// backgroundImage : 'joias/15.jpeg'
// });
//
// var vwJoia16 = Ti.UI.createView({
// backgroundImage : 'joias/16.jpeg'
// });

var scrollableView = Ti.UI.createScrollableView({
	views : [vwJoia1, vwJoia2, vwJoia3, vwJoia4, vwJoia5, vwJoia6, vwJoia7, vwJoia8, vwJoia9, vwJoia10, vwJoia11, vwJoia12, vwJoia13, vwJoia14],
	showPagingControl : false,
	pagingControlHeight : 30,
	maxZoomScale : 3.0,
	minZoomScale : 1.0,
	currentPage : 0,
	zIndex : 9
});

scrollableView.addEventListener('dblclick', function(e) {
	scrollableView.zoomScale = 1.0;
});

win.add(scrollableView); 