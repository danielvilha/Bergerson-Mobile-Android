function WindowLojas() {
    var self = Ti.UI.createWindow({
        navBarHidden : true,
        orientationModes : [Ti.UI.PORTRAIT],
        backgroundImage : '/images/background/background.png',
        title : 'Lojas'
    });

    var fileData = '/ui/control/dados.json';
    var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileData);
    var estados_data = [];
    var data;

    if (file.exists()) {
        var json = file.read();
        data = JSON.parse(json);
    }

    for (var i in data.estados) {

        var e = data.estados[i];

        var customLabel = Ti.UI.createLabel({
            text : '   ' + e.nome,
            color : '#FCCF47',
            font : {
                fontSize : '18%',
                fontFamily : 'timesnewroman'
            },
            backgroundColor : '#181716',
            height : 30
        });

        var estado = Ti.UI.createTableViewSection({
            headerTitle : e.nome,
            // headerView : customLabel,
            font : {
                fontSize : '18%',
                fontFamily : 'timesnewroman'
            },
        });

        for (var i in e.cidades) {
            var c = e.cidades[i];
            estado.add(Ti.UI.createTableViewRow({
                color : '#EDDA74',
                font : {
                    fontSize : '18%',
                    fontFamily : 'timesnewroman'
                },
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
                },
                title : c.nome,
                hasChild : (c.lojas.length > 0 ? true : false),
                lojas : c.lojas
            }));
        }

        estados_data.push(estado);
    }

    var btMapa = Titanium.UI.createButton({
        title : 'Localizar loja mais próxima',
        backgroundImage : '/images/button/but_RadioOff.png',
        color : '#EDDA74',
        font : {
            fontSize : '20%',
            fontFamily : 'timesnewroman'
        },
        height : '7%',
        bottom : 20,
        zIndex : 8,
        width : '80%'
    });

    self.add(btMapa);

    btMapa.addEventListener('click', function() {
        var win = Titanium.UI.createWindow({
            navBarHidden : false,
            barColor : '#111',
            url : "/ui/baseui/LojasMapa.js",
            title : 'Lojas',
            data : data
        });

        win.open();
    });

    var table = Ti.UI.createTableView({
        backgroundImage : '/images/background/background.png',
        backgroundRepeat : false,
        top : 0,
        left : 0,
        right : 0,
        font : {
            fontSize : '24%',
            fontFamily : 'timesnewroman'
        },
        data : estados_data,
        color : '#EDDA74'
    });

    table.addEventListener("click", function(e) {
        if (e.source.hasChild) {
            var win = Titanium.UI.createWindow({
                backgroundImage : '/images/background/background.png',
                navBarHidden : false,
                barColor : '#111',
                url : "/ui/baseui/LojasTable.js",
                title : e.source.title,
                lojas : e.source.lojas
            });

            win.open();
        }
    });

    // add table view to the window
    self.add(table);

    return self;
};

module.exports = WindowLojas;