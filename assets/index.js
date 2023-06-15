const image = document.getElementById('cover'),
title = document.getElementById('music-title'),
artist = document.getElementById('music-artist'),
currentTimeEL = document.getElementById('current-time'),
durationEL = document.getElementById('duration'),
progress = document.getElementById('progress'),
playerProgress = document.getElementById('player-progress'),
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next'),
playBtn = document.getElementById('play'),
background = document.getElementById('bg-img');

const music = new Audio();
