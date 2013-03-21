var win = Titanium.UI.currentWindow;

win.backgroundImage = '../views/fundo.png';

var gradient = {
	type : 'linear',
	startPoint : {
		x : '0%',
		y : '50%'
	},
	endPoint : {
		x : '100%',
		y : '50%'
	},
	colors : [{
		color : '#1E1E1E',
		offset : 0.0
	}, {
		color : '#232323',
		offset : 0.1
	}, {
		color : '#222323',
		offset : 0.85
	}, {
		color : '#383838',
		offset : 1.0
	}],
};

var data = [{
	title : 'ON THE TOP',
	hasChild : true,
	image : 'hotSpot1/1.png',
	texto : 'Localizado no rooftop do badalado hotel The James New York, o bar Jimmy foi criado pelo trio veterano da noite novaiorquina Larry Poston, Johnny Swet e David Rabin. No cruzamento entre Soho e Tribeca, o ambiente inteiramente envidraçado permite vista panorâmica e inspiradora de Manhattan. O local ainda oferece drinks modernos e tem design inspirado nos clássicos pubs dos anos 70, com toque moderno típico da cidade que nunca dorme.\n\n\n\n\n\n\n\n',
	url : 'jimmysoho.com',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
}, {
	title : 'FEELS LIKE HOME',
	hasChild : true,
	image : 'hotSpot1/2.png',
	texto : 'Inaugurado em abril, o The NoMad Hotel está localizado na esquina da Broadway com a 28th Street, num prédio secular que foi totalmente restaurado. Inspirado nos clássicos grand hotels europeus e decorado pela talentosa designer francesa Jacques Garcia, todos os quartos têm vista para a cidade de Nova York ou para o átrio. Com atmosfera residencial, ainda oferece bar, restaurante, biblioteca e uma sala com lareira.\n\n\n\n\n\n\n\n',
	url : 'thenomadhotel.com',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
}, {
	title : 'EMBALOS ELÉTRICOS',
	hasChild : true,
	image : 'hotSpot1/3.png',
	texto : 'Com inspiração inglesa e pé direito alto, o ambiente do exclusivo Electric Room nos faz esquecer que estamos numa sala de máquinas desativada embaixo do Dream Hotel. A balada do momento na Big Apple atrai um dos crowds mais interessantes da cidade, tem capacidade para apenas 100 pessoas e está localizada no agitado Meatpacking District.\n\n\n\n\n\n',
	url : 'electricroomnyc.com',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
	// }, {
	// title : '',
	// hasChild : true,
	// image : 'hotSpot1/4.jpg',
	// text : '\n\n\n\n\n\n\n\n\n\n',
	// url : '',
	// backgroundGradient : gradient,
	// font : {
	// fontSize : '16%',
	// fontFamily : 'timesnewroman'
	// },
	// color : '#EDDA74'
}];

var tableview = Titanium.UI.createTableView({
	data : data,
	backgroundImage : '../views/fundo.png',
	top : 0,
	left : 0,
	right : 0,
	style : Titanium.UI.iPhone.TableViewStyle.GROUPED
});

tableview.addEventListener('click', function(e) {

	var win = Titanium.UI.createWindow({
		title : e.rowData.title,
		font : {
			fontSize : '16%',
			fontFamily : 'timesnewroman'

		},
		backgroundColor : '#1F1E1F',
		backgroundImage : './tables/fundo.png',
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});

	var scrollView = Titanium.UI.createScrollView({
		// contentWidth : 'auto',
		// contentHeight : 'auto',
		top : 0,
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : true
	});

	var imageView = Titanium.UI.createImageView({
		backgroundImage : e.rowData.image,
		width : '100%',
		height : '40%',
		top : 0
	});

	scrollView.add(imageView);

	var label = Ti.UI.createLabel({
		horizontalWrap : true,
		text : e.rowData.texto,
		font : {
			fontSize : '18%',
			fontFamily : 'HelveticaNeue-UltraLight'
		},
		top : '42%',
		color : '#ffff',
		height : 'auto',
		width : '85%',
		textAlign : 'left'
	});

	scrollView.add(label);

	var urlButton = Ti.UI.createButton({
		title : e.rowData.url,
		font : {
			fontSize : '18%',
			fontFamily : 'timesnewroman'
		},
		color : '#EDDA74',
		height : '5%',
		backgroundImage : '../views/buttons/but_url.png',
		width : '90%',
		zIndex : 9,
		bottom : 15
	});

	urlButton.addEventListener('click', function() {
		var winWeb = Titanium.UI.createWindow({
			barColor : '#111',
			height : 'auto',
			width : 'auto'
		});

		var webView = Titanium.UI.createWebView({
			url : 'http://' + e.rowData.url
		});

		winWeb.add(webView);

		Titanium.UI.currentTab.open(winWeb, {
			animated : true
		});
	});

	scrollView.add(urlButton);
	win.add(scrollView);

});

Titanium.UI.currentWindow.add(tableview);