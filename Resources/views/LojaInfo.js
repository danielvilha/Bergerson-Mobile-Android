var win = Ti.UI.currentWindow;
var loja = win.loja;

win.backgroundImage = '../views/fundo.png';

var nome = Ti.UI.createLabel({
	color : '#EDDA74',
	text : loja.nome,
	font : {
		fontSize : '28%',
		fontFamily : 'timesnewroman'
	},
	textAlign : 'center',
	top : '10%',
	width : 'auto'
})

var endereco = Ti.UI.createLabel({
	color : '#EDDA74',
	text : loja.endereco,
	font : {
		fontSize : '22%',
		fontFamily : 'timesnewroman'
	},
	textAlign : 'center',
	top : '10%',
	width : 'auto'
})

var telefone = Ti.UI.createLabel({
	color : '#EDDA74',
	text : loja.telefone,
	font : {
		fontSize : '22%',
		fontFamily : 'timesnewroman'
	},
	textAlign : 'center',
	top : '10%',
	width : 'auto'
})

var mapa = Titanium.UI.createButton({
	color : 'black',
	title : 'VER NO MAPA',
	color : '#3F3F3F',
	font : {
		fontSize : '20%',
		fontFamily : 'timesnewroman'
	},
	backgroundImage : 'buttons/buttonMap.png',
	top : '15%',
	height : '14%',
	width : '34%'
});

mapa.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		navBarHidden : false,
		url : "LojaMapa.js",
		title : loja.nome,
		loja : loja
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

win.add(nome);
win.add(endereco);
win.add(telefone);
win.add(mapa); 