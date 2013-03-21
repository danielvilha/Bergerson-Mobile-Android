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
	title : 'SABOR COLOSSAL',
	hasChild : true,
	image : 'hotSpot3/1.png',
	texto : 'No rooftop do hotel Palazzo Manfredi, o restaurante Aroma é um convite aos sentidos. A vista para o maior símbolo da cidade, o Coliseu, é incrível. Assim também é o menu degustação de cozinha regional, assinado pelo chef Giuseppe di Iorio, jovem talento italiano.\n\n\n\n\n',
	url : 'aromarestaurant.it',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'

}, {
	title : 'LA MIGLIORE',
	hasChild : true,
	image : 'hotSpot3/2.png',
	texto : 'Em seu passeio pela luxuosa Via dei Condotti, aproveite para visitar o número 24 e mergulhar no universo refinado da grife Loro Piana, conhecida por produzir artigos com os melhores tecidos disponíveis no mercado. A grife eleva o “made in Italy” a outro patamar, com matérias-primas como lã de merino ou alpaca, baby cashmere e até tecido de flor de lótus.\n\n\n\n\n\n\n',
	url : 'loropiana.com',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
}, {
	title : 'RELÍQUIA ROMANA',
	hasChild : true,
	image : 'hotSpot3/3.png',
	texto : 'O Relais & Châteaux La Posta Vecchia está instalado numa antiga casa, construída em 1640, sobre as ruínas de uma antiga vila romana. São 19 quartos, um panorama surpreendente do mar Tirreno, spa refinado e o restaurante The Cesar, uma estrela no Guia Michelin. A 40 minutos do centro de Roma, vale a visita ou a estadia.\n\n\n\n\n\n',
	url : 'lapostavecchia.com',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
	// }, {
	// title : '',
	// hasChild : true,
	// image : 'hotSpot3/4.jpg',
	// texto : '\n\n\n\n\n\n\n\n\n\n',
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
		backgroundImage : './tables/fundo.png',
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});

	var scrollView = Titanium.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
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