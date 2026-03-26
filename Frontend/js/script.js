document.addEventListener('DOMContentLoaded', function() {
    // 1 GRAB THE VIDEO ELEMENT FROM THE DOM
    const bgVideo = document.getElementById('bgvideo');

    // 2 CHECK IF THE VIDEO ELEMENT EXISTS
    const playlist = [
        'videos/truck1.mp4',
        'videos/truck2.mp4',
        'videos/truck3.mp4'
    ];

    // 3 keep track of the current video index
    let currentVideoIndex = 0;

    // 4 listen for the 'ended' event to know when a video finishes playing
    bgVideo.addEventListener('ended', function() {
        // move to the next video in the playlist
        currentVideoIndex++;

        // if we've reached the end of the playlist, start over
        if (currentVideoIndex >= playlist.length) {
            currentVideoIndex = 0;
        }

        // update the video source to the next video and play it
        bgVideo.src = playlist[currentVideoIndex];
        bgVideo.play();
    });
});
