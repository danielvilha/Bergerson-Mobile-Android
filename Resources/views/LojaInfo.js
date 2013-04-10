var win = Ti.UI.currentWindow;
var loja = win.loja;

win.navBarHidden = false;

var nome = Ti.UI.createLabel({
	color : '#EDDA74',
	text : loja.nome,
	font : {
		fontSize : '28%',
		fontFamily : 'timesnewroman'
	},
	textAlign : 'center',
	top : 30,
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
});

var btFone = Titanium.UI.createButton({
	title : 'Clique aqui para entrar em contato',
	backgroundImage : 'button/but_RadioOff.png',
	font : {
		fontSize : 22,
		fontFamily : 'timesnewroman'
	},
	color : '#EDDA74',
	height : 65,
	top : '12%',
	//zIndex : 8,
	width : '65%'
});

btFone.addEventListener('click', function(e) {
	var confirmCall = Titanium.UI.createAlertDialog({
		message : '\nVocê gostaria de fazer esta ligação?\n',
		buttonNames : ['Sim', 'Não']
	});
	confirmCall.show();
	confirmCall.addEventListener('click', function(event) {
		if (event.index == 0) {
			call();
		}
	});
	// console.log(loja.fone);
});

function call() {
	Titanium.Platform.openURL('tel:' + loja.fone);
}

var mapa = Titanium.UI.createButton({
	color : '#EDDA74',
	title : 'Ver no Mapa',
	font : {
		fontSize : '22%',
		fontFamily : 'timesnewroman'
	},
	backgroundImage : 'button/but_Map.png',
	top : '15%',
	height : '10%',
	width : '45%'
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
win.add(btFone);
win.add(mapa);

//--------------------------------------------------------------------------------