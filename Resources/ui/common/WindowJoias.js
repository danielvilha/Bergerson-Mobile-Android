function WindowJoias() {
    var self = Ti.UI.createWindow({
        navBarHidden : true,
        orientationModes : [Ti.UI.PORTRAIT]
    });

    var imageContainer = [];
    var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "/ui/control/editorial.json");

    if (file.exists()) {
        var json = file.read();
        var d = JSON.parse(json);
        json = null;
        data = d.editorial;
    }

    var scrollableView = Ti.UI.createScrollableView({
        disableBounce : true,
        touchEnabled : true,
        currentPage : 0,
        height : '100%',
        width : '100%'
    });

    for (var i = 0, s = data[0].joia.length; i < s; i++) {
        imageContainer.push(Titanium.UI.createView({
            backgroundImage : '/images/joias/' + data[0].joia[i].imagem
        }));
    };
    
    scrollableView.views = imageContainer;

    var scrollView = Titanium.UI.createScrollView({
        showVerticalScrollIndicator : false,
        showHorizontalScrollIndicator : false,
        disableBounce : true
    });

    scrollView.add(scrollableView);
    self.add(scrollView);

    return self;
};

module.exports = WindowJoias;
