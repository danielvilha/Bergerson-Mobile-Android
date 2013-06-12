function WindowHotspot() {
    var self = Ti.UI.createWindow({
        title : 'Hot Spot',
        navBarHidden : true,
        orientationModes : [Ti.UI.PORTRAIT],
    });

    var HSpot = require('/ui/baseui/hotSpot');

    var data = [];
    var hsButton = [];

    var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "/ui/control/hotspot.json");

    if (file.exists()) {
        var json = file.read();
        var d = JSON.parse(json);
        json = null;
        data = d.hotspot;
    }

    var cont = 0;

    for (var i = 0, s = data.length; i < s; i++) {

        var hotSpotButton = Ti.UI.createButton({
            top : cont + '%',
            height : '25%',
            width : '100%',
            backgroundImage : '/images/button/' + data[i].cidades[0].button,
            index : i
        });

        cont += 25;
        self.add(hotSpotButton);
        hsButton.push(hotSpotButton);

        hsButton[i].addEventListener('click', function(e) {
            var i = e.source.index;

            var hotSpot = new HSpot(data[i].cidades[0]);

            var htButton = Titanium.UI.createButton({
                title : 'Voltar ao Hot Spot',
                backgroundImage : '/images/button/but_RadioOff.png',
                color : '#EDDA74',
                font : {
                    fontSize : '22%',
                    fontFamily : 'timesnewroman'
                },
                bottom : 40,
                right : 40,
                height : '10%',
                width : '45%',
                zIndex : 9
            });
            
            htButton.addEventListener('click', function() {
                self.remove(hotSpot);
                self.remove(htButton);
            });
            
            self.add(hotSpot);
            self.add(htButton);
        });
    }

    return self;
};

module.exports = WindowHotspot;
