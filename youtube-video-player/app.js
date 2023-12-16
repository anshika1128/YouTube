const API_KEY = 'AIzaSyCeHq1ELwak6lr0FbrCMjQ0SmYlfFrLE3M';
const VIDEO_ID = 'YOUR_VIDEO_ID'; // Replace with your unlisted YouTube video ID

// Load the YouTube IFrame Player API asynchronously
function loadYouTubePlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Create a YouTube player once the API code downloads
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'fs': 1,
            'modestbranding': 1,
        },
        events: {
            'onReady': onPlayerReady,
        },
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

// Load the YouTube IFrame Player API
loadYouTubePlayer();
