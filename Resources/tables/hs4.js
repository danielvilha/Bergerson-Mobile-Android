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
	title : 'NOVO TODO DIA',
	hasChild : true,
	image : 'hotSpot4/1.png',
	texto : 'Localizado no tradicional Grand Hôtel Stockholm, o restaurante Mathias Dahlgren, do chef homônimo, busca uma nova identidade sueca. A procura se traduz em seu cardápio, inspirado no país, e no décor, assinado por Ilse Crawford. Com base em sabores naturais, o menu muda diariamente, com os melhores produtos locais e globais disponíveis no mercado.\n\n\n\n\n\n',
	url : 'mdghs.com',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
}, {
	title : 'UNCONVENTIONAL',
	hasChild : true,
	image : 'hotSpot4/2.png',
	texto : 'No Ett Hem, o hóspede se sente na casa de um amigo. Se quiser, pode ligar a tevê, passear com o cachorro ou “assaltar” a geladeira no meio da noite. O ambiente é doméstico e casual, sem perder o glamour e a estética escandinava, que preza pelo design útil e belo. Construída em 1910, a casa tem 12 quartos, além de biblioteca, cozinha, living e um aromático jardim interno, com décor assinado pelo Studio Ilse.\n\n\n\n\n\n\n',
	url : 'etthemstockholm.se',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
}, {
	title : 'NÚMERO 20',
	hasChild : true,
	image : 'hotSpot4/3.png',
	texto : 'O Frantzén/Lindeberg ganhou a vigésima posição da lista The World’s 50 Best Restaurants de 2012. O menu, criado pelos chefs Björn Frantzén e Daniel Lindeberg, é destaque da cozinha escandinava atual. Busca o encontro entre as gastronomias nórdica e asiática, com ingredientes frescos e orgânicos, muitos colhidos ali mesmo, no jardim do local.\n\n\n\n\n\n',
	url : 'frantzen-lindeberg.com',
	backgroundGradient : gradient,
	font : {
		fontSize : '16%',
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74'
}, {
	title : 'LUXO CASUAL',
	hasChild : true,
	image : 'hotSpot4/4.png',
	texto : 'Opção eco-friendly de hospedagem na capital, o hotel Skeppsholmen fica num prédio de 1699, em que parte da estrutura é proveniente de ruínas de castelos abandonados. Tombado, o edifício foi reformado, com influência da moderna arquitetura de Estocolmo, sob assinatura de Claesson Koivisto Rune. O estilo austero foi preservado em muitos detalhes, como escadarias, tijolos e pisos, que ficaram intocados.\n\n\n\n\n\n\n',
	url : 'hotelskeppsholmen.com',
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