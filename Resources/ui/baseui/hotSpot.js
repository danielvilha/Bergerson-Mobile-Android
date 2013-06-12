function hotSpot(data) {
    var self = Ti.UI.createView({
        title : data.cidade,
        color : '#EDDA74',
        font : {
            fontSize : 16,
            fontFamily : 'timesnewroman'
        },
        backgroundImage : '/images/background/background.png'
    });

    //----------------------------------------------------------------------------------------

    var tableview = Titanium.UI.createTableView({
        data : data.data,
        backgroundImage : '/images/background/background.png',
        top : 0,
        left : 0,
        right : 0
    });
    
    //------------------------------------------------------------------------------------------------------------------------------------------------------

    tableview.addEventListener('click', function(e) {

        var win = Titanium.UI.createWindow({
            title : e.rowData.titulo,
            navBarHidden : false,
            backgroundImage : '/images/background/background.png'
        });

        win.open({
            animated : true
        });

        var scrollView = Titanium.UI.createScrollView({
            backgroundImage : '/images/background/background.png',
            width : 'auto',
            height : 'auto',
            top : 0,
            showVerticalScrollIndicator : true
        });

        var imageView = Titanium.UI.createImageView({
            backgroundImage : '/images/hotSpot/' + e.rowData.image,
            width : '100%',
            height : '36%',
            top : 0
        });

        scrollView.add(imageView);

        var label = Ti.UI.createLabel({
            // horizontalWrap : true,
            text : e.rowData.texto,
            font : {
                fontSize : '28%',
                fontFamily : 'helveticaultralt'
            },
            top : '41%',
            color : '#ffff',
            height : 'auto',
            width : '95%',
            textAlign : 'left'
        });

        scrollView.add(label);

        var urlButton = Ti.UI.createButton({
            title : e.rowData.url,
            font : {
                fontSize : 20,
                fontFamily : 'timesnewroman'
            },
            color : '#EDDA74',
            height : 40,
            backgroundImage : '/images/button/but_url.png',
            width : '85%',
            zIndex : 9,
            bottom : 10
            // top : '110%'
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

            winWeb.open({
                animated : true
            });
        });

        scrollView.add(urlButton);
        win.add(scrollView);
    });

    self.add(tableview);

    return self;
}

module.exports = hotSpot;
