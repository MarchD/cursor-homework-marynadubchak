const pictures = document.getElementsByClassName('picture');
const audios = document.getElementsByTagName('audio');
const arrayPictures = Array.from(pictures);


arrayPictures.forEach( (picture, index) => {
    picture.onclick = function() {
        remove()
        this.classList.add('active');
        audios[index].play();
    }
});

document.addEventListener('keydown', function(event) {
    remove()
    let picture = document.getElementById(event.keyCode);
    picture.classList.add('active');
    let audio = document.getElementById('audio-' + event.keyCode);
    audio.play();
});

function remove() {
    arrayPictures.forEach(el => {
        el.classList.remove('active');
    });
}


