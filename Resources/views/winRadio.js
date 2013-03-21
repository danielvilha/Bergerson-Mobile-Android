
var win = Titanium.UI.currentWindow;
//---------------------------------------ACTIVITY INDICATOR---------------------------------------------
var actInd = Titanium.UI.createActivityIndicator({
	zIndex : 9,
	height : 'auto',
	width : 'auto',
	message : 'Buscando rede...'
});

function indAudio() {
	if (audioPlayer.BUFFERING < 0 && audioPlayer.STATE_WAITING_FOR_DATA) {
		actInd.show();
	} else {
		actInd.hide();
	}

	//console.log(audioPlayer.STATE_WAITING_FOR_DATA);
}

var loopIndicator;

win.add(actInd);

//---------------------------------------------PLAUSE---------------------------------------------------
var pauseResumeButton = Titanium.UI.createButton({
	backgroundImage : 'buttons/but_Play.png',
	enabled : false,
	height : '10%',
	left : '9%',
	top : '85%',
	width : '15%'
});

win.add(pauseResumeButton);

pauseResumeButton.addEventListener('click', function() {
	if (audioPlayer.paused) {
		pauseResumeButton.backgroundImage = 'buttons/but_Pause.png';
		audioPlayer.start();
	} else {
		pauseResumeButton.backgroundImage = 'buttons/but_Play.png';
		audioPlayer.pause();
	}
});

//---------------------------------------------VOLUME---------------------------------------------------
var volumeSlider = Ti.UI.createSlider({
	left : '35%',
	right : '17%',
	top : '88.4%',
	value : 100,
	min : 0,
	max : 100,
	zIndex : 9
});

win.add(volumeSlider);

volumeSlider.addEventListener('change', function(e) {
	audioPlayer.volume = e.value / 100
});

//--------------------------------------------PLAYER----------------------------------------------------
var button = ['LOUNGE', 'ROCK', 'MPB', 'POP'];
var startStopButton = [];
var cont = 20;

var urlStream = ['http://200.195.168.12:9191', 'http://200.195.168.12:9292', 'http://200.195.168.12:9393', 'http://200.195.168.12:9494'];

var audioPlayer = Ti.Media.createAudioPlayer({
	url : urlStream[0],
	allowBackground : true
});

for (var i = 0, s = button.length; i < s; i++) {
	var objectButton = Ti.UI.createButton({
		title : button[i],
		backgroundImage : 'buttons/but_RadioOff.png',
		selectedColor : '#EDDA74',
		height : '14%',
		center : '50%',
		top : cont + '%',
		font : {
			fontSize : '22%',
			fontFamily : 'timesnewroman'
		},
		color : '#EDDA74',
		width : '85%'
	});

	cont += 15;
	win.add(objectButton);
	startStopButton.push(objectButton);
	startStopButton[i].urlStream = urlStream[i];
	startStopButton[i].addEventListener('click', function(e) {
		if (Ti.Network.online == false) {
			alert('Está aplicação necessita de uma conexão Internet para funcionar: Favor verefique sua conexão.');
		} else {
			for (var i = 0, s = startStopButton.length; i < s; i++) {
				startStopButton[i].backgroundImage = 'buttons/but_RadioOff.png';
			}
			if (audioPlayer.playing || audioPlayer.paused) {
				if (audioPlayer.url == e.source.urlStream) {
					clearInterval(loopIndicator);
					audioPlayer.release();
					e.source.backgroundImage = 'buttons/but_RadioOff.png';
					pauseResumeButton.backgroundImage = 'buttons/but_Play.png';
					pauseResumeButton.enabled = false;
				} else {
					audioPlayer.release();
					audioPlayer.url = e.source.urlStream;
					e.source.backgroundImage = 'buttons/but_RadioOn.png';
					pauseResumeButton.backgroundImage = 'buttons/but_Pause.png';
					pauseResumeButton.enabled = true;
					audioPlayer.start();
				}
			} else {
				audioPlayer.url = e.source.urlStream;
				e.source.backgroundImage = 'buttons/but_RadioOn.png';
				pauseResumeButton.backgroundImage = 'buttons/but_Pause.png';
				pauseResumeButton.enabled = true;
				audioPlayer.start();
				loopIndicator = setInterval(indAudio, 100);
			}
		}
	});
}

//--------------------------------------------------------------------------------------------
win.open();