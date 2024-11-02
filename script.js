let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctlIcon = document.getElementById('ctlIcon');

// For setting the progressbar the max value and current value.
song.onloadeddata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Function to play and pause the song.
function playPause() {
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
    else{
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    }
}

// For the movement of the progress bar.
if(song.play()){
    setInterval(() =>{
        progress.value = song.currentTime;
        if(song.ended){
            song.pause();
        }
    },500)
}

// Function to skip the song forward or backward.
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctlIcon.classList.remove('fa-pause');
    ctlIcon.classList.add('fa-play');
}