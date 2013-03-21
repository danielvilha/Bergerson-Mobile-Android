var lojas_data = [];
var win = Ti.UI.currentWindow;
var data = win.lojas;

for (var i in data) {
	var l = data[i];
	lojas_data.push({
		title : l.nome,
		loja : l,
		color : '#EDDA74',
		font : {
			fontSize : '20%',
			fontFamily : 'timesnewroman'
		},
		hasChild : true,
	});
	//alert(l.nome);
}

var table = Ti.UI.createTableView({
	backgroundImage : 'fundo.png',
	top : 0,
	left : 0,
	right : 0,
	data : lojas_data
});

table.addEventListener("click", function(e) {

	var win = Titanium.UI.createWindow({
		backgroundImage : 'views/fundo.png',
		navBarHidden : false,
		barColor : '#111',
		url : "LojaInfo.js",
		title : e.rowData.title,
		layout : 'vertical',
		loja : e.rowData.loja
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

// add table view to the window
Titanium.UI.currentWindow.add(table);
