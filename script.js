// akarin

function akarin() {
	let akarin = document.getElementById("akarin");
	let akarinWindow = document.getElementById("window");
	let audio = new Audio('assets/akarin.mp3');

	audio.volume = 0.5;
	audio.play();
	
	if (akarin.style.display == "block") return;
	akarin.style.display = "block";
	akarinWindow.style.display = "none";

	setTimeout(function() {
		akarin.style.top = "-107px";
	}, 1300);
	setTimeout(function() {
		akarin.style.top = "245px";
	}, 3010);
	setTimeout(function() {
		akarin.style.display = "none";
		akarinWindow.style.display = "block";
	}, 4020);
}

//ayano

function door() {
	let door = document.getElementById("door");
	let audio = new Audio('assets/TOSHINOUKYOUKO.mp3');

	audio.volume = 0.8;
	audio.play();

	door.style.left = "320px";
	setTimeout(function() {
		door.style.left = "10px";
	}, 3010);
}

// tomato soundbyte

function tomato() {
	let audio = new Audio('assets/tomato.mp3');

	audio.volume = 0.5;
	audio.play();
}

// 3 contents 1 page

function page(page) {
	let content = document.getElementById("content");
	let contentx = document.getElementById("content-"+page);

	content.innerHTML = contentx.innerHTML;
}; page("home");

// mascot animation

setTimeout(function(){
	document.getElementById("mascot").style.bottom = "5px";
}, 200); 

// scrolling title

var scrl = "AAAAaaaaaAAaaAaAAAAAaaaAAAAAAaaaaAAAAAAAaaaaaAAAaAaaAaAaaaAAaaaaaజ్ఞా";
function scrollTitle() {
	scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
	document.title = scrl;
	setTimeout("scrollTitle()", 300);
}; scrollTitle();

//fuck firefox

// hue rotate command

var degree = 0
function hueCommand(newDegree){
	if (typeof InstallTrigger !== 'undefined') return; // firefox
	degree = newDegree
	document.body.style.filter = "hue-rotate("+degree+"deg)";
	document.getElementById("hueslider").value = degree;
}

// random color

function randColor() {
	hueCommand(Math.round(Math.random() * 360));
}; randColor();

// hue rotate slider

document.getElementById("hueslider").addEventListener("input", function(e) {
	document.body.style.filter = "hue-rotate("+e.srcElement.value+"deg)";
	degree = e.srcElement.value
})

// rainbow mode

// var rainbowColorActive = false;a
// var rainbowColorTimeout = null;
// function rainbowColor() {
// 	if (!rainbowColorActive) {
// 		clearTimeout(rainbowColorTimeout);
// 		return;
// 	}
// 	if (degree > 360){degree = 1};
// 	degree++;
// 	rainbowColorTimeout = setTimeout("rainbowColor()", 5);
// 	document.body.style.filter = "hue-rotate("+degree+"deg)";
// }

// window.addEventListener("keydown", function(e) {
// 	if (e.keyCode == 192) {
// 		rainbowColorActive = !rainbowColorActive;
// 		rainbowColor();
// 	}
// })

var rainbowColorActive = false;
var rainbowColorTimeout = null;
var rainbowRelatedSlider = document.getElementById("hueslider");
var rainbowStep = 0.7;

function rainbowColor() {
	if (!rainbowColorActive) {
		clearTimeout(rainbowColorTimeout);
		return;
	}
	if (degree > 360){degree = 1};
	degree = degree + rainbowStep;
	rainbowColorTimeout = setTimeout("rainbowColor()", 1);
	document.body.style.filter = "hue-rotate("+degree+"deg)";
	rainbowRelatedSlider.value = degree;
}

function rainbowSpeed(step) {rainbowStep = step;}

function rainbowToggle() {
	rainbowColorActive = !rainbowColorActive;
	rainbowColor();
}

function earthquake() {
	let page = document.getElementById("page");
	page.style.transform = ("rotate(0.3deg)");
	setTimeout(function() {
		page.style.transform = ("rotate(-0.3deg)");
	}, 20);
	setTimeout(function() {
		earthquake()
	}, 40);
}

// terminal

function terminalToggle() {
	if (terminal.parent.style.display == "none") {
			terminal.parent.style.display = "block";
			terminal.child.input.focus();
			terminal.child.input.value = "";
	}
	else {
		terminal.parent.style.display = "none";
	}
}

window.addEventListener("keyup", function(e) {
	if (e.keyCode == 192) {
		terminal.parent.style.opacity = "0";
		if (terminal.parent.style.display == "none") {
			terminal.parent.style.display = "block";
			terminal.child.input.value = "";
			terminal.child.input.focus();
			terminal.parent.style.opacity = "1";
		}
		else {
			setTimeout(function() {
				terminal.parent.style.display = "none";
			}, 300);	
		}
	}
	if (e.keyCode == 27) {
		terminal.parent.style.opacity = "0";
		setTimeout(function() {
			terminal.parent.style.display = "none";
		}, 300);	
	}
})

function terminalInput(changeInput) {
	setTimeout(function() {
		terminal.child.input.value = changeInput;
	}, 40);
}

// cookies!

var cookie = {
    get: function(key) {
        let c = document.cookie.split("; ");
        for (var i=0; i<c.length; i++) {
            let s = c[i].split("=");
            if (s[0] == key) return s[1];
        }
    },
    set: function(key, value) {
        document.cookie = key+"="+value+"; expires="+(new Date((Math.pow(2, 31)-1)*1000).toUTCString());
    },
    clear: function() {
        let c = document.cookie.split("; ");
        for (var i=0; i<c.length; i++) {
            let s = c[i].split("=");
            document.cookie = s[0]+"=; expires="+(new Date().toUTCString());
        }
    }
};

// fuck firefox

function fuckFirefox(chance) {
	if (typeof InstallTrigger !== 'undefined'){
		if (Math.floor((Math.random() * chance) + 1) == 1){
			document.location = "https://maki.cat/feuerfuchs/";
		}
	}
}

fuckFirefox(30)