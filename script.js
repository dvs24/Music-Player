let firstSong = new Audio('mp3/1.mp3');
let mainPlay = document.getElementById('mainPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songIcon = document.getElementsByClassName('songIcon');
let songIndex = 1;
let mainSongName = document.getElementById('mainSongName')

songs = [
    { songName: 'song1' },
    { songName: 'song2' },
    { songName: 'song3' },
    { songName: 'song4' },
    { songName: 'song5' },
    { songName: 'song6' },
    { songName: 'song7' },
    { songName: 'song8' },
    { songName: 'song9' },
]

// Time Update

firstSong.addEventListener('timeupdate', () => {

    // progressBar Update
    progress = parseInt((firstSong.currentTime / firstSong.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    firstSong.currentTime = (progressBar.value * firstSong.duration / 100);
})


// for songIcon

const makeAllPlay = () => {
    Array.from(songIcon).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    }

    )
}

// const secondClick = () => {
//     Array.from(songIcon).forEach((element) => {
//         element.addEventListener('click', (e) => {
//             e.target.classList.remove('fa-pause');
//             e.target.classList.add('fa-play');
//         })
//     })
// }

Array.from(songIcon).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        firstSong.src = `mp3/${songIndex}.mp3`;
        firstSong.currentTime = 0;
        firstSong.play();
        mainPlay.classList.remove('fa-play');
        mainPlay.classList.add('fa-pause');
        // secondClick();
    })

})

// For mainPlay

mainPlay.addEventListener('click', () => {
    if (firstSong.paused || firstSong.currentTime == 0) {
        firstSong.play();
        mainPlay.classList.remove('fa-play');
        mainPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }

    else {
        firstSong.pause();
        mainPlay.classList.remove('fa-pause');
        mainPlay.classList.add('fa-play');
        gif.style.opacity = 0;

    }
})

// for Next

document.getElementById('nextIcon').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex == 1;
    }

    else {
        songIndex += 1
    }
    firstSong.src = `mp3/${songIndex}.mp3`;
    // mainSongName.innerText = songs[songIndex].songName;
    firstSong.currentTime = 0;
    firstSong.play();
    mainPlay.classList.remove('fa-play');
    mainPlay.classList.add('fa-pause');
})

// for previous

document.getElementById('prevIcon').addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex == 1;
    }

    else {
        songIndex -= 1
    }
    firstSong.src = `mp3/${songIndex}.mp3`;
    // mainSongName.innerText = songs[songIndex].songName;
    firstSong.currentTime = 0;
    firstSong.play();

    mainPlay.classList.remove('fa-play');
    mainPlay.classList.add('fa-pause');
})