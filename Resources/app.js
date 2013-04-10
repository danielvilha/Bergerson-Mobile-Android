Titanium.UI.setBackgroundColor('#0000');

//Criamos a Tab Bar (nome no iPhone), ou Tab Group (nome no Titanium)
var tabGroup = Titanium.UI.createTabGroup();

//---------------------------------------------------winRadio Inicio-------------------------------------------
var winRadio = Titanium.UI.createWindow({
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	backgroundImage : 'views/background.png',
	url : 'views/winRadio.js'
});
var tabRadio = Titanium.UI.createTab({
	icon : 'iconradio.png',
	title : 'Rádio',
	window : winRadio
});

//---------------------------------------------------winJoias Inicio-------------------------------------------
var winJoias = Titanium.UI.createWindow({
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	url : 'views/winJoias.js'
});
var tabJoias = Titanium.UI.createTab({
	icon : 'diamond.png',
	title : 'Joias',
	window : winJoias
});

//---------------------------------------------------winHspot Inicio-------------------------------------------
var winHspot = Titanium.UI.createWindow({
	title : 'Hot Spot',
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	url : 'views/winHspot.js'
});
var tabHspot = Titanium.UI.createTab({
	icon : 'fireNew.png',
	title : 'Hot Spot',
	window : winHspot
});

//---------------------------------------------------winMapa Inicio--------------------------------------------
var winMapas = Titanium.UI.createWindow({
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	url : 'views/winMapa.js'
});
var tabMapas = Titanium.UI.createTab({
	icon : 'map.png',
	title : 'Nossas Lojas',
	window : winMapas
});

//Adicionamos as abas no tabGroup

tabGroup.addTab(tabRadio);
tabGroup.addTab(tabJoias);
tabGroup.addTab(tabHspot);
tabGroup.addTab(tabMapas);
//Abrimos o tabGroup
tabGroup.open();