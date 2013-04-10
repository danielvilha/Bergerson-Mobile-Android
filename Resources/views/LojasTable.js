var lojas_data = [];
var win = Ti.UI.currentWindow;
var data = win.lojas;

win.navBarHidden = false;

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
		backgroundGradient : {
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
		}
	});
	//alert(l.nome);
}

var table = Ti.UI.createTableView({
	backgroundImage : 'background.png',
	backgroundColor : 'transparent',
	top : 0,
	left : 0,
	right : 0,
	data : lojas_data
});

table.addEventListener("click", function(e) {

	var win = Titanium.UI.createWindow({
		backgroundImage : 'background.png',
		navBarHidden : false,
		barColor : '#111',
		url : "LojaInfo.js",
		title : e.rowData.title,
		layout : 'vertical',
		loja : e.rowData.loja
	}); 

	win.open();
});

// add table view to the window
Titanium.UI.currentWindow.add(table); 