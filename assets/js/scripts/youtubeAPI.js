// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('sermonVid', {
    height: '315',
    width: '560',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'rel': 0
    },
    // dont want to start any events at the moment
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // }
  });
}

// 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   // event.target.stopVideo();
//   console.log("onPlayerReady ******************");
// }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function pauseVideo(){
  console.log("Paused Video **************");
  player.pauseVideo();
}

function stopVideo() {
  player.stopVideo();
}
