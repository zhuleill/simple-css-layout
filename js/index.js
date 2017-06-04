function PlayPause(img){
	var m=document.getElementById("music");
	if (m.paused) {
		m.play();
		img.src = "img/musicBtn.png";
	} else{
		m.pause();
		img.src = "img/musicBtnOff.png";
	}

}

function ToggleMusic(p){
	var mu=document.getElementById("music");
	var name=p.innerHTML;
	mu.src = "music/"+ name +".mp3";
	mu.play();
}
