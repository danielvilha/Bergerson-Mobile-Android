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
	title : 'MODA DE GARAGEM',
	hasChild : true,
	image : 'hotSpot2/1.png',
	texto : 'Situada em uma antiga (e irreconhecível) garagem no Haut Marais, a loja sueca Acne Studios não tem nada de parisiense. Totalmente contemporâneo, o espaço mescla elementos industriais com o visual clean escandinavo. Os tons neutros dos carpetes contrastam com os pontos de cor da decoração. As paredes cruas de concreto servem de bancos e também displays para as modernas roupas e acessórios da marca.\n\n\n\n\n\n\n\n',
	url : 'shop.acnestudios.com',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'

}, {
	title : 'TEMPLO DIGITAL',
	hasChild : true,
	image : 'hotSpot2/2.png',
	texto : 'Inaugurado há pouco mais de um ano no local que abrigava o antigo teatro La Gaîté Lyrique, o Digital Art & Music Center é um verdadeiro templo das artes digitais. Projetado pela arquiteta Manuelle Gautrand, o centro abriga exposições, shows, debates, projeções e workshops, entre outras atividades. Com espaços inovadores, já virou must go spot da capital francesa.\n\n\n\n\n\n\n',
	url : 'gaite-lyrique.net',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
}, {
	title : 'C`EST CHARMANT!',
	hasChild : true,
	image : 'hotSpot2/3.png',
	texto : 'Supercharmoso e desconhecido pelos turistas, o restaurante Pamela Popo, localizado no Marais, é ideal para quem quer experimentar a típica gastronomia francesa longe dos lugares mais tradicionais. Os pratos são ricos em ingredientes e sabores especiais, a área interna é aconchegante e bem decorada e as mesas na calçada são perfeitas para dias de sol.\n\n\n\n\n\n\n',
	url : 'pamelapopo.fr',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
}, {
	title : 'DE OLHO NO FUTURO',
	hasChild : true,
	image : 'hotSpot2/4.png',
	texto : 'Localizado em uma pacata ruazinha no Montmartre District, o Kube Hotel é, sem dúvida, um dos mais modernos e futuristas da cidade. Tudo é fantástico: da a fachada envolta em um enorme cubo de plexiglass ao The Ice Cube by Grey Goose, bar todo de gelo. Os quartos são clean e tecnológicos, e os corredores, com uma espécie de espuma branca, transmitem um ar de ficção científica ao local.\n\n\n\n\n\n\n',
	url : 'kubehotel.com',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
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