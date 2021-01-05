const pictures = document.getElementsByClassName('picture');
const audios = document.getElementsByTagName('audio');
const arrayPictures = Array.from(pictures);


arrayPictures.forEach( (picture, index) => {
    picture.onclick = function() {
        remove(arrayPictures)
        this.classList.add('active');
        play(audios[index]);
    }
});

document.addEventListener('keydown', function(event) {
    remove(arrayPictures)
    let picture = document.getElementById(event.keyCode);
    picture.classList.add('active');
    let audio = document.getElementById('audio-' + event.keyCode);
    play(audio);
});

function remove(array) {
    array.forEach(el => {
        el.classList.remove('active');
    });
}

function play(audio) {
    return playAudio = (audio.paused) ? audio.play() : audio.currentTime = 0;
}
